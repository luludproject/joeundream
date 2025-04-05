"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-12">
      <h2 className="text-xl font-bold mb-4">자주 묻는 질문 (FAQ) 🤔</h2>
      <ul className="space-y-2">
        {faqs.map((faq, index) => (
          <li key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left text-gray-800 px-4 py-3 font-medium bg-gray-50 hover:bg-gray-100 transition"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-sm text-black bg-white">
                {faq.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
