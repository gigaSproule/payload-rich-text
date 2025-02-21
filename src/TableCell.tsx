import type { Options } from "./types";
import type { ParagraphData } from "./Paragraph";
import type { HeadingData } from "./Heading";
import type { BulletListData, CheckListData, NumberListData } from "./List";
import { QuoteData } from "./Quote";

// 0 = None
// 1 = Row heading
// 2 = Column heading
// 3 = Row and Column heading
type HeaderState = 0 | 1 | 2 | 3;

export type TableCellData = {
  type: "tablecell";
  children: (
    | ParagraphData
    | HeadingData
    | CheckListData
    | BulletListData
    | NumberListData
    | QuoteData
  )[];
  direction: "ltr" | "rtl" | null;
  format: string;
  indent: number;
  version: number;
  backgroundColor: null;
  colSpan: number;
  headerState: HeaderState;
  rowSpan: number;
};

export type Props = {
  data: TableCellData;
  options?: Options;
};

export const TableCell = ({ data, options }: Props) => {
  return options?.block ? options.block(data) : undefined;
};
