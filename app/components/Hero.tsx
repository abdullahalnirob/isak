import Slider from "./Slider";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-red-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-28">
        {/* Left: content */}
        <div className="flex flex-col gap-7">
          <h1 className="text-[2rem] font-bold leading-[1.25] tracking-tight text-slate-900 sm:text-[2.5rem] lg:text-[3.25rem] lg:leading-[1.2]">
            &lsquo;<span className="text-rose-600">ইসাক রক্তবন্ধন বাংলাদেশ</span>&rsquo; একটি অলাভজনক ও মানবিক
            উদ্যোগ। আসুন রক্তদানে এগিয়ে আসি।
          </h1>

          <div className="flex flex-col gap-4 text-[15px] leading-[1.8] text-slate-600 lg:text-base">
            <p>
              আমাদের লক্ষ্য হলো রক্তদানের প্রতি সচেতনতা বৃদ্ধি করা, সহজে
              রক্তদাতাদের সাথে প্রয়োজনীয় ব্যক্তিদের সংযুক্ত করা এবং একটি
              সুশৃঙ্খল রক্ত ব্যাংক পরিচালনা করা। আপনার এক বোতল রক্ত কারো
              জীবনে আলো জ্বালাতে পারে।
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/donate" className="rounded-full bg-rose-600 px-8 py-3.5 text-[15px] font-semibold text-white shadow-md shadow-rose-600/25 transition-colors hover:bg-rose-700">
              রক্তদাতা হন
            </Link>
            <Link href="/about" className="rounded-full border border-rose-200 bg-white px-8 py-3.5 text-[15px] font-semibold text-rose-600 transition-colors hover:bg-rose-50">
              আরও জানুন
            </Link>
          </div>
        </div>

        {/* Right: slider */}
        <div className="relative mx-auto w-full max-w-[480px]">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-rose-200/60 to-red-200/40 blur-xl" />
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-white shadow-xl shadow-rose-900/10">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;