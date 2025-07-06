'use client'

import { useRef } from 'react'
import { Download, Edit, Share2 } from 'lucide-react'
import { ResumeData } from '@/types/resume'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import toast from 'react-hot-toast'

interface ResumePreviewProps {
  data: ResumeData
  template: string
}

export default function ResumePreview({ data, template }: ResumePreviewProps) {
  const resumeRef = useRef<HTMLDivElement>(null)

  const downloadPDF = async () => {
    if (!resumeRef.current) return

    try {
      toast.loading('Generating PDF...')
      
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      })
      
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgWidth = 210
      const pageHeight = 295
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save(`${data.personalInfo.firstName}_${data.personalInfo.lastName}_Resume.pdf`)
      toast.success('PDF downloaded successfully!')
    } catch (error) {
      console.error('Error generating PDF:', error)
      toast.error('Failed to generate PDF')
    }
  }

  const shareResume = () => {
    // Implement sharing functionality
    toast.success('Sharing feature coming soon!')
  }

  const editResume = () => {
    // Implement edit functionality
    toast.success('Edit feature coming soon!')
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  const getTemplateStyles = () => {
    switch (template) {
      case 'modern':
        return 'bg-white text-gray-900 font-sans'
      case 'classic':
        return 'bg-white text-gray-900 font-serif'
      case 'creative':
        return 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 font-sans'
      case 'minimal':
        return 'bg-white text-gray-900 font-sans'
      default:
        return 'bg-white text-gray-900 font-sans'
    }
  }

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Resume Preview</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={editResume}
            className="btn-secondary flex items-center space-x-2"
          >
            <Edit className="w-4 h-4" />
            <span>Edit</span>
          </button>
          <button
            onClick={shareResume}
            className="btn-secondary flex items-center space-x-2"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button
            onClick={downloadPDF}
            className="btn-primary flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div
          ref={resumeRef}
          className={`p-8 ${getTemplateStyles()}`}
          style={{ minHeight: '297mm', width: '210mm' }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {data.personalInfo.firstName} {data.personalInfo.lastName}
            </h1>
            <div className="text-gray-600 space-y-1 text-sm">
              <p>{data.personalInfo.email}</p>
              <p>{data.personalInfo.phone}</p>
              <p>{data.personalInfo.location}</p>
              {data.personalInfo.linkedin && (
                <p>LinkedIn: {data.personalInfo.linkedin}</p>
              )}
              {data.personalInfo.portfolio && (
                <p>Portfolio: {data.personalInfo.portfolio}</p>
              )}
            </div>
          </div>

          {/* Summary */}
          {data.personalInfo.summary && (
            <div className="resume-section">
              <h2 className="resume-section-title">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed text-sm">{data.personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <div className="resume-section">
              <h2 className="resume-section-title">Professional Experience</h2>
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap ml-4">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2 text-sm">{exp.company}, {exp.location}</p>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{exp.description}</p>
                  {exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="leading-relaxed">{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div className="resume-section">
              <h2 className="resume-section-title">Education</h2>
              {data.education.map((edu, index) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap ml-4">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm mb-1">{edu.institution}</p>
                  {edu.gpa && <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-gray-600 text-sm mt-1 ml-4">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="resume-section">
              <h2 className="resume-section-title">Skills</h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {data.skills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 text-sm">{skill.name}</span>
                    <span className="text-gray-600 capitalize text-sm">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <div className="resume-section">
              <h2 className="resume-section-title">Projects</h2>
              {data.projects.map((project, index) => (
                <div key={project.id} className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.name}</h3>
                  <p className="text-gray-700 text-sm mb-2 leading-relaxed">{project.description}</p>
                  <p className="text-gray-600 text-sm">Technologies: {Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies}</p>
                  {(project.link || project.github) && (
                    <div className="flex space-x-4 mt-1">
                      {project.link && (
                        <a href={project.link} className="text-primary-600 text-sm hover:underline">
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} className="text-primary-600 text-sm hover:underline">
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <div className="resume-section">
              <h2 className="resume-section-title">Certifications</h2>
              {data.certifications.map((cert, index) => (
                <div key={cert.id} className="mb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{cert.name}</h3>
                      <p className="text-gray-700 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-600 whitespace-nowrap ml-4">{formatDate(cert.date)}</span>
                  </div>
                  {cert.link && (
                    <a href={cert.link} className="text-primary-600 text-sm hover:underline">
                      Verify Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 