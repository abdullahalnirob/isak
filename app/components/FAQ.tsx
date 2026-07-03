"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "রক্তদান কি বিপজ্জনক?",
    a: "না, রক্তদান সম্পূর্ণ নিরাপদ। প্রতিবার সর্বোচ্চ ৪৫০ মিলি রক্ত নেওয়া হয়, যা আপনার শরীরের মোট রক্তের মাত্র ১০%। শরীর দ্রুত সেটি পূরণ করে ফেলে।",
  },
  {
    q: "কতদিন পর রক্তদান করা যায়?",
    a: "পুরুষদের ৩ মাস এবং মহিলাদের ৪ মাস পর পর রক্তদান করা যায়।",
  },
  {
    q: "রক্তদানের আগে কী করণীয়?",
    a: "পর্যাপ্ত খাবার ও পানি খান। ৬ ঘণ্টার বেশি উপোষ থাকবেন না। ধূমপান বা মদ্যপান থেকে বিরত থাকুন।",
  },
  {
    q: "রক্তদানের পর কী করণীয়?",
    a: "১৫-২০ মিনিট বিশ্রাম নিন। ভারী কাজ এড়িয়ে চলুন। পর্যাপ্ত পানি ও পুষ্টিকর খাবার খান।",
  },
  {
    q: "রক্তদান করলে কি সত্যিই জীবন বাঁচায়?",
    a: "হ্যাঁ, এক ইউনিট রক্ত দিয়ে ৩ জনের জীবন বাঁচানো যায় — রক্তকণিকা, প্লাটিলেট এবং প্লাজমা আলাদাভাবে ব্যবহৃত হয়।",
  },
  {
    q: "কে রক্তদান করতে পারবে?",
    a: "১৮-৬০ বছর বয়সী, ৫০ কেজির বেশি ওজন, সুস্থ শরীর থাকলে সবাই রক্তদান করতে পারবে।",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white px-10 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          সচরাচর জিজ্ঞাসা
        </h2>
        <p className="mt-3 text-center text-gray-600">
          রক্তদান সম্পর্কে সাধারণ প্রশ্নোত্তর।
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
