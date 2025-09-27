import React from 'react';
import { Download, Eye, Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { portfolioData } from '../../data/portfolio';

export const Hero: React.FC = () => {
  const typewriterText = useTypewriter(portfolioData.personalInfo.roles);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {portfolioData.personalInfo.name.split(' ')[1]}
              </span>
            </h1>
            
            <div className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
              <span>I'm a </span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold min-h-[1.5em] inline-block">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              {portfolioData.personalInfo.tagline}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                {portfolioData.personalInfo.location}
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                {portfolioData.personalInfo.email}
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Phone size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                {portfolioData.personalInfo.phone}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <Eye size={20} className="mr-2" />
                View Projects
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <Mail size={20} className="mr-2" />
                Contact Me
              </button>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href={`https://${portfolioData.personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 p-2 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-lg font-medium">
                Professional Photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};