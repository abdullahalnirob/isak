import { Droplet, MapPin, Phone, Mail } from "lucide-react";
import navLogo from "../images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-10 py-12 text-gray-400">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <Image src={navLogo} alt="Logo" className="h-8 w-8" />
            <div>
              <p className="font-bold text-white">ইসাক রক্তবন্ধন</p>
              <p className="text-xs text-rose-400">বাংলাদেশ</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            একটি অলাভজনক ও মানবিক উদ্যোগ। রক্তদানের প্রতি সচেতনতা বৃদ্ধি
            এবং জীবন বাঁচাতে আমরা নিবেদিত।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 font-semibold text-white">দ্রুত লিংক</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                হোম
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                সম্পর্কে
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-white transition-colors">
                রক্ত দিন
              </Link>
            </li>
            <li>
              <Link href="/donors" className="hover:text-white transition-colors">
                ডোনার খুঁজুন
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                যোগাযোগ
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-3 font-semibold text-white">সেবাসমূহ</h3>
          <ul className="space-y-2 text-sm">
            <li>রক্তদান সচেতনতা</li>
            <li>জরুরি রক্ত সরবরাহ</li>
            <li>রক্ত ব্যাংক পরিচালনা</li>
            <li>দাতা নিবন্ধন</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-3 font-semibold text-white">যোগাযোগ</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
              আমদিঘী, বগুড়া, বাংলাদেশ
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-rose-400" />
              +880 1XXX-XXXXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-rose-400" />
              info@isakbondhon.org
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-10 max-w-5xl border-t border-gray-800 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} ইসাক রক্তবন্ধন বাংলাদেশ। সর্বস্বত্ব
          সংরক্ষিত।
        </p>
        <br />
        <p>Developed by <a target="_blank" href="https://www.facebook.com/dev.abdullahalnirob" className="text-rose-400 hover:text-rose-300 transition-colors underline">Abdullah Al Nirob</a></p>
      </div>
    </footer>
  );
};

export default Footer;
