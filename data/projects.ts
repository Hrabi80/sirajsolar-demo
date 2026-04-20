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
    title: "Coastal Villa Rooftop Array",
    category: "Residential",
    location: "Hammamet, Tunisia",
    capacity: "12 kWp",
    year: "2024",
    image: "/images/project-residential.jpg",
    summary:
      "Custom-designed rooftop installation reducing grid dependency while maintaining visual integration with the villa's modern architecture.",
  },
  {
    slug: "logistics-hub",
    title: "Logistics Hub Solar Canopy",
    category: "Commercial",
    location: "Sousse Industrial Zone, Tunisia",
    capacity: "320 kWp",
    year: "2024",
    image: "/images/project-commercial.jpg",
    summary:
      "Large-scale deployment for a regional logistics operator, delivering measurable operating-cost savings in the first year.",
  },
  {
    slug: "desert-community",
    title: "Off-Grid Community Power",
    category: "Off-Grid",
    location: "Kebili Region, Tunisia",
    capacity: "45 kWp + 120 kWh storage",
    year: "2023",
    image: "/images/project-offgrid.jpg",
    summary:
      "End-to-end feasibility, design, and commissioning for a stand-alone solar plant supplying clean electricity to a remote community.",
  },
  {
    slug: "hybrid-clinic",
    title: "Hybrid System for Private Clinic",
    category: "Hybrid",
    location: "Nabeul, Tunisia",
    capacity: "30 kWp + LiFePO₄",
    year: "2025",
    image: "/images/project-hybrid.jpg",
    summary:
      "Medical-grade hybrid backup solution combining solar generation, lithium storage and seamless grid switching for uninterrupted operations.",
  },
]
