export interface Experience {
  role: string
  company: string
  period: string
  bullets: string[]
  tags: string[]
}

export interface Project {
  num: string
  category: string
  icon: string
  name: string
  desc: string
  stack: string[]
  link?: string
  linkLabel?: string
  note?: string
  featured?: boolean
}

export interface Certificate {
  icon: string
  name: string
  date: string
}

export interface ContactItem {
  icon: string
  label: string
  value: string
  href: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface OpenSourceBadge {
  title: string
  icon: string
  // optional image path (prefer placing originals in /public/badges/)
  image?: string
  link: string
}
