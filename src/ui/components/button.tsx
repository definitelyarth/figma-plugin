import { FC, HTMLProps } from "preact/compat";
import { h } from "preact";

export const Button: FC<HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-brand p-2 text-white rounded-md disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
