import type {
  BulletListData,
  BulletListItem,
  CheckListData,
  CheckListItem,
  ListData,
  ListItem,
  NumberListData,
  NumberListItem,
} from "../../List";
import { createTextData } from "./createTextData";

const createListData = (listData?: Partial<ListData>): ListData => ({
  type: "list",
  direction: null,
  format: "",
  indent: 0,
  version: 1,
  start: 1,
  ...listData,
});

const createListItem = (listItem?: Partial<ListItem>): ListItem => ({
  children: [createTextData()],
  type: "listitem",
  indent: 0,
  direction: null,
  format: "",
  version: 1,
  value: 1,
  ...listItem,
});

export const createBulletListItem = (
  bulletListItem?: Partial<BulletListItem>,
): BulletListItem => ({ ...createListItem(), ...bulletListItem });

export const createBulletListData = (
  bulletListData?: Partial<BulletListData>,
): BulletListData => ({
  ...createListData(),
  listType: "bullet",
  children: [createBulletListItem()],
  tag: "ul",
  ...bulletListData,
});

export const createCheckListItem = (
  checkListItem?: Partial<CheckListItem>,
): CheckListItem => ({
  ...createListItem(),
  checked: false,
  ...checkListItem,
});

export const createCheckListData = (
  checkListData?: Partial<CheckListData>,
): CheckListData => ({
  ...createListData(),
  listType: "check",
  children: [createCheckListItem()],
  tag: "ul",
  ...checkListData,
});

export const createNumberListItem = (
  numberListItem?: Partial<NumberListItem>,
): NumberListItem => ({
  ...createListItem(),
  ...numberListItem,
});

export const createNumberListData = (
  numberListData?: Partial<NumberListData>,
): NumberListData => ({
  ...createListData(),
  listType: "number",
  children: [createNumberListItem()],
  tag: "ol",
  ...numberListData,
});
