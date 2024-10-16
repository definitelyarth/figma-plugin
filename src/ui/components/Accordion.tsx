import { FC } from "preact/compat";
import { useState } from "preact/hooks";
import { h } from "preact";

import { IconChevronDown16, IconChevronUp16 } from "@create-figma-plugin/ui";
import AlertOctagon from "../icons/AlertOctagon";
import AlertTriangle from "../icons/AlertTriangle";

type AccordionItemProps = {
  title: string;
  content: h.JSX.Element;
  error?: boolean;
  warning?: boolean;
  Icon: h.JSX.Element;
};

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  content,
  error,
  warning,
  Icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
          <div className="flex gap-2 items-center font-semibold">
            {Icon}
            <span>{title}</span>
          </div>
          <div className={"flex gap-2"}>
            <div className={"flex gap-2 items-center"}>
              {error && (
                <div className={"flex gap-2 items-center text-alert"}>
                  <AlertOctagon height={12} width={12} />
                  Error
                </div>
              )}
              {warning && (
                <div className={"flex gap-2 items-center text-warning"}>
                  <AlertTriangle height={12} width={12} />
                  Warning
                </div>
              )}
            </div>
            <span className={"cursor-pointer"}>
              {isOpen ? (
                <IconChevronUp16 className={"text-brand"} />
              ) : (
                <IconChevronDown16 className={"text-brand"} />
              )}
            </span>
          </div>
        </div>
      </div>
      {isOpen && <div className="py-2">{content}</div>}
    </div>
  );
};

type AccordionProps = {
  items: AccordionItemProps[];
};

const Accordion: FC<AccordionProps> = ({ items }) => {
  return (
    <div className="w-full mx-auto bg-white rounded-md px-2 overflow-scroll">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          error={item.error}
          warning={item.warning}
          Icon={item.Icon}
        />
      ))}
    </div>
  );
};

export default Accordion;
