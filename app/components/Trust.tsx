import { Droplet, TestTube, Heart } from "lucide-react";

const stats = [
  {
    icon: Droplet,
    value: "১৮+",
    label: "ব্যাগ রক্ত",
  },
  {
    icon: TestTube,
    value: "২৩০+",
    label: "টেস্ট সম্পন্ন",
  },
  {
    icon: Heart,
    value: "১০০+",
    label: "রক্ত দিতে আগ্রহী",
  },
];

const Trust = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl bg-rose-50 p-6 text-center"
            >
              <stat.icon className="mb-3 h-8 w-8 text-rose-600" />
              <span className="text-3xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
