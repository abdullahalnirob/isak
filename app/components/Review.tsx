"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "আহমেদ রাশেদ",
    role: "স্বেচ্ছাসেবী দাতা",
    text: "ইসাক রক্তবন্ধনের মাধ্যমে রক্তদান করার অভিজ্ঞতা খুবই ভালো। তারা সবসময় পাশে থাকে।",
    stars: 5,
  },
  {
    name: "ফাতিমা আক্তার",
    role: "রক্তপ্রাপক",
    text: "আমার মায়ের জরুরি সময়ে রক্ত পেয়েছি এখান থেকে। অনেক ধন্যবাদ পুরো টিমকে।",
    stars: 5,
  },
  {
    name: "কামরুজ জামান",
    role: "অংশীদার",
    text: "একটি সত্যিকারের মানবিক উদ্যোগ। আমি নিজেও নিয়মিত রক্তদান করি।",
    stars: 5,
  },
];

const Review = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section className="bg-gray-50 px-10 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          তারা কী বলছেন
        </h2>
        <p className="mt-3 text-center text-gray-600">
          আমাদের সেবা নিয়ে প্রাপ্ত মতামত।
        </p>

        <div className="relative mt-10">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-gray-600 hover:bg-rose-50 hover:text-rose-600 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-gray-600 hover:bg-rose-50 hover:text-rose-600 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slide */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((r) => (
                <div key={r.name} className="w-full shrink-0 px-8">
                  <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm text-center">
                    <div className="flex justify-center gap-1">
                      {Array.from({ length: r.stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="mt-5 text-gray-600 leading-relaxed">
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <div className="mt-5 border-t border-gray-100 pt-4">
                      <p className="font-bold text-gray-900">{r.name}</p>
                      <p className="text-xs text-gray-500">{r.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 bg-rose-600"
                    : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
