// import fetch from "node-fetch";
// const fetch = require("node-fetch");
const sourceUrl = "https://dev.rocketium.com";

type InData = {
  metadata: { uploadId: string };
  image: { name: string };
  tag: string;
  fileSize: number;
  type: string;
  imageName: string;
};

type InDataWitFile = {
  metadata: { uploadId: string };
  image: File;
  tag: string;
  fileSize: number;
  type: string;
  imageName: string;
};

export const getS3MediaBrowserKeys = (
  data: InData,
  callback: (keys: s3UploadKeys | null, uploadId?: string) => void
) => {
  let s3BrowserUploadKeys = null;
  const userId = "66ff752fb2b83e1fbbbd6b81";
  let queries = `ext=${data.image.name.split(".").pop()}&userId=${userId}`;
  data.metadata.uploadId = "_" + new Date().getTime();
  data.tag = "Image";
  if (data.fileSize) {
    queries = `${queries}&fileSize=${data.fileSize}`;
  }

  queries = `${queries}&title=${data.imageName}`;
  const headers = {
    userId,
    sessionID: "4ef5c322-126e-4afb-9d67-c064ef1d86dc",
    "Content-Type": data.type,
  };
  console.log("jere");
  fetch(`${sourceUrl}/api/v2/s3/mediaUpload/?${queries}`, {
    headers,
  })
    .then((res) => res.json())
    .then((da) => {
      console.log({ da });
      const d = da as { message: string; credentials: s3UploadKeys };
      if (d.message !== "successful") {
        console.log("Not successful");
      }
      s3BrowserUploadKeys = d.credentials as s3UploadKeys;
      callback(s3BrowserUploadKeys, data.metadata.uploadId);
    })
    .catch((err) => {
      if (err) {
        if (err?.message === "Validation failed") {
          callback(null);
          return;
        }

        callback(null);
        return;
      }
    });
};

type s3UploadKeys = {
  key: string;
  acl: string;
  success_action_status: string;
  policy: string;
  ["x-amz-algorithm"]: string;
  ["x-amz-credential"]: string;
  ["x-amz-date"]: string;
  ["x-amz-signature"]: string;
  ["x-amz-meta-tag"]: string;
  uploadURL: string;
};

export const uploadFileToS3 = async (
  data: InDataWitFile,
  s3UploadKeys: s3UploadKeys
): Promise<void> => {
  const formData = new FormData();
  formData.append("key", s3UploadKeys.key);
  formData.append("acl", s3UploadKeys.acl);
  formData.append("success_action_status", s3UploadKeys.success_action_status);
  formData.append("policy", s3UploadKeys.policy);
  formData.append("x-amz-algorithm", s3UploadKeys["x-amz-algorithm"]);
  formData.append("x-amz-credential", s3UploadKeys["x-amz-credential"]);
  formData.append("x-amz-date", s3UploadKeys["x-amz-date"]);
  formData.append("x-amz-signature", s3UploadKeys["x-amz-signature"]);
  formData.append("x-amz-meta-tag", s3UploadKeys["x-amz-meta-tag"]);
  formData.append("file", data.image);

  try {
    const response = await fetch(s3UploadKeys.uploadURL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseText = await response.text();
    const parser = new DOMParser();
    const responseDoc = parser.parseFromString(responseText, "application/xml");
    console.log(JSON.stringify(responseDoc));

    // Here you can add any additional processing of the response
    // For example:
    // const formattedResponse = formatS3Response(responseDoc);
    // if (typeof callback === 'function') callback(formattedResponse);
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    // Handle the error appropriately
  }
};
