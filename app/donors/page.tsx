'use client'

import React, { useEffect, useState } from 'react'
import { MapPin, Phone, Droplet, CalendarDays, User, SearchX, ChevronLeft, ChevronRight } from 'lucide-react'
import axios from 'axios'
import Link from 'next/link'

interface Donor {
  _id: string
  name: string
  location: string
  mobile: string
  group: string
  date: string
  profile_image?: string
}

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

const bloodGroups = ['সব', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

const ITEMS_PER_PAGE = 10

const Donors = () => {
  const [donors, setDonors] = useState<Donor[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedGroup, setSelectedGroup] = useState('সব')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredDonors = donors.filter((donor) => selectedGroup === 'সব' || donor.group === selectedGroup)
  const totalPages = Math.ceil(filteredDonors.length / ITEMS_PER_PAGE)
  const paginatedDonors = filteredDonors.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await axios.get('/api/donate')
        setDonors(res.data.data)
      } catch (error) {
        console.error('Failed to fetch donors:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchDonors()
  }, [])

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-rose-200 border-t-rose-600" />
      </main>
    )
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            রক্তদাতা তালিকা
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
            আমাদের স্বেচ্ছাসেবী রক্তদাতাদের তথ্য
          </p>
          <Link
            href="/donate"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-600/20 transition-all hover:from-rose-700 hover:to-red-700"
          >
            রক্ত দিন
          </Link>
        </div>

        {/* Blood Group Filter */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {bloodGroups.map((g) => (
            <button
              key={g}
              onClick={() => { setSelectedGroup(g); setCurrentPage(1) }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                selectedGroup === g
                  ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-600/20'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-rose-300 hover:text-rose-700'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {donors.length === 0 ? (
          <p className="text-center text-slate-500">কোনো রক্তদাতা পাওয়া যায়নি।</p>
        ) : filteredDonors.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <SearchX className="mb-4 h-16 w-16 text-rose-400" />
            <h2 className="text-xl font-bold text-slate-900">কোনো রক্তদাতা পাওয়া যায়নি</h2>
            <p className="mt-2 text-sm text-slate-500">
              <span className="font-semibold text-rose-600">{selectedGroup}</span> রক্তের গ্রুপে কোনো দাতা নেই।
            </p>
          </div>
        ) : (
          <>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-5">
            {paginatedDonors.map((donor) => (
            <div
              key={donor._id}
              className="group rounded-2xl border border-rose-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all hover:border-rose-200 hover:shadow-lg hover:shadow-rose-900/5"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {donor.profile_image ? (
                    <img
                      src={donor.profile_image}
                      alt={donor.name}
                      className="h-14 w-14 rounded-full object-cover shadow-md shadow-rose-500/20"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-red-600 text-base font-bold text-white shadow-md shadow-rose-500/20">
                      {donor.name.charAt(0)}
                    </div>
                  )}
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

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-600/20'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-rose-300 hover:text-rose-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
          </>
        )}
      </div>
    </section>
  )
}

export default Donors
