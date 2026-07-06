'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Droplet } from 'lucide-react'
import { signInWithPopup } from 'firebase/auth'
import { getAuthInstance, getGoogleProviderInstance } from '@/lib/firebase'
import { useAuth } from '@/lib/AuthContext'
import Link from 'next/link'

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
)

const Login = () => {
  const router = useRouter()
  const { user, loading } = useAuth()

  const handleGoogleLogin = async () => {
    const auth = getAuthInstance()
    const googleProvider = getGoogleProviderInstance()
    if (!auth || !googleProvider) return
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const u = result.user
      localStorage.setItem('user_image', u.photoURL || '')
      localStorage.setItem('user_name', u.displayName || '')
      localStorage.setItem('user_email', u.email || '')
      router.push('/')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  if (loading) {
    return (
      <section className="flex min-h-[calc(100vh-200px)] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-rose-200 border-t-rose-600" />
      </section>
    )
  }

  if (user) {
    return (
      <section className="relative flex min-h-[calc(100vh-200px)] items-center justify-center bg-gradient-to-br from-rose-50 via-white to-red-50 px-4 py-16">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-red-200/30 blur-3xl" />

        <div className="relative w-full max-w-md">
          <div className="rounded-3xl border border-rose-100/80 bg-white/80 p-10 shadow-xl shadow-rose-900/5 backdrop-blur-xl sm:p-12">
            <div className="flex flex-col items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 shadow-lg shadow-rose-500/25">
                <Droplet className="h-8 w-8 text-white" fill="white" />
              </div>

              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="h-16 w-16 rounded-full border-2 border-rose-200"
                />
              )}

              <div className="text-center">
                <h1 className="text-2xl font-bold text-slate-900">
                  স্বাগতম!
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                  {user.displayName || user.email}
                </p>
              </div>

              <Link
                href="/donate"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-rose-600/20 transition-all hover:from-rose-700 hover:to-red-700"
              >
                <Droplet className="h-4 w-4" fill="white" />
                রক্ত দিন
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative flex min-h-[calc(100vh-200px)] items-center justify-center bg-gradient-to-br from-rose-50 via-white to-red-50 px-4 py-16">
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-red-200/30 blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border border-rose-100/80 bg-white/80 p-10 shadow-xl shadow-rose-900/5 backdrop-blur-xl sm:p-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 shadow-lg shadow-rose-500/25">
              <Droplet className="h-8 w-8 text-white" fill="white" />
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-900">
                লগইন করুন
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                দয়া করে আপনার Google অ্যাকাউন্ট দিয়ে লগইন করুন
              </p>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
            >
              <GoogleIcon />
              Google দিয়ে লগইন করুন
            </button>

            <p className="text-center text-xs leading-relaxed text-slate-400">
              লগইন করার মাধ্যমে আপনি আমাদের{' '}
              <span className="text-rose-500">শর্তাবলী</span> ও{' '}
              <span className="text-rose-500">গোপনীয়তা নীতি</span> মেনে নিচ্ছেন।
            </p>

            <Link
              href="/donate"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-rose-600/20 transition-all hover:from-rose-700 hover:to-red-700"
            >
              রক্ত দিন
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
