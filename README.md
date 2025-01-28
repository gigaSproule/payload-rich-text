# payload-rich-text

This is a library to help render the content of rich text fields that come from Payload CMS.

## Install

### NPM

```bash
npm install payload-rich-text
```

### Yarn

```bash
yarn add payload-rich-text
```

## How to use

The `Options` that are passed into the `RichText` component allow any of the different type of entries to be customised.
Below is a basic example of how to customise how a `Block` entry is rendered.

```tsx
import type {BlockData, GraphQlBlockData, Options, RichTextData} from "payload-rich-text";
import {RichText} from "payload-rich-text";
import type {React} from "react";

type CustomBlock = {
    blockType: "my-custom-block";
    textField: string;
}

type Props = {
    data: RichTextData
}

const isCustomBlock = (blockData: BlockData | GraphQlBlockData): blockData is BlockData<CustomBlock> => {
    return blockData.blockType === "my-custom-block";
}

const customOptions: Options = {
    block: (blockData: BlockData | GraphQlBlockData): React.ReactNode => {
        if (isCustomBlock(blockData)) {
            return <p>{blockData.textField}</p>;
        }
        return <p>An unknown block is trying to be rendered.</p>;
    }
};

export const MyRichTextComponent = (props: Props) => {
    return <RichText data={props.data} options{customOptions}/>;
};
```

As can be seen, the `BlockData` can take a generic type, as a block in Payload will have different fields returned
depending on how it is configured. The other types that allow custom fields are `InlineBlockData`, `LinkData`,
`RelationshipData` and `UploadData`. By default, they will use a type with the default fields set up by Payload.
However, to be able to allow GraphQL queries, which can return a subset of the available fields based on the query,
these functions can also pass in a GraphQL version of the type. The GraphQL type versions still have some required
fields, such as `type` and `format`.
