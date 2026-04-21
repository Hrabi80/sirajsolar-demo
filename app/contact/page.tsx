import type { Metadata } from "next"
import type { SVGProps } from "react"
import { Link2, Mail, MapPin, Phone } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { EmailMaintenanceLink } from "@/components/email-maintenance-link"
import { buildPageMetadata } from "@/lib/seo"
import { companyDetails, socialLinks } from "@/lib/site"

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.09h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.617H16.56V24h6.115C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
    </svg>
  )
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.781 13.019H3.555V9h3.563v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C8.74 0 8.333.014 7.053.072 5.775.13 4.905.333 4.143.63a7.2 7.2 0 0 0-2.6 1.69A7.2 7.2 0 0 0 .63 4.143c-.297.762-.5 1.632-.558 2.91C.014 8.333 0 8.74 0 12c0 3.259.014 3.667.072 4.947.058 1.278.261 2.148.558 2.91a7.2 7.2 0 0 0 1.69 2.6 7.2 7.2 0 0 0 2.6 1.69c.762.297 1.632.5 2.91.558C8.333 23.986 8.74 24 12 24c3.259 0 3.667-.014 4.947-.072 1.278-.058 2.148-.261 2.91-.558a7.2 7.2 0 0 0 2.6-1.69 7.2 7.2 0 0 0 1.69-2.6c.297-.762.5-1.632.558-2.91.058-1.28.072-1.688.072-4.947 0-3.26-.014-3.667-.072-4.947-.058-1.278-.261-2.148-.558-2.91a7.2 7.2 0 0 0-1.69-2.6 7.2 7.2 0 0 0-2.6-1.69c-.762-.297-1.632-.5-2.91-.558C15.667.014 15.259 0 12 0zm0 2.162c3.204 0 3.584.012 4.849.07 1.17.053 1.805.249 2.227.414.558.217.956.477 1.374.895.418.418.678.816.895 1.374.165.422.36 1.057.414 2.227.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.053 1.17-.249 1.805-.414 2.227a5.04 5.04 0 0 1-.895 1.374 5.04 5.04 0 0 1-1.374.895c-.422.165-1.057.36-2.227.414-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.053-1.805-.249-2.227-.414a5.04 5.04 0 0 1-1.374-.895 5.04 5.04 0 0 1-.895-1.374c-.165-.422-.36-1.057-.414-2.227-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.053-1.17.249-1.805.414-2.227.217-.558.477-.956.895-1.374.418-.418.816-.678 1.374-.895.422-.165 1.057-.36 2.227-.414 1.265-.058 1.645-.07 4.849-.07zm0 3.676a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-10.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  )
}

const socialIcons = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
} as const

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Siraj Solar in Hammamet, Tunisia for PV and BESS consulting or advanced online training.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 md:grid-cols-2 md:items-start">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Get in touch
          </span>
          <h1 className="mt-3 text-balance text-5xl font-semibold leading-tight text-navy md:text-6xl">
            Let&apos;s plan your next solar project.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Share your goals and context. We&apos;ll reply with the right path for consulting,
            technical studies, or advanced online training.
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-navy text-gold">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-navy">Location</div>
                <div className="text-muted-foreground">{companyDetails.location}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-navy text-gold">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-navy">Email</div>
                <EmailMaintenanceLink
                  email={companyDetails.email}
                  className="text-muted-foreground hover:text-navy"
                />
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-navy text-gold">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-navy">Phone</div>
                <div className="text-muted-foreground">{companyDetails.phone}</div>
              </div>
            </li>
          </ul>

          <div className="mt-8 text-sm">
            <p className="font-semibold text-navy">Social Media</p>
            <div className="mt-2 flex gap-3 text-muted-foreground">
              {socialLinks.map((social) => (
                (() => {
                  const Icon = socialIcons[social.label as keyof typeof socialIcons] ?? Link2

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-gold hover:text-navy"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  )
                })()
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
