import { Hero } from '@/components/Hero'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="section-shell border-t border-gold/30">
        <h2 className="font-heading text-3xl">Project status</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-light-muted">
          <li>Next.js app directory is configured.</li>
          <li>Global styling and Tailwind are wired up.</li>
          <li>The project now builds and can be started locally.</li>
        </ul>
      </section>
    </main>
  )
}
