import type { InlineBlockData } from "../../InlineBlock";

export const createInlineBlockData = (
  inlineBlockData?: Partial<InlineBlockData>,
): InlineBlockData => ({
  type: "inlineBlock",
  version: 1,
  fields: {
    blockType: "some-block-type",
    some: "custom",
    block: "fields",
  },
  ...inlineBlockData,
});
