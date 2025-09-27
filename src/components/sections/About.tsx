import React from 'react';
import { Award, Target, TrendingUp, Users } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const About: React.FC = () => {
  const achievements = [
    {
      icon: <Users size={24} />,
      title: 'Healthcare Analytics',
      description: 'Led initiatives serving 100K+ patients'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Predictive Accuracy',
      description: 'Developed models with 95%+ accuracy'
    },
    {
      icon: <Award size={24} />,
      title: 'Automation Impact',
      description: 'Saved 20+ hours weekly through dashboards'
    },
    {
      icon: <Target size={24} />,
      title: 'International Collaboration',
      description: 'Worked with German research teams'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about transforming data into actionable insights through advanced analytics and AI/ML solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {portfolioData.about.summary}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Core Competencies
              </h3>
              <div className="space-y-3">
                {[
                  'Advanced Statistical Analysis & Machine Learning',
                  'Healthcare Data Analytics & Business Intelligence',
                  'Cloud-Based Solution Architecture',
                  'Cross-functional Team Leadership'
                ].map((competency, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{competency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};