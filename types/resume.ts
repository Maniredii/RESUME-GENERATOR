export interface PersonalInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  linkedin?: string
  portfolio?: string
  summary: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa?: string
  achievements?: string[]
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
  achievements: string[]
  skills: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

export interface Skill {
  name: string
  category: 'technical' | 'soft' | 'language' | 'other'
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  expiryDate?: string
  link?: string
}

export interface ResumeData {
  personalInfo: PersonalInfo
  education: Education[]
  experience: Experience[]
  projects: Project[]
  skills: Skill[]
  certifications: Certification[]
  jobDescription?: string
  targetRole?: string
  targetIndustry?: string
}

export interface Template {
  id: string
  name: string
  description: string
  preview: string
  category: 'modern' | 'classic' | 'creative' | 'minimal'
} 