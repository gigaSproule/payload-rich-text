import { afterAll, beforeAll, describe, expect, it, jest } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../RichText";
import { RichText } from "../RichText";
import { createParagraphData } from "./helpers/createParagraphData";
import {
  createRichTextData,
  createRichTextRoot,
} from "./helpers/createRichTextData";
import {
  createBulletListData,
  createCheckListData,
  createNumberListData,
} from "./helpers/createListData";
import { createQuoteData } from "./helpers/createQuoteData";
import { createRelationshipData } from "./helpers/createRelationshipData";
import { createBlockData } from "./helpers/createBlockData";
import { createHeadingData } from "./helpers/createHeadingData";
import { createHorizontalRuleData } from "./helpers/createHorizontalRuleData";
import { createUploadData } from "./helpers/createUploadData";

const originalCrypto = global.crypto;

beforeAll(() => {
  Object.defineProperty(global, "crypto", {
    value: {
      randomUUID: jest.fn().mockReturnValue("randomUUID"),
    },
    writable: true,
  });
});

afterAll(() => {
  Object.defineProperty(global, "crypto", {
    value: originalCrypto,
    writable: true,
  });
});

describe("RichText", () => {
  it("should not render anything if there are no children", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        children: [],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render paragraph if paragraph is a child", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        children: [createParagraphData()],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render heading if heading is a child", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        children: [createHeadingData()],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render horizontal rule if horizontal rule is a child", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        children: [createHorizontalRuleData()],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render bullet list if bullet list is a child", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        children: [createBulletListData()],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render check list if check list is a child", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        children: [createCheckListData()],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render number list if number list is a child", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        children: [createNumberListData()],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render quote if quote is a child", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        children: [createQuoteData()],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render relationship if relationship is a child", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        children: [createRelationshipData()],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render upload if upload is a child", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        children: [createUploadData()],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render block if block is a child", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        children: [createBlockData()],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should not render anything if unknown is a child and no options provided", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        // @ts-expect-error -- forced unknown type to handle edge case
        children: [{ type: "unknown" }],
      }),
    });
    const { container } = render(<RichText data={richTextData} />);
    expect(container).toMatchSnapshot();
  });

  it("should not render anything if unknown is a child and options provided without unknown", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        // @ts-expect-error -- forced unknown type to handle edge case
        children: [{ type: "unknown" }],
      }),
    });
    const { container } = render(<RichText data={richTextData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if unknown is a child and options provided with unknown", () => {
    const richTextData: Props["data"] = createRichTextData({
      root: createRichTextRoot({
        // @ts-expect-error -- forced unknown type to handle edge case
        children: [{ type: "unknown" }],
      }),
    });
    const { container } = render(
      <RichText
        data={richTextData}
        options={{
          unknown: (unknown) => {
            return (
              <div key={"unknown"}>
                Custom Unknown - {JSON.stringify(unknown)}
              </div>
            );
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
