import { useMutation } from "react-query";
import CryptoJS from "crypto-js";
import { emit } from "@create-figma-plugin/utilities";
import { TransformOutput } from "src/transformers/types";
import { useScreenContext } from "../contexts/ScreenContext";
import { uploadFileToS3 } from "src/storage/s3";
import { generateObjectId } from "src/utils/ID";
import { roundFloatsToInts } from "../utils/numbers";
import { RocketiumPortableFormat } from "rocketium-types";

const useMutatePopulateImages = () => {
  const { userId, sessionId, setFinalDoc, setIsError } = useScreenContext();
  return useMutation({
    mutationFn: async ({ data }: { data: TransformOutput }) => {
      if (!userId || !sessionId) return;
      const uploadImagesPromise = data.ctx.images.map(async (obj) => {
        const key = await uploadFileToS3({
          userId,
          sessionId,
          imageBytes: obj.bytes,
        });
        return { hash: obj.hash, uploadedUrl: key };
      });
      const storage = await Promise.all(uploadImagesPromise);
      console.log({ storage });
      storage.forEach(({ hash, uploadedUrl }) => {
        if (!hash) return;
        data.rpf.variants.forEach((variant) => {
          const object = variant.variant.objects[hash];
          if (!object) return;
          if (
            object.type === "image-container" &&
            object.dataType === "IMAGE"
          ) {
            object.src = uploadedUrl;
          }
        });
      });
      const forPreview = data.rpf;
      let finalDoc = window.structuredClone(data.rpf);
      finalDoc = roundFloatsToInts(finalDoc) as RocketiumPortableFormat;
      const objectKeysMap: Record<string, string> = {};
      finalDoc.variants.forEach((variant) => {
        for (const key of Object.keys(variant.variant.sizes)) {
          const size = variant.variant.sizes[key];
          objectKeysMap[size.id] = generateObjectId();
          variant.variant.sizes[objectKeysMap[size.id]] = {
            ...size,
            id: objectKeysMap[size.id],
          };
          delete variant.variant.sizes[key];
        }

        for (const key of Object.keys(variant.variant.objects)) {
          const object = variant.variant.objects[key];
          for (const oKey of Object.keys(object.overrides)) {
            const newKey = objectKeysMap[oKey];
            object.overrides[newKey] = object.overrides[oKey];
            delete object.overrides[oKey];
          }
          const newObjKey = generateObjectId();
          variant.variant.objects[newObjKey] = { ...object, id: newObjKey };
          delete variant.variant.objects[key];
        }
        const sortedObjects = Object.entries(variant.variant.objects)
          .sort(([, a], [, b]) => a.zIndex - b.zIndex)
          .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
        variant.variant.objects = sortedObjects;
      });
      setFinalDoc(finalDoc);
      return forPreview;
    },
    onError: (e) => {
      setIsError(true);
    },
  });
};

const useMutateLogout = () => {
  const { setIsError } = useScreenContext();
  return useMutation({
    mutationFn: async () => {
      emit("set-value", { key: "userId", value: null });
      emit("set-value", { key: "sessionId", value: null });
    },
    onError: (e) => {
      setIsError(true);
    },
  });
};

const useMutateLogin = () => {
  const { setIsError } = useScreenContext();
  return useMutation({
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

      if (json.message !== "successful") {
        throw new Error("Unsuccesful signup");
      }

      emit("set-value", { key: "userId", value: json.user._id });
      emit("set-value", { key: "sessionId", value: json.sessionId });

      return json;
    },
    onError: (e) => {
      setIsError(true);
    },
  });
};

export { useMutateLogin, useMutateLogout, useMutatePopulateImages };
