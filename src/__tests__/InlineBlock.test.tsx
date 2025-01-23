import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../InlineBlock";
import { InlineBlock } from "../InlineBlock";
import { createInlineBlockData } from "./helpers/createInlineBlockData";

describe("InlineBlock", () => {
  it("should not render anything if no options provided", () => {
    const inlineBlockData: Props["data"] = createInlineBlockData();
    const { container } = render(<InlineBlock data={inlineBlockData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if options provided with horizontalRule", () => {
    const inlineBlockData: Props["data"] = createInlineBlockData();
    const { container } = render(
      <InlineBlock
        data={inlineBlockData}
        options={{
          inlineBlock: (inlineBlock, style) => {
            return (
              <div>
                <span>Custom InlineBlock - {JSON.stringify(inlineBlock)}</span>
                {JSON.stringify(style)}
              </div>
            );
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
