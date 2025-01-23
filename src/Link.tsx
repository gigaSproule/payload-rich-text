import { CSSProperties } from "react";
import type { TextData } from "./Text";
import { Text } from "./Text";
import type { Options } from "./types";

export type DefaultCustomLinkData = Omit<LinkData, "fields"> & {
  fields: {
    url: string;
    newTab: boolean;
    linkType: "custom";
  };
};

export type DefaultInternalLinkData = Omit<LinkData, "fields"> & {
  fields: {
    url: string;
    doc: {
      relationTo: string;
      value:
        | {
            id: string;
            [key: string]: unknown;
          }
        | string;
    };
    newTab: boolean;
    linkType: "internal";
  };
};

export type LinkData = {
  type: "link";
  format: string;
  indent: number;
  version: number;
  direction: "ltr" | "rtl" | null;
  id: string;
  fields: object;
  children: TextData[];
};

const isDefaultCustomLink = (link: LinkData): link is DefaultCustomLinkData => {
  return "linkType" in link.fields && link.fields.linkType === "custom";
};

export type Props = {
  data: LinkData;
  options?: Options;
  style?: CSSProperties;
};

export const Link = ({ data, options, style }: Props) => {
  const children = data.children.map((linkChild) => (
    <Text key={linkChild.text} data={linkChild} options={options} />
  ));
  return options?.link ? (
    options.link(data, children)
  ) : isDefaultCustomLink(data) ? (
    <a
      href={data.fields.url}
      target={data.fields.newTab ? "_blank" : undefined}
      rel={data.fields.newTab ? "noopener noreferrer" : undefined}
      style={style}
    >
      {children}
    </a>
  ) : undefined;
};
