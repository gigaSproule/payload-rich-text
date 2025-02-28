import type { TextData } from "./Text";
import { Text } from "./Text";
import type { LinkData } from "./Link";
import { Link } from "./Link";
import type { Options } from "./types";
import type { InlineBlockData } from "./InlineBlock";
import { InlineBlock } from "./InlineBlock";
import type { CSSProperties } from "react";
import { LineBreak } from "./LineBreak";
import type { LineBreakData } from "./LineBreak";

export interface ParagraphData {
  type: "paragraph";
  children: (TextData | LinkData | LineBreakData | InlineBlockData)[];
  version: number;
  indent: number;
  format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
  direction: "ltr" | "rtl" | null;
  // TODO: These match what is passed into Text children, but InlineBlock doesn't have a format nor style property
  textFormat: number;
  textStyle: string;
}

export type Props = { data: ParagraphData; options?: Options };

const getStyle = (data: ParagraphData): CSSProperties | undefined => ({
  textAlign: data.format !== "" ? data.format : undefined,
  direction: data.direction === "rtl" ? data.direction : undefined,
});

export const Paragraph = ({ data, options }: Props) => {
  const style: CSSProperties | undefined = getStyle(data);
  const children = data.children.map((paragraphChild, index) => {
    if (paragraphChild.type === "text") {
      return (
        <Text
          key={paragraphChild.text}
          data={paragraphChild}
          options={options}
          style={style}
        />
      );
    } else if (paragraphChild.type === "link") {
      return (
        <Link
          key={paragraphChild.id}
          data={paragraphChild}
          options={options}
          style={style}
        />
      );
    } else if (paragraphChild.type === "linebreak") {
      return <LineBreak key={index} data={paragraphChild} options={options} />;
    } else {
      return (
        <InlineBlock
          key={index}
          data={paragraphChild}
          options={options}
          style={style}
        />
      );
    }
  });
  return options?.paragraph ? (
    options.paragraph(data, children)
  ) : (
    <p>{children}</p>
  );
};
