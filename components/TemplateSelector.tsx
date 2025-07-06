'use client'

import { useState } from 'react'
import { Template } from '@/types/resume'

interface TemplateSelectorProps {
  selectedTemplate: string
  onTemplateChange: (template: string) => void
}

const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and professional design with modern typography',
    preview: 'Modern template preview',
    category: 'modern'
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional layout with timeless appeal',
    preview: 'Classic template preview',
    category: 'classic'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Unique design for creative professionals',
    preview: 'Creative template preview',
    category: 'creative'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple and clean with focus on content',
    preview: 'Minimal template preview',
    category: 'minimal'
  }
]

export default function TemplateSelector({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Choose Template</h3>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedTemplate === template.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onTemplateChange(template.id)}
          >
            <div className="text-center">
              <div className={`w-16 h-20 mx-auto mb-2 rounded border-2 ${
                selectedTemplate === template.id
                  ? 'border-primary-500 bg-primary-100'
                  : 'border-gray-300 bg-gray-50'
              }`}>
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                  {template.name}
                </div>
              </div>
              <h4 className="font-medium text-gray-900">{template.name}</h4>
              <p className="text-xs text-gray-600 mt-1">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 