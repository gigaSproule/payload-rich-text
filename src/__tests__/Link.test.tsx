import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import type { Props } from "../Link";
import { Link } from "../Link";
import {
  createDefaultCustomLinkData,
  createDefaultInternalLinkData,
  createLinkData,
} from "./helpers/createLinkData";

describe("Link", () => {
  it("should not render anything if no children are provided", () => {
    const linkData: Props["data"] = createDefaultCustomLinkData({
      children: [],
    });
    const { container } = render(<Link data={linkData} />);
    expect(container).toMatchSnapshot();
  });

  it("should not render anything if no options are provided for custom link", () => {
    const linkData: Props["data"] = createLinkData();
    const { container } = render(<Link data={linkData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should not render anything if no options are provided for default internal link", () => {
    const linkData: Props["data"] = createDefaultInternalLinkData();
    const { container } = render(<Link data={linkData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default a if no options are provided for default custom link", () => {
    const linkData: Props["data"] = createDefaultCustomLinkData();
    const { container } = render(<Link data={linkData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default a with target and rel if no options are provided for default custom link and new tab is defined", () => {
    const linkData: Props["data"] = createDefaultCustomLinkData({
      fields: {
        linkType: "custom",
        url: "https://www.example.com",
        newTab: true,
      },
    });
    render(<Link data={linkData} options={{}} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render custom render if options provided with link", () => {
    const linkData: Props["data"] = createDefaultCustomLinkData();
    const { container } = render(
      <Link
        data={linkData}
        options={{
          link: (linkData, children, style) => {
            return (
              <div>
                <span>Custom A - {JSON.stringify(linkData)}</span>
                {children}
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
