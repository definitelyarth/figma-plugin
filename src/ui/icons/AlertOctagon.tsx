import { h } from "preact";
import { FC, HTMLProps } from "preact/compat";

const AlertOctagon: FC<HTMLProps<SVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.99984 4.66666V7M6.99984 9.33333H7.00567M4.58484 1.16666H9.41484L12.8332 4.585V9.415L9.41484 12.8333H4.58484L1.1665 9.415V4.585L4.58484 1.16666Z"
        stroke="#F04438"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AlertOctagon;
