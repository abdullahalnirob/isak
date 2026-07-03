import { LogIn, ClipboardList, Upload } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    step: "১",
    title: "Google দিয়ে লগইন করুন",
    desc: "আপনার Google অ্যাকাউন্ট দিয়ে সহজেই লগইন করুন।",
  },
  {
    icon: ClipboardList,
    step: "২",
    title: "নাম, গ্রুপ, লোকেশন, নম্বর দিন",
    desc: "আপনার নাম, রক্তের গ্রুপ, অবস্থান এবং মোবাইল নম্বর প্রদান করুন।",
  },
  {
    icon: Upload,
    step: "৩",
    title: "আপলোড করুন",
    desc: "তথ্য পূরণ করে সাবমিট করুন এবং দাতা হিসেবে নিবন্ধিত হ২ন।",
  },
];

const How2Donate = () => {
  return (
    <section className="bg-rose-600 px-10 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-white">
          কিভাবে রক্তদান করবেন?
        </h2>
        <p className="mt-3 text-center text-rose-100">
          মাত্র ৩টি সহজ ধাপে দাতা হিসেবে নিবন্ধন করুন।
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white">
                <s.icon className="h-7 w-7" />
              </div>
              <span className="mt-4 text-sm font-bold text-rose-200">
                ধাপ {s.step}
              </span>
              <h3 className="mt-1 font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-rose-100">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How2Donate;
