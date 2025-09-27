import React from 'react';
import { Download, Eye, Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { portfolioData } from '../../data/portfolio';
import profileImage from './profile.png';

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
      <div className="container-responsive py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {portfolioData.personalInfo.name.split(' ')[1]}
              </span>
            </h1>
            
            <div className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              <span>I'm a </span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold min-h-[1.5em] inline-block">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="mt-6 text-base text-gray-600 dark:text-gray-300 max-w-2xl">
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
                className="btn btn-primary"
              >
                <Eye size={20} className="mr-2" />
                View Projects
              </button>
              <button 
                className="btn btn-secondary"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
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
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Saikrishna Purella"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};