import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // for dropdown arrow icon

const TabbedContent = ({ heading, tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="mx-auto px-6 pb-12 sm:px-0 sm:pb-0">
      <div className="container">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">{heading}</h2>

        {/* Tabs (Desktop) */}
        <div className="relative flex justify-center gap-8 pb-2 mb-8 max-[767px]:hidden">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative pb-2 font-medium transition-colors font-2xl ${activeIndex === index ? "text-black" : "text-gray-500"
                }`}
            >
              {tab.title}
              {activeIndex === index && (
                <motion.div
                  layoutId="active-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Accordion (Mobile) */}
        <div className="space-y-4 min-[768px]:hidden">
          {tabs.map((tab, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full py-4 text-lg font-semibold"
              >
                {tab.title}
                <motion.div
                  animate={{ rotate: openAccordion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden pb-4"
                  >
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{tab.heading}</h3>
                    <p className="mb-2 font-bold">{tab.subInfo}</p>
                    <p className="mb-4">{tab.description}</p>
                    <ul className="pl-5 space-y-2 mb-4">
                      {tab.points.map((point, i) => (
                        <li className="list-disc" key={i}>
                          {point}
                        </li>
                      ))}
                    </ul>
                    {tab.button && (
                      <a
                        href={tab.button.link}
                        className="inline-block mt-2 px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md border-2 border-black hover:bg-white hover:text-black hover:border-black transition"
                      >
                        {tab.button.label}
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Active Content (Desktop only) */}
        <div className="relative max-[767px]:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 w-full"
            >
              <img
                src={tabs[activeIndex].image}
                alt={tabs[activeIndex].title}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {tabs[activeIndex].heading}
                </h3>
                <p className="mb-4 font-bold">{tabs[activeIndex].subInfo}</p>
                <p className="mb-4">{tabs[activeIndex].description}</p>
                <ul className="pl-5 space-y-2 mb-6">
                  {tabs[activeIndex].points.map((point, i) => (
                    <li className="list-disc" key={i}>
                      {point}
                    </li>
                  ))}
                </ul>
                {tabs[activeIndex].button && (
                  <a
                    href={tabs[activeIndex].button.link}
                    className="inline-block mt-[15px] px-10 py-4 bg-black text-white font-semibold rounded-full shadow-lg border-2 border-black hover:bg-white hover:text-black hover:border-black transition"
                  >
                    {tabs[activeIndex].button.label}
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
};

export default TabbedContent;
