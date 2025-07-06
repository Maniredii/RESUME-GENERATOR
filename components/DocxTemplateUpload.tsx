'use client'

import { useState, useRef } from 'react'
import toast from 'react-hot-toast'
import DocxProcessor from './DocxProcessor'
import { ResumeData } from '@/types/resume'

interface DocxTemplateUploadProps {
  onTemplateUpload: (file: File) => void
  onTemplateExtracted?: (data: ResumeData) => void
}

export default function DocxTemplateUpload({ onTemplateUpload, onTemplateExtracted }: DocxTemplateUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const { processDocxFile } = DocxProcessor({
    onTemplateExtracted: (data: ResumeData) => {
      if (onTemplateExtracted) {
        onTemplateExtracted(data)
      }
      toast.success('DOCX template processed successfully! Resume data extracted.')
    },
    onError: (error: string) => {
      toast.error(error)
    }
  })

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFile = (file: File) => {
    // Validate file type
    if (file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      toast.error('Please upload a .docx file')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB')
      return
    }

    setUploadedFile(file)
    onTemplateUpload(file)
    
    // Process the DOCX file to extract resume data
    setIsProcessing(true)
    processDocxFile(file).finally(() => {
      setIsProcessing(false)
    })
  }

  const handleRemoveFile = () => {
    setUploadedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="card">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Upload DOCX Resume Template
        </h3>
        <p className="text-gray-600 mb-6">
          Upload your own DOCX resume template to customize the design and layout.
        </p>
      </div>

      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragOver 
            ? 'border-primary-500 bg-primary-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {!uploadedFile ? (
          <div>
            <div className="mb-4">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">
              Drag and drop your DOCX file here, or{' '}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-primary-600 hover:text-primary-500 font-medium"
              >
                choose a file
              </button>
            </p>
            <p className="text-sm text-gray-500">
              Supports .docx files up to 5MB
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="mb-4">
              <p className="text-lg font-medium text-gray-900">{uploadedFile.name}</p>
              <p className="text-sm text-gray-500">{formatFileSize(uploadedFile.size)}</p>
            </div>
            {isProcessing && (
              <div className="mb-4">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600 mr-2"></div>
                  <span className="text-gray-600">Processing template...</span>
                </div>
              </div>
            )}
            <button
              onClick={handleRemoveFile}
              className="btn-secondary"
            >
              Remove File
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">How it works:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Upload your DOCX resume template</li>
          <li>• Our system will extract the text content and structure</li>
          <li>• You can then customize the content while keeping your preferred layout</li>
          <li>• Generate a professional, ATS-optimized resume</li>
        </ul>
      </div>
    </div>
  )
} 