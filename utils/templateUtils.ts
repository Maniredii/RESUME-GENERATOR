import { ResumeData } from '@/types/resume'

export interface TemplateFile {
  name: string
  category: string
  description: string
  fileName: string
}

export const templateFiles: TemplateFile[] = [
  {
    name: 'Industry Manager Resume',
    category: 'Management',
    description: 'Professional template for industry managers and executives',
    fileName: 'Industry manager resume.docx'
  },
  {
    name: 'Modern Accounting Resume',
    category: 'Finance',
    description: 'Clean and modern template for accounting professionals',
    fileName: 'Modern accounting resume.docx'
  },
  {
    name: 'Modern Florist Resume',
    category: 'Creative',
    description: 'Beautiful template for creative professionals in floral design',
    fileName: 'Modern florist resume.docx'
  },
  {
    name: 'Modern Bold Sales Resume',
    category: 'Sales',
    description: 'Bold and impactful template for sales professionals',
    fileName: 'Modern bold sales resume.docx'
  },
  {
    name: 'Paralegal Resume',
    category: 'Legal',
    description: 'Professional template for legal assistants and paralegals',
    fileName: 'Paralegal resume.docx'
  },
  {
    name: 'Social Media Marketing Resume',
    category: 'Marketing',
    description: 'Modern template for social media and marketing professionals',
    fileName: 'Social media marketing resume.docx'
  },
  {
    name: 'Bold Attorney Resume',
    category: 'Legal',
    description: 'Professional and bold template for attorneys and lawyers',
    fileName: 'Bold attorney resume.docx'
  },
  {
    name: 'Modern Hospitality Resume',
    category: 'Hospitality',
    description: 'Elegant template for hospitality and service industry professionals',
    fileName: 'Modern hospitality resume.docx'
  },
  {
    name: 'ATS Classic HR Resume',
    category: 'HR',
    description: 'ATS-optimized template for human resources professionals',
    fileName: 'ATS classic HR resume.docx'
  },
  {
    name: 'Color Block Resume',
    category: 'Creative',
    description: 'Creative template with color blocks for modern professionals',
    fileName: 'Color block resume.docx'
  }
]

export const downloadTemplate = async (fileName: string) => {
  try {
    // Create a download link for the template file
    const link = document.createElement('a')
    link.href = `/sample-resumes/${fileName}`
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Error downloading template:', error)
    throw new Error('Failed to download template')
  }
}

export const createSampleDataForCategory = (category: string): ResumeData => {
  const baseData: ResumeData = {
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      portfolio: '',
      summary: ''
    },
    education: [],
    experience: [],
    projects: [],
    skills: [],
    certifications: []
  }

  // Add category-specific sample data
  switch (category.toLowerCase()) {
    case 'management':
      baseData.personalInfo.summary = 'Experienced industry manager with proven track record in operations management, team leadership, and strategic planning. Skilled in process optimization and driving organizational growth.'
      baseData.skills = [
        { name: 'Strategic Planning', category: 'technical' },
        { name: 'Team Leadership', category: 'soft' },
        { name: 'Operations Management', category: 'technical' },
        { name: 'Project Management', category: 'technical' },
        { name: 'Communication', category: 'soft' },
        { name: 'Problem Solving', category: 'soft' }
      ]
      break
    case 'finance':
      baseData.personalInfo.summary = 'Detail-oriented accounting professional with expertise in financial reporting, budgeting, and compliance. Strong analytical skills and experience with accounting software.'
      baseData.skills = [
        { name: 'Financial Reporting', category: 'technical' },
        { name: 'Budgeting', category: 'technical' },
        { name: 'QuickBooks', category: 'technical' },
        { name: 'Excel', category: 'technical' },
        { name: 'Attention to Detail', category: 'soft' },
        { name: 'Analytical Thinking', category: 'soft' }
      ]
      break
    case 'creative':
      baseData.personalInfo.summary = 'Creative professional with passion for design and artistic expression. Experienced in visual design, creative direction, and bringing innovative ideas to life.'
      baseData.skills = [
        { name: 'Adobe Creative Suite', category: 'technical' },
        { name: 'Design Thinking', category: 'technical' },
        { name: 'Creativity', category: 'soft' },
        { name: 'Visual Communication', category: 'technical' },
        { name: 'Project Management', category: 'technical' },
        { name: 'Collaboration', category: 'soft' }
      ]
      break
    case 'sales':
      baseData.personalInfo.summary = 'Results-driven sales professional with proven ability to exceed targets and build lasting client relationships. Strong negotiation skills and experience in consultative selling.'
      baseData.skills = [
        { name: 'Sales Management', category: 'technical' },
        { name: 'CRM Systems', category: 'technical' },
        { name: 'Negotiation', category: 'soft' },
        { name: 'Client Relations', category: 'soft' },
        { name: 'Lead Generation', category: 'technical' },
        { name: 'Communication', category: 'soft' }
      ]
      break
    case 'legal':
      baseData.personalInfo.summary = 'Legal professional with strong research and analytical skills. Experienced in legal document preparation, case management, and client support.'
      baseData.skills = [
        { name: 'Legal Research', category: 'technical' },
        { name: 'Document Preparation', category: 'technical' },
        { name: 'Case Management', category: 'technical' },
        { name: 'Analytical Thinking', category: 'soft' },
        { name: 'Attention to Detail', category: 'soft' },
        { name: 'Communication', category: 'soft' }
      ]
      break
    case 'marketing':
      baseData.personalInfo.summary = 'Digital marketing professional with expertise in social media strategy, content creation, and brand development. Data-driven approach to marketing campaigns.'
      baseData.skills = [
        { name: 'Social Media Marketing', category: 'technical' },
        { name: 'Content Creation', category: 'technical' },
        { name: 'Analytics', category: 'technical' },
        { name: 'Brand Development', category: 'technical' },
        { name: 'Creative Strategy', category: 'soft' },
        { name: 'Communication', category: 'soft' }
      ]
      break
    case 'hospitality':
      baseData.personalInfo.summary = 'Hospitality professional with passion for exceptional guest service and operational excellence. Experienced in team management and creating memorable guest experiences.'
      baseData.skills = [
        { name: 'Guest Service', category: 'technical' },
        { name: 'Operations Management', category: 'technical' },
        { name: 'Team Leadership', category: 'soft' },
        { name: 'Problem Solving', category: 'soft' },
        { name: 'Communication', category: 'soft' },
        { name: 'Attention to Detail', category: 'soft' }
      ]
      break
    case 'hr':
      baseData.personalInfo.summary = 'Human Resources professional with expertise in recruitment, employee relations, and HR policy development. Strong interpersonal skills and experience in talent management.'
      baseData.skills = [
        { name: 'Recruitment', category: 'technical' },
        { name: 'Employee Relations', category: 'technical' },
        { name: 'HR Policies', category: 'technical' },
        { name: 'Talent Management', category: 'technical' },
        { name: 'Interpersonal Skills', category: 'soft' },
        { name: 'Communication', category: 'soft' }
      ]
      break
    default:
      baseData.personalInfo.summary = 'Professional with experience in various roles and industries. Skilled in problem-solving, communication, and achieving organizational goals.'
      baseData.skills = [
        { name: 'Project Management', category: 'technical' },
        { name: 'Communication', category: 'soft' },
        { name: 'Problem Solving', category: 'soft' },
        { name: 'Leadership', category: 'soft' },
        { name: 'Analytical Thinking', category: 'soft' },
        { name: 'Teamwork', category: 'soft' }
      ]
  }

  return baseData
} 