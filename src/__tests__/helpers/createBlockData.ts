import type { BlockData } from "../../Block";

export const createBlockData = (blockData?: Partial<BlockData>): BlockData => ({
  format: "",
  type: "block",
  version: 2,
  fields: {
    blockType: "some-block-type",
    some: "custom",
    block: "fields",
  },
  ...blockData,
});
