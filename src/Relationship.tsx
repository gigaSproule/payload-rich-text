import type { Options } from "./types";

export type PayloadRelationshipFields = {
  blockType: string;
  [key: string]: unknown;
};

export type GraphQlPayloadRelationshipFields = {
  blockType?: string;
  [key: string]: unknown;
};

export interface RelationshipData<
  T extends PayloadRelationshipFields = PayloadRelationshipFields,
> {
  type: "relationship";
  format: string;
  version: number;
  relationTo: string;
  value: T;
}

export interface GraphQlRelationshipData<
  T extends GraphQlPayloadRelationshipFields = GraphQlPayloadRelationshipFields,
> {
  type: "relationship";
  format: string;
  version?: number;
  relationTo?: string;
  value: T;
}

export type Props = {
  data: RelationshipData | GraphQlRelationshipData;
  options?: Options;
};

export const Relationship = ({ data, options }: Props) => {
  return options?.relationship ? options.relationship(data) : undefined;
};
