import type { HorizontalRuleData } from "../../HorizontalRule";

export const createHorizontalRuleData = (
  horizontalRuleData?: Partial<HorizontalRuleData>,
): HorizontalRuleData => ({
  type: "horizontalrule",
  version: 1,
  ...horizontalRuleData,
});
