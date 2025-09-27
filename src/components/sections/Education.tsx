import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Learning
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Degree */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 mb-12 shadow-lg">
            <div className="flex items-start">
              <div className="bg-blue-600 p-3 rounded-full mr-6">
                <GraduationCap size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {education.degree}
                </h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {education.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Graduated {education.year}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Relevant Coursework */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen size={24} className="text-teal-600 dark:text-teal-400 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Relevant Coursework
                </h4>
              </div>
              <div className="space-y-3">
                {education.coursework.map((course, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-300">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Projects */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Award size={24} className="text-purple-600 dark:text-purple-400 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Academic Projects
                </h4>
              </div>
              <div className="space-y-3">
                {education.projects.map((project, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-300">{project}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Continuous Learning & Development
            </h4>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Committed to staying current with the latest developments in data science, AI/ML, 
              and cloud technologies through online courses, conferences, and hands-on projects.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                'Machine Learning Specialization',
                'AWS Cloud Practitioner',
                'Advanced Analytics Certification',
                'Deep Learning Fundamentals'
              ].map((cert, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};