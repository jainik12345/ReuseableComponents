/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Static FAQ Data
const FAQ = [
  {
    questions: "What is the height of the Statue of Unity?",
    answer:
      "The Statue of Unity stands at a height of 182 meters (597 feet), making it the tallest statue in the world.",
  },
  {
    questions: "Who is depicted in the Statue of Unity?",
    answer:
      "The statue depicts Sardar Vallabhbhai Patel, the first Deputy Prime Minister and Home Minister of independent India.",
  },
  {
    questions: "Where is the Statue of Unity located?",
    answer:
      "It is located near Kevadia in the state of Gujarat, India, on the Narmada River.",
  },
  {
    questions: "When was the Statue of Unity inaugurated?",
    answer:
      "The Statue of Unity was inaugurated on October 31, 2018, which is also the birth anniversary of Sardar Patel.",
  },
  {
    questions: "What materials were used to build the Statue of Unity?",
    answer:
      "The statue was constructed using reinforced concrete and clad with bronze panels.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const HandleFAQClick = (Idx) => {
    setOpenIndex((prev) => (prev === Idx ? null : Idx));
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
            <span className="text-orange-500">Interesting Facts</span> About
            Statue of Unity
          </h2>
          <p className="text-gray-600 md:text-xl text-sm font-medium">
            Here are some interesting facts you should know about the Statue of
            Unity.
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full">
          {FAQ.map((Val, Idx) => (
            <div
              key={Idx}
              className={`relative transition-all duration-200 rounded-xl border border-gray-200 shadow-sm bg-gray-50 hover:shadow-lg cursor-pointer`}
              onClick={() => HandleFAQClick(Idx)}
            >
              <div className="flex items-center justify-between px-6 py-3.5">
                <h3 className="text-md md:text-xl font-semibold text-gray-800 flex items-center gap-3">
                  <span
                    className={`transition-transform duration-200 ${
                      openIndex === Idx ? "rotate-180" : ""
                    }`}
                  >
                    {openIndex === Idx ? (
                      <FiMinus
                        size={24}
                        className="bg-orange-100 text-orange-500 p-1 rounded-full shadow-sm"
                      />
                    ) : (
                      <FiPlus
                        size={24}
                        className="bg-orange-100 text-orange-500 p-1 rounded-full shadow-sm"
                      />
                    )}
                  </span>
                  {Val.questions}
                </h3>
              </div>
              <AnimatePresence>
                {openIndex === Idx && (
                  <motion.div
                    key="faq-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-700 text-base leading-relaxed">
                      {Val.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Accent vertical bar */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === Idx ? "100%" : "0%",
                  opacity: openIndex === Idx ? 1 : 0,
                }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 top-0 w-1 bg-orange-500 rounded-tl-xl rounded-bl-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
