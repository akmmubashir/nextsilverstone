"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../assets/icons/arrowDown.svg";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 mt-[20px]">
      <div className="flex">
        <button
          className="flex items-center w-full text-left py-3 px-5 font-[600]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p>{title}</p>
          <Image
            src={Arrow}
            alt="Arrow"
            className={`ms-auto text-right ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
      {isOpen && <div className="p-5">{children}</div>}
    </div>
  );
};
export default AccordionSection;
