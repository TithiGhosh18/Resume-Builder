import React from 'react';
import { ResumeData } from '../../../types';
import { formatDate } from '../../../utils/dateFormatter';

interface ClassicTemplateProps {
  resumeData: ResumeData;
  accentColor: string;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ resumeData, accentColor }) => {
  const { personal, experience, education, skills, projects } = resumeData;
  
  return (
    <div className="p-8 a4-page" style={{ '--accent-color': accentColor } as React.CSSProperties}>
      {/* Header - Centered */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold uppercase tracking-wider mb-1">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-lg font-medium text-neutral-700 mb-3">{personal.title}</p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
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
          <h2 className="text-lg font-semibold uppercase mb-2 text-center" style={{ color: accentColor }}>
            Professional Summary
          </h2>
          <div className="w-full h-px mb-3" style={{ backgroundColor: accentColor }}></div>
          <p className="text-neutral-700">{personal.summary}</p>
        </section>
      )}
      
      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold uppercase mb-2 text-center" style={{ color: accentColor }}>
            Work Experience
          </h2>
          <div className="w-full h-px mb-3" style={{ backgroundColor: accentColor }}></div>
          
          <div className="space-y-4">
            {experience.map((job, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold">{job.position}</h3>
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
          <h2 className="text-lg font-semibold uppercase mb-2 text-center" style={{ color: accentColor }}>
            Education
          </h2>
          <div className="w-full h-px mb-3" style={{ backgroundColor: accentColor }}></div>
          
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold">{edu.institution}</h3>
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
      
      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold uppercase mb-2 text-center" style={{ color: accentColor }}>
            Skills
          </h2>
          <div className="w-full h-px mb-3" style={{ backgroundColor: accentColor }}></div>
          
          <div className="flex flex-wrap gap-x-1 gap-y-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 border rounded mr-2 mb-2 text-sm"
                style={{ borderColor: accentColor }}
              >
                {skill.name} {skill.level && `(${skill.level})`}
              </span>
            ))}
          </div>
        </section>
      )}
      
      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold uppercase mb-2 text-center" style={{ color: accentColor }}>
            Projects
          </h2>
          <div className="w-full h-px mb-3" style={{ backgroundColor: accentColor }}></div>
          
          <div className="space-y-3">
            {projects.map((project, index) => (
              <div key={index} className="mb-2">
                <h3 className="font-bold">{project.title}</h3>
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
  );
};

export default ClassicTemplate;