'use client'

import React from 'react'
import { MapPin, Phone, Droplet, CalendarDays, User } from 'lucide-react'

const donors = [
  {
    name: 'আরিফুল ইসলাম',
    location: 'রাজশাহী, বাংলাদেশ',
    mobile: '01712-345678',
    group: 'A+',
    date: '১৫ জুন, ২০২৬',
  },
  {
    name: 'ফাতেমা খাতুন',
    location: 'ঢাকা, বাংলাদেশ',
    mobile: '01819-876543',
    group: 'B+',
    date: '১০ জুলাই, ২০২৬',
  },
  {
    name: 'মোহাম্মদ রাকিব',
    location: 'চট্টগ্রাম, বাংলাদেশ',
    mobile: '01912-112233',
    group: 'O+',
    date: '০৫ জুলাই, ২০২৬',
  },
  {
    name: 'সুমাইয়া আক্তার',
    location: 'খুলনা, বাংলাদেশ',
    mobile: '01612-445566',
    group: 'AB+',
    date: '২৮ জুন, ২০২৬',
  },
  {
    name: 'জাহাঙ্গীর আলম',
    location: 'সিলেট, বাংলাদেশ',
    mobile: '01312-778899',
    group: 'A-',
    date: '২০ জুন, ২০২৬',
  },
  {
    name: 'নুসরাত জাহান',
    location: 'বরিশাল, বাংলাদেশ',
    mobile: '01512-223344',
    group: 'B-',
    date: '১৫ জুলাই, ২০২৬',
  },
]

const groupColors: Record<string, { bg: string; text: string; shadow: string; border: string }> = {
  'A+':  { bg: 'bg-gradient-to-br from-rose-500 to-rose-600', text: 'text-white', shadow: 'shadow-rose-500/40', border: 'border-rose-300' },
  'A-':  { bg: 'bg-gradient-to-br from-rose-400 to-rose-500', text: 'text-white', shadow: 'shadow-rose-400/40', border: 'border-rose-300' },
  'B+':  { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', text: 'text-white', shadow: 'shadow-blue-500/40', border: 'border-blue-300' },
  'B-':  { bg: 'bg-gradient-to-br from-blue-400 to-blue-500', text: 'text-white', shadow: 'shadow-blue-400/40', border: 'border-blue-300' },
  'O+':  { bg: 'bg-gradient-to-br from-red-500 to-red-600', text: 'text-white', shadow: 'shadow-red-500/40', border: 'border-red-300' },
  'O-':  { bg: 'bg-gradient-to-br from-red-400 to-red-500', text: 'text-white', shadow: 'shadow-red-400/40', border: 'border-red-300' },
  'AB+': { bg: 'bg-gradient-to-br from-purple-500 to-purple-600', text: 'text-white', shadow: 'shadow-purple-500/40', border: 'border-purple-300' },
  'AB-': { bg: 'bg-gradient-to-br from-purple-400 to-purple-500', text: 'text-white', shadow: 'shadow-purple-400/40', border: 'border-purple-300' },
}

const Donors = () => {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-white to-red-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            রক্তদাতা তালিকা
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
            আমাদের স্বেচ্ছাসেবী রক্তদাতাদের তথ্য
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {donors.map((donor, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-rose-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all hover:border-rose-200 hover:shadow-lg hover:shadow-rose-900/5"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-red-600 text-sm font-bold text-white shadow-md shadow-rose-500/20">
                    {donor.name.charAt(0)}
                  </div>
                  <h2 className="text-[15px] font-semibold text-slate-900">
                    {donor.name}
                  </h2>
                </div>
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl border-2 font-black text-lg ${
                    groupColors[donor.group]
                      ? `${groupColors[donor.group].bg} ${groupColors[donor.group].text} ${groupColors[donor.group].shadow} border-transparent shadow-lg`
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}
                >
                  {donor.group}
                </div>
              </div>

              <div className="flex flex-col gap-3 text-sm text-slate-600">
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-rose-400" />
                  <span>{donor.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-rose-400" />
                  <span>{donor.mobile}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="h-4 w-4 shrink-0 text-rose-400" />
                  <span>{donor.date}</span>
                </div>
              </div>

              <div className="mt-5 border-t border-rose-100/60 pt-4">
                <a
                  href={`tel:${donor.mobile.replace(/-/g, '')}`}
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-600/20 transition-colors hover:from-rose-700 hover:to-red-700"
                >
                  যোগাযোগ করুন
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Donors
