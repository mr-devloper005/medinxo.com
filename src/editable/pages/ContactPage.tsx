'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaigns.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6f5f7] text-[#1c1b24]">
        <section className="bg-white">
          <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <p className="inline-flex rounded-full border border-black/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="editable-rise mt-5 max-w-4xl text-6xl font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl border-l-4 border-[var(--slot4-accent)] pl-5 text-base font-semibold leading-8 text-black/65">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1240px] gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <aside className="grid gap-5 text-white">
            {desks.map((desk, index) => (
              <div key={desk.title} className="editable-card bg-[#07050d] p-7 sm:p-8">
                <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[#d7ff66]" /><span className="text-xs font-black text-white/45">0{index + 1}</span></div>
                <h2 className="mt-6 text-3xl font-black tracking-[-0.05em]">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/65">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="editable-card bg-white p-6 sm:p-10 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.055em]">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
