import { h } from "preact";

const Loader = () => {
  return (
    <div className={"rounded-md p-2"} style={{ borderWidth: 1 }}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"animate-spin duration-1000"}
      >
        <g clip-path="url(#clip0_289_5694)">
          <path
            d="M7 3.5V1.75"
            stroke="#344054"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.479 4.52083L10.7332 3.26666"
            stroke="#344054"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 7H12.25"
            stroke="#344054"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.479 9.47916L10.7332 10.7333"
            stroke="#344054"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 10.5V12.25"
            stroke="#344054"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.52077 9.47916L3.2666 10.7333"
            stroke="#344054"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.5 7H1.75"
            stroke="#344054"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.52077 4.52083L3.2666 3.26666"
            stroke="#344054"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_289_5694">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Loader;
