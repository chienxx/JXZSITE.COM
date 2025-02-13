'use client'

import { useState } from 'react'
import toolsData from '@/data/toolsData'
import InteractiveCard from '@/components/InteractiveCard'

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState('iOS')

  const filteredTools = toolsData.filter(tool => tool.category === activeTab)

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14">
          Tools
        </h1>
        <p className="mt-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
          Some tools I use on a daily basis 🛠
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mx-2 font-semibold rounded-lg transition-colors duration-300 ${
            activeTab === 'iOS'
              ? 'bg-teal-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
          }`}
          onClick={() => setActiveTab('iOS')}
        >
          iOS
        </button>
        <button
          className={`px-4 py-2 mx-2 font-semibold rounded-lg transition-colors duration-300 ${
            activeTab === 'macOS'
              ? 'bg-teal-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
          }`}
          onClick={() => setActiveTab('macOS')}
        >
          macOS
        </button>
        <button
          className={`px-4 py-2 mx-2 font-semibold rounded-lg transition-colors duration-300 ${
            activeTab === 'Web'
              ? 'bg-teal-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
          }`}
          onClick={() => setActiveTab('Web')}
        >
          Web
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <InteractiveCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            imgSrc={tool.imgSrc}
            href={tool.href}
          />
        ))}
      </div>
    </div>
  )
}


