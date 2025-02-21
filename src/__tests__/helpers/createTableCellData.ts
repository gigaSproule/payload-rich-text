import type { TableCellData } from "../../TableCell";
import { createParagraphData } from "./createParagraphData";

export const createTableCellData = (
  tableCellData?: Partial<TableCellData>,
): TableCellData => ({
  children: [createParagraphData()],
  type: "tablecell",
  direction: "ltr",
  format: "",
  indent: 0,
  version: 1,
  backgroundColor: null,
  rowSpan: 1,
  colSpan: 1,
  headerState: 0,
  ...tableCellData,
});
