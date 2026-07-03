export type NavItem = {
  label: string
  path: string
}

export type WorkStage = {
  title: string
  summary: string
  items: string[]
}

export type ServiceCard = {
  title: string
  description?: string
  image: string
}

export type IndustrySolution = {
  title: string
  tagline: string
  image: string
  items: string[]
}

export type DetailedService = {
  eyebrow: string
  title: string
  image: string
  description: string[]
  bullets: string[]
}

export type Stat = {
  value: string
  label: string
}

export type FeatureHighlight = {
  title: string
  description: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export type SeoConfig = {
  title: string
  description: string
  path: string
  keywords: string[]
}
