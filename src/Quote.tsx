import type { TextData } from "./Text";
import { Text } from "./Text";

import { Options } from "./types.js";

export interface QuoteData {
  type: "quote";
  children: TextData[];
  direction: "ltr" | "rtl" | null;
  format: string;
  indent: number;
  version: number;
}

export type Props = { data: QuoteData; options?: Options };

export const Quote = ({ data, options }: Props) => {
  if (data.children.length === 0) {
    return null;
  }
  const children = data.children.map((headingChild) => {
    return (
      <Text key={headingChild.text} data={headingChild} options={options} />
    );
  });
  return options?.quote ? (
    options.quote(data, children)
  ) : (
    <blockquote>{children}</blockquote>
  );
};
