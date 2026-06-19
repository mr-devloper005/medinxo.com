import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6f5f7] px-4 py-12 text-[#1c1b24] sm:px-6 lg:px-8">
        <section className="mx-auto grid min-h-[calc(100vh-14rem)] max-w-[1120px] overflow-hidden rounded-[32px] bg-white shadow-[0_30px_90px_rgba(20,14,35,.08)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="editable-rise flex flex-col justify-center bg-[#07050d] p-8 text-white sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.28em]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-6xl font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/75">{pagesContent.auth.login.description}</p>
            <div className="mt-10 grid gap-3 text-sm font-bold text-white/70 sm:grid-cols-2">
              <span className="rounded-full bg-white/10 px-4 py-3">Publisher briefs</span>
              <span className="rounded-full bg-white/10 px-4 py-3">Campaign drafts</span>
              <span className="rounded-full bg-white/10 px-4 py-3">Distribution notes</span>
              <span className="rounded-full bg-white/10 px-4 py-3">Archive access</span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Member access</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.055em]">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-black/10 pt-5 text-sm text-black/65">New here? <Link href="/signup" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
