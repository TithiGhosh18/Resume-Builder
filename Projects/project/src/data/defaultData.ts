import { ResumeData } from '../types';

export const defaultResumeData: ResumeData = {
  personal: {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    website: '',
    location: '',
    summary: ''
  },
  experience: [
    {
      company: 'Example Company',
      position: 'Senior Developer',
      startDate: '2020-01',
      endDate: '',
      current: true,
      description: 'Led development of key products and mentored junior developers. Implemented CI/CD pipelines that reduced deployment time by 40%.'
    },
    {
      company: 'Previous Company',
      position: 'Web Developer',
      startDate: '2017-03',
      endDate: '2019-12',
      current: false,
      description: 'Developed responsive web applications and APIs using React and Node.js. Collaborated with design team to improve user experience.'
    }
  ],
  education: [
    {
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2013-09',
      endDate: '2017-05',
      gpa: '3.8'
    }
  ],
  skills: [
    { name: 'JavaScript', level: 'Expert' },
    { name: 'React', level: 'Expert' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'HTML/CSS', level: 'Expert' },
    { name: 'SQL', level: 'Intermediate' }
  ],
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB',
      technologies: 'React, Node.js, Express, MongoDB, Redux',
      link: 'https://github.com/example/ecommerce'
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a personal portfolio website with a custom CMS',
      technologies: 'Next.js, Tailwind CSS, Contentful',
      link: 'https://example.com'
    }
  ]
};

export const skillLevels = [
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' },
  { value: 'Expert', label: 'Expert' }
];