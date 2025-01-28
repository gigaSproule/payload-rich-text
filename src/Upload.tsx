import type { Options } from "./types";

export type PayloadUploadFields = {
  id: string;
  filename: string;
  mimeType: string;
  filesize: number;
  url: string;
  [key: string]: unknown;
};

export type GraphQlPayloadUploadFields = {
  id?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  url?: string;
  [key: string]: unknown;
};

export type UploadData<T extends PayloadUploadFields = PayloadUploadFields> = {
  type: "upload";
  format: string;
  version: number;
  id: string;
  fields: null;
  relationTo: string;
  value: T;
};

export type GraphQlUploadData<
  T extends GraphQlPayloadUploadFields = GraphQlPayloadUploadFields,
> = {
  type: "upload";
  format: string;
  version?: number;
  id?: string;
  fields?: null;
  relationTo?: string;
  value: T;
};

export type Props = { data: UploadData | GraphQlUploadData; options?: Options };

export const Upload = ({ data, options }: Props) => {
  return options?.upload ? (
    options.upload(data)
  ) : (
    <a href={data.value.url}>{data.value.filename}</a>
  );
};
