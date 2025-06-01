import React from 'react';
import { ResumeData } from '../../../types';
import { formatDate } from '../../../utils/dateFormatter';

interface CreativeTemplateProps {
  resumeData: ResumeData;
  accentColor: string;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ resumeData, accentColor }) => {
  const { personal, experience, education, skills, projects } = resumeData;
  
  // Generate gradient from accent color
  const generateGradient = () => {
    return `linear-gradient(135deg, ${accentColor} 0%, ${adjustColor(accentColor, 40)} 100%)`;
  };
  
  // Adjust color brightness/darkness
  const adjustColor = (color: string, amount: number) => {
    let usePound = false;
  
    if (color[0] === "#") {
      color = color.slice(1);
      usePound = true;
    }
  
    const num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
  
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
  };
  
  return (
    <div className="relative" style={{ '--accent-color': accentColor } as React.CSSProperties}>
      {/* Header with gradient background */}
      <header 
        className="p-8 text-white relative overflow-hidden"
        style={{ 
          background: generateGradient(),
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          paddingBottom: '4rem'
        }}
      >
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-1">
            {personal.firstName} {personal.lastName}
          </h1>
          <p className="text-xl mb-4 opacity-90">{personal.title}</p>
          
          <div className="flex flex-wrap gap-4 text-sm opacity-80">
            {personal.email && (
              <span>{personal.email}</span>
            )}
            {personal.phone && (
              <span>{personal.phone}</span>
            )}
            {personal.location && (
              <span>{personal.location}</span>
            )}
            {personal.website && (
              <span>{personal.website}</span>
            )}
          </div>
        </div>
      </header>
      
      {/* Content */}
      <div className="p-8">
        {/* Summary */}
        {personal.summary && (
          <section className="mb-8 relative">
            <div 
              className="absolute left-0 top-0 w-1 h-full rounded-full" 
              style={{ backgroundColor: accentColor }}
            ></div>
            <div className="ml-4">
              <h2 className="text-lg font-bold mb-3" style={{ color: accentColor }}>
                About Me
              </h2>
              <p className="text-neutral-700">{personal.summary}</p>
            </div>
          </section>
        )}
        
        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-8 relative">
            <div 
              className="absolute left-0 top-0 w-1 h-full rounded-full" 
              style={{ backgroundColor: accentColor }}
            ></div>
            <div className="ml-4">
              <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>
                Work Experience
              </h2>
              
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-6">
                    <div 
                      className="absolute left-0 top-2 w-3 h-3 rounded-full" 
                      style={{ backgroundColor: accentColor }}
                    ></div>
                    <div className="mb-3">
                      <h3 className="font-bold text-lg">{job.position}</h3>
                      <p className="text-neutral-600 mb-1">
                        {job.company} • {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                      </p>
                      <p className="text-sm text-neutral-700 whitespace-pre-line">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Education */}
        {education.length > 0 && (
          <section className="mb-8 relative">
            <div 
              className="absolute left-0 top-0 w-1 h-full rounded-full" 
              style={{ backgroundColor: accentColor }}
            ></div>
            <div className="ml-4">
              <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>
                Education
              </h2>
              
              <div className="space-y-5">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6">
                    <div 
                      className="absolute left-0 top-2 w-3 h-3 rounded-full" 
                      style={{ backgroundColor: accentColor }}
                    ></div>
                    <div className="mb-2">
                      <h3 className="font-bold">{edu.institution}</h3>
                      <p className="text-neutral-600 mb-1">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </p>
                      <p className="text-neutral-700">
                        {edu.degree}{edu.field ? `, ${edu.field}` : ''}
                        {edu.gpa ? ` • GPA: ${edu.gpa}` : ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Two-column layout for Skills and Projects */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Skills */}
          {skills.length > 0 && (
            <section className="md:w-1/2 relative">
              <div 
                className="absolute left-0 top-0 w-1 h-full rounded-full" 
                style={{ backgroundColor: accentColor }}
              ></div>
              <div className="ml-4">
                <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>
                  Skills
                </h2>
                
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="p-2 rounded-lg text-white text-center text-sm"
                      style={{ 
                        background: `linear-gradient(to right, ${accentColor}, ${adjustColor(accentColor, 40)})`,
                        opacity: skill.level === 'Beginner' ? 0.7 :
                                skill.level === 'Intermediate' ? 0.8 :
                                skill.level === 'Advanced' ? 0.9 : 1
                      }}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
          
          {/* Projects */}
          {projects.length > 0 && (
            <section className="md:w-1/2 relative">
              <div 
                className="absolute left-0 top-0 w-1 h-full rounded-full" 
                style={{ backgroundColor: accentColor }}
              ></div>
              <div className="ml-4">
                <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>
                  Projects
                </h2>
                
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="mb-2">
                      <h3 className="font-bold">{project.title}</h3>
                      <p className="text-sm text-neutral-700 mt-1">{project.description}</p>
                      {project.technologies && (
                        <p className="text-xs mt-1 px-2 py-1 bg-neutral-100 inline-block rounded">
                          {project.technologies}
                        </p>
                      )}
                      {project.link && (
                        <div className="mt-1">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-xs px-2 py-1 rounded inline-block text-white" 
                            style={{ backgroundColor: accentColor }}
                          >
                            View Project
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;