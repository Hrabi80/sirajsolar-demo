export type Project = {
  slug: string
  title: string
  category: string
  location: string
  capacity: string
  year: string
  image: string
  summary: string
}

export const projects: Project[] = [
  {
    slug: "muscat-villa",
    title: "Ground-mounted utility-scale",
    category: "Utility-Scale",
    location: "Abidjan, Ivory Coast",
    capacity: "1 MWp",
    year: "2026",
    image: "/images/GROUND-MOUNT.jpg",
    summary:
      "Grid-Tied PV Power Plant: Site layout,O&M access planning, PV mounting structures, technical room configuration, and power conversion chain.",
  },
  {
    slug: "logistics-hub",
    title: "Grid-Tied utility-scale Project",
    category: "Utility-Scale",
    location: "Nefta, Tunisia",
    capacity: "33 kV MV Network.",
    year: "2025",
    image: "/images/solar.png",
    summary:
      "Grid-Tied Project – Grid Code Compliant Grid Connection: STEG – 33 kV MV Network. Designed for high-ambient temperature performance and desert soil conditions",
  },
  {
    slug: "desert-community",
    title: "SOLAR INDUSTRIAL & COMMERCIAL",
    category: "Industrial",
    location: "Montpellier, France",
    capacity: "376 kWp",
    year: "2025",
    image: "/images/off-grid.webp",
    summary:
      "Technical design and site layout featuring single-axis tracker systems. Scope includes, optimized electrical architecture for grid integration, and comprehensive performance simulations to ensure peak efficiency.",
  },
  {
    slug: "BESS",
    title: "BATTERY ENERGY STORAGE SYSTEMS (BESS)",
    category: "BESS",
    location: "Dakar, Senegal",
    capacity: "2.5 MWp PV + 2 MWh BESS",
    year: "2024",
    image: "/images/project-hybrid.webp",
    summary:
      "Off-Grid PV Plant: Site layout and mounting design with integrated BESS for industrial load support. Includes full power conversion chain and technical room engineering.",
  },
]
