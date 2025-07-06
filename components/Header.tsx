'use client'

import { FileText, Sparkles, Download } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Resume Generator</h1>
              <p className="text-sm text-gray-600">AI-Powered ATS Optimization</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Sparkles className="w-4 h-4" />
              <span>AI Enhanced</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Download className="w-4 h-4" />
              <span>PDF Export</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 