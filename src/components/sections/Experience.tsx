import React from 'react';
import { Calendar, Building, CheckCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My journey in data science and analytics
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                          <Building size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                          {exp.company}
                          {exp.current && (
                            <span className="ml-2 px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                              Current
                            </span>
                          )}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
                          {exp.position}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 flex items-center mt-1">
                          <Calendar size={16} className="mr-2" />
                          {exp.duration}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      {exp.description.map((desc, descIndex) => (
                        <div key={descIndex} className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{desc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};