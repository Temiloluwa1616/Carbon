import React, { useState } from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";

const AccordionItem = ({ title, content, isHighlighted, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const accordionTitleClass = `accordion-title w-[54rem] flex items-center  px-4 py-5 font-semibold sm:w-[23rem] ${
    isHighlighted ? 'bg-white text-black border' : 'bg-gray-200'

    
  }`;

  return (
    <div>
      <div className={accordionTitleClass}>
        <div>{title}</div>
        <div>
          <AiOutlinePlusCircle
            onClick={toggleAccordion}
            className={className}
          />
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content w-[54rem] bg-black text-white sm:w-[23rem] p-4">
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
