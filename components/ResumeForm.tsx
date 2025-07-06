'use client'

import { useState, useEffect } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { Plus, Trash2, Save } from 'lucide-react'
import { ResumeData, PersonalInfo, Education, Experience, Project, Skill, Certification } from '@/types/resume'

interface ResumeFormProps {
  onSubmit: (data: ResumeData) => void
  isGenerating: boolean
  initialData?: ResumeData | null
}

export default function ResumeForm({ onSubmit, isGenerating, initialData }: ResumeFormProps) {
  const [activeSection, setActiveSection] = useState('personal')
  
  const { register, handleSubmit, control, watch, formState: { errors }, reset } = useForm<ResumeData>({
    defaultValues: {
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        summary: ''
      },
      education: [],
      experience: [],
      projects: [],
      skills: [],
      certifications: []
    }
  })

  const { fields: educationFields, append: appendEducation, remove: removeEducation } = useFieldArray({
    control,
    name: 'education'
  })

  const { fields: experienceFields, append: appendExperience, remove: removeExperience } = useFieldArray({
    control,
    name: 'experience'
  })

  const { fields: projectFields, append: appendProject, remove: removeProject } = useFieldArray({
    control,
    name: 'projects'
  })

  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: 'skills'
  })

  const { fields: certificationFields, append: appendCertification, remove: removeCertification } = useFieldArray({
    control,
    name: 'certifications'
  })

  // Reset form when initialData changes
  useEffect(() => {
    if (initialData) {
      reset(initialData)
    }
  }, [initialData, reset])

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: '👤' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'skills', name: 'Skills', icon: '⚡' },
    { id: 'certifications', name: 'Certifications', icon: '🏆' }
  ]

  const handleFormSubmit = (data: ResumeData) => {
    onSubmit(data)
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Section Navigation */}
        <div className="flex flex-wrap gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveSection(section.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="mr-1">{section.icon}</span>
              {section.name}
            </button>
          ))}
        </div>

        {/* Personal Information */}
        {activeSection === 'personal' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  {...register('personalInfo.firstName', { required: 'First name is required' })}
                  className="input-field"
                  placeholder="John"
                />
                {errors.personalInfo?.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.personalInfo.firstName.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  {...register('personalInfo.lastName', { required: 'Last name is required' })}
                  className="input-field"
                  placeholder="Doe"
                />
                {errors.personalInfo?.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.personalInfo.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  {...register('personalInfo.email', { required: 'Email is required' })}
                  className="input-field"
                  placeholder="john.doe@email.com"
                />
                {errors.personalInfo?.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.personalInfo.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  {...register('personalInfo.phone', { required: 'Phone is required' })}
                  className="input-field"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.personalInfo?.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.personalInfo.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                {...register('personalInfo.location', { required: 'Location is required' })}
                className="input-field"
                placeholder="San Francisco, CA"
              />
              {errors.personalInfo?.location && (
                <p className="text-red-500 text-sm mt-1">{errors.personalInfo.location.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
              <textarea
                {...register('personalInfo.summary', { required: 'Summary is required' })}
                className="input-field"
                rows={4}
                placeholder="Brief professional summary highlighting your key strengths and career objectives..."
              />
              {errors.personalInfo?.summary && (
                <p className="text-red-500 text-sm mt-1">{errors.personalInfo.summary.message}</p>
              )}
            </div>
          </div>
        )}

        {/* Education */}
        {activeSection === 'education' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Education</h3>
              <button
                type="button"
                onClick={() => appendEducation({
                  id: Date.now().toString(),
                  institution: '',
                  degree: '',
                  field: '',
                  startDate: '',
                  endDate: ''
                })}
                className="btn-secondary flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Education</span>
              </button>
            </div>

            {educationFields.map((field, index) => (
              <div key={field.id} className="card border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900">Education #{index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeEducation(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                    <input
                      type="text"
                      {...register(`education.${index}.institution` as const)}
                      className="input-field"
                      placeholder="University Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                    <input
                      type="text"
                      {...register(`education.${index}.degree` as const)}
                      className="input-field"
                      placeholder="Bachelor's"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                    <input
                      type="text"
                      {...register(`education.${index}.field` as const)}
                      className="input-field"
                      placeholder="Computer Science"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">GPA (Optional)</label>
                    <input
                      type="text"
                      {...register(`education.${index}.gpa` as const)}
                      className="input-field"
                      placeholder="3.8/4.0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="month"
                      {...register(`education.${index}.startDate` as const)}
                      className="input-field"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input
                      type="month"
                      {...register(`education.${index}.endDate` as const)}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience */}
        {activeSection === 'experience' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Work Experience</h3>
              <button
                type="button"
                onClick={() => appendExperience({
                  id: Date.now().toString(),
                  company: '',
                  position: '',
                  location: '',
                  startDate: '',
                  endDate: '',
                  current: false,
                  description: '',
                  achievements: [],
                  skills: []
                })}
                className="btn-secondary flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Experience</span>
              </button>
            </div>

            {experienceFields.map((field, index) => (
              <div key={field.id} className="card border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900">Experience #{index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeExperience(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      {...register(`experience.${index}.company` as const)}
                      className="input-field"
                      placeholder="Company Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                    <input
                      type="text"
                      {...register(`experience.${index}.position` as const)}
                      className="input-field"
                      placeholder="Software Engineer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      {...register(`experience.${index}.location` as const)}
                      className="input-field"
                      placeholder="San Francisco, CA"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="month"
                      {...register(`experience.${index}.startDate` as const)}
                      className="input-field"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input
                      type="month"
                      {...register(`experience.${index}.endDate` as const)}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    {...register(`experience.${index}.description` as const)}
                    className="input-field"
                    rows={3}
                    placeholder="Brief description of your role and responsibilities..."
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {activeSection === 'projects' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
              <button
                type="button"
                onClick={() => appendProject({
                  id: Date.now().toString(),
                  name: '',
                  description: '',
                  technologies: []
                })}
                className="btn-secondary flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
            </div>

            {projectFields.map((field, index) => (
              <div key={field.id} className="card border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900">Project #{index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeProject(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                    <input
                      type="text"
                      {...register(`projects.${index}.name` as const)}
                      className="input-field"
                      placeholder="Project Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Technologies</label>
                    <input
                      type="text"
                      {...register(`projects.${index}.technologies` as const)}
                      className="input-field"
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    {...register(`projects.${index}.description` as const)}
                    className="input-field"
                    rows={3}
                    placeholder="Describe the project, your role, and key achievements..."
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {activeSection === 'skills' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
              <button
                type="button"
                onClick={() => appendSkill({
                  name: '',
                  level: 'intermediate',
                  category: 'technical'
                })}
                className="btn-secondary flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Skill</span>
              </button>
            </div>

            {skillFields.map((field, index) => (
              <div key={field.id} className="card border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900">Skill #{index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Skill Name</label>
                    <input
                      type="text"
                      {...register(`skills.${index}.name` as const)}
                      className="input-field"
                      placeholder="JavaScript"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
                    <select
                      {...register(`skills.${index}.level` as const)}
                      className="input-field"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      {...register(`skills.${index}.category` as const)}
                      className="input-field"
                    >
                      <option value="technical">Technical</option>
                      <option value="soft">Soft Skills</option>
                      <option value="language">Language</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {activeSection === 'certifications' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
              <button
                type="button"
                onClick={() => appendCertification({
                  id: Date.now().toString(),
                  name: '',
                  issuer: '',
                  date: ''
                })}
                className="btn-secondary flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Certification</span>
              </button>
            </div>

            {certificationFields.map((field, index) => (
              <div key={field.id} className="card border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900">Certification #{index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeCertification(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Certification Name</label>
                    <input
                      type="text"
                      {...register(`certifications.${index}.name` as const)}
                      className="input-field"
                      placeholder="AWS Certified Solutions Architect"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Organization</label>
                    <input
                      type="text"
                      {...register(`certifications.${index}.issuer` as const)}
                      className="input-field"
                      placeholder="Amazon Web Services"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date Earned</label>
                    <input
                      type="month"
                      {...register(`certifications.${index}.date` as const)}
                      className="input-field"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date (Optional)</label>
                    <input
                      type="month"
                      {...register(`certifications.${index}.expiryDate` as const)}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={isGenerating}
            className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />
            <span>{isGenerating ? 'Generating Resume...' : 'Generate Resume'}</span>
          </button>
        </div>
      </form>
    </div>
  )
} 