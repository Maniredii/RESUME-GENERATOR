'use client'

import { useState } from 'react'
import { FileText, Download, Edit } from 'lucide-react'
import { ResumeData } from '@/types/resume'
import toast from 'react-hot-toast'
import { templateFiles, downloadTemplate, createSampleDataForCategory } from '@/utils/templateUtils'

interface TemplateProcessorProps {
  onTemplateProcessed: (data: ResumeData) => void
}

const availableTemplates = templateFiles

export default function TemplateProcessor({ onTemplateProcessed }: TemplateProcessorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isProcessing, setIsProcessing] = useState(false)

  const categories = ['all', ...Array.from(new Set(availableTemplates.map(t => t.category)))]

  const filteredTemplates = selectedCategory === 'all' 
    ? availableTemplates 
    : availableTemplates.filter(t => t.category === selectedCategory)

  const handleTemplateSelect = async (template: any) => {
    setIsProcessing(true)
    try {
      // Simulate processing the template
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Create sample data based on the template category
      const sampleData: ResumeData = createSampleDataForCategory(template.category)
      
      onTemplateProcessed(sampleData)
      toast.success(`${template.name} template loaded successfully!`)
    } catch (error) {
      console.error('Error processing template:', error)
      toast.error('Failed to process template')
    } finally {
      setIsProcessing(false)
    }
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

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template, index) => (
          <div key={index} className="card hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                {template.category}
              </span>
              <FileText className="w-5 h-5 text-gray-400" />
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
                onClick={() => handleTemplateSelect(template)}
                disabled={isProcessing}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Edit className="w-4 h-4" />
                    <span>Use This Template</span>
                  </>
                )}
              </button>
              <button 
                onClick={() => downloadTemplate(template.fileName)}
                className="btn-secondary w-full flex items-center justify-center space-x-2"
              >
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