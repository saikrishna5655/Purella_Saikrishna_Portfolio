import React from 'react';
import { Code, Brain, Cloud, BarChart3, Settings, Database } from 'lucide-react';
import { SkillBar } from '../common/SkillBar';
import { portfolioData } from '../../data/portfolio';

export const Skills: React.FC = () => {
  const skillCategories = {
    programming: { icon: <Code size={24} />, title: 'Programming', color: 'blue' },
    ml: { icon: <Brain size={24} />, title: 'Machine Learning', color: 'purple' },
    cloud: { icon: <Cloud size={24} />, title: 'Cloud Platforms', color: 'teal' },
    visualization: { icon: <BarChart3 size={24} />, title: 'Data Visualization', color: 'green' },
    mlops: { icon: <Settings size={24} />, title: 'MLOps & DevOps', color: 'orange' },
    bigdata: { icon: <Database size={24} />, title: 'Big Data', color: 'red' }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
      purple: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20',
      teal: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20',
      green: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
      orange: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20',
      red: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600 dark:text-blue-400',
      purple: 'text-purple-600 dark:text-purple-400',
      teal: 'text-teal-600 dark:text-teal-400',
      green: 'text-green-600 dark:text-green-400',
      orange: 'text-orange-600 dark:text-orange-400',
      red: 'text-red-600 dark:text-red-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive expertise across the data science and AI/ML ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([categoryKey, category]) => {
            const categorySkills = portfolioData.skills.filter(
              skill => skill.category === categoryKey
            );

            return (
              <div
                key={categoryKey}
                className={`p-6 rounded-xl border ${getColorClasses(category.color)} hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center mb-6">
                  <div className={`${getIconColor(category.color)} mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {portfolioData.skills.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Technical Skills</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              3+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {portfolioData.projects.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              95%+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Model Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
};