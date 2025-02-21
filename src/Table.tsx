import type { Options } from "./types";
import { TableRow, TableRowData } from "./TableRow";

export type TableData = {
  type: "table";
  children: TableRowData[];
  direction: null;
  format: string;
  indent: number;
  version: number;
  collWidths: number[];
  rowStriping?: boolean;
};

export type Props = {
  data: TableData;
  options?: Options;
};

export const Table = ({ data, options }: Props) => {
  const children = data.children.map((child, index) => {
    return (
      <TableRow
        key={index}
        data={child}
        // eslint-disable-next-line security/detect-object-injection
        collWidth={data.collWidths[index]}
        rowStriping={
          data.rowStriping ? (index % 2 === 0 ? "even" : "odd") : undefined
        }
        options={options}
      />
    );
  });
  if (options?.table) {
    return options.table(data, children);
  }

  const width = data.collWidths.every((width) => width === data.collWidths[0])
    ? data.collWidths.reduce((sum, width) => sum + width, 0)
    : undefined;
  return (
    <table
      style={{ width }}
      className={data.rowStriping ? "row-striping" : undefined}
    >
      {children}
    </table>
  );
};
