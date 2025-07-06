'use client'

import { useState } from 'react'
import { FileText, Download, Upload, Eye } from 'lucide-react'
import { ResumeData } from '@/types/resume'

interface TemplateGalleryProps {
  onUseTemplate: (data: ResumeData) => void
}

interface TemplateFile {
  name: string
  size: string
  category: string
  description: string
}

const templateFiles: TemplateFile[] = [
  {
    name: 'Industry Manager Resume',
    size: '29KB',
    category: 'Management',
    description: 'Professional resume template for industry managers and executives'
  },
  {
    name: 'Modern Accounting Resume',
    size: '24KB',
    category: 'Finance',
    description: 'Clean and modern template for accounting professionals'
  },
  {
    name: 'Modern Florist Resume',
    size: '24KB',
    category: 'Creative',
    description: 'Beautiful template for creative professionals in floral design'
  },
  {
    name: 'Modern Bold Sales Resume',
    size: '51KB',
    category: 'Sales',
    description: 'Bold and impactful template for sales professionals'
  },
  {
    name: 'Paralegal Resume',
    size: '79KB',
    category: 'Legal',
    description: 'Professional template for legal assistants and paralegals'
  },
  {
    name: 'Social Media Marketing Resume',
    size: '48KB',
    category: 'Marketing',
    description: 'Modern template for social media and marketing professionals'
  },
  {
    name: 'Bold Attorney Resume',
    size: '47KB',
    category: 'Legal',
    description: 'Professional and bold template for attorneys and lawyers'
  },
  {
    name: 'Modern Hospitality Resume',
    size: '49KB',
    category: 'Hospitality',
    description: 'Elegant template for hospitality and service industry professionals'
  },
  {
    name: 'ATS Classic HR Resume',
    size: '49KB',
    category: 'HR',
    description: 'ATS-optimized template for human resources professionals'
  },
  {
    name: 'Color Block Resume',
    size: '127KB',
    category: 'Creative',
    description: 'Creative template with color blocks for modern professionals'
  }
]

export default function TemplateGallery({ onUseTemplate }: TemplateGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const categories = ['all', ...Array.from(new Set(templateFiles.map(t => t.category)))]

  const filteredTemplates = selectedCategory === 'all' 
    ? templateFiles 
    : templateFiles.filter(t => t.category === selectedCategory)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setUploadedFile(file)
      // Here you would process the file using the DocxProcessor
      // For now, we'll just show a success message
      alert('File uploaded successfully! You can now edit the template.')
    } else {
      alert('Please upload a valid DOCX file.')
    }
  }

  const handleUseTemplate = (template: TemplateFile) => {
    // Create a sample resume data based on the template
    const sampleData: ResumeData = {
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        portfolio: '',
        summary: `Professional ${template.category.toLowerCase()} with experience in ${template.category.toLowerCase()} roles.`
      },
      education: [],
      experience: [],
      projects: [],
      skills: [],
      certifications: []
    }
    
    onUseTemplate(sampleData)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Professional Resume Templates
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our collection of professionally designed resume templates. 
          Each template is ATS-optimized and ready to customize with your information.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Upload Section */}
      <div className="card">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Upload Your Own Template
          </h3>
          <p className="text-gray-600 mb-4">
            Have your own DOCX resume template? Upload it and we'll help you customize it.
          </p>
          <label className="btn-secondary inline-flex items-center space-x-2 cursor-pointer">
            <Upload className="w-4 h-4" />
            <span>Upload DOCX Template</span>
            <input
              type="file"
              accept=".docx"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
          {uploadedFile && (
            <p className="text-green-600 text-sm mt-2">
              ✓ {uploadedFile.name} uploaded successfully
            </p>
          )}
        </div>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template, index) => (
          <div key={index} className="card hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                {template.category}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">{template.size}</span>
                <FileText className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {template.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {template.description}
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => handleUseTemplate(template)}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>Use This Template</span>
              </button>
              <button className="btn-secondary w-full flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Template</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="card bg-blue-50 border-blue-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            How to Use Templates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
            <div>
              <div className="font-medium mb-1">1. Choose Template</div>
              <p>Select a template that matches your profession and style preferences.</p>
            </div>
            <div>
              <div className="font-medium mb-1">2. Customize Content</div>
              <p>Fill in your personal information, experience, and skills.</p>
            </div>
            <div>
              <div className="font-medium mb-1">3. Download PDF</div>
              <p>Generate and download your professional ATS-optimized resume.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 