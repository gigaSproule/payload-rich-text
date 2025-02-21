import type { TextData } from "./Text";
import { Text } from "./Text";
import type { Options } from "./types";
import { CSSProperties } from "react";

export type ListItem = {
  indent: number;
  type: "listitem";
  direction: "ltr" | "rtl" | null;
  format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
  version: number;
  value: number;
};

export type BulletListItem = ListItem & {
  children: (TextData | BulletListData)[];
};

export type NumberListItem = ListItem & {
  children: (TextData | NumberListData)[];
};

export type CheckListItem = ListItem & {
  children: (TextData | CheckListData)[];
  checked: boolean;
};

export type ListData = {
  type: "list";
  direction: "ltr" | "rtl" | null;
  format: string;
  indent: number;
  version: number;
  start: number;
};

export type BulletListData = ListData & {
  listType: "bullet";
  children: BulletListItem[];
  tag: "ul";
};

export type NumberListData = ListData & {
  listType: "number";
  children: NumberListItem[];
  tag: "ol";
};

export type CheckListData = ListData & {
  listType: "check";
  children: CheckListItem[];
  tag: "ul";
};

export type Props = {
  data: BulletListData | NumberListData | CheckListData;
  options?: Options;
  level?: number;
};

export const List = ({ data, options, level = 0 }: Props) => {
  const populatedChildren = data.children.filter(
    (child) => child.children.length > 0,
  );
  if (populatedChildren.length === 0) {
    return null;
  }
  if (data.listType === "number") {
    const list = (populatedChildren as NumberListData["children"]).flatMap(
      (listChild) => {
        const children = listChild.children.map((listItem, index) => {
          if (listItem.type === "text") {
            return (
              <Text key={listItem.text} data={listItem} options={options} />
            );
          } else {
            return (
              <List
                key={index}
                data={listItem}
                options={options}
                level={level + 1}
              />
            );
          }
        });
        return options?.numberListItem ? (
          options.numberListItem(listChild, children)
        ) : (
          <li key={listChild.value} value={listChild.value}>
            {children}
          </li>
        );
      },
    );

    let style: CSSProperties;
    if (level % 5 === 0) {
      style = {
        listStyle: "decimal",
      };
    } else if (level % 5 === 1) {
      style = {
        listStyle: "upper-alpha",
      };
    } else if (level % 5 === 2) {
      style = {
        listStyle: "lower-alpha",
      };
    } else if (level % 5 === 3) {
      style = {
        listStyle: "upper-roman",
      };
    } else {
      style = { listStyle: "lower-roman" };
    }

    return options?.numberList ? (
      options.numberList(data, list, level)
    ) : (
      <ol className="list-number" style={style}>
        {list}
      </ol>
    );
  } else if (data.listType === "check") {
    const list = (populatedChildren as CheckListData["children"]).flatMap(
      (listChild) => {
        const children = listChild.children.map((listItem, index) => {
          if (listItem.type === "text") {
            return (
              <Text key={listItem.text} data={listItem} options={options} />
            );
          } else {
            return <List key={index} data={listItem} options={options} />;
          }
        });
        const id = crypto.randomUUID();
        return options?.checkListItem ? (
          options.checkListItem(listChild, children)
        ) : (
          <li
            key={listChild.value}
            aria-checked={listChild.checked}
            role="checkbox"
            tabIndex={-1}
            value={listChild.value}
          >
            <input id={id} type="checkbox" defaultChecked={listChild.checked} />
            <label htmlFor={id}>{children}</label>
          </li>
        );
      },
    );
    return options?.checkList ? (
      options.checkList(data, list, level)
    ) : (
      <ul className="list-check">{list}</ul>
    );
  } else {
    const list = (populatedChildren as BulletListData["children"]).flatMap(
      (listChild) => {
        const children = listChild.children.map((listItem, index) => {
          if (listItem.type === "text") {
            return (
              <Text key={listItem.text} data={listItem} options={options} />
            );
          } else {
            return <List key={index} data={listItem} options={options} />;
          }
        });

        return options?.bulletListItem ? (
          options.bulletListItem(listChild, children)
        ) : (
          <li key={listChild.value} value={listChild.value}>
            {children}
          </li>
        );
      },
    );
    return options?.bulletList ? (
      options.bulletList(data, list, level)
    ) : (
      <ul className="list-bullet">{list}</ul>
    );
  }
};
