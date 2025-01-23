import type { RichTextData, RichTextRoot } from "../../RichText";
import { createParagraphData } from "./createParagraphData";

export const createRichTextRoot = (
  richTextRoot?: Partial<RichTextRoot>,
): RichTextRoot => ({
  children: [createParagraphData()],
  direction: null,
  format: "",
  indent: 0,
  type: "root",
  version: 1,
  ...richTextRoot,
});

export const createRichTextData = (
  richTextData?: Partial<RichTextData>,
): RichTextData => ({
  root: createRichTextRoot(),
  ...richTextData,
});
