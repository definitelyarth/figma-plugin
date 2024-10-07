import { h } from "preact";
import TextInput from "../components/TextInput";
import { Button } from "../components/Button";
import { useScreenContext } from "../../contexts/ScreenContext";

const Login = () => {
  const { nextStep } = useScreenContext();

  return (
    <div className={"flex flex-col justify-center min-h-full gap-8"}>
      <div className="flex flex-col gap-2">
        <h1 className={"text-3xl font-semibold"}>Welcome back!</h1>
        <h3 className={"text-lightGray text-xs"}>
          Sign in to convert your Figma designs into powerful .Rktm files!
        </h3>
      </div>
      <form
        className={"flex flex-col gap-6"}
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className={"text-xs"}>
            Email
          </label>
          <TextInput
            id={"email"}
            placeholder={"Enter your email"}
            className={"w-full"}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className={"text-xs"}>
            Password
          </label>
          <TextInput
            id={"password"}
            placeholder={"Enter your password"}
            className={"w-full"}
          />
        </div>
        <Button>Continue</Button>
      </form>
    </div>
  );
};

export default Login;
