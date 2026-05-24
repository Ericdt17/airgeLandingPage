import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { faqHeading, faqItems, faqSubheading } from "../constants";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id='faq' className='relative overflow-hidden bg-airge-bg-subtle/80'>
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]' aria-hidden='true' />
      <div className='relative max-container padding-x py-16 sm:py-20 lg:py-24'>
        <h2 className='text-center font-montserrat text-2xl font-bold leading-tight text-airge-foreground sm:text-3xl sm:leading-9 lg:text-[36px] lg:leading-[40px]'>
          {faqHeading}
        </h2>
        {faqSubheading ? (
          <p className='mx-auto mt-3 max-w-xl text-center font-montserrat text-base leading-6 text-airge-muted'>
            {faqSubheading}
          </p>
        ) : null}

        <ul className='mx-auto mt-10 max-w-3xl list-none space-y-4'>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={item.question}>
                <div className='rounded-[32px] border border-airge-border bg-airge-surface'>
                  <button
                    type='button'
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggle(index)}
                    className='flex w-full items-center justify-between gap-4 px-6 py-6 text-left'
                  >
                    <span className='font-montserrat text-base font-bold leading-6 text-airge-foreground'>
                      {item.question}
                    </span>
                    <PlusIcon
                      className={`h-5 w-5 shrink-0 text-airge-primary transition-transform duration-200 ${
                        isOpen ? "rotate-45" : "rotate-0"
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
                    <div className='px-6 pb-6 pt-0'>
                      <p className='pt-1 font-montserrat text-sm leading-relaxed text-airge-muted'>
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
