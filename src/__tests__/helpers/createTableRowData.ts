import type { TableRowData } from "../../TableRow";
import { createTableCellData } from "./createTableCellData";

export const createTableRowData = (
  tableRowData?: Partial<TableRowData>,
): TableRowData => ({
  children: [createTableCellData()],
  type: "tablerow",
  direction: "ltr",
  format: "",
  indent: 0,
  version: 1,
  ...tableRowData,
});
