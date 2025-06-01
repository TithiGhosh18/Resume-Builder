import React from 'react';
import { ResumeData } from '../../../types';
import { formatDate } from '../../../utils/dateFormatter';

interface MinimalTemplateProps {
  resumeData: ResumeData;
  accentColor: string;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ resumeData, accentColor }) => {
  const { personal, experience, education, skills, projects } = resumeData;
  
  return (
    <div className="p-8 a4-page" style={{ '--accent-color': accentColor } as React.CSSProperties}>
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-light mb-1">
          {personal.firstName} <span className="font-medium">{personal.lastName}</span>
        </h1>
        <p className="text-lg text-neutral-600 mb-3">{personal.title}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
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
      </header>
      
      {/* Summary */}
      {personal.summary && (
        <section className="mb-8">
          <h2 className="text-base uppercase tracking-wider font-normal mb-3 text-neutral-400">
            About
          </h2>
          <p className="text-neutral-700">{personal.summary}</p>
        </section>
      )}
      
      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-base uppercase tracking-wider font-normal mb-3 text-neutral-400">
            Experience
          </h2>
          
          <div className="space-y-5">
            {experience.map((job, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">{job.position}</h3>
                  <span className="text-xs text-neutral-500">
                    {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                  </span>
                </div>
                <p className="text-sm" style={{ color: accentColor }}>{job.company}</p>
                <p className="text-sm text-neutral-700 whitespace-pre-line mt-2">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Education */}
      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-base uppercase tracking-wider font-normal mb-3 text-neutral-400">
            Education
          </h2>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">{edu.institution}</h3>
                  <span className="text-xs text-neutral-500">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </span>
                </div>
                <p className="text-sm text-neutral-700">
                  {edu.degree}{edu.field ? `, ${edu.field}` : ''}
                  {edu.gpa ? ` • GPA: ${edu.gpa}` : ''}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Two-column layout for Skills and Projects */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Skills */}
        {skills.length > 0 && (
          <section className="md:w-2/5">
            <h2 className="text-base uppercase tracking-wider font-normal mb-3 text-neutral-400">
              Skills
            </h2>
            
            <div className="space-y-1">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-sm text-neutral-700">{skill.name}</span>
                  {skill.level && (
                    <div className="ml-2 flex-grow">
                      <div className="h-1 bg-neutral-200 rounded-full w-full">
                        <div 
                          className="h-1 rounded-full" 
                          style={{ 
                            backgroundColor: accentColor,
                            width: skill.level === 'Beginner' ? '25%' :
                                  skill.level === 'Intermediate' ? '50%' :
                                  skill.level === 'Advanced' ? '75%' : '100%'
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Projects */}
        {projects.length > 0 && (
          <section className="md:w-3/5">
            <h2 className="text-base uppercase tracking-wider font-normal mb-3 text-neutral-400">
              Projects
            </h2>
            
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="mb-2">
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-neutral-700 mt-1">{project.description}</p>
                  {project.technologies && (
                    <p className="text-xs text-neutral-500 mt-1">
                      {project.technologies}
                    </p>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs mt-1 inline-block" 
                      style={{ color: accentColor }}
                    >
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MinimalTemplate;