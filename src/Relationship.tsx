import type { Options } from "./types";

export interface RelationshipData {
  type: "relationship";
  format: string;
  version: number;
  relationTo: string;
  value: {
    id: string;
    [key: string]: unknown;
  };
}

export type Props = { data: RelationshipData; options?: Options };

export const Relationship = ({ data, options }: Props) => {
  return options?.relationship ? options.relationship(data) : undefined;
};
