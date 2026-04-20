import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { EmailMaintenanceLink } from "@/components/email-maintenance-link"
import { SafeImage } from "@/components/safe-image"
import { companyDetails, siteConfig, socialLinks } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <SafeImage
            src="/images/siraj-logo-horizontal.png"
            fallbackSrc="/images/fallback-solar.svg"
            alt="Siraj Solar"
            width={260}
            height={56}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-navy-foreground/70">
            {siteConfig.tagline}. We support engineering teams, developers, and companies with
            practical technical studies and project-ready recommendations.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-1.5 text-xs text-navy-foreground/70 transition-colors hover:border-gold hover:text-gold"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Explore</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/70">
            <li>
              <Link href="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gold">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gold">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-navy-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{companyDetails.location}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <EmailMaintenanceLink
                email={companyDetails.email}
                className="text-navy-foreground/70 hover:text-gold"
              />
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{companyDetails.phone}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-navy-foreground/50 md:flex-row">
          <span>© {new Date().getFullYear()} Siraj Solar. All rights reserved.</span>
          <span>Empowering Tunisia with smart, practical solar engineering.</span>
        </div>
      </div>
    </footer>
  )
}
