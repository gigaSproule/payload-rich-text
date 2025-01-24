import { CSSProperties } from "react";
import type { Options } from "./types";

export type InlineBlockData = {
  type: "inlineBlock";
  version: number;
  fields: {
    blockType: string;
    [key: string]: unknown;
  };
};

export type Props = {
  data: InlineBlockData;
  options?: Options;
  style?: CSSProperties;
};

export const InlineBlock = ({ data, options, style }: Props) => {
  return options?.inlineBlock ? options.inlineBlock(data, style) : undefined;
};
