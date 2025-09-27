import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Purella Saikrishna',
    title: 'Data Analyst & AI/ML Engineer',
    location: 'Hyderabad, Telangana, India',
    email: 'saikrishnapurella89@gmail.com',
    phone: '+91 9515376035',
    linkedin: 'linkedin.com/in/purella-saikrishna',
    tagline: '3+ years transforming data into actionable insights with AI/ML expertise',
    roles: ['Data Analyst', 'AI/ML Engineer', 'Data Scientist']
  },
  about: {
    summary: "Experienced Data Analyst with 3+ years in healthcare data analytics at Optum. Passionate about leveraging AI/ML technologies to solve complex business problems and drive data-driven decision making. Specializes in predictive modeling, business intelligence, and cloud-based solutions.",
    achievements: [
      'Led healthcare analytics initiatives serving 100K+ patients',
      'Developed predictive models with 95%+ accuracy for claim processing',
      'Built automated dashboards saving 20+ hours weekly',
      'Collaborated with German research teams on climate forecasting'
    ]
  },
  experience: [
    {
      id: '1',
      company: 'Optum',
      position: 'Data Analyst',
      duration: 'Sep 2022 – June 2025',
      current: true,
      description: [
        'Developed comprehensive healthcare analytics solutions using SQL, Python, and Power BI',
        'Created predictive models for claim denial prediction with 95% accuracy',
        'Built interactive dashboards for stakeholder decision-making',
        'Automated data processing workflows reducing manual effort by 60%'
      ],
      technologies: ['Python', 'SQL', 'Power BI', 'Tableau', 'Machine Learning', 'Healthcare Analytics']
    },
    {
      id: '2',
      company: 'AITAR',
      position: 'ML Engineer Intern',
      duration: 'Jan 2022 - July 2022',
      description: [
        'Worked on climate forecasting models for SEED and ARTIGROW projects',
        'Collaborated with German research teams on agricultural AI solutions',
        'Implemented deep learning models for weather prediction',
        'Contributed to open-source climate modeling frameworks'
      ],
      technologies: ['Python', 'TensorFlow', 'Climate Modeling', 'Deep Learning', 'Research']
    }
  ],
  projects: [
    {
      id: '1',
      title: 'AI-Powered Desktop Automation Agent',
      description: 'Enterprise-grade automation solution deployed on Google Cloud Platform using OpenAI GPT-4, WebSocket communications, and microservices architecture for intelligent task automation.',
      techStack: ['Python', 'OpenAI GPT-4', 'Google Cloud Platform', 'WebSocket', 'Microservices', 'Docker'],
      githubUrl: '#',
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AI/ML'
    },
    {
      id: '2',
      title: 'Claim Denial Prediction System',
      description: 'Healthcare ML pipeline for predicting insurance claim denials using advanced regression models and business intelligence dashboards for real-time insights.',
      techStack: ['Python', 'Scikit-learn', 'Logistic Regression', 'Power BI', 'SQL', 'Healthcare Analytics'],
      githubUrl: '#',
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Healthcare'
    },
    {
      id: '3',
      title: 'Credit Card Fraud Detection',
      description: 'Advanced anomaly detection system using PCA analysis and multiple ML algorithms for real-time fraud detection with comprehensive model performance comparison.',
      techStack: ['Python', 'PCA', 'Random Forest', 'XGBoost', 'Anomaly Detection', 'Model Comparison'],
      githubUrl: '#',
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'FinTech'
    }
  ],
  skills: [
    { name: 'Python', level: 90, category: 'programming' },
    { name: 'SQL', level: 95, category: 'programming' },
    { name: 'Machine Learning', level: 85, category: 'ml' },
    { name: 'Deep Learning', level: 80, category: 'ml' },
    { name: 'NLP', level: 75, category: 'ml' },
    { name: 'Classification', level: 90, category: 'ml' },
    { name: 'Regression', level: 85, category: 'ml' },
    { name: 'Google Cloud Platform', level: 80, category: 'cloud' },
    { name: 'AWS', level: 60, category: 'cloud' },
    { name: 'Power BI', level: 90, category: 'visualization' },
    { name: 'Tableau', level: 85, category: 'visualization' },
    { name: 'Docker', level: 75, category: 'mlops' },
    { name: 'Kubernetes', level: 70, category: 'mlops' },
    { name: 'Model Deployment', level: 80, category: 'mlops' },
    { name: 'PySpark', level: 70, category: 'bigdata' },
    { name: 'Hadoop', level: 65, category: 'bigdata' }
  ],
  education: {
    degree: 'B.Sc. Computer Science',
    institution: 'Kakatiya University',
    year: '2021',
    coursework: ['Data Structures & Algorithms', 'Machine Learning', 'Database Systems', 'Software Engineering'],
    projects: ['Student Management System', 'E-commerce Analytics Dashboard', 'Weather Prediction Model']
  }
};