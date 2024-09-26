"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import experienceData from '@/data/experiences.json'

export function Experience() {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Work Experience</h2>
        <div className="space-y-4">
          {experienceData.map((job, index) => (
            <div 
              key={index} 
              className="relative bg-white dark:bg-gray-700 p-4 rounded-lg shadow transition-all duration-300 ease-in-out hover:shadow-lg"
              onMouseEnter={() => setHoveredJob(index)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image 
                    src={job.logo} 
                    alt={`${job.company} logo`} 
                    width={50} 
                    height={50} 
                    className="rounded-full"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{job.company}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{job.period}</p>
                  </div>
                  <p className="text-md text-gray-700 dark:text-gray-300">{job.position}</p>
                </div>
              </div>
              
              {hoveredJob === index && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg z-10">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mt-4 mb-2 text-gray-800 dark:text-white">Tools:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{job.tools.join(', ')}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}