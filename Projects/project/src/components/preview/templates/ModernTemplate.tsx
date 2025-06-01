import React from 'react';
import { ResumeData } from '../../../types';
import { formatDate } from '../../../utils/dateFormatter';

interface ModernTemplateProps {
  resumeData: ResumeData;
  accentColor: string;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ resumeData, accentColor }) => {
  const { personal, experience, education, skills, projects } = resumeData;
  
  return (
    <div className="p-8 a4-page" style={{ '--accent-color': accentColor } as React.CSSProperties}>
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-1" style={{ color: accentColor }}>
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-lg font-medium text-neutral-700 mb-3">{personal.title}</p>
        
        <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
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
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ borderColor: accentColor, color: accentColor }}>
            Professional Summary
          </h2>
          <p className="text-neutral-700">{personal.summary}</p>
        </section>
      )}
      
      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 pb-1 border-b" style={{ borderColor: accentColor, color: accentColor }}>
            Work Experience
          </h2>
          
          <div className="space-y-4">
            {experience.map((job, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">{job.position}</h3>
                  <span className="text-sm text-neutral-600">
                    {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
                  </span>
                </div>
                <p className="text-neutral-700 font-medium">{job.company}</p>
                <p className="text-sm text-neutral-700 whitespace-pre-line mt-1">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 pb-1 border-b" style={{ borderColor: accentColor, color: accentColor }}>
            Education
          </h2>
          
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">{edu.institution}</h3>
                  <span className="text-sm text-neutral-600">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </span>
                </div>
                <p className="text-neutral-700">
                  {edu.degree}{edu.field ? `, ${edu.field}` : ''}
                  {edu.gpa ? ` • GPA: ${edu.gpa}` : ''}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Two-column layout for Skills and Projects */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Skills */}
        {skills.length > 0 && (
          <section className="md:w-1/2">
            <h2 className="text-lg font-semibold mb-3 pb-1 border-b" style={{ borderColor: accentColor, color: accentColor }}>
              Skills
            </h2>
            
            <div className="grid grid-cols-1 gap-y-1">
              {skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-neutral-700">{skill.name}</span>
                  <span className="text-sm text-neutral-500">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Projects */}
        {projects.length > 0 && (
          <section className="md:w-1/2">
            <h2 className="text-lg font-semibold mb-3 pb-1 border-b" style={{ borderColor: accentColor, color: accentColor }}>
              Projects
            </h2>
            
            <div className="space-y-3">
              {projects.map((project, index) => (
                <div key={index} className="mb-2">
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-neutral-700 mt-1">{project.description}</p>
                  {project.technologies && (
                    <p className="text-xs text-neutral-600 mt-1">
                      <span className="font-medium">Technologies:</span> {project.technologies}
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

export default ModernTemplate;