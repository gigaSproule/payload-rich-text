import type { BlockData } from "../../Block";

export const createBlockData = (blockData?: Partial<BlockData>): BlockData => ({
  format: "",
  type: "block",
  version: 2,
  fields: {
    some: "custom",
    block: "fields",
  },
  ...blockData,
});
