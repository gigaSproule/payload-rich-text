import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { Props } from "../Upload";
import { Upload } from "../Upload";
import { createUploadData } from "./helpers/createUploadData";

describe("Upload", () => {
  it("should render default a if no options provided", () => {
    const uploadData: Props["data"] = createUploadData();
    const { container } = render(<Upload data={uploadData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render default a if options provided without upload", () => {
    const uploadData: Props["data"] = createUploadData();
    const { container } = render(<Upload data={uploadData} options={{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should render custom render if options provided with upload", () => {
    const uploadData: Props["data"] = createUploadData();
    const { container } = render(
      <Upload
        data={uploadData}
        options={{
          upload: (upload) => {
            return <div>Custom Upload - {JSON.stringify(upload)}</div>;
          },
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
