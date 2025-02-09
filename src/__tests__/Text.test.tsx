import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../Text";
import { Text } from "../Text";
import { createTextData } from "./helpers/createTextData";

describe("Text", () => {
  it("should render text as-is if no options provided", () => {
    const textData: Props["data"] = createTextData();
    const { container } = render(<Text data={textData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render text as-is if options provided without text", () => {
    const textData: Props["data"] = createTextData();
    const { container } = render(<Text data={textData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render custom text if options provided with text", () => {
    const textData: Props["data"] = createTextData();
    const { container } = render(
      <Text
        data={textData}
        options={{
          text: (text) => {
            return `Transformed ${text}`;
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default sup if format is 64 and no options provided", () => {
    const textData: Props["data"] = createTextData({ format: 64 });
    const { container } = render(<Text data={textData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default sup if format is 64 and no options provided and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 64 });
    const { container } = render(
      <Text data={textData} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default sup if format is 64 and options provided without superscript", () => {
    const textData: Props["data"] = createTextData({ format: 64 });
    const { container } = render(<Text data={textData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default sup if format is 64 and options provided without superscript and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 64 });
    const { container } = render(
      <Text data={textData} options={{}} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if format is 64 and options provided with superscript", () => {
    const textData: Props["data"] = createTextData({ format: 64 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          superscript: (children, style) => {
            return (
              <div>
                <span>Custom Superscript</span>
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

  it("should render custom render if format is 64 and options provided with superscript and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 64 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          superscript: (children, style) => {
            return (
              <div>
                <span>Custom Superscript</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
        }}
        style={{ direction: "rtl" }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default sub if format is 32 and no options provided", () => {
    const textData: Props["data"] = createTextData({ format: 32 });
    const { container } = render(<Text data={textData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default sub if format is 32 and no options provided and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 32 });
    const { container } = render(
      <Text data={textData} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default sub if format is 32 and options provided without subscript", () => {
    const textData: Props["data"] = createTextData({ format: 32 });
    const { container } = render(<Text data={textData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default sub if format is 32 and options provided without subscript and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 32 });
    const { container } = render(
      <Text data={textData} options={{}} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if format is 32 and options provided with subscript", () => {
    const textData: Props["data"] = createTextData({ format: 32 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          subscript: (children, style) => {
            return (
              <div>
                <span>Custom Subscript</span>
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

  it("should render custom render if format is 32 and options provided with subscript and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 32 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          subscript: (children, style) => {
            return (
              <div>
                <span>Custom Subscript</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
        }}
        style={{ direction: "rtl" }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default code if format is 16 and no options provided", () => {
    const textData: Props["data"] = createTextData({ format: 16 });
    const { container } = render(<Text data={textData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default code if format is 16 and no options provided and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 16 });
    const { container } = render(
      <Text data={textData} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default code if format is 16 and options provided without code", () => {
    const textData: Props["data"] = createTextData({ format: 16 });
    const { container } = render(<Text data={textData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default code if format is 16 and options provided without code and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 16 });
    const { container } = render(
      <Text data={textData} options={{}} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if format is 16 and options provided with code", () => {
    const textData: Props["data"] = createTextData({ format: 16 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          code: (children, style) => {
            return (
              <div>
                <span>Custom Code</span>
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

  it("should render custom render if format is 16 and options provided with code and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 16 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          code: (children, style) => {
            return (
              <div>
                <span>Custom Code</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
        }}
        style={{ direction: "rtl" }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default underline if format is 8 and no options provided", () => {
    const textData: Props["data"] = createTextData({ format: 8 });
    const { container } = render(<Text data={textData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default underline if format is 8 and no options provided and style underline", () => {
    const textData: Props["data"] = createTextData({ format: 8 });
    const { container } = render(
      <Text data={textData} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default underline if format is 8 and options provided without underline", () => {
    const textData: Props["data"] = createTextData({ format: 8 });
    const { container } = render(<Text data={textData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default underline if format is 8 and options provided without underline and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 8 });
    const { container } = render(
      <Text data={textData} options={{}} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if format is 8 and options provided with underline", () => {
    const textData: Props["data"] = createTextData({ format: 8 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          underline: (children, style) => {
            return (
              <div>
                <span>Custom Underline</span>
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

  it("should render custom render if format is 8 and options provided with underline and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 8 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          strikethrough: (children, style) => {
            return (
              <div>
                <span>Custom Strikethrough</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
        }}
        style={{ direction: "rtl" }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default strikethrough if format is 4 and no options provided", () => {
    const textData: Props["data"] = createTextData({ format: 4 });
    const { container } = render(<Text data={textData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default strikethrough if format is 4 and no options provided and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 4 });
    const { container } = render(
      <Text data={textData} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default strikethrough if format is 4 and options provided without strikethrough", () => {
    const textData: Props["data"] = createTextData({ format: 4 });
    const { container } = render(<Text data={textData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default strikethrough if format is 4 and options provided without strikethrough and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 4 });
    const { container } = render(
      <Text data={textData} options={{}} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if format is 4 and options provided with strikethrough", () => {
    const textData: Props["data"] = createTextData({ format: 4 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          strikethrough: (children, style) => {
            return (
              <div>
                <span>Custom Strikethrough</span>
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

  it("should render custom render if format is 4 and options provided with strikethrough and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 4 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          strikethrough: (children, style) => {
            return (
              <div>
                <span>Custom Strikethrough</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
        }}
        style={{ direction: "rtl" }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default emphasis if format is 2 and no options provided", () => {
    const textData: Props["data"] = createTextData({ format: 2 });
    const { container } = render(<Text data={textData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default emphasis if format is 2 and no options provided and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 2 });
    const { container } = render(
      <Text data={textData} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default emphasis if format is 2 and options provided without emphasis", () => {
    const textData: Props["data"] = createTextData({ format: 2 });
    const { container } = render(<Text data={textData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default emphasis if format is 2 and options provided without emphasis and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 2 });
    const { container } = render(
      <Text data={textData} options={{}} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if format is 2 and options provided with emphasis", () => {
    const textData: Props["data"] = createTextData({ format: 2 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          emphasis: (children, style) => {
            return (
              <div>
                <span>Custom Emphasis</span>
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

  it("should render custom render if format is 2 and options provided with emphasis and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 2 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          emphasis: (children, style) => {
            return (
              <div>
                <span>Custom Emphasis</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
        }}
        style={{ direction: "rtl" }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default strong if format is 1 and no options provided", () => {
    const textData: Props["data"] = createTextData({ format: 1 });
    const { container } = render(<Text data={textData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default strong if format is 1 and no options provided and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 1 });
    const { container } = render(
      <Text data={textData} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render default strong if format is 1 and options provided without strong", () => {
    const textData: Props["data"] = createTextData({ format: 1 });
    const { container } = render(<Text data={textData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default strong if format is 1 and options provided without strong and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 1 });
    const { container } = render(
      <Text data={textData} options={{}} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if format is 1 and options provided with strong", () => {
    const textData: Props["data"] = createTextData({ format: 1 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          strong: (children, style) => {
            return (
              <div>
                <span>Custom Strong</span>
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

  it("should render custom render if format is 1 and options provided with strong and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 1 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          strong: (children, style) => {
            return (
              <div>
                <span>Custom Strong</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
        }}
        style={{ direction: "rtl" }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render as text if format is 0 and no options provided", () => {
    const textData: Props["data"] = createTextData({ format: 0 });
    const { container } = render(<Text data={textData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render as span if format is 0 and no options provided and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 0 });
    const { container } = render(
      <Text data={textData} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render as text if format is 0 and options provided without normal", () => {
    const textData: Props["data"] = createTextData({ format: 0 });
    const { container } = render(<Text data={textData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render as span if format is 0 and options provided without normal and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 0 });
    const { container } = render(<Text data={textData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if format is 0 and options provided with normal", () => {
    const textData: Props["data"] = createTextData({ format: 0 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          normal: (children, style) => {
            return (
              <div>
                <span>Custom Normal</span>
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

  it("should render custom render if format is 0 and options provided with normal and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 0 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          normal: (children, style) => {
            return (
              <div>
                <span>Custom Normal</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
        }}
        style={{ direction: "rtl" }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render all default elements if format is 127 and options not provided", () => {
    const textData: Props["data"] = createTextData({ format: 127 });
    const { container } = render(<Text data={textData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render all default elements if format is 127 and options not provided and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 127 });
    const { container } = render(
      <Text data={textData} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render all default elements if format is 127 and options provided without any custom functions", () => {
    const textData: Props["data"] = createTextData({ format: 127 });
    const { container } = render(<Text data={textData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render all default elements if format is 127 and options not provided without any custom functions and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 127 });
    const { container } = render(
      <Text data={textData} options={{}} style={{ direction: "rtl" }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render all custom renders if format is 127 and options provided with all custom functions", () => {
    const textData: Props["data"] = createTextData({ format: 127 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          superscript: (children, style) => {
            return (
              <div>
                <span>Custom Superscript</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          subscript: (children, style) => {
            return (
              <div>
                <span>Custom Subscript</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          code: (children, style) => {
            return (
              <div>
                <span>Custom Code</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          strikethrough: (children, style) => {
            return (
              <div>
                <span>Custom Strikethrough</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          emphasis: (children, style) => {
            return (
              <div>
                <span>Custom Emphasis</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          strong: (children, style) => {
            return (
              <div>
                <span>Custom Strong</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          normal: (children, style) => {
            return (
              <div>
                <span>Custom Normal</span>
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

  it("should render all custom renders if format is 127 and options not provided with all custom functions and style provided", () => {
    const textData: Props["data"] = createTextData({ format: 127 });
    const { container } = render(
      <Text
        data={textData}
        options={{
          superscript: (children, style) => {
            return (
              <div>
                <span>Custom Superscript</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          subscript: (children, style) => {
            return (
              <div>
                <span>Custom Subscript</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          code: (children, style) => {
            return (
              <div>
                <span>Custom Code</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          underline: (children, style) => {
            return (
              <div>
                <span>Custom Underline</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          strikethrough: (children, style) => {
            return (
              <div>
                <span>Custom Strikethrough</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          emphasis: (children, style) => {
            return (
              <div>
                <span>Custom Emphasis</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          strong: (children, style) => {
            return (
              <div>
                <span>Custom Strong</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
          normal: (children, style) => {
            return (
              <div>
                <span>Custom Normal</span>
                {children}
                {JSON.stringify(style)}
              </div>
            );
          },
        }}
        style={{ direction: "rtl" }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
