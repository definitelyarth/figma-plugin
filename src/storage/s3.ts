const uploadFileToS3 = async ({
  imageBytes,
  userId,
  sessionId,
}: {
  imageBytes: Uint8Array;
  userId: string;
  sessionId: string;
}): Promise<string> => {
  const uploadsResponse = await fetch(
    `https://dev3.rocketium.com/api/v2/s3/mediaUploads?ext=png&userId=${userId}&maxDuration=20000000&category=Media&tag=Image&teamId=6100e9fcc4587205c9b85af1&isAdtech=true&cardIndex=0&adTechType=newCampaign&fileSize=73826&metadata={%22backgroundTransparent%22:false,%22optionIndex%22:6,%22cardIndex%22:0,%22variationIndex%22:%2267039a455b8157906fa69c65%22,%22pageSessionId%22:null,%22keepOriginal%22:true,%22convertTo4k%22:true,%22uploadId%22:%22252eb2a9-4c11-4071-273d-1d2721a9d2c0_1728390701046%22}&title=ArcRecoveryPhrase.png`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userId,
        sessionId,
      },
    }
  );
  if (!uploadsResponse.ok) {
    throw new Error(`Failed to get upload URL: ${uploadsResponse.statusText}`);
  }

  const parsedData = await uploadsResponse.json();
  const key = parsedData.credentials.key;
  const imageUrl = `https://dev.rocketium.com/${key}`;
  if (
    parsedData &&
    parsedData.credentials &&
    parsedData.credentials.uploadURL
  ) {
    const blob = new Blob([imageBytes], { type: "image/png" });
    const uploadResponse = await fetch(parsedData.credentials.uploadURL, {
      method: "PUT",
      headers: {
        "Content-Type": "image/png",
      },
      body: blob,
    });

    if (!uploadResponse.ok) {
      throw new Error(`Upload failed: ${uploadResponse.statusText}`);
    }
    return imageUrl;
  } else {
    throw new Error("Invalid upload URL data received");
  }
};

export { uploadFileToS3 };
