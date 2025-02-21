import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import type { Props } from "../Table";
import { Table } from "../Table";
import { createTableData } from "./helpers/createTableData";

describe("Table", () => {
  it("should not render anything if there are no children", () => {
    const tableData: Props["data"] = createTableData({ children: [] });
    const { container } = render(<Table data={tableData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default table if no options provided", () => {
    const tableData: Props["data"] = createTableData();
    const { container } = render(<Table data={tableData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default table if options provided without table", () => {
    const tableData: Props["data"] = createTableData();
    const { container } = render(<Table data={tableData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default table with table width set if a collWidth is different", () => {
    const tableData: Props["data"] = createTableData({
      collWidths: [92, 92, 93],
    });
    render(<Table data={tableData} />);
    expect(screen.getByRole("table")).toHaveStyle({ width: "277px" });
  });

  it("should render custom render if options provided with table", () => {
    const tableData: Props["data"] = createTableData();
    const { container } = render(
      <Table
        data={tableData}
        options={{
          table: (table, children) => {
            return (
              <div>
                <span>Custom Table - {JSON.stringify(table)}</span>
                {children}
              </div>
            );
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
