import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../HorizontalRule";
import { HorizontalRule } from "../HorizontalRule";
import { createHorizontalRuleData } from "./helpers/createHorizontalRuleData";

describe("HorizontalRule", () => {
  it("should render default hr if no options provided", () => {
    const horizontalRuleData: Props["data"] = createHorizontalRuleData();
    const { container } = render(<HorizontalRule data={horizontalRuleData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default hr if options provided without horizontalRule", () => {
    const horizontalRuleData: Props["data"] = createHorizontalRuleData();
    const { container } = render(
      <HorizontalRule data={horizontalRuleData} options={{}} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if options provided with horizontalRule", () => {
    const horizontalRuleData: Props["data"] = createHorizontalRuleData();
    const { container } = render(
      <HorizontalRule
        data={horizontalRuleData}
        options={{
          horizontalRule: (horizontalRule) => {
            return <div>Custom HR - {JSON.stringify(horizontalRule)}</div>;
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
