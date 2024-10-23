import { h } from "preact";
import { FC, HTMLProps } from "preact/compat";

const TextInput: FC<
  HTMLProps<HTMLInputElement> & { state?: "error" | "normal" }
> = ({ ...props }) => {
  return (
    <input
      {...props}
      className={`text-sm text-black bg-white px-3 py-2 rounded-md ${props.className}`}
      style={{
        border: `1px solid ${props.state === "error" ? "#ef4444" : "#D0D5DD"}`,
      }}
    />
  );
};

export default TextInput;
