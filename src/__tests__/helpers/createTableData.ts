import type { TableData } from "../../Table";
import { createTableRowData } from "./createTableRowData";

export const createTableData = (tableData?: Partial<TableData>): TableData => ({
  children: [createTableRowData()],
  type: "table",
  direction: null,
  format: "",
  indent: 0,
  version: 1,
  collWidths: [92, 92],
  ...tableData,
});
