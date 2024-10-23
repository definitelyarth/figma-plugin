import { h } from "preact";
import TextInput from "../components/TextInput";
import { Button } from "../components/Button";
import { useScreenContext } from "../contexts/ScreenContext";
import { useMutateLogin } from "../state/mutation";
import { useState } from "preact/hooks";

const Login = () => {
  const { nextStep } = useScreenContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginState, setLoginState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const { mutateAsync, error, isError, status } = useMutateLogin();
  return (
    <div
      class={
        "flex flex-col w-full min-h-full overflow-scroll items-center justify-center h-[100vh] relative bg-white"
      }
    >
      <div className={"flex flex-col justify-center min-h-full gap-8"}>
        <div className="flex flex-col gap-2">
          <h1 className={"text-3xl font-semibold text-black"}>Welcome back!</h1>
          <h3 className={"text-lightGray text-xs"}>
            Sign in to convert your Figma designs into powerful .Rktm files!
          </h3>
        </div>
        <form
          className={"flex flex-col gap-6 text-black"}
          onSubmit={async (e) => {
            e.preventDefault();
            if (status === "loading") return;
            const response = await mutateAsync({ email, password });
            setLoginState(
              response.message === "successful" ? "success" : "error"
            );
            nextStep();
          }}
        >
          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className={"text-xs"}>
              Email
            </label>
            <TextInput
              type={"email"}
              required
              disabled={status === "loading"}
              id={"email"}
              placeholder={"Enter your email"}
              className={"w-full"}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className={"flex justify-between w-full items-center"}>
              <label htmlFor="password" className={`text-xs`}>
                Password
              </label>
              <a
                href="https://rocketium.com/forgot_password"
                target={"_blank"}
                className={"text-brand700 font-normal"}
                style={{ fontSize: 11 }}
              >
                Forgot password?
              </a>
            </div>
            <TextInput
              required
              type={"password"}
              disabled={status === "loading"}
              id={"password"}
              placeholder={"Enter your password"}
              className={`w-full ${loginState === "error" && "border-red-500"}`}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              onFocus={() => {
                if (loginState === "error") setLoginState("idle");
              }}
              state={loginState === "error" ? "error" : "normal"}
            />
            {loginState === "error" && (
              <span className={"text-red-500"}>
                Incorrect username or password
              </span>
            )}
          </div>
          <Button disabled={status === "loading"} type={"submit"}>
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
