import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../Heading";
import { Heading } from "../Heading";
import { createHeadingData } from "./helpers/createHeadingData";

describe("Heading", () => {
  it("should not render anything if no children are provided", () => {
    const headingData: Props["data"] = createHeadingData({ children: [] });
    const { container } = render(<Heading data={headingData} />);
    expect(container).toMatchSnapshot();
  });

  (["h1", "h2", "h3", "h4", "h5", "h6"] as Props["data"]["tag"][]).forEach(
    (tag) =>
      it(`should render default ${tag} if no options provided`, () => {
        const headingData: Props["data"] = createHeadingData({
          tag: tag,
        });
        const { container } = render(<Heading data={headingData} />);
        expect(container).toMatchSnapshot();
      }),
  );

  (["h1", "h2", "h3", "h4", "h5", "h6"] as Props["data"]["tag"][]).forEach(
    (tag) =>
      it(`should render default ${tag} if options provided without heading`, () => {
        const headingData: Props["data"] = createHeadingData({
          tag: tag,
        });
        const { container } = render(
          <Heading data={headingData} options={{}} />,
        );
        expect(container).toMatchSnapshot();
      }),
  );

  it("should render custom render if options provided with heading", () => {
    const headingData: Props["data"] = createHeadingData();
    const { container } = render(
      <Heading
        data={headingData}
        options={{
          heading: (heading, children) => {
            return (
              <div>
                <span>Custom Heading - {JSON.stringify(heading)}</span>
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
