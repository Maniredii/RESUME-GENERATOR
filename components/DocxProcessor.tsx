'use client'

import { useState } from 'react'
import { ResumeData } from '@/types/resume'

interface DocxProcessorProps {
  onTemplateExtracted: (data: ResumeData) => void
  onError: (error: string) => void
}

export default function DocxProcessor({ onTemplateExtracted, onError }: DocxProcessorProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  const processDocxFile = async (file: File) => {
    setIsProcessing(true)
    
    try {
      // Simulate DOCX processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Extract text content from DOCX (this would be implemented with a library like mammoth.js)
      const textContent = await extractTextFromDocx(file)
      
      // Parse the extracted text to identify resume sections
      const resumeData = parseResumeFromText(textContent)
      
      onTemplateExtracted(resumeData)
    } catch (error) {
      onError('Failed to process DOCX file. Please ensure it\'s a valid resume template.')
    } finally {
      setIsProcessing(false)
    }
  }

  const extractTextFromDocx = async (file: File): Promise<string> => {
    // This is a placeholder implementation
    // In a real application, you would use a library like mammoth.js
    // to extract text content from DOCX files
    
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = () => {
        // For now, we'll return a sample text structure
        // In production, this would parse the actual DOCX content
        resolve(`
          JOHN DOE
          Software Developer
          john.doe@email.com | (555) 123-4567 | linkedin.com/in/johndoe
          
          PROFESSIONAL SUMMARY
          Experienced software developer with 5+ years in web development.
          
          WORK EXPERIENCE
          Senior Developer | Tech Company | 2020-2023
          - Developed web applications using React and Node.js
          - Led team of 3 developers
          
          Junior Developer | Startup Inc | 2018-2020
          - Built responsive websites
          - Collaborated with design team
          
          EDUCATION
          Bachelor of Computer Science | University Name | 2018
          
          SKILLS
          JavaScript, React, Node.js, Python, SQL
          
          PROJECTS
          E-commerce Platform | React, Node.js, MongoDB
          - Built full-stack e-commerce solution
          - Implemented payment processing
        `)
      }
      reader.readAsText(file)
    })
  }

  const parseResumeFromText = (text: string): ResumeData => {
    // Parse the extracted text to identify resume sections
    // This is a simplified parser - in production, you'd want more sophisticated parsing
    
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0)
    
    const resumeData: ResumeData = {
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
      skills: [],
      projects: [],
      certifications: []
    }

    let currentSection = ''
    
    for (const line of lines) {
      if (line.match(/^[A-Z\s]+$/)) {
        // Likely a section header
        currentSection = line.toLowerCase()
        continue
      }
      
      if (currentSection.includes('summary')) {
        if (!resumeData.personalInfo.summary) {
          resumeData.personalInfo.summary = line
        }
      } else if (currentSection.includes('experience')) {
        // Parse experience entries
        if (line.includes('|')) {
          const parts = line.split('|').map(part => part.trim())
          if (parts.length >= 3) {
            resumeData.experience.push({
              id: `exp-${Date.now()}-${Math.random()}`,
              company: parts[1],
              position: parts[0],
              location: '',
              startDate: parts[2].split('-')[0] || '',
              endDate: parts[2].split('-')[1] || '',
              current: false,
              description: '',
              achievements: [],
              skills: []
            })
          }
        }
      } else if (currentSection.includes('education')) {
        // Parse education entries
        if (line.includes('|')) {
          const parts = line.split('|').map(part => part.trim())
          if (parts.length >= 3) {
            resumeData.education.push({
              id: `edu-${Date.now()}-${Math.random()}`,
              institution: parts[1],
              degree: parts[0],
              field: '',
              startDate: parts[2],
              endDate: parts[2],
              gpa: '',
              achievements: []
            })
          }
        }
      } else if (currentSection.includes('skills')) {
        // Parse skills
        const skillNames = line.split(',').map(skill => skill.trim())
        skillNames.forEach(skillName => {
          resumeData.skills.push({
            name: skillName,
            category: 'technical'
          })
        })
      } else if (currentSection.includes('projects')) {
        // Parse projects
        if (line.includes('|')) {
          const parts = line.split('|').map(part => part.trim())
          if (parts.length >= 2) {
            resumeData.projects.push({
              id: `proj-${Date.now()}-${Math.random()}`,
              name: parts[0],
              description: '',
              technologies: parts[1].split(',').map(tech => tech.trim()),
              link: '',
              github: ''
            })
          }
        }
      } else {
        // Try to parse personal info from the first few lines
        if (!resumeData.personalInfo.firstName && line.match(/^[A-Z\s]+$/)) {
          const nameParts = line.split(' ')
          resumeData.personalInfo.firstName = nameParts[0] || ''
          resumeData.personalInfo.lastName = nameParts.slice(1).join(' ') || ''
        } else if (line.includes('@')) {
          resumeData.personalInfo.email = line
        } else if (line.includes('(') && line.includes(')')) {
          resumeData.personalInfo.phone = line
        }
      }
    }

    return resumeData
  }

  return {
    processDocxFile,
    isProcessing
  }
} 