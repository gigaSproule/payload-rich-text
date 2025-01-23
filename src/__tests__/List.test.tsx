import { afterAll, beforeAll, describe, expect, it, jest } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../List";
import { List } from "../List";
import {
  createBulletListData,
  createBulletListItem,
  createCheckListData,
  createCheckListItem,
  createNumberListData,
  createNumberListItem,
} from "./helpers/createListData";

const originalCrypto = global.crypto;

beforeAll(() => {
  Object.defineProperty(global, "crypto", {
    value: {
      randomUUID: jest.fn().mockReturnValue("randomUUID"),
    },
    writable: true,
  });
});

afterAll(() => {
  Object.defineProperty(global, "crypto", {
    value: originalCrypto,
    writable: true,
  });
});

describe("List", () => {
  it("should not render anything if no children provided", () => {
    const listData: Props["data"] = createBulletListData({ children: [] });
    const { container } = render(<List data={listData} />);
    expect(container).toMatchSnapshot();
  });
});

describe("NumberList", () => {
  it("should not render anything if no sub-children provided", () => {
    const listData: Props["data"] = createNumberListData({
      children: [createNumberListItem({ children: [] })],
    });
    const { container } = render(<List data={listData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default ol with default li if no options provided", () => {
    const listData: Props["data"] = createNumberListData();
    const { container } = render(<List data={listData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default ol with default li if options provided without numberList and without numberListItem", () => {
    const listData: Props["data"] = createNumberListData();
    const { container } = render(<List data={listData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render custom list render with default li if options provided with numberList and without numberListItem", () => {
    const listData: Props["data"] = createNumberListData();
    const { container } = render(
      <List
        data={listData}
        options={{
          numberList: (numberList, children) => {
            return (
              <div>
                <span>Custom Number List - {JSON.stringify(numberList)}</span>
                {children}
              </div>
            );
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom list item render with default ol if options provided without numberList and with numberListItem", () => {
    const listData: Props["data"] = createNumberListData();
    const { container } = render(
      <List
        data={listData}
        options={{
          numberListItem: (numberListItem, children) => {
            return (
              <div key={numberListItem.value}>
                <span>
                  Custom Number List Item - {JSON.stringify(numberListItem)}
                </span>
                {children}
              </div>
            );
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

describe("CheckList", () => {
  it("should not render anything if no sub-children provided", () => {
    const listData: Props["data"] = createCheckListData({
      children: [createCheckListItem({ children: [] })],
    });
    const { container } = render(<List data={listData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default ul with default li if no options provided", () => {
    const listData: Props["data"] = createCheckListData();
    const { container } = render(<List data={listData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default ul with default li if no options provided and list item checked", () => {
    const listData: Props["data"] = createCheckListData({
      children: [createCheckListItem({ checked: true })],
    });
    const { container } = render(<List data={listData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default ul with default li if options provided without checkList and without checkListItem", () => {
    const listData: Props["data"] = createCheckListData();
    const { container } = render(<List data={listData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render custom list render with default li if options provided with checkList and without checkListItem", () => {
    const listData: Props["data"] = createCheckListData();
    const { container } = render(
      <List
        data={listData}
        options={{
          checkList: (checkList, children) => {
            return (
              <div>
                <span>Custom Check List - {JSON.stringify(checkList)}</span>
                {children}
              </div>
            );
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom list item render with default ul if options provided without checkList and with checkListItem", () => {
    const listData: Props["data"] = createCheckListData();
    const { container } = render(
      <List
        data={listData}
        options={{
          checkListItem: (checkListItem, children) => {
            return (
              <div key={checkListItem.value}>
                <span>
                  Custom Check List Item - {JSON.stringify(checkListItem)}
                </span>
                {children}
              </div>
            );
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

describe("BulletList", () => {
  it("should not render anything if no sub-children provided", () => {
    const listData: Props["data"] = createBulletListData({
      children: [createBulletListItem({ children: [] })],
    });
    const { container } = render(<List data={listData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default ul with default li if no options provided", () => {
    const listData: Props["data"] = createBulletListData();
    const { container } = render(<List data={listData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default ul with default li if options provided without bulletList and without bulletListItem", () => {
    const listData: Props["data"] = createBulletListData();
    const { container } = render(<List data={listData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render custom list render with default li if options provided with bulletList and without bulletListItem", () => {
    const listData: Props["data"] = createBulletListData();
    const { container } = render(
      <List
        data={listData}
        options={{
          bulletList: (bulletList, children) => {
            return (
              <div>
                <span>Custom Bullet List - {JSON.stringify(bulletList)}</span>
                {children}
              </div>
            );
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom list item render with default ul if options provided without bulletList and with bulletListItem", () => {
    const listData: Props["data"] = createBulletListData();
    const { container } = render(
      <List
        data={listData}
        options={{
          bulletListItem: (bulletListItem, children) => {
            return (
              <div key={bulletListItem.value}>
                <span>
                  Custom Bullet List Item - {JSON.stringify(bulletListItem)}
                </span>
                {children}
              </div>
            );
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
