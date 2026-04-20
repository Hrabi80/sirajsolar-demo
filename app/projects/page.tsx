import type { Metadata } from "next"
import { Sun } from "lucide-react"

import { SafeImage } from "@/components/safe-image"
import { projects } from "@/data/projects"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Projects",
  description:
    "A selection of Siraj Solar engagements across residential, commercial, off-grid, and hybrid energy systems.",
  path: "/projects",
})

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Projects</span>
          <h1 className="mt-3 max-w-3xl text-balance text-5xl font-semibold leading-tight text-navy md:text-6xl">
            Work that powers homes, businesses, and communities.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A selection of recent engagements focused on reliable system performance, strong
            technical foundations, and practical project outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-3xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <SafeImage
                  src={project.image}
                  fallbackSrc="/images/fallback-solar.svg"
                  alt={project.title}
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 text-xs font-medium text-gold backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-navy">{project.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-navy">
                  <Sun className="h-3.5 w-3.5 text-gold" /> {project.capacity}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
