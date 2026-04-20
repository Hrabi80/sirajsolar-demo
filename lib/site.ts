export const siteConfig = {
  name: "Siraj Solar",
  title: "Siraj Solar — Consulting & Advanced Training in Solar PV and Energy Systems",
  description:
    "Siraj Solar delivers expert consulting and advanced online training in solar PV, BESS, and hybrid energy systems for developers, companies, and engineering teams.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://sirajsolar.com"),
  ogImage: "/images/hero-solar.jpg",
  tagline: "Consulting & Advanced Training in Solar PV and Energy Systems",
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const

export const companyDetails = {
  location: "Hammamet, Tunisia",
  email: "contact@sirajsolar.com",
  phone: "+216 94 313 636",
}

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
] as const
