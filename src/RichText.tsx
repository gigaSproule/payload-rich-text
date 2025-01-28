import {
  GraphQlRelationshipData,
  Relationship,
  RelationshipData,
} from "./Relationship";
import { GraphQlUploadData, Upload, UploadData } from "./Upload";
import type { BulletListData, CheckListData, NumberListData } from "./List";
import { List } from "./List";
import type { ParagraphData } from "./Paragraph";
import { Paragraph } from "./Paragraph";
import type { HeadingData } from "./Heading";
import { Heading } from "./Heading";
import type { QuoteData } from "./Quote";
import { Quote } from "./Quote";
import type { HorizontalRuleData } from "./HorizontalRule";
import { HorizontalRule } from "./HorizontalRule";
import type { Options } from "./types";
import { Block, BlockData, GraphQlBlockData } from "./Block";

export type RichTextRoot<T extends "strict" | "graphql" = "strict"> = {
  children: T extends "strict"
    ? (
        | ParagraphData
        | CheckListData
        | BulletListData
        | NumberListData
        | HeadingData
        | HorizontalRuleData
        | QuoteData
        | UploadData
        | RelationshipData
        | BlockData
      )[]
    : (
        | ParagraphData
        | CheckListData
        | BulletListData
        | NumberListData
        | HeadingData
        | HorizontalRuleData
        | QuoteData
        | GraphQlUploadData
        | GraphQlRelationshipData
        | GraphQlBlockData
      )[];
  direction: "ltr" | "rtl" | null;
  format: "";
  indent: 0;
  type: "root";
  version: 1;
};

export type RichTextData<T extends "strict" | "graphql" = "strict"> = {
  root: RichTextRoot<T>;
};

export type Props = {
  data: RichTextData | RichTextData<"graphql">;
  options?: Options;
};

export const RichText = ({ data, options }: Props) => {
  return (
    <>
      {data.root.children.flatMap((child, index) => {
        switch (child.type) {
          case "paragraph": {
            return <Paragraph key={index} data={child} options={options} />;
          }
          case "list": {
            return <List key={index} data={child} options={options} />;
          }
          case "heading": {
            return <Heading key={index} data={child} options={options} />;
          }
          case "horizontalrule": {
            return (
              <HorizontalRule key={index} data={child} options={options} />
            );
          }
          case "quote": {
            return <Quote key={index} data={child} options={options} />;
          }
          case "upload": {
            return <Upload key={index} data={child} options={options} />;
          }
          case "relationship": {
            return <Relationship key={index} data={child} options={options} />;
          }
          case "block": {
            return <Block key={index} data={child} options={options} />;
          }
          default: {
            return options?.unknown ? options.unknown(child) : undefined;
          }
        }
      })}
    </>
  );
};
