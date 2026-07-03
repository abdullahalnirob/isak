import { MapPin, Heart, Users, Shield, Clock } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "মানবিক সেবা",
    desc: "আমরা সম্পূর্ণ অলাভজনকভাবে মানুষের পাশে দাঁড়িয়ে আছি।",
  },
  {
    icon: Users,
    title: "স্বেচ্ছাসেবী নেটওয়ার্ক",
    desc: "হাজার হাজার স্বেচ্ছাসেবী রক্তদাতা আমাদের সাথে যুক্ত।",
  },
  {
    icon: Shield,
    title: "নিরাপদ রক্ত সরবরাহ",
    desc: "সকল রক্ত সংগ্রহ ও বিতরণ নিরাপত্তার মানদণ্ড অনুসরণ করে।",
  },
  {
    icon: Clock,
    title: "দ্রুত সেবা",
    desc: "জরুরি প্রয়োজনে দ্রুততম সময়ে রক্ত সরবরাহ করি।",
  },
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-red-50 px-10 py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900">আমাদের সম্পর্কে</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed">
            &lsquo;ইসাক রক্তবন্ধন বাংলাদেশ&rsquo; একটি অলাভজনক ও মানবিক
            উদ্যোগ। আমরা রক্তদানের প্রতি সচেতনতা বৃদ্ধি এবং জরুরি সময়ে
            রক্তের ব্যবস্থা নিশ্চিত করার জন্য নিবেদিত।
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-10 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900">আমাদের লক্ষ্য</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            প্রতিটি জীবন মূল্যবান। আমাদের লক্ষ্য হলো একটি এমন সমাজ গড়ে তোলা
            যেখানে কেউ রক্তের অভাবে কষ্ট পাবে না। আমরা স্বেচ্ছাসেবী
            রক্তদাতাদের সাথে প্রয়োজনীয় ব্যক্তিদের সংযুক্ত করি, রক্তদানের
            প্রতি সচেতনতা সৃষ্টি করি এবং একটি সুশৃঙ্খল রক্ত ব্যাংক পরিচালনা
            করি। আপনার সহযোগিতাই আমাদের শক্তি।
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 px-10 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            আমাদের মূল্যবোধ
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <v.icon className="h-8 w-8 text-rose-600" />
                <h3 className="mt-4 font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-10 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900">
            আমাদের অবস্থান
          </h2>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row">
            <div className="flex-1 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-rose-600" />
                <div>
                  <p className="font-semibold text-gray-900">প্রধান কার্যালয়</p>
                  <p className="text-gray-600">
                    আমদিঘী, বগুড়া
                    <br />
                    রাজশাহী বিভাগ, বাংলাদেশ
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-rose-600" />
                <div>
                  <p className="font-semibold text-gray-900">সেবা সময়</p>
                  <p className="text-gray-600">
                    সকাল ৮:০০ — রাত ১০:০০
                    <br />
                    জরুরি সেবা: ২৪/৭
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 shrink-0 text-rose-600" />
                <div>
                  <p className="font-semibold text-gray-900">যোগাযোগ</p>
                  <p className="text-gray-600">
                    ফোন: +880 1XXX-XXXXXX
                    <br />
                    ইমেইল: info@isakbondhon.org
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden rounded-2xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57949.01579086579!2d89.00092953693381!3d24.801839375734424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc66cdcebca9d1%3A0x63eb5f95745494f1!2sAdamdighi!5e0!3m2!1sen!2sbd!4v1783096777865!5m2!1sen!2sbd"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
