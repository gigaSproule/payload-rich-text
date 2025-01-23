import type { HeadingData } from "../../Heading";
import { createTextData } from "./createTextData";

export const createHeadingData = (
  headingData?: Partial<HeadingData>,
): HeadingData => ({
  children: [createTextData()],
  direction: null,
  format: "",
  indent: 0,
  type: "heading",
  version: 1,
  tag: "h1",
  ...headingData,
});
