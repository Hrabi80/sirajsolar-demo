import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Award, Compass, Heart } from "lucide-react"

import { SafeImage } from "@/components/safe-image"
import { Button } from "@/components/ui/button"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn how Siraj Solar supports developers, engineering teams, and manufacturers with expert PV and BESS consulting plus advanced practical training.",
  path: "/about",
  image: "/images/about-consultant.jpg",
})

const values = [
  {
    icon: Compass,
    title: "Engineering-first consulting",
    text: "Independent technical studies and simulations designed to support clear project decisions and execution confidence.",
  },
  {
    icon: Award,
    title: "Advanced practical training",
    text: "Focused online programs that transfer real-world engineering methods to teams and professionals.",
  },
  {
    icon: Heart,
    title: "Long-term technical partner",
    text: "We support projects from concept through optimization, helping clients build autonomy and technical excellence.",
  },
]

const audiences = [
  "Project developers and EPC companies",
  "Engineering teams working on PV and BESS projects",
  "Manufacturers seeking technical and market support",
  "Engineers aiming to master real-world project studies",
]

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About Siraj Solar
            </span>
            <h1 className="mt-4 text-balance text-5xl font-semibold leading-tight text-navy md:text-6xl">
              Specialized solar engineering expertise from Tunisia.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We are a specialized engineering and consulting center focused on solar photovoltaic
              and energy storage systems. We support developers, companies, and engineers in
              designing, analyzing, and optimizing energy projects.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our mission is to deliver reliable technical studies and practical engineering
              solutions while transferring this expertise through high-quality advanced training.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-sun opacity-30 blur-2xl" />
            <SafeImage
              src="/images/about-consultant.jpg"
              fallbackSrc="/images/fallback-solar.svg"
              alt="Siraj Solar consultant on site"
              width={1280}
              height={1280}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            How we work
          </span>
          <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">
            Principles that guide every project.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-navy text-gold">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-border bg-secondary/40 p-10 md:p-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Target Audience
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
            Built for teams delivering real projects
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {audiences.map((audience) => (
              <div key={audience} className="rounded-xl bg-card px-4 py-3 text-sm text-muted-foreground shadow-card">
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-gradient-navy p-12 text-center shadow-elegant md:p-16">
          <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
            Ready to talk solar?
          </h2>
          <Button
            asChild
            className="mt-8 h-auto rounded-full bg-gradient-sun px-7 py-3.5 text-sm font-semibold text-navy shadow-gold"
          >
            <Link href="/contact">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
