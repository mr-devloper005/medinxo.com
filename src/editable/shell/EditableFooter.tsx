'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { mediaDistributionRoute } from '@/config/media-distribution-route'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-[#1f1d27] text-white">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.7fr_.7fr]">
          <div className="editable-rise">
            <Link href="/" className="flex items-center gap-3 text-3xl font-black tracking-[-0.05em]">
              <img src="/favicon.ico" alt="Logo" className="h-9 w-9 object-contain" />
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
              {globalContent.footer?.description || 'Media distribution briefings, campaign stories, publishing updates, and logistics communication in one focused archive.'}
            </p>
            <form action="/signup" className="mt-8 flex max-w-xl overflow-hidden rounded-full border border-white/20 bg-white/5">
              <input name="email" type="email" placeholder="Email for distribution updates" className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-white/40" />
              <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em]">Subscribe</button>
            </form>
          </div>
          <div>
            <h3 className="border-b border-white/15 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Explore</h3>
            <div className="mt-4 grid gap-3">
              <Link href={mediaDistributionRoute} className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Media Distribution<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Search<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div>
            <h3 className="border-b border-white/15 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Account</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">About</Link>
              <Link href="/contact" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Contact</Link>
              {session ? (
                <>
                  <Link href="/create" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Create as {session.name}</Link>
                  <button onClick={logout} className="text-left text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Log in</Link>
                  <Link href="/signup" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-white/45">© {year} {SITE_CONFIG.name}. Media distribution and publishing updates.</div>
    </footer>
  )
}
