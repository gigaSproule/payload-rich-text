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
import type { UploadData } from "./Upload";
import type { RelationshipData } from "./Relationship";
import type { LinkData } from "./Link";
import type { BlockData } from "./Block";
import type { InlineBlockData } from "./InlineBlock";
import type { CSSProperties } from "react";

export type Options = {
  paragraph?: (
    paragraph: ParagraphData,
    children: React.ReactNode,
  ) => React.ReactNode;
  superscript?: (
    children: React.ReactNode,
    style?: CSSProperties,
  ) => React.ReactNode;
  subscript?: (
    children: React.ReactNode,
    style?: CSSProperties,
  ) => React.ReactNode;
  code?: (children: React.ReactNode, style?: CSSProperties) => React.ReactNode;
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
  numberList?: (
    numberList: NumberListData,
    children: React.ReactNode,
  ) => React.ReactNode;
  numberListItem?: (
    numberListItem: NumberListItem,
    children: React.ReactNode,
  ) => React.ReactNode;
  bulletList?: (
    bulletList: BulletListData,
    children: React.ReactNode,
  ) => React.ReactNode;
  bulletListItem?: (
    bulletListItem: BulletListItem,
    children: React.ReactNode,
  ) => React.ReactNode;
  checkList?: (
    checkList: CheckListData,
    children: React.ReactNode,
  ) => React.ReactNode;
  checkListItem?: (
    checkListItem: CheckListItem,
    children: React.ReactNode,
  ) => React.ReactNode;
  heading?: (
    heading: HeadingData,
    children: React.ReactNode,
  ) => React.ReactNode;
  horizontalRule?: (horizontalRule: HorizontalRuleData) => React.ReactNode;
  quote?: (quote: QuoteData, children: React.ReactNode) => React.ReactNode;
  upload?: (upload: UploadData) => React.ReactNode;
  relationship?: (relationship: RelationshipData) => React.ReactNode;
  link?: (
    link: LinkData,
    children: React.ReactNode,
    style?: CSSProperties,
  ) => React.ReactNode;
  block?: (block: BlockData) => React.ReactNode;
  inlineBlock?: (
    inlineBlock: InlineBlockData,
    style?: CSSProperties,
  ) => React.ReactNode;
  unknown?: (unknown: unknown) => React.ReactNode;
};
