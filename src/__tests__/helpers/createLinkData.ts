import type {
  DefaultCustomLinkData,
  DefaultInternalLinkData,
  LinkData,
} from "../../Link";
import { createTextData } from "./createTextData";

export const createLinkData = (linkData?: Partial<LinkData>): LinkData => ({
  children: [createTextData()],
  type: "link",
  format: "",
  indent: 0,
  version: 1,
  direction: "ltr",
  id: "id",
  fields: {
    url: "https://www.example.com",
    newTab: false,
    linkType: "custom",
  },
  ...linkData,
});

export const createDefaultCustomLinkData = (
  defaultCustomLinkData?: Partial<DefaultCustomLinkData>,
): DefaultCustomLinkData => ({
  children: [createTextData()],
  type: "link",
  format: "",
  indent: 0,
  version: 1,
  direction: "ltr",
  id: "id",
  ...defaultCustomLinkData,
  fields: {
    url: "https://www.example.com",
    newTab: false,
    linkType: "custom",
    ...defaultCustomLinkData?.fields,
  },
});

export const createDefaultInternalLinkData = (
  defaultInternalLinkData?: Partial<DefaultInternalLinkData>,
): DefaultInternalLinkData => ({
  children: [createTextData()],
  type: "link",
  format: "",
  indent: 0,
  version: 1,
  direction: "ltr",
  id: "id",
  ...defaultInternalLinkData,
  fields: {
    url: "https://",
    doc: {
      relationTo: "page",
      value: "67922e89bff17903c13f53f0",
    },
    newTab: false,
    linkType: "internal",
    ...defaultInternalLinkData?.fields,
  },
});
