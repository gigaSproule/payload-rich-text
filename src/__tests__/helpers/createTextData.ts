import type { TextData } from "../../Text";

export const createTextData = (textData?: Partial<TextData>): TextData => ({
  detail: 0,
  format: 0,
  mode: "normal",
  style: "",
  text: "heading text",
  type: "text",
  version: 1,
  ...textData,
});
