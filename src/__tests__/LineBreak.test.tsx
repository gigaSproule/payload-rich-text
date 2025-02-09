import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../LineBreak";
import { LineBreak } from "../LineBreak";
import { createLineBreakData } from "./helpers/createLineBreakData";

describe("LineBreak", () => {
  it("should render default br if no options provided", () => {
    const lineBreakData: Props["data"] = createLineBreakData();
    const { container } = render(<LineBreak data={lineBreakData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default br if options provided without lineBreak", () => {
    const lineBreakData: Props["data"] = createLineBreakData();
    const { container } = render(
      <LineBreak data={lineBreakData} options={{}} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if options provided with lineBreak", () => {
    const lineBreakData: Props["data"] = createLineBreakData();
    const { container } = render(
      <LineBreak
        data={lineBreakData}
        options={{
          lineBreak: (lineBreak) => {
            return <div>Custom BR - {JSON.stringify(lineBreak)}</div>;
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
