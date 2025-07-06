import { ResumeData } from '@/types/resume'

export const sampleResumes: ResumeData[] = [
  {
    personalInfo: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/sarahjohnson',
      portfolio: 'sarahjohnson.dev',
      summary: 'Experienced Full Stack Developer with 5+ years of expertise in React, Node.js, and cloud technologies. Passionate about creating scalable web applications and leading development teams. Proven track record of delivering high-quality software solutions that drive business growth.'
    },
    education: [
      {
        id: '1',
        institution: 'Stanford University',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        startDate: '2016-09',
        endDate: '2020-06',
        gpa: '3.8/4.0',
        achievements: ['Dean\'s List', 'Computer Science Honor Society']
      }
    ],
    experience: [
      {
        id: '1',
        company: 'TechCorp Inc.',
        position: 'Senior Full Stack Developer',
        location: 'San Francisco, CA',
        startDate: '2021-03',
        endDate: '',
        current: true,
        description: 'Lead development of enterprise web applications using React, Node.js, and AWS.',
        achievements: [
          'Led a team of 5 developers to deliver a customer portal that increased user engagement by 40%',
          'Implemented CI/CD pipeline reducing deployment time by 60%',
          'Optimized database queries improving application performance by 35%'
        ],
        skills: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
      },
      {
        id: '2',
        company: 'StartupXYZ',
        position: 'Frontend Developer',
        location: 'San Francisco, CA',
        startDate: '2020-07',
        endDate: '2021-02',
        current: false,
        description: 'Developed responsive web applications and improved user experience.',
        achievements: [
          'Built responsive dashboard that improved user retention by 25%',
          'Reduced page load times by 50% through code optimization',
          'Implemented automated testing increasing code coverage to 85%'
        ],
        skills: ['React', 'TypeScript', 'CSS3', 'Jest', 'Git']
      }
    ],
    projects: [
      {
        id: '1',
        name: 'E-commerce Platform',
        description: 'Full-stack e-commerce platform with payment integration and inventory management.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
        link: 'https://ecommerce-demo.com',
        github: 'https://github.com/sarahjohnson/ecommerce'
      },
      {
        id: '2',
        name: 'Task Management App',
        description: 'Real-time collaborative task management application with drag-and-drop interface.',
        technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
        link: 'https://task-app-demo.com',
        github: 'https://github.com/sarahjohnson/task-app'
      }
    ],
    skills: [
      { name: 'JavaScript', level: 'expert', category: 'technical' },
      { name: 'React', level: 'expert', category: 'technical' },
      { name: 'Node.js', level: 'advanced', category: 'technical' },
      { name: 'TypeScript', level: 'advanced', category: 'technical' },
      { name: 'AWS', level: 'intermediate', category: 'technical' },
      { name: 'Leadership', level: 'advanced', category: 'soft' },
      { name: 'Problem Solving', level: 'expert', category: 'soft' },
      { name: 'Communication', level: 'advanced', category: 'soft' }
    ],
    certifications: [
      {
        id: '1',
        name: 'AWS Certified Developer Associate',
        issuer: 'Amazon Web Services',
        date: '2022-06',
        link: 'https://aws.amazon.com/certification/'
      },
      {
        id: '2',
        name: 'React Developer Certification',
        issuer: 'Meta',
        date: '2021-12',
        link: 'https://www.meta.com/'
      }
    ]
  },
  {
    personalInfo: {
      firstName: 'Michael',
      lastName: 'Chen',
      email: 'michael.chen@email.com',
      phone: '+1 (555) 987-6543',
      location: 'New York, NY',
      linkedin: 'linkedin.com/in/michaelchen',
      portfolio: 'michaelchen.design',
      summary: 'Creative UI/UX Designer with 4+ years of experience crafting beautiful and functional user interfaces. Specialized in design systems, user research, and creating seamless digital experiences. Passionate about accessibility and user-centered design principles.'
    },
    education: [
      {
        id: '1',
        institution: 'Parsons School of Design',
        degree: 'Bachelor of Fine Arts',
        field: 'Design and Technology',
        startDate: '2017-09',
        endDate: '2021-05',
        gpa: '3.9/4.0',
        achievements: ['Design Excellence Award', 'Dean\'s List']
      }
    ],
    experience: [
      {
        id: '1',
        company: 'Design Studio Pro',
        position: 'Senior UI/UX Designer',
        location: 'New York, NY',
        startDate: '2021-06',
        endDate: '',
        current: true,
        description: 'Lead designer for web and mobile applications, focusing on user experience and interface design.',
        achievements: [
          'Redesigned mobile app increasing user engagement by 45%',
          'Created comprehensive design system used across 10+ products',
          'Conducted user research leading to 30% improvement in conversion rates'
        ],
        skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'User Research', 'Prototyping']
      },
      {
        id: '2',
        company: 'Creative Agency',
        position: 'Junior Designer',
        location: 'New York, NY',
        startDate: '2020-06',
        endDate: '2021-05',
        current: false,
        description: 'Collaborated with senior designers on various client projects.',
        achievements: [
          'Designed 20+ landing pages with 95% client satisfaction rate',
          'Improved website accessibility scores by 40%',
          'Created brand guidelines for 5 major clients'
        ],
        skills: ['Figma', 'Adobe Illustrator', 'Photoshop', 'InDesign']
      }
    ],
    projects: [
      {
        id: '1',
        name: 'FinTech Mobile App',
        description: 'Complete redesign of a financial technology mobile application focusing on user experience.',
        technologies: ['Figma', 'Principle', 'Sketch', 'InVision'],
        link: 'https://fintech-app-demo.com'
      },
      {
        id: '2',
        name: 'E-learning Platform',
        description: 'Design system and user interface for an online learning platform.',
        technologies: ['Figma', 'Adobe XD', 'Sketch'],
        link: 'https://elearning-demo.com'
      }
    ],
    skills: [
      { name: 'Figma', level: 'expert', category: 'technical' },
      { name: 'Sketch', level: 'advanced', category: 'technical' },
      { name: 'Adobe Creative Suite', level: 'advanced', category: 'technical' },
      { name: 'User Research', level: 'intermediate', category: 'technical' },
      { name: 'Prototyping', level: 'advanced', category: 'technical' },
      { name: 'Creativity', level: 'expert', category: 'soft' },
      { name: 'Collaboration', level: 'advanced', category: 'soft' },
      { name: 'Attention to Detail', level: 'expert', category: 'soft' }
    ],
    certifications: [
      {
        id: '1',
        name: 'Google UX Design Certificate',
        issuer: 'Google',
        date: '2021-08',
        link: 'https://www.coursera.org/professional-certificates/google-ux-design'
      },
      {
        id: '2',
        name: 'Figma Design System Certificate',
        issuer: 'Figma',
        date: '2022-03',
        link: 'https://www.figma.com/'
      }
    ]
  },
  {
    personalInfo: {
      firstName: 'Emily',
      lastName: 'Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '+1 (555) 456-7890',
      location: 'Austin, TX',
      linkedin: 'linkedin.com/in/emilyrodriguez',
      portfolio: 'emilyrodriguez.com',
      summary: 'Data Scientist with 3+ years of experience in machine learning, statistical analysis, and data visualization. Expertise in Python, R, and cloud platforms. Proven ability to translate complex data insights into actionable business recommendations.'
    },
    education: [
      {
        id: '1',
        institution: 'University of Texas at Austin',
        degree: 'Master of Science',
        field: 'Data Science',
        startDate: '2019-08',
        endDate: '2021-05',
        gpa: '3.9/4.0',
        achievements: ['Graduate Research Fellowship', 'Data Science Excellence Award']
      },
      {
        id: '2',
        institution: 'University of Texas at Austin',
        degree: 'Bachelor of Science',
        field: 'Mathematics',
        startDate: '2015-08',
        endDate: '2019-05',
        gpa: '3.8/4.0',
        achievements: ['Mathematics Honor Society', 'Dean\'s List']
      }
    ],
    experience: [
      {
        id: '1',
        company: 'DataTech Solutions',
        position: 'Senior Data Scientist',
        location: 'Austin, TX',
        startDate: '2021-06',
        endDate: '',
        current: true,
        description: 'Lead data scientist developing machine learning models and analytics solutions.',
        achievements: [
          'Developed predictive model improving customer retention by 25%',
          'Led team of 3 data scientists on major client projects',
          'Implemented automated reporting system saving 20 hours per week'
        ],
        skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Tableau']
      },
      {
        id: '2',
        company: 'Analytics Corp',
        position: 'Data Analyst',
        location: 'Austin, TX',
        startDate: '2020-06',
        endDate: '2021-05',
        current: false,
        description: 'Performed data analysis and created visualizations for business stakeholders.',
        achievements: [
          'Created 50+ automated reports improving decision-making efficiency',
          'Reduced data processing time by 60% through automation',
          'Presented findings to executive team leading to new product features'
        ],
        skills: ['Python', 'SQL', 'Excel', 'Tableau', 'Power BI']
      }
    ],
    projects: [
      {
        id: '1',
        name: 'Customer Churn Prediction Model',
        description: 'Machine learning model to predict customer churn with 85% accuracy.',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
        github: 'https://github.com/emilyrodriguez/churn-prediction'
      },
      {
        id: '2',
        name: 'Sales Forecasting Dashboard',
        description: 'Interactive dashboard for sales forecasting and trend analysis.',
        technologies: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
        link: 'https://sales-dashboard-demo.com'
      }
    ],
    skills: [
      { name: 'Python', level: 'expert', category: 'technical' },
      { name: 'R', level: 'advanced', category: 'technical' },
      { name: 'SQL', level: 'advanced', category: 'technical' },
      { name: 'Machine Learning', level: 'advanced', category: 'technical' },
      { name: 'Tableau', level: 'intermediate', category: 'technical' },
      { name: 'Statistical Analysis', level: 'expert', category: 'technical' },
      { name: 'Problem Solving', level: 'advanced', category: 'soft' },
      { name: 'Communication', level: 'intermediate', category: 'soft' }
    ],
    certifications: [
      {
        id: '1',
        name: 'Google Data Analytics Certificate',
        issuer: 'Google',
        date: '2021-10',
        link: 'https://www.coursera.org/professional-certificates/google-data-analytics'
      },
      {
        id: '2',
        name: 'AWS Machine Learning Specialty',
        issuer: 'Amazon Web Services',
        date: '2022-09',
        link: 'https://aws.amazon.com/certification/'
      }
    ]
  },
  {
    personalInfo: {
      firstName: 'David',
      lastName: 'Thompson',
      email: 'david.thompson@email.com',
      phone: '+1 (555) 234-5678',
      location: 'Chicago, IL',
      linkedin: 'linkedin.com/in/davidthompson',
      summary: 'Experienced Sales Manager with 8+ years of proven track record in B2B sales, team leadership, and revenue growth. Skilled in developing strategic sales plans, managing key accounts, and building high-performing sales teams. Consistently exceeded targets and drove business expansion.'
    },
    education: [
      {
        id: '1',
        institution: 'Northwestern University',
        degree: 'Bachelor of Business Administration',
        field: 'Marketing',
        startDate: '2012-09',
        endDate: '2016-05',
        gpa: '3.7/4.0',
        achievements: ['Dean\'s List', 'Sales Excellence Award']
      }
    ],
    experience: [
      {
        id: '1',
        company: 'Global Sales Solutions',
        position: 'Senior Sales Manager',
        location: 'Chicago, IL',
        startDate: '2019-03',
        endDate: '',
        current: true,
        description: 'Lead sales team of 12 representatives, managing enterprise accounts and driving revenue growth.',
        achievements: [
          'Increased team sales by 45% year-over-year, exceeding $2M in revenue',
          'Developed and implemented new sales strategy resulting in 30% higher conversion rates',
          'Mentored 8 junior sales representatives, with 6 achieving promotion within 18 months'
        ],
        skills: ['Sales Management', 'CRM Systems', 'Negotiation', 'Team Leadership', 'Strategic Planning']
      },
      {
        id: '2',
        company: 'TechSales Inc.',
        position: 'Account Executive',
        location: 'Chicago, IL',
        startDate: '2016-06',
        endDate: '2019-02',
        current: false,
        description: 'Managed portfolio of 50+ enterprise clients, focusing on software solutions.',
        achievements: [
          'Consistently exceeded quarterly targets by 25%',
          'Closed deals worth over $500K annually',
          'Maintained 95% client retention rate'
        ],
        skills: ['B2B Sales', 'Client Relationship Management', 'Solution Selling', 'Pipeline Management']
      }
    ],
    projects: [
      {
        id: '1',
        name: 'Sales Process Optimization',
        description: 'Redesigned sales process resulting in 40% faster deal closure and improved win rates.',
        technologies: ['Salesforce', 'HubSpot', 'Sales Analytics'],
        link: 'https://sales-process-demo.com'
      }
    ],
    skills: [
      { name: 'Sales Management', level: 'expert', category: 'technical' },
      { name: 'CRM Systems', level: 'advanced', category: 'technical' },
      { name: 'Negotiation', level: 'expert', category: 'soft' },
      { name: 'Leadership', level: 'advanced', category: 'soft' },
      { name: 'Strategic Planning', level: 'advanced', category: 'soft' },
      { name: 'Client Relations', level: 'expert', category: 'soft' }
    ],
    certifications: [
      {
        id: '1',
        name: 'Certified Sales Professional',
        issuer: 'Sales Management Association',
        date: '2020-03',
        link: 'https://www.salesmanagement.org/'
      }
    ]
  },
  {
    personalInfo: {
      firstName: 'Jennifer',
      lastName: 'Martinez',
      email: 'jennifer.martinez@email.com',
      phone: '+1 (555) 345-6789',
      location: 'Los Angeles, CA',
      linkedin: 'linkedin.com/in/jennifermartinez',
      summary: 'Creative Social Media Marketing Specialist with 5+ years of experience developing and executing successful digital marketing campaigns. Expert in content creation, community management, and data-driven marketing strategies. Proven ability to increase brand engagement and drive conversions across multiple platforms.'
    },
    education: [
      {
        id: '1',
        institution: 'University of California, Los Angeles',
        degree: 'Bachelor of Arts',
        field: 'Communications',
        startDate: '2016-09',
        endDate: '2020-05',
        gpa: '3.8/4.0',
        achievements: ['Communications Honor Society', 'Digital Media Award']
      }
    ],
    experience: [
      {
        id: '1',
        company: 'Digital Marketing Agency',
        position: 'Senior Social Media Manager',
        location: 'Los Angeles, CA',
        startDate: '2021-01',
        endDate: '',
        current: true,
        description: 'Lead social media strategy for 15+ client accounts across various industries.',
        achievements: [
          'Increased average client engagement rates by 60% through strategic content planning',
          'Managed campaigns generating over 2M impressions monthly',
          'Developed influencer partnerships resulting in 40% increase in brand awareness'
        ],
        skills: ['Social Media Management', 'Content Creation', 'Analytics', 'Campaign Planning', 'Community Management']
      },
      {
        id: '2',
        company: 'Brand Solutions',
        position: 'Social Media Coordinator',
        location: 'Los Angeles, CA',
        startDate: '2020-06',
        endDate: '2020-12',
        current: false,
        description: 'Managed social media presence for fashion and lifestyle brands.',
        achievements: [
          'Grew Instagram following by 200% in 6 months',
          'Created viral content campaigns with 500K+ views',
          'Improved customer response time by 80%'
        ],
        skills: ['Instagram Marketing', 'Content Creation', 'Community Engagement', 'Analytics']
      }
    ],
    projects: [
      {
        id: '1',
        name: 'Viral Marketing Campaign',
        description: 'Developed and executed viral marketing campaign reaching 5M+ users across platforms.',
        technologies: ['Instagram', 'TikTok', 'Facebook', 'Analytics Tools'],
        link: 'https://viral-campaign-demo.com'
      }
    ],
    skills: [
      { name: 'Social Media Marketing', level: 'expert', category: 'technical' },
      { name: 'Content Creation', level: 'advanced', category: 'technical' },
      { name: 'Analytics', level: 'intermediate', category: 'technical' },
      { name: 'Creative Strategy', level: 'expert', category: 'soft' },
      { name: 'Communication', level: 'advanced', category: 'soft' },
      { name: 'Trend Analysis', level: 'advanced', category: 'technical' }
    ],
    certifications: [
      {
        id: '1',
        name: 'Google Digital Marketing Certificate',
        issuer: 'Google',
        date: '2021-08',
        link: 'https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce'
      }
    ]
  },
  {
    personalInfo: {
      firstName: 'Robert',
      lastName: 'Wilson',
      email: 'robert.wilson@email.com',
      phone: '+1 (555) 456-7890',
      location: 'Miami, FL',
      linkedin: 'linkedin.com/in/robertwilson',
      summary: 'Experienced Attorney with 7+ years of practice in corporate law and litigation. Specialized in contract negotiations, regulatory compliance, and dispute resolution. Proven track record of successful case outcomes and client satisfaction.'
    },
    education: [
      {
        id: '1',
        institution: 'University of Miami School of Law',
        degree: 'Juris Doctor',
        field: 'Law',
        startDate: '2014-08',
        endDate: '2017-05',
        gpa: '3.6/4.0',
        achievements: ['Dean\'s List', 'Moot Court Champion']
      },
      {
        id: '2',
        institution: 'University of Florida',
        degree: 'Bachelor of Arts',
        field: 'Political Science',
        startDate: '2010-08',
        endDate: '2014-05',
        gpa: '3.8/4.0',
        achievements: ['Political Science Honor Society']
      }
    ],
    experience: [
      {
        id: '1',
        company: 'Wilson & Associates Law Firm',
        position: 'Senior Attorney',
        location: 'Miami, FL',
        startDate: '2019-06',
        endDate: '',
        current: true,
        description: 'Lead attorney handling complex corporate litigation and contract negotiations.',
        achievements: [
          'Successfully represented clients in 50+ high-value corporate cases',
          'Negotiated contracts worth over $10M in total value',
          'Maintained 95% client satisfaction rate'
        ],
        skills: ['Corporate Law', 'Litigation', 'Contract Negotiation', 'Legal Research', 'Client Relations']
      },
      {
        id: '2',
        company: 'Legal Partners LLC',
        position: 'Associate Attorney',
        location: 'Miami, FL',
        startDate: '2017-08',
        endDate: '2019-05',
        current: false,
        description: 'Handled various legal matters including corporate compliance and litigation.',
        achievements: [
          'Won 80% of cases in first year of practice',
          'Developed expertise in regulatory compliance',
          'Built strong client relationships'
        ],
        skills: ['Legal Research', 'Document Drafting', 'Client Communication', 'Case Management']
      }
    ],
    projects: [
      {
        id: '1',
        name: 'Corporate Compliance Framework',
        description: 'Developed comprehensive compliance framework for Fortune 500 company.',
        technologies: ['Legal Research Tools', 'Document Management Systems'],
        link: 'https://compliance-framework-demo.com'
      }
    ],
    skills: [
      { name: 'Corporate Law', level: 'expert', category: 'technical' },
      { name: 'Litigation', level: 'advanced', category: 'technical' },
      { name: 'Contract Negotiation', level: 'expert', category: 'technical' },
      { name: 'Legal Research', level: 'advanced', category: 'technical' },
      { name: 'Analytical Thinking', level: 'expert', category: 'soft' },
      { name: 'Communication', level: 'advanced', category: 'soft' }
    ],
    certifications: [
      {
        id: '1',
        name: 'Florida Bar License',
        issuer: 'Florida Bar Association',
        date: '2017-10',
        link: 'https://www.floridabar.org/'
      }
    ]
  }
] 