import type { CSSProperties } from "react";
import type { Options } from "./types";

type PayloadInlineBlockFields = {
  blockType: string;
  [key: string]: unknown;
};

type GraphQlPayloadInlineBlockFields = {
  blockType?: string;
  [key: string]: unknown;
};

export type InlineBlockData<
  T extends PayloadInlineBlockFields = PayloadInlineBlockFields,
> = {
  type: "inlineBlock";
  version: number;
  fields: T;
};

export type GraphQlInlineBlockData<
  T extends GraphQlPayloadInlineBlockFields = GraphQlPayloadInlineBlockFields,
> = {
  type: "inlineBlock";
  version?: number;
  fields: T;
};

export type Props = {
  data: InlineBlockData | GraphQlInlineBlockData;
  options?: Options;
  style?: CSSProperties;
};

export const InlineBlock = ({ data, options, style }: Props) => {
  return options?.inlineBlock ? options.inlineBlock(data, style) : undefined;
};
