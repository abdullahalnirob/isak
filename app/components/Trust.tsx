import { Heart, Droplet, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Droplet,
    value: "৫,০০০+",
    label: "ইউনিট রক্ত সংগৃহীত",
  },
  {
    icon: Heart,
    value: "৪,৫০০+",
    label: "জীবন বাঁচানো হয়েছে",
  },
  {
    icon: Users,
    value: "৩,০০০+",
    label: "নিবন্ধিত রক্তদাতা",
  },
  {
    icon: Clock,
    value: "২৪/৭",
    label: "জরুরি সেবা প্রদান",
  },
];

const Trust = () => {
  return (
    <section className="bg-white py-16 px-10">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-bold text-gray-900">আমাদের বিশ্বাস</h2>
        <p className="mt-3 text-gray-600">
          আমরা বিশ্বাস করি প্রতিটি রক্তদান একটি নতুন জীবনের সূচনা।
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
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
    </section>
  );
};

export default Trust;
