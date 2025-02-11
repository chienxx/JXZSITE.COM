'use client'

import { useState } from 'react'
import appsData from '@/data/appsData'
import InteractiveCard from '@/components/InteractiveCard'

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState('tech')

  const filteredApps = appsData.filter(app => app.category === activeTab)

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14">
          My Favorite Apps
        </h1>
        <p className="mt-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
          Discover the tools and apps I use daily
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mx-2 font-semibold rounded-lg transition-colors duration-300 ${
            activeTab === 'tech'
              ? 'bg-teal-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
          }`}
          onClick={() => setActiveTab('tech')}
        >
          Tech
        </button>
        <button
          className={`px-4 py-2 mx-2 font-semibold rounded-lg transition-colors duration-300 ${
            activeTab === 'life'
              ? 'bg-teal-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
          }`}
          onClick={() => setActiveTab('life')}
        >
          Life
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredApps.map((app) => (
          <InteractiveCard
            key={app.title}
            title={app.title}
            description={app.description}
            imgSrc={app.imgSrc}
            href={app.href}
          />
        ))}
      </div>
    </div>
  )
}


