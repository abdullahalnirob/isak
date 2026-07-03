"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BecomeDonor = () => {
  const [form, setForm] = useState({
    name: "",
    group: "",
    location: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `ধন্যবাদ, ${form.name}! আপনার তথ্য সফলভাবে জমা হয়েছে।`
    );
    setForm({ name: "", group: "", location: "", phone: "" });
  };

  return (
    <section className="bg-gray-50 px-10 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          দাতা হিসেবে নিবন্ধন করুন
        </h2>
        <p className="mt-3 text-center text-gray-600">
          আমাদের সাথে যুক্ত হ২ন এবং রক্তদানের যাত্রায় অংশ নিন।
        </p>

        <div className="mx-auto mt-10 max-w-lg">
          {/* Google Login */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-300 bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google দিয়ে লগইন করুন
          </button>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm text-gray-400">অথবা</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                আপনার নাম
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="পুরো নাম লিখুন"
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                রক্তের গ্রুপ
              </label>
              <select
                name="group"
                value={form.group}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
              >
                <option value="">গ্রুপ নির্বাচন করুন</option>
                {bloodGroups.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                অবস্থান
              </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                placeholder="এলাকা / জেলা"
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                মোবাইল নম্বর
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="01XXXXXXXXX"
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-red-700 px-5 py-3 font-semibold text-white shadow-md shadow-rose-600/25 transition-colors hover:from-rose-700 hover:to-red-800"
            >
              <UserPlus className="h-4 w-4" />
              আপলোড করুন
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BecomeDonor;
