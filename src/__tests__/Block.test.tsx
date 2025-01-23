import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../Block";
import { Block } from "../Block";
import { createBlockData } from "./helpers/createBlockData";

describe("Block", () => {
  it("should not render anything if no options provided", () => {
    const blockData: Props["data"] = createBlockData();
    const { container } = render(<Block data={blockData} />);
    expect(container).toMatchSnapshot();
  });

  it("should not render anything if options provided without block", () => {
    const blockData: Props["data"] = createBlockData();
    const { container } = render(<Block data={blockData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if options provided with block", () => {
    const blockData: Props["data"] = createBlockData();
    const { container } = render(
      <Block
        data={blockData}
        options={{
          block: (block) => {
            return <div>Custom Block - {JSON.stringify(block)}</div>;
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
