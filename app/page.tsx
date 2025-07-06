'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import Header from '@/components/Header'
import ResumeForm from '@/components/ResumeForm'
import ResumePreview from '@/components/ResumePreview'
import TemplateSelector from '@/components/TemplateSelector'
import SampleResumes from '@/components/SampleResumes'
import DocxTemplateUpload from '@/components/DocxTemplateUpload'
import TemplateProcessor from '@/components/TemplateProcessor'
import { ResumeData } from '@/types/resume'

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState('modern')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showSamples, setShowSamples] = useState(false)
  const [showDocxUpload, setShowDocxUpload] = useState(false)

  const handleGenerateResume = async (data: ResumeData) => {
    setIsGenerating(true)
    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      setResumeData(data)
    } catch (error) {
      console.error('Error generating resume:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleUseSampleTemplate = (data: ResumeData) => {
    setResumeData(data)
    setShowSamples(false)
  }

  const handleDocxTemplateUpload = (file: File) => {
    // Handle DOCX template upload
    console.log('DOCX template uploaded:', file.name)
    // Here you would typically process the DOCX file and extract template data
    toast.success('DOCX template processed successfully!')
  }

  const handleDocxTemplateExtracted = (data: ResumeData) => {
    // Populate the form with extracted data
    setResumeData(data)
    setShowDocxUpload(false)
    toast.success('Resume data extracted from DOCX template! You can now edit the information.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {showSamples ? (
          <SampleResumes onUseTemplate={handleUseSampleTemplate} />
        ) : showDocxUpload ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Upload DOCX Template
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Upload your own DOCX resume template to customize the design and layout.
              </p>
              <button
                onClick={() => setShowDocxUpload(false)}
                className="btn-secondary text-lg px-8 py-3"
              >
                ← Back to Main
              </button>
            </div>
            <DocxTemplateUpload 
              onTemplateUpload={handleDocxTemplateUpload}
              onTemplateExtracted={handleDocxTemplateExtracted}
            />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                AI-Powered Resume Generator
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Create professional, ATS-optimized resumes with our intelligent resume builder. 
                Choose from templates, upload your own DOCX, or start from scratch with AI-powered suggestions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowSamples(true)}
                  className="btn-primary text-lg px-8 py-3"
                >
                  Browse Sample Resumes
                </button>
                <button
                  onClick={() => setShowDocxUpload(true)}
                  className="btn-secondary text-lg px-8 py-3"
                >
                  Upload DOCX Template
                </button>
                <button
                  onClick={() => {
                    setShowSamples(false)
                    setShowDocxUpload(false)
                  }}
                  className="btn-secondary text-lg px-8 py-3"
                >
                  Start from Scratch
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Panel - Form */}
              <div className="space-y-6">
                <div className="card">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Create Your Resume
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill in your details and our AI will generate an ATS-optimized resume for you.
                  </p>
                  
                  <TemplateSelector 
                    selectedTemplate={selectedTemplate}
                    onTemplateChange={setSelectedTemplate}
                  />
                </div>

                <ResumeForm 
                  onSubmit={handleGenerateResume}
                  isGenerating={isGenerating}
                  initialData={resumeData}
                />
              </div>

              {/* Right Panel - Preview */}
              <div className="space-y-6">
                <div className="card">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Resume Preview
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Preview your generated resume before downloading.
                  </p>
                </div>

                {isGenerating && (
                  <div className="card">
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Generating your ATS-optimized resume...</p>
                      </div>
                    </div>
                  </div>
                )}

                {resumeData && !isGenerating && (
                  <ResumePreview 
                    data={resumeData}
                    template={selectedTemplate}
                  />
                )}

                {!resumeData && !isGenerating && (
                  <div className="card">
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center text-gray-500">
                        <p>Your resume preview will appear here</p>
                        <p className="text-sm mt-2">Fill out the form and click "Generate Resume"</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Template Gallery Section */}
            <div className="mt-16">
              <TemplateProcessor onTemplateProcessed={handleUseSampleTemplate} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
} 