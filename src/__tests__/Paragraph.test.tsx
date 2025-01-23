import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../Paragraph";
import { Paragraph } from "../Paragraph";
import { createTextData } from "./helpers/createTextData";
import { createLinkData } from "./helpers/createLinkData";
import { createInlineBlockData } from "./helpers/createInlineBlockData";
import { createParagraphData } from "./helpers/createParagraphData";

describe("Paragraph", () => {
  it("should not render anything if no children are provided", () => {
    const paragraphData: Props["data"] = createParagraphData({
      children: [],
    });
    const { container } = render(<Paragraph data={paragraphData} />);
    expect(container).toMatchSnapshot();
  });

  it(`should render default text if no options provided`, () => {
    const paragraphData: Props["data"] = createParagraphData();
    const { container } = render(<Paragraph data={paragraphData} />);
    expect(container).toMatchSnapshot();
  });

  (
    [
      "left",
      "start",
      "center",
      "right",
      "end",
      "justify",
      "",
    ] as Props["data"]["format"][]
  ).forEach((format) =>
    (["ltr", "rtl", null] as Props["data"]["direction"][]).forEach(
      (direction) =>
        it(`should render default text with correct styling if no options provided and format is ${format} and direction is ${direction}`, () => {
          const paragraphData: Props["data"] = createParagraphData({
            children: [createTextData()],
            direction: direction,
            format: format,
          });
          const { container } = render(<Paragraph data={paragraphData} />);
          expect(container).toMatchSnapshot();
        }),
    ),
  );

  (
    [
      "left",
      "start",
      "center",
      "right",
      "end",
      "justify",
      "",
    ] as Props["data"]["format"][]
  ).forEach((format) =>
    (["ltr", "rtl", null] as Props["data"]["direction"][]).forEach(
      (direction) =>
        it(`should render default link with correct styling if no options provided and format is ${format} and direction is ${direction}`, () => {
          const paragraphData: Props["data"] = createParagraphData({
            children: [createLinkData()],
            direction: direction,
            format: format,
          });
          const { container } = render(<Paragraph data={paragraphData} />);
          expect(container).toMatchSnapshot();
        }),
    ),
  );

  (
    [
      "left",
      "start",
      "center",
      "right",
      "end",
      "justify",
      "",
    ] as Props["data"]["format"][]
  ).forEach((format) =>
    (["ltr", "rtl", null] as Props["data"]["direction"][]).forEach(
      (direction) =>
        it(`should render default inline block with correct styling if no options provided and format is ${format} and direction is ${direction}`, () => {
          const paragraphData: Props["data"] = createParagraphData({
            children: [createInlineBlockData()],
            direction: direction,
            format: format,
          });
          const { container } = render(<Paragraph data={paragraphData} />);
          expect(container).toMatchSnapshot();
        }),
    ),
  );

  (
    [
      "left",
      "start",
      "center",
      "right",
      "end",
      "justify",
      "",
    ] as Props["data"]["format"][]
  ).forEach((format) =>
    (["ltr", "rtl", null] as Props["data"]["direction"][]).forEach(
      (direction) =>
        it(`should render custom render with correct styling if options provided with paragraph and format is ${format} direction is ${direction}`, () => {
          const paragraphData: Props["data"] = createParagraphData({
            direction: direction,
            format: format,
          });
          const { container } = render(
            <Paragraph
              data={paragraphData}
              options={{
                paragraph: (paragraph, children) => {
                  return (
                    <div>
                      <span>
                        Custom Paragraph - {JSON.stringify(paragraph)}
                      </span>
                      {children}
                    </div>
                  );
                },
              }}
            />,
          );
          expect(container).toMatchSnapshot();
        }),
    ),
  );
});
