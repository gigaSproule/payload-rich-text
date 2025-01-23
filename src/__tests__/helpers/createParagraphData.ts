import type { ParagraphData } from "../../Paragraph";
import { createTextData } from "./createTextData";

export const createParagraphData = (
  paragraphData?: Partial<ParagraphData>,
): ParagraphData => ({
  children: [createTextData()],
  direction: null,
  format: "",
  indent: 0,
  type: "paragraph",
  version: 1,
  textFormat: 0,
  textStyle: "",
  ...paragraphData,
});
