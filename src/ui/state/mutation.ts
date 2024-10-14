import { useMutation } from "react-query";
import CryptoJS from "crypto-js";
import { emit } from "@create-figma-plugin/utilities";

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

export { useMutateLogin };
