import { FC } from "react";
import { h } from "preact";

const ProgressBar: FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 h-1 rounded-lg">
      <div
        className="bg-brand h-full rounded-lg transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
