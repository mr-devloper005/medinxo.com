import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6f5f7] px-4 py-12 text-[#1c1b24] sm:px-6 lg:px-8">
        <section className="mx-auto grid min-h-[calc(100vh-14rem)] max-w-[1120px] overflow-hidden rounded-[32px] bg-white shadow-[0_30px_90px_rgba(20,14,35,.08)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Create account</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.055em]">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-black/10 pt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="editable-rise flex flex-col justify-center bg-[linear-gradient(135deg,#07050d,#3d0589_58%,#6b00f5)] p-8 text-white sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d7ff66]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-6xl font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
            <div className="editable-float mt-10 rounded-[24px] bg-white/12 p-6">
              <p className="text-5xl font-black">300+</p>
              <p className="mt-2 text-sm font-bold text-white/70">Reusable distribution blocks, briefs, and publishing workflows.</p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
