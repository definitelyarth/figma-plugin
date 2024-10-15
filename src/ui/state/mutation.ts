import { useMutation } from "react-query";
import CryptoJS from "crypto-js";
import { emit } from "@create-figma-plugin/utilities";
import { TransformOutput } from "src/transformers/types";
import { useScreenContext } from "../contexts/ScreenContext";
import { uploadFileToS3 } from "src/storage/s3";

const useMutatePopulateImages = () => {
  const { userId, sessionId, nextStep, setFinalDoc } = useScreenContext();
  return useMutation({
    mutationFn: async ({ data }: { data: TransformOutput }) => {
      if (!userId || !sessionId) return;
      const canvas = data.doc.children![0];
      for await (const hash of Object.keys(data.imageMap)) {
        const obj = data.imageMap[hash];
        obj.state == "IN_PROGRESS";
        const key = await uploadFileToS3({
          userId,
          sessionId,
          imageBytes: obj.bytes,
        });
        obj.uploadedUrl = key;
        for (const image of obj.images) {
          const imageNode =
            canvas.children![image.frameIdx].children![image.idx];
          if (imageNode.type === "IMAGE") imageNode.imageUrl = obj.uploadedUrl;
        }
      }
      setFinalDoc(data.doc);
      nextStep();
    },
  });
};

const useMutateLogin = () =>
  useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const hash = CryptoJS.HmacSHA256(password, "rocketiumSignup").toString();

      const signupData = {
        isSignup: false,
        isNewSession: true,
        source: "NA",
        medium: "NA",
        campaign: "NA",
        term: "NA",
        content: "NA",
        referrer: "NA",
        data: {
          emailId: email,
          password: hash,
          otp: "",
        },
        type: "email",
      };

      const response = await fetch("https://dev3.rocketium.com/user", {
        method: "POST",
        body: JSON.stringify(signupData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = (await response.json()) as {
        message: string;
        user: { _id: string };
        sessionId: string;
      };
      console.log({ json });

      if (json.message !== "successful") {
        throw new Error("Unsuccesful signup");
      }

      emit("set-value", { key: "userId", value: json.user._id });
      emit("set-value", { key: "sessionId", value: json.sessionId });

      return json;
    },
  });

export { useMutateLogin, useMutatePopulateImages };
