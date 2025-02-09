import React, { CSSProperties } from "react";
import type { Options } from "./types";

export type TextData = {
  type: "text";
  format: number;
  mode: string;
  text: string;
  detail: number;
  style: string;
  version: number;
};

export type Props = {
  data: TextData;
  options?: Options;
  style?: CSSProperties;
};

export const Text = ({ data, options, style }: Props) => {
  // Format is an inclusive value, so bold and italic is 3 (1+2)
  let remainingFormat = data.format;
  let text: React.ReactNode = options?.text
    ? options.text(data.text)
    : data.text;
  if (remainingFormat - 64 >= 0) {
    remainingFormat -= 64;
    text = options?.superscript ? (
      options.superscript(text, style)
    ) : (
      <sup>{text}</sup>
    );
  }
  if (remainingFormat - 32 >= 0) {
    remainingFormat -= 32;
    text = options?.subscript ? (
      options.subscript(text, style)
    ) : (
      <sub>{text}</sub>
    );
  }
  if (remainingFormat - 16 >= 0) {
    remainingFormat -= 16;
    text = options?.code ? options.code(text, style) : <code>{text}</code>;
  }
  if (remainingFormat - 8 >= 0) {
    remainingFormat -= 8;
    text = options?.underline ? (
      options.underline(text, style)
    ) : (
      <span style={{ textDecoration: "underline" }}>{text}</span>
    );
  }
  if (remainingFormat - 4 >= 0) {
    remainingFormat -= 4;
    text = options?.strikethrough ? (
      options.strikethrough(text, style)
    ) : (
      <s>{text}</s>
    );
  }
  if (remainingFormat - 2 >= 0) {
    remainingFormat -= 2;
    text = options?.emphasis ? options.emphasis(text, style) : <em>{text}</em>;
  }
  if (remainingFormat - 1 >= 0) {
    text = options?.strong ? (
      options.strong(text, style)
    ) : (
      <strong>{text}</strong>
    );
  }
  return options?.normal ? (
    options.normal(text, style)
  ) : style ? (
    <span style={style}>{text}</span>
  ) : (
    text
  );
};
