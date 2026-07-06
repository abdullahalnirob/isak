import {
  Users,
  Droplet,
  Heart,
  Stethoscope,
  Siren,
  Building2,
} from "lucide-react";
import Link from "next/link";

const activities = [
  {
    icon: Droplet,
    title: "ফ্রি ব্লাড গ্রুপিং ক্যাম্পেইন",
    desc: "বিনামূল্যে রক্তের গ্রুপ নির্ণয়ের মাধ্যমে জনসচেতনতা বৃদ্ধি।",
    color: "from-rose-500 to-red-600",
    shadow: "shadow-rose-500/30",
  },
  {
    icon: Users,
    title: "স্বেচ্ছা রক্তদাতা ডাটাবেজ",
    desc: "সারা দেশের রক্তদাতাদের তথ্য সংরক্ষণ ও নিয়মিত হালনাগাদ করে জরুরি প্রয়োজনে দ্রুত ডোনার খুঁজে দেওয়া।",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/30",
  },
  {
    icon: Stethoscope,
    title: "রোগী সহায়তা",
    desc: "হাসপাতালভিত্তিক ডোনার ম্যানেজমেন্ট, রক্ত সংগ্রহে সহযোগিতা এবং রোগীর স্বজনদের সার্বিক সহায়তা।",
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/30",
  },
  {
    icon: Siren,
    title: "জরুরি রক্তসেবা",
    desc: "জীবন-মরণ পরিস্থিতিতে দ্রুত রক্তদাতা ও রোগীর মধ্যে সংযোগ স্থাপন।",
    color: "from-orange-500 to-amber-600",
    shadow: "shadow-orange-500/30",
  },
  {
    icon: Building2,
    title: "ভবিষ্যৎ পরিকল্পনা",
    desc: "একটি আধুনিক ও নির্ভরযোগ্য ব্লাড ব্যাংক প্রতিষ্ঠার মাধ্যমে আরও বিস্তৃত মানবিক সেবা প্রদান, ইনশাআল্লাহ।",
    color: "from-purple-500 to-violet-600",
    shadow: "shadow-purple-500/30",
  },
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-red-50 px-4 py-20 sm:px-6 sm:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 shadow-lg shadow-rose-500/30">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            আমাদের সম্পর্কে
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            <span className="font-semibold text-slate-800">
              ইসাক রক্তবন্ধন বাংলাদেশ
            </span>{" "}
            একটি অরাজনৈতিক, অলাভজনক ও স্বেচ্ছাসেবী মানবিক সংগঠন। আমাদের লক্ষ্য
            হলো জরুরি মুহূর্তে নিরাপদ রক্তের ব্যবস্থা নিশ্চিত করে অসহায়
            রোগীদের পাশে দাঁড়ানো এবং স্বেচ্ছায় রক্তদানের সংস্কৃতি সারা দেশে
            ছড়িয়ে দেওয়া।
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-rose-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600">
              আমাদের কার্যক্রম
            </span>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
              আমরা যা করি
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((act) => (
              <div
                key={act.title}
                className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-rose-200 hover:shadow-lg hover:shadow-rose-900/5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${act.color} shadow-md ${act.shadow}`}
                >
                  <act.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-slate-900">
                  {act.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Belief / Quote */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 to-red-700 px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Heart className="h-7 w-7 text-white" />
          </div>
          <p className="text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
            আমরা বিশ্বাস করি,
            <span className="block mt-2 text-2xl font-bold text-white sm:text-3xl">
              মানবতার সেবাই সর্বোত্তম সেবা
            </span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            আপনার স্বেচ্ছায় দেওয়া এক ব্যাগ রক্ত একজন মানুষের জীবন বাঁচাতে
            পারে, একটি পরিবারে ফিরিয়ে আনতে পারে হাসি।
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-red-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            আসুন, যুক্ত হই
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            মানবতার এই মহৎ উদ্যোগে আমাদের সঙ্গে যুক্ত হই। এক ফোঁটা
            রক্ত—একটি নতুন জীবনের আশা।
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/donors"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-red-600 px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-rose-600/25 transition-all hover:from-rose-700 hover:to-red-700 hover:shadow-xl hover:shadow-rose-600/30"
            >
              <Users className="h-5 w-5" />
              রক্তদাতা খুঁজুন
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-8 py-3.5 text-[15px] font-semibold text-rose-600 transition-colors hover:bg-rose-50"
            >
              <Droplet className="h-5 w-5" />
              রক্তদান করুন
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
