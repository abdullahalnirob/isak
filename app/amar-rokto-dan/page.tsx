'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Phone, CalendarDays, Droplet, Trash2 } from 'lucide-react'
import { useAuth } from '@/lib/AuthContext'
import axios from 'axios'
import Swal from 'sweetalert2'
import Link from 'next/link'

interface Donation {
  _id: string
  name: string
  group: string
  location: string
  mobile: string
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

const AmarRoktoDan = () => {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [donations, setDonations] = useState<Donation[]>([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user?.email) {
      const fetchDonations = async () => {
        try {
          const res = await axios.get(`/api/donate?email=${user.email}`)
          setDonations(res.data.data)
        } catch (error) {
          console.error('Failed to fetch donations:', error)
        } finally {
          setFetching(false)
        }
      }
      fetchDonations()
    }
  }, [user])

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: 'আপনি কি সত্যিই ডিলিট করতে চান?',
      text: "এটি পূর্বাবস্থায় ফেরানো যাবে না!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e11d48',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'হ্যাঁ, ডিলিট করুন!',
      cancelButtonText: 'না, বাতিল করুন',
    })
    if (!result.isConfirmed) return
    try {
      await axios.delete(`/api/donate/${id}`)
      setDonations((prev) => prev.filter((d) => d._id !== id))
      Swal.fire({
        icon: 'success',
        title: 'ডিলিট হয়েছে!',
        text: 'আপনার রক্তদানের তথ্য মুছে ফেলা হয়েছে।',
        confirmButtonColor: '#e11d48',
      })
    } catch (error) {
      console.error('Failed to delete:', error)
      Swal.fire({
        icon: 'error',
        title: 'ব্যর্থ হয়েছে!',
        text: 'ডিলিট করতে সমস্যা হয়েছে।',
        confirmButtonColor: '#e11d48',
      })
    }
  }

  if (loading || !user) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-rose-200 border-t-rose-600" />
      </main>
    )
  }

  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-white to-red-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            আমার রক্তদান
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
            আপনার সকল রক্তদানের তথ্য এখানে দেখুন
          </p>
          <Link
            href="/donate"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-600/20 transition-all hover:from-rose-700 hover:to-red-700"
          >
            <Droplet className="h-4 w-4" fill="white" />
            নতুন রক্তদান করুন
          </Link>
        </div>

        {fetching ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-rose-200 border-t-rose-600" />
          </div>
        ) : donations.length === 0 ? (
          <p className="text-center text-slate-500">আপনি এখনো কোনো রক্তদান করেননি।</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {donations.map((donation) => (
              <div
                key={donation._id}
                className="group rounded-2xl border border-rose-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all hover:border-rose-200 hover:shadow-lg hover:shadow-rose-900/5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {donation.profile_image ? (
                      <img
                        src={donation.profile_image}
                        alt={donation.name}
                        className="h-14 w-14 rounded-full object-cover shadow-md shadow-rose-500/20"
                      />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-red-600 text-base font-bold text-white shadow-md shadow-rose-500/20">
                        {donation.name.charAt(0)}
                      </div>
                    )}
                    <h2 className="text-[15px] font-semibold text-slate-900">
                      {donation.name}
                    </h2>
                  </div>
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl border-2 font-black text-lg ${
                      groupColors[donation.group]
                        ? `${groupColors[donation.group].bg} ${groupColors[donation.group].text} ${groupColors[donation.group].shadow} border-transparent shadow-lg`
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {donation.group}
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 shrink-0 text-rose-400" />
                    <span>{donation.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-rose-400" />
                    <span>{donation.mobile}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CalendarDays className="h-4 w-4 shrink-0 text-rose-400" />
                    <span>{new Date(donation.date).toLocaleDateString('bn-BD')}</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-rose-100/60 pt-4">
                  <button
                    onClick={() => handleDelete(donation._id)}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-red-200 bg-white px-5 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    মুছে ফেলুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default AmarRoktoDan
