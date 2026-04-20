import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BrainCircuit,
  Cog,
  Laptop,
  LineChart,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Siraj Solar services include PV market studies, technical advisory for PV and BESS, system sizing and optimization, certification support, and advanced online training.",
  path: "/services",
})

const services = [
  {
    icon: LineChart,
    title: "Solar PV Market Studies",
    text: "Technical and market studies to help developers and companies evaluate opportunity, risk, and project viability.",
  },
  {
    icon: Sun,
    title: "Technical Advisory (PV & BESS)",
    text: "Specialized consulting for PV plants and battery energy storage systems from concept to design review and optimization.",
  },
  {
    icon: Cog,
    title: "System Sizing & Optimization",
    text: "Simulation-backed sizing for PV, BESS, and hybrid systems to improve yield, reliability, and long-term performance.",
  },
  {
    icon: BadgeCheck,
    title: "Certification Support",
    text: "Technical documentation and advisory support to align projects with quality and compliance requirements.",
  },
]

const trainings = [
  {
    icon: BookOpenCheck,
    title: "PV System Design for Utility-Scale and C&I",
    description:
      "Hands-on training focused on practical design workflows, key assumptions, and technical checks for real projects.",
    duration: "12 hours",
    level: "Advanced",
    format: "Online",
  },
  {
    icon: BrainCircuit,
    title: "BESS Integration and Sizing",
    description:
      "Technical training on battery sizing logic, dispatch strategy basics, and integration with PV and grid interaction.",
    duration: "8 hours",
    level: "Advanced",
    format: "Online",
  },
  {
    icon: Laptop,
    title: "Hybrid Systems Simulation Bootcamp",
    description:
      "Applied session covering PV + storage + grid scenarios and interpreting simulation outputs for design decisions.",
    duration: "6 hours",
    level: "Beginner to Advanced",
    format: "Online",
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Services</span>
          <h1 className="mt-3 max-w-3xl text-balance text-5xl font-semibold leading-tight md:text-6xl">
            Consulting and advanced training for solar energy systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            We support developers, engineering teams, and manufacturers with expert consulting in
            PV, BESS, and hybrid systems, plus practical online technical training.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            A. Consulting Services
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
            Practical technical support for real projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-navy text-gold">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            B. Advanced Training
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
            Online programs built for technical autonomy
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {trainings.map((training) => (
              <div key={training.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-navy text-gold">
                  <training.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{training.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{training.description}</p>
                <div className="mt-5 space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-navy">Duration:</span>{" "}
                    <span className="text-muted-foreground">{training.duration}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-navy">Level:</span>{" "}
                    <span className="text-muted-foreground">{training.level}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-navy">Format:</span>{" "}
                    <span className="text-muted-foreground">{training.format}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl bg-secondary/60 p-10 text-center md:p-14">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Not sure where to start?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a quick discovery call and we&apos;ll map the right consulting scope or training path
            for your team.
          </p>
          <Button
            asChild
            className="mt-8 h-auto rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-navy-foreground shadow-elegant transition-opacity hover:opacity-90"
          >
            <Link href="/contact">
              Book a discovery call <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
