import type { TextData } from "./Text";
import { Text } from "./Text";
import type { Options } from "./types";

export interface HeadingData {
  type: "heading";
  children: TextData[];
  direction: "ltr" | "rtl" | null;
  format: string;
  indent: number;
  version: number;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export type Props = {
  data: HeadingData;
  options?: Options;
};

export const Heading = ({ data, options }: Props) => {
  if (data.children.length === 0) {
    return null;
  }
  const children = data.children.map((headingChild) => {
    return (
      <Text key={headingChild.text} data={headingChild} options={options} />
    );
  });
  if (options?.heading) {
    return options.heading(data, children);
  } else {
    switch (data.tag) {
      case "h1":
        return <h1>{children}</h1>;
      case "h2":
        return <h2>{children}</h2>;
      case "h3":
        return <h3>{children}</h3>;
      case "h4":
        return <h4>{children}</h4>;
      case "h5":
        return <h5>{children}</h5>;
      case "h6":
        return <h6>{children}</h6>;
    }
  }
};
