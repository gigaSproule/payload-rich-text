import type { Options } from "./types";

export interface UploadData {
  type: "upload";
  format: string;
  version: number;
  id: string;
  fields: null;
  relationTo: string;
  value: {
    id: string;
    filename: string;
    mimeType: string;
    filesize: number;
    url: string;
    [key: string]: unknown;
  };
}

export type Props = { data: UploadData; options?: Options };

export const Upload = ({ data, options }: Props) => {
  return options?.upload ? (
    options.upload(data)
  ) : (
    <a href={data.value.url}>{data.value.filename}</a>
  );
};
