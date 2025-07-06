'use client'

import { useState } from 'react'
import { Eye, Copy, Check } from 'lucide-react'
import { ResumeData } from '@/types/resume'
import { sampleResumes } from '@/data/sampleResumes'
import toast from 'react-hot-toast'

interface SampleResumesProps {
  onUseTemplate: (data: ResumeData) => void
}

export default function SampleResumes({ onUseTemplate }: SampleResumesProps) {
  const [selectedResume, setSelectedResume] = useState<ResumeData | null>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleUseTemplate = (resume: ResumeData) => {
    onUseTemplate(resume)
    toast.success('Template loaded! You can now edit the information.')
  }

  const handleCopyTemplate = async (resume: ResumeData, index: number) => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(resume, null, 2))
      setCopiedIndex(index)
      toast.success('Resume data copied to clipboard!')
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (error) {
      toast.error('Failed to copy to clipboard')
    }
  }

  const getRoleCategory = (resume: ResumeData) => {
    const summary = resume.personalInfo.summary.toLowerCase()
    if (summary.includes('developer') || summary.includes('engineer')) return 'Development'
    if (summary.includes('designer') || summary.includes('ux')) return 'Design'
    if (summary.includes('data') || summary.includes('analyst')) return 'Data Science'
    return 'Other'
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sample ATS-Optimized Resumes</h2>
        <p className="text-gray-600">
          Choose from our professionally crafted resume templates. These resumes are optimized for ATS systems and can be customized to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleResumes.map((resume, index) => (
          <div key={index} className="card hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                {getRoleCategory(resume)}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedResume(selectedResume === resume ? null : resume)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                  title="Preview"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleCopyTemplate(resume, index)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                  title="Copy data"
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {resume.personalInfo.firstName} {resume.personalInfo.lastName}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {resume.experience[0]?.position || 'Professional'}
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>{resume.personalInfo.location}</p>
                <p>{resume.education[0]?.institution || 'Education'}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">Key Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {resume.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {skill.name}
                    </span>
                  ))}
                  {resume.skills.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                      +{resume.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">Experience</h4>
                <div className="space-y-1">
                  {resume.experience.slice(0, 2).map((exp, expIndex) => (
                    <div key={expIndex} className="text-xs text-gray-600">
                      <p className="font-medium">{exp.position}</p>
                      <p>{exp.company}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUseTemplate(resume)}
              className="btn-primary w-full mt-4"
            >
              Use This Template
            </button>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {selectedResume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedResume.personalInfo.firstName} {selectedResume.personalInfo.lastName} - Resume Preview
                </h3>
                <button
                  onClick={() => setSelectedResume(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <div className="bg-white p-6 rounded">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedResume.personalInfo.firstName} {selectedResume.personalInfo.lastName}
                    </h1>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>{selectedResume.personalInfo.email}</p>
                      <p>{selectedResume.personalInfo.phone}</p>
                      <p>{selectedResume.personalInfo.location}</p>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-1">
                      Professional Summary
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedResume.personalInfo.summary}
                    </p>
                  </div>

                  {/* Experience */}
                  {selectedResume.experience.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                        Professional Experience
                      </h2>
                      {selectedResume.experience.map((exp, index) => (
                        <div key={exp.id} className="mb-4">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                            <span className="text-sm text-gray-600">
                              {new Date(exp.startDate).getFullYear()} - {exp.current ? 'Present' : new Date(exp.endDate).getFullYear()}
                            </span>
                          </div>
                          <p className="text-gray-700 font-medium text-sm mb-1">{exp.company}, {exp.location}</p>
                          <p className="text-gray-600 text-sm mb-2">{exp.description}</p>
                          {exp.achievements.length > 0 && (
                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                              {exp.achievements.slice(0, 2).map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills */}
                  {selectedResume.skills.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                        Skills
                      </h2>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedResume.skills.slice(0, 8).map((skill, index) => (
                          <div key={index} className="flex text-sm">
                            <span className="font-medium text-gray-900">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setSelectedResume(null)}
                  className="btn-secondary"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleUseTemplate(selectedResume)
                    setSelectedResume(null)
                  }}
                  className="btn-primary"
                >
                  Use This Template
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 