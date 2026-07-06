'use client'

import React, { useState, useEffect } from 'react'
import { Droplet, Menu, X, MapPin, ChevronRight, LogOut, Heart } from 'lucide-react'
import navLogo from "../images/logo.png"
import { useAuth } from '@/lib/AuthContext'
import { signOut } from 'firebase/auth'
import { getAuthInstance } from '@/lib/firebase'
import Link from 'next/link'

const navLinks = [
  { label: 'হোম', href: '/' },
  { label: 'ডোনার খুঁজুন', href: '/donors' },
  { label: 'সম্পর্কে', href: '/about' },
  { label: 'যোগাযোগ', href: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, loading } = useAuth()

  const userImage = user?.photoURL || (!loading ? (typeof window !== 'undefined' ? localStorage.getItem('user_image') || '' : '') : '')
  const userName = user?.displayName || (!loading ? (typeof window !== 'undefined' ? localStorage.getItem('user_name') || '' : '') : '')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (user) {
      localStorage.setItem('user_image', user.photoURL || '')
      localStorage.setItem('user_name', user.displayName || '')
      localStorage.setItem('user_email', user.email || '')
    }
  }, [user])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLogout = async () => {
    const auth = getAuthInstance()
    if (auth) await signOut(auth)
    localStorage.removeItem('user_image')
    localStorage.removeItem('user_name')
    localStorage.removeItem('user_email')
    window.location.reload()
  }

  const isLoggedIn = !loading && (user || userImage)

  return (
    <header
      className={`sticky top-0 z-50 w-full ${
        scrolled
          ? 'bg-white/75 backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(190,18,60,0.15)] border-b border-rose-100/80'
          : 'bg-white/40 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img className='w-10' src={navLogo.src} alt="Logo" />
          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold text-slate-900 sm:text-base">
              ইসাক রক্তবন্ধন
            </span>
            <span className="text-[11px] font-medium tracking-wide text-rose-600">
              বাংলাদেশ
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-rose-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-3 lg:flex">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link
                href="/amar-rokto-dan"
                className="flex items-center gap-1.5 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-rose-700 transition-colors hover:bg-rose-50"
              >
                <Heart className="h-4 w-4" />
                আমার রক্তদান
              </Link>
              {userImage && (
                <img
                  src={userImage}
                  alt="Profile"
                  className="h-8 w-8 rounded-full border border-rose-200"
                />
              )}
              <Link
                href="/donate"
                className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-600 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-600/25"
              >
                <Droplet className="h-4 w-4" fill="white" />
                রক্ত দিন
              </Link>
              <button
                onClick={handleLogout}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-red-600"
                title="লগআউট"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/donate"
                className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-600 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-600/25"
              >
                <Droplet className="h-4 w-4" fill="white" />
                রক্ত দিন
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                লগইন
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-100 bg-white/70 text-slate-700 backdrop-blur-md lg:hidden"
          aria-label={isOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-rose-100/80 bg-white/90 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-700"
              >
                {link.label}
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
            ))}

            {isLoggedIn ? (
              <>
                {userImage && (
                  <div className="flex items-center gap-3 px-3 py-2">
                    <img
                      src={userImage}
                      alt="Profile"
                      className="h-8 w-8 rounded-full border border-rose-200"
                    />
                    <span className="text-sm text-slate-700">{userName}</span>
                  </div>
                )}
                <Link
                  href="/amar-rokto-dan"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-3 text-sm font-semibold text-rose-700 transition-colors hover:bg-rose-50"
                >
                  <Heart className="h-4 w-4" />
                  আমার রক্তদান
                </Link>
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-red-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-rose-600/25"
                >
                  <Droplet className="h-4 w-4" fill="white" />
                  রক্ত দিন
                </Link>
                <button
                  onClick={() => { handleLogout(); setIsOpen(false) }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  লগআউট
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-red-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-rose-600/25"
                >
                  <Droplet className="h-4 w-4" fill="white" />
                  রক্ত দিন
                </Link>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  লগইন
                </Link>
              </>
            )}

            <div className="mt-2 flex items-center gap-1.5 px-3 text-xs text-slate-400">
              <MapPin className="h-3.5 w-3.5" />
              রাজশাহী বিভাগ, বাংলাদেশ
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
