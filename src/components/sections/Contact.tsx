import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import getInTouchImage from './getintouch.png';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: portfolioData.personalInfo.email,
      link: `mailto:${portfolioData.personalInfo.email}`
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: portfolioData.personalInfo.phone,
      link: `tel:${portfolioData.personalInfo.phone}`
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: portfolioData.personalInfo.location,
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-responsive">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and exciting data science projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Get in Touch Image Column */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-full max-w-md">
                  <img 
                    src={getInTouchImage} 
                    alt="Get in Touch"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Contact Details Column */}
              <div className="text-center lg:text-left">
                <div className="mb-8">
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Ready to turn your data into actionable insights? Let's discuss how my expertise 
                    in data analytics and AI/ML can help drive your business forward.
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center transform hover:scale-[1.02] transition-transform">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4">
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability Status */}
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-8">
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-800 dark:text-green-200 font-medium">
                      Available for new opportunities
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a
                    href={`https://${portfolioData.personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} className="text-white" />
                  </a>
                  <a
                    href="https://github.com/saikrishna5655"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 p-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg"
                    aria-label="GitHub"
                  >
                    <Github size={24} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};