import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../Quote";
import { Quote } from "../Quote";
import { createQuoteData } from "./helpers/createQuoteData";

describe("Quote", () => {
  it("should not render anything if there are no children", () => {
    const quoteData: Props["data"] = createQuoteData({ children: [] });
    const { container } = render(<Quote data={quoteData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default blockquote if no options provided", () => {
    const quoteData: Props["data"] = createQuoteData();
    const { container } = render(<Quote data={quoteData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default blockquote if options provided without quote", () => {
    const quoteData: Props["data"] = createQuoteData();
    const { container } = render(<Quote data={quoteData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if options provided with quote", () => {
    const quoteData: Props["data"] = createQuoteData();
    const { container } = render(
      <Quote
        data={quoteData}
        options={{
          quote: (quote, children) => {
            return (
              <div>
                <span>Custom Quote - {JSON.stringify(quote)}</span>
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
