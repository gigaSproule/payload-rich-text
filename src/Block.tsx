import type { Options } from "./types";

export type PayloadBlockFields = {
  blockType: string;
  [key: string]: unknown;
};

export type GraphQlPayloadBlockFields = {
  blockType?: string;
  [key: string]: unknown;
};

export type BlockData<T extends PayloadBlockFields = PayloadBlockFields> = {
  type: "block";
  format: string;
  version: number;
  fields: T;
};

export type GraphQlBlockData<
  T extends GraphQlPayloadBlockFields = GraphQlPayloadBlockFields,
> = {
  type: "block";
  format: string;
  version?: number;
  fields: T;
};

export type Props = {
  data: BlockData | GraphQlBlockData;
  options?: Options;
};

export const Block = ({ data, options }: Props) => {
  return options?.block ? options.block(data) : undefined;
};
