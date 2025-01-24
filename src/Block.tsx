import type { Options } from "./types";

export type BlockData = {
  type: "block";
  format: string;
  version: number;
  fields: {
    blockType: string;
    [key: string]: unknown;
  };
};

export type Props = {
  data: BlockData;
  options?: Options;
};

export const Block = ({ data, options }: Props) => {
  return options?.block ? options.block(data) : undefined;
};
