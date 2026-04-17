import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { faqHeading, faqItems, faqSubheading } from "../constants";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id='faq' className='relative overflow-hidden bg-gray-50/80'>
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]' aria-hidden='true' />
      <div className='relative max-container padding-x py-16 sm:py-20 lg:py-24'>
        <h2 className='text-center font-montserrat text-2xl font-bold leading-tight text-gray-900 sm:text-3xl sm:leading-9'>
          {faqHeading}
        </h2>
        <p className='mx-auto mt-3 max-w-xl text-center font-montserrat text-base leading-6 text-gray-500'>
          {faqSubheading}
        </p>

        <ul className='mx-auto mt-10 max-w-3xl list-none space-y-4'>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={item.question}>
                <div
                  className={`rounded-2xl border bg-white shadow-soft-card transition-colors duration-200 ${
                    isOpen ? "border-brand-blue/30 ring-1 ring-brand-blue/20" : "border-gray-100"
                  }`}
                >
                  <button
                    type='button'
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggle(index)}
                    className='flex w-full items-start justify-between gap-4 px-4 py-5 sm:px-6 sm:py-6 text-left'
                  >
                    <span className='font-montserrat text-lg font-bold leading-7 text-gray-900'>
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`mt-1 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden='true'
                    />
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    role='region'
                    aria-labelledby={`faq-trigger-${index}`}
                    className={`overflow-hidden transition-all duration-200 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className='border-t border-gray-100 px-4 pb-5 pt-0 sm:px-6 sm:pb-6'>
                      <p className='pt-4 font-montserrat text-base leading-relaxed text-gray-600'>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
