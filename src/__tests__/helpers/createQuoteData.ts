import type { QuoteData } from "../../Quote";
import { createTextData } from "./createTextData";

export const createQuoteData = (quoteData?: Partial<QuoteData>): QuoteData => ({
  children: [createTextData()],
  type: "quote",
  direction: null,
  format: "",
  indent: 0,
  version: 1,
  ...quoteData,
});
