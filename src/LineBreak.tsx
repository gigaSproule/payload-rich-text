import type { Options } from "./types";

export interface LineBreakData {
  type: "linebreak";
  version: number;
}

export type Props = {
  data: LineBreakData;
  options?: Options;
};

export const LineBreak = ({ data, options }: Props) =>
  options?.lineBreak ? options.lineBreak(data) : <br />;
