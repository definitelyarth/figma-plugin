import { FC } from "preact/compat";
import { useState } from "preact/hooks";
import { h } from "preact";
import AlertTriangleIcon from "../icons/AlertTriangleIcon";
import WarningIcon from "../icons/WarningIcon";
import FrameIcon from "../icons/FrameIcon";

type AccordionItemProps = {
  title: string;
  content: h.JSX.Element;
  error?: boolean;
  warning?: boolean;
};

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  content,
  error,
  warning,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log({ error });
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div
        className="w-full text-left py-2 focus:outline-none cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center text-xs">
          <div className="flex gap-2 items-center">
            <FrameIcon />
            <span>{title}</span>
          </div>
          <div className={"flex gap-2"}>
            <div className={"flex gap-2 items-center"}>
              {error && (
                <div className={"flex gap-2 items-center text-alert"}>
                  <AlertTriangleIcon />
                  Error
                </div>
              )}
              {warning && (
                <div className={"flex gap-2 items-center text-warning"}>
                  <WarningIcon />
                  Warning
                </div>
              )}
            </div>
            <span>{isOpen ? "-" : "+"}</span>
          </div>
        </div>
      </div>
      {isOpen && <div className="px-4 py-2 text-gray-700">{content}</div>}
    </div>
  );
};

type AccordionProps = {
  items: AccordionItemProps[];
};

const Accordion: FC<AccordionProps> = ({ items }) => {
  return (
    <div className="w-full mx-auto bg-white rounded-md px-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          error={item.error}
          warning={item.warning}
        />
      ))}
    </div>
  );
};

export default Accordion;
