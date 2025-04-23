// components/faq/FAQSection.tsx
"use client";
import { useState, useRef } from "react";
import { faqData } from "./FaqData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  // Helper to create a ref for each FAQ item
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h4 className="text-blue-600 font-bold mb-2 uppercase">
              BRINGING ACTION TO BRAND
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Digital Agency That Helps You Succeed
            </h2>
            <div className="mb-6">
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                What is a SEO Friendly Website?
              </a>
              <span className="ml-2 text-xl font-bold text-blue-600 align-middle">
                —
              </span>
            </div>
            <p className="text-gray-500 mb-8 max-w-2xl">
              Quis ipsum gravida accumsan lacus vel facilisis dolore magna
              aliqua lacus dolor sit amet consectetur adipiscing elit do quis
              ipsum gravida accumsan lacus vel facilisis dolore magna aliqua
              lacus dolor sit amet lacus dolor sit amet consectetur adipiscing.
            </p>
            <div className="space-y-4">
              {faqData.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="border-b last:border-b-0">
                    <button
                      className="flex items-center justify-between w-full py-4 text-left focus:outline-none"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-4 flex-shrink-0">
                        {isOpen ? (
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M18 12H6"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                        )}
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${idx}`}
                      ref={(el) => {
                        answerRefs.current[idx] = el;
                      }}
                      style={{
                        maxHeight: isOpen
                          ? `${answerRefs.current[idx]?.scrollHeight ?? 0}px`
                          : "0px",
                        transition:
                          "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      className="overflow-hidden text-gray-600"
                      aria-hidden={!isOpen}
                    >
                      <p className="pr-8 py-2">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default Faq;
