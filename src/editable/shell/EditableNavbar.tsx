'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { mediaDistributionRoute } from '@/config/media-distribution-route'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 bg-white/92 text-black shadow-[0_1px_0_rgba(0,0,0,.08)] backdrop-blur-xl">
      <div className="mx-auto grid min-h-[74px] max-w-[1240px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-black/25 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link href="/" className="flex max-w-[54vw] items-center justify-center gap-3 truncate text-center text-xl font-black tracking-[-0.04em] sm:text-2xl">
          <img src="/favicon.ico" alt="Logo" className="h-9 w-9 object-contain" />
          <span className="hidden sm:block">{SITE_CONFIG.name}</span>
        </Link>

        <div className="flex items-center justify-end gap-4">
          {session ? (
            <>
              <span className="hidden max-w-[140px] truncate rounded-full bg-[var(--slot4-accent-soft)] px-4 py-2 text-xs font-black text-[var(--slot4-accent)] sm:block">{session.name}</span>
              <button type="button" onClick={logout} className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Logout</button>
            </>
          ) : <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Log in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-full bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-white shadow-[0_14px_30px_rgba(107,0,245,.22)] sm:px-6">
            {session ? 'Create' : 'Sign up'}
          </Link>
        </div>
      </div>

      <div className="border-y border-black/5 bg-[#f6f5f7] text-[#1c1b24]">
        <div className="mx-auto flex min-h-[48px] max-w-[1240px] items-center gap-6 overflow-hidden px-4 sm:px-6 lg:px-8">
          <nav className="hidden flex-1 items-center gap-6 text-xs font-black uppercase tracking-[.14em] lg:flex">
            <Link href="/">Home</Link>
            <Link href={mediaDistributionRoute}>Media Distribution</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <form action="/search" className="ml-auto flex min-w-0 flex-1 items-center rounded-full bg-white lg:max-w-[270px] lg:flex-none">
            <Search className="ml-4 h-4 w-4 text-black/45" />
            <input name="q" type="search" placeholder="Search media" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs font-bold outline-none placeholder:text-black/40" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/15 bg-[var(--slot4-surface-bg)] px-4 py-4 lg:hidden">
          <div className="grid gap-px bg-black/15">
            {[{ label: 'Home', href: '/' }, { label: 'Media Distribution', href: mediaDistributionRoute }, { label: 'Search', href: '/search' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: session.name, href: '/create' }, { label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
