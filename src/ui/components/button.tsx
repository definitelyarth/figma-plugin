import { FC, HTMLProps } from "preact/compat";
import { h } from "preact";

export const Button: FC<HTMLProps<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={"bg-brand p-2 text-white rounded-md"}>
      {children}
    </button>
  );
};
