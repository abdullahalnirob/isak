'use client'

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: MapPin,
    title: "প্রধান কার্যালয়",
    detail: "বগুড়া, বাংলাদেশ",
  },
  {
    icon: Phone,
    title: "ফোন",
    detail: "+880 1XXX-XXXXXX",
    href: "tel:+8801XXXXXXXXX",
  },
  {
    icon: Mail,
    title: "ইমেইল",
    detail: "info@isakbondhon.org",
    href: "mailto:info@isakbondhon.org",
  },
  {
    icon: Clock,
    title: "সেবা সময়",
    detail: "২৪/৭ জরুরি সেবা উপলব্ধ",
  },
];

const Contact = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-red-50 px-4 py-14 sm:px-6 sm:py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 shadow-lg shadow-rose-500/30">
            <Phone className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            যোগাযোগ
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            জরুরি রক্তের প্রয়োজন হলে বা যেকোনো তথ্যের জন্য আমাদের সাথে
            যোগাযোগ করুন।
          </p>
          <Link
            href="/donate"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-600/20 transition-all hover:from-rose-700 hover:to-red-700"
          >
            রক্ত দিন
          </Link>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl bg-rose-50 p-6 text-center"
              >
                <item.icon className="mb-3 h-8 w-8 text-rose-600" />
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 text-sm text-gray-600 hover:text-rose-600 transition-colors"
                  >
                    {item.detail}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="bg-gradient-to-br from-slate-50 to-rose-50/30 px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Map */}
            <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115860.63361573816!2d89.28783500311918!3d24.84181794654403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!5e0!3m2!1sen!2sbd!4v1783135827713!5m2!1sen!2sbd"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Contact Form */}
            <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                বার্তা পাঠান
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                আমরা যত দ্রুত সম্ভব উত্তর দেওয়ার চেষ্টা করব।
              </p>
              <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    আপনার নাম
                  </label>
                  <input
                    type="text"
                    placeholder="নাম লিখুন"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-rose-300 focus:bg-white focus:ring-2 focus:ring-rose-100"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    ফোন নম্বর
                  </label>
                  <input
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-rose-300 focus:bg-white focus:ring-2 focus:ring-rose-100"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    বার্তা
                  </label>
                  <textarea
                    rows={3}
                    placeholder="আপনার বার্তা লিখুন..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-rose-300 focus:bg-white focus:ring-2 focus:ring-rose-100"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-rose-600 to-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-600/20 transition-all hover:from-rose-700 hover:to-red-700 hover:shadow-lg"
                >
                  পাঠান
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
