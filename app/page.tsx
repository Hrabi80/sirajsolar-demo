import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BatteryCharging,
  Leaf,
  LineChart,
  Sparkles,
  Sun,
  Wrench,
} from "lucide-react"

import { SafeImage } from "@/components/safe-image"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { companyDetails, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: siteConfig.title,
  description:
    "Consulting and advanced training in solar PV and energy systems. Siraj Solar supports developers, engineering teams, and companies with practical technical expertise.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description:
      "Consulting and advanced training in solar PV and energy systems for developers, companies, and engineering teams.",
    url: "/",
    images: [
      {
        url: "/images/hero-solar.jpg",
        alt: "Solar PV panels at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "Consulting and advanced training in solar PV and energy systems for real-world projects.",
    images: ["/images/hero-solar.jpg"],
  },
}

const stats = [
  { value: "120+", label: "Engineers & teams supported" },
  { value: "60+", label: "Technical studies completed" },
  { value: "Tier 1", label: "Industry collaboration focus" },
  { value: "100%", label: "Practical project-oriented approach" },
]

const services = [
  {
    icon: LineChart,
    title: "Solar PV Market Studies",
    description:
      "Market and technical insights to guide investment decisions, project positioning, and execution strategy.",
  },
  {
    icon: Sun,
    title: "Technical Advisory (PV & BESS)",
    description:
      "Independent engineering guidance for utility-scale and C&I systems, including risk review and design validation.",
  },
  {
    icon: BatteryCharging,
    title: "System Sizing & Optimization",
    description:
      "PV, storage, and hybrid sizing using simulation-driven methods to improve performance and project bankability.",
  },
  {
    icon: Wrench,
    title: "Certification Support",
    description:
      "Structured documentation and technical support to help teams meet quality and compliance requirements.",
  },
]

const whyChooseUs = [
  "Industry experience with practical, real-project constraints",
  "Collaboration mindset aligned with Tier 1 quality standards",
  "Practical engineering approach focused on measurable outcomes",
  "Direct involvement in project studies and technical decisions",
  "Up-to-date know-how in PV, BESS, and hybrid system workflows",
]

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Siraj Solar",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/siraj-logo-stacked.png`,
    email: companyDetails.email,
    telephone: companyDetails.phone,
    areaServed: "Tunisia",
    address: companyDetails.location,
    description: siteConfig.description,
    sameAs: [],
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <section className="relative isolate overflow-hidden">
        <SafeImage
          src="/images/hero-solar.jpg"
          fallbackSrc="/images/fallback-solar.svg"
          alt="Vast solar farm at golden hour"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-glow" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-navy/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Solar PV Consulting & Training
          </span>

          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
            Harness the sun.{" "}
            <span className="bg-gradient-sun bg-clip-text text-transparent">Power what&apos;s next.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Siraj Solar is a specialized engineering and consulting center in Hammamet, Tunisia,
            helping teams design, analyze, and optimize solar PV and energy storage projects.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="group h-auto rounded-full bg-gradient-sun px-7 py-3.5 text-sm font-semibold text-navy shadow-gold transition-transform hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Start your solar journey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-full border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 hover:text-white"
            >
              <Link href="/projects">See projects</Link>
            </Button>
          </div>
    {/* Stats Section 
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-navy/30 px-6 py-6 text-center">
                <div className="bg-gradient-sun bg-clip-text font-display text-3xl font-semibold text-transparent md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>*/}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What I do</span>
            <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">
              Consulting and advanced technical training
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            We combine strategic consulting with practical capability building so your internal team
            can execute with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-sun opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-navy text-gold shadow-elegant">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-card md:p-14">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Why teams choose Siraj Solar</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Selected work
              </span>
              <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">Recent projects</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
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
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-navy">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-navy">
                    <Sun className="h-3.5 w-3.5 text-gold" /> {project.capacity}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-navy p-12 text-center shadow-elegant md:p-20">
          <div className="absolute inset-0 bg-gradient-glow" />
          <div className="relative">
            <Leaf className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-5 text-balance text-4xl font-semibold text-white md:text-5xl">
              Let&apos;s design your solar future.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Book a free 30-minute consultation. We&apos;ll discuss your goals, site, and the
              smartest path to clean power.
            </p>
            <Button
              asChild
              className="mt-9 h-auto rounded-full bg-gradient-sun px-8 py-4 text-sm font-semibold text-navy shadow-gold transition-transform hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Schedule a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
