import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../Relationship";
import { Relationship } from "../Relationship";
import { createRelationshipData } from "./helpers/createRelationshipData";

describe("Relationship", () => {
  it("should not render anything if no options provided", () => {
    const relationshipData: Props["data"] = createRelationshipData();
    const { container } = render(<Relationship data={relationshipData} />);
    expect(container).toMatchSnapshot();
  });

  it("should not render anything if options provided without relationship", () => {
    const relationshipData: Props["data"] = createRelationshipData();
    const { container } = render(
      <Relationship data={relationshipData} options={{}} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if options provided with relationship", () => {
    const relationshipData: Props["data"] = createRelationshipData();
    const { container } = render(
      <Relationship
        data={relationshipData}
        options={{
          relationship: (relationship) => {
            return (
              <div>Custom Relationship - {JSON.stringify(relationship)}</div>
            );
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
