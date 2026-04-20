import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { EmailMaintenanceLink } from "@/components/email-maintenance-link"
import { buildPageMetadata } from "@/lib/seo"
import { companyDetails, socialLinks } from "@/lib/site"

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
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-3 py-1.5 transition-colors hover:border-gold hover:text-navy"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
