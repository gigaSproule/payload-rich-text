import type { Options } from "./types";
import type { TableCellData } from "./TableCell";

export type TableRowData = {
  type: "tablerow";
  children: TableCellData[];
  direction: "ltr" | "rtl" | null;
  format: string;
  indent: number;
  version: number;
};

export type Props = {
  data: TableRowData;
  options?: Options;
  collWidth: number;
  rowStriping?: "even" | "odd";
};

export const TableRow = ({ data, options }: Props) => {
  return options?.block ? options.block(data) : undefined;
};
