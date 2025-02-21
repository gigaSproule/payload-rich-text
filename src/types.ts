// istanbul ignore file: only holds types

import type { ParagraphData } from "./Paragraph";
import type {
  BulletListData,
  BulletListItem,
  CheckListData,
  CheckListItem,
  NumberListData,
  NumberListItem,
} from "./List";
import type { HeadingData } from "./Heading";
import type { HorizontalRuleData } from "./HorizontalRule";
import type { QuoteData } from "./Quote";
import type { GraphQlUploadData, UploadData } from "./Upload";
import type { GraphQlRelationshipData, RelationshipData } from "./Relationship";
import type { LinkData } from "./Link";
import { BlockData, GraphQlBlockData } from "./Block";
import { GraphQlInlineBlockData, InlineBlockData } from "./InlineBlock";
import type { CSSProperties } from "react";
import { LineBreakData } from "./LineBreak";

export type Options = {
  paragraph?: (
    paragraph: ParagraphData,
    children: React.ReactNode,
  ) => React.ReactNode;
  text?: (text: string) => React.ReactNode;
  superscript?: (
    children: React.ReactNode,
    style?: CSSProperties,
  ) => React.ReactNode;
  subscript?: (
    children: React.ReactNode,
    style?: CSSProperties,
  ) => React.ReactNode;
  code?: (children: React.ReactNode, style?: CSSProperties) => React.ReactNode;
  underline?: (
    children: React.ReactNode,
    style?: CSSProperties,
  ) => React.ReactNode;
  strikethrough?: (
    children: React.ReactNode,
    style?: CSSProperties,
  ) => React.ReactNode;
  emphasis?: (
    children: React.ReactNode,
    style?: CSSProperties,
  ) => React.ReactNode;
  strong?: (
    children: React.ReactNode,
    style?: CSSProperties,
  ) => React.ReactNode;
  normal?: (
    children: React.ReactNode,
    style?: CSSProperties,
  ) => React.ReactNode;
  link?: (
    link: LinkData,
    children: React.ReactNode,
    style?: CSSProperties,
  ) => React.ReactNode;
  inlineBlock?: (
    inlineBlock: InlineBlockData | GraphQlInlineBlockData,
    style?: CSSProperties,
  ) => React.ReactNode;
  heading?: (
    heading: HeadingData,
    children: React.ReactNode,
  ) => React.ReactNode;
  horizontalRule?: (horizontalRule: HorizontalRuleData) => React.ReactNode;
  lineBreak?: (lineBreak: LineBreakData) => React.ReactNode;
  bulletList?: (
    bulletList: BulletListData,
    children: React.ReactNode,
    level: number,
  ) => React.ReactNode;
  bulletListItem?: (
    bulletListItem: BulletListItem,
    children: React.ReactNode,
  ) => React.ReactNode;
  checkList?: (
    checkList: CheckListData,
    children: React.ReactNode,
    level: number,
  ) => React.ReactNode;
  checkListItem?: (
    checkListItem: CheckListItem,
    children: React.ReactNode,
  ) => React.ReactNode;
  numberList?: (
    numberList: NumberListData,
    children: React.ReactNode,
    level: number,
  ) => React.ReactNode;
  numberListItem?: (
    numberListItem: NumberListItem,
    children: React.ReactNode,
  ) => React.ReactNode;
  quote?: (quote: QuoteData, children: React.ReactNode) => React.ReactNode;
  block?: (block: BlockData | GraphQlBlockData) => React.ReactNode;
  relationship?: (
    relationship: RelationshipData | GraphQlRelationshipData,
  ) => React.ReactNode;
  upload?: (upload: UploadData | GraphQlUploadData) => React.ReactNode;
  unknown?: (unknown: unknown) => React.ReactNode;
};
