import type { Options } from "./types";

export interface HorizontalRuleData {
  type: "horizontalrule";
  version: number;
}

export type Props = {
  data: HorizontalRuleData;
  options?: Options;
};

export const HorizontalRule = ({ data, options }: Props) =>
  options?.horizontalRule ? options.horizontalRule(data) : <hr />;
