import { CSSProperties } from "react";
import type { Options } from "./types";

export type InlineBlockData = {
  type: "inlineBlock";
  fields: object;
  version: number;
};

export type Props = {
  data: InlineBlockData;
  options?: Options;
  style?: CSSProperties;
};

export const InlineBlock = ({ data, options, style }: Props) => {
  return options?.inlineBlock ? options.inlineBlock(data, style) : undefined;
};
