import type { LineBreakData } from "../../LineBreak";

export const createLineBreakData = (
  lineBreakData?: Partial<LineBreakData>,
): LineBreakData => ({
  type: "linebreak",
  version: 1,
  ...lineBreakData,
});
