'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Droplet, CheckCircle } from 'lucide-react'
import { useAuth } from '@/lib/AuthContext'
import axios from 'axios'
import Swal from 'sweetalert2'

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

const DonateBlood = () => {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [form, setForm] = useState({
    name: '',
    group: '',
    phone: '',
    location: '',
    date: new Date().toISOString().split('T')[0],
  })
  const [agreed, setAgreed] = useState(false)
  const [sendImage, setSendImage] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [loading, user, router])

  if (loading) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-rose-200 border-t-rose-600" />
      </main>
    )
  }

  if (!user) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const storedName = localStorage.getItem('user_name') || ''
    const email = localStorage.getItem('user_email') || ''
    const profileImage = localStorage.getItem('user_image') || ''
    const name = form.name.trim() || storedName

    let imageUrl: string
    if (sendImage) {
      imageUrl = profileImage
    } else {
      const firstLetter = name.charAt(0).toUpperCase() || '?'
      imageUrl = `https://ui-avatars.com/api/?name=${firstLetter}&background=e11d48&color=fff`
    }

    const payload = {
      profile_image: imageUrl,
      name,
      email,
      group: form.group,
      location: form.location,
      mobile: form.phone,
      date: form.date,
    }
    console.log('Sending data:', payload)

    try {
      const res = await axios.post('/api/donate', payload)
      console.log('Response status:', res.status)
      console.log('Response data:', res.data)
      Swal.fire({
        icon: 'success',
        title: 'সফলভাবে জমা হয়েছে!',
        text: 'আপনার রক্তদানের আগ্রহ রেকর্ড করা হয়েছে।',
        confirmButtonColor: '#e11d48',
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Submit failed:', error)
      Swal.fire({
        icon: 'error',
        title: 'ব্যর্থ হয়েছে!',
        text: 'রক্তদান জমা দিতে সমস্যা হয়েছে।',
        confirmButtonColor: '#e11d48',
      })
    }
  }

  if (submitted) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">ধন্যবাদ!</h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
            আপনার রক্তদানের আগ্রহ আমাদের অনুপ্রেরণা।<br />
            আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', group: '', phone: '', location: '', date: new Date().toISOString().split('T')[0] }) }}
            className="mt-6 rounded-full bg-gradient-to-r from-rose-600 to-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-600/20 transition-all hover:from-rose-700 hover:to-red-700"
          >
            আবার আবেদন করুন
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 shadow-lg shadow-rose-500/30">
            <Droplet className="h-6 w-6 text-white" fill="white" />
          </div>
          <h1 className="text-xl font-bold text-slate-900">রক্ত দিন</h1>
          <p className="mt-1 text-xs text-slate-500">আমি সত্যিই রক্ত দিতে চাই — এই ছোট্ট পদক্ষেপটুকু কারো জীবনে বড় আলো জ্বালাতে পারে।</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <label className="text-sm font-medium text-slate-700">নাম <span className="text-xs text-slate-400">(ঐচ্ছিক)</span></label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="আপনার নাম"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-rose-300 focus:bg-white focus:ring-2 focus:ring-rose-100"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">রক্তের গ্রুপ</label>
            <select
              name="group"
              value={form.group}
              onChange={handleChange}
              required
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-rose-300 focus:bg-white focus:ring-2 focus:ring-rose-100"
            >
              <option value="">নির্বাচন করুন</option>
              {bloodGroups.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">মোবাইল নম্বর</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="01XXXXXXXXX"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-rose-300 focus:bg-white focus:ring-2 focus:ring-rose-100"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">অবস্থান</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              placeholder="এলাকা / জেলা"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-rose-300 focus:bg-white focus:ring-2 focus:ring-rose-100"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">তারিখ</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-rose-300 focus:bg-white focus:ring-2 focus:ring-rose-100"
            />
          </div>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 transition-colors hover:bg-slate-50">
            <input
              type="checkbox"
              checked={sendImage}
              onChange={(e) => setSendImage(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-rose-600 focus:ring-rose-500"
            />
            <span className="text-sm text-slate-700">আমি আমার প্রোফাইল ছবি শেয়ার করতে চাই
            </span>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 transition-colors hover:bg-slate-50">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-rose-600 focus:ring-rose-500"
            />
            <span className="text-sm text-slate-700">আমি স্বেচ্ছায় রক্ত দিতে সম্মত</span>
          </label>

          <button
            type="submit"
            disabled={!agreed}
            className="flex w-full mb-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-rose-600/20 transition-all hover:from-rose-700 hover:to-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            জমা দিন
          </button>
        </form>
      </div>
    </main>
  )
}

export default DonateBlood
