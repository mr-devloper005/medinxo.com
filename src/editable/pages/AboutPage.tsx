import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { mediaDistributionRoute } from '@/config/media-distribution-route'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6f5f7] text-[#1c1b24]">
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
            <div className="editable-rise">
              <p className="inline-flex rounded-full border border-black/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
              <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl">
                Media distribution built for clarity, reach, and reliable publishing.
              </h1>
            </div>
            <div className="editable-card self-end bg-[#07050d] p-8 text-white">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d7ff66]">Operating rhythm</p>
              <p className="mt-5 text-2xl font-black leading-tight">Campaign briefs, publisher updates, outreach notes, and results stay connected from first draft to final placement.</p>
              <Link href={mediaDistributionRoute} className="mt-8 inline-flex rounded-full bg-[var(--slot4-accent)] px-6 py-3 text-xs font-black uppercase tracking-[0.16em]">View tasks</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1240px] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8 lg:py-16">
          <article className="editable-card bg-white p-7 sm:p-10 lg:p-14">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
            <p className="mt-6 text-3xl font-bold leading-[1.2] tracking-[-0.045em] sm:text-4xl">{pagesContent.about.description}</p>
            <div className="mt-10 grid gap-5 text-base leading-8 text-black/68">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid gap-5">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="editable-card bg-[#f1edf8] p-7">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">0{index + 1}</p>
                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em]">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-black/65">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="bg-[#07050d] text-white">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.055em] sm:text-5xl">Read the distribution work shaping campaign visibility.</h2>
            <Link href="/search" className="inline-flex w-fit rounded-full bg-[var(--slot4-accent)] px-6 py-4 text-xs font-black uppercase tracking-[0.18em]">Explore the archive</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
