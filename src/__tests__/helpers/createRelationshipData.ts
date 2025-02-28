import type { RelationshipData } from "../../Relationship";

export const createRelationshipData = (
  relationshipData?: Partial<RelationshipData>,
): RelationshipData => ({
  type: "relationship",
  format: "",
  version: 2,
  relationTo: "page",
  value: {
    id: "67922e89bff17903c13f53f0",
    some: "custom",
    blockType: "fields",
  },
  ...relationshipData,
});
