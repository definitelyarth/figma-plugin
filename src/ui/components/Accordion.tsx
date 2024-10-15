import { FC } from "preact/compat";
import { useState } from "preact/hooks";
import { h } from "preact";

type AccordionItemProps = {
  title: string;
  content: h.JSX.Element;
};

const AccordionItem: FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
      </button>
      {isOpen && <div className="px-4 py-2 text-gray-700">{content}</div>}
    </div>
  );
};

type AccordionProps = {
  items: AccordionItemProps[];
};

const Accordion: FC<AccordionProps> = ({ items }) => {
  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-md shadow-md">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
