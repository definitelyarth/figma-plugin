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

  const { isLoading, mutateAsync, error, isError } = useMutateLogin();

  return (
    <div
      class={
        "flex flex-col w-full min-h-full overflow-scroll items-center justify-center h-[100vh] relative bg-white"
      }
    >
      <div className={"flex flex-col justify-center min-h-full gap-8"}>
        {isError && error}
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
            if (isLoading) return;
            await mutateAsync({ email, password });
            nextStep();
          }}
        >
          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className={"text-xs"}>
              Email
            </label>
            <TextInput
              disabled={isLoading}
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
              <label htmlFor="password" className={"text-xs"}>
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
              disabled={isLoading}
              id={"password"}
              placeholder={"Enter your password"}
              className={"w-full"}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>
          <Button disabled={isLoading} type={"submit"}>
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
