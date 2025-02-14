import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/Accordion";
import { cn } from "../../lib/utils";

const AccordionSection = ({ data, borderColor, textColor, className }) => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {data?.map((item, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className={cn(
              "w-full border px-4 sm:px-6 mt-5 rounded-lg py-2",
              className
            )}
          >
            <AccordionTrigger className="hover:no-underline font-normal text-sm">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="w-full mt-1 md:mt-3 text-sm leading-6 sm:leading-7 font-light">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionSection;
