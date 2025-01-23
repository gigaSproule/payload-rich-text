import { UploadData } from "../../Upload";

export const createUploadData = (
  uploadData?: Partial<UploadData>,
): UploadData => ({
  type: "upload",
  format: "",
  version: 1,
  id: "id",
  fields: null,
  relationTo: "image",
  value: {
    id: "image-id",
    filename: "image.jpg",
    mimeType: "image/jpeg",
    filesize: 1,
    url: "https://www.example.com/image.jpg",
    some: "custom",
    block: "fields",
  },
  ...uploadData,
});
