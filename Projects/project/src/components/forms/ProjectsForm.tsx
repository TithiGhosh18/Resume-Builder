import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import FormField from '../ui/FormField';

const ProjectsForm: React.FC = () => {
  const { resumeData, updateSection, addItemToSection, removeItemFromSection } = useResume();
  const { projects } = resumeData;

  const handleChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value
    };
    updateSection('projects', updatedProjects);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <button 
          onClick={() => addItemToSection('projects')}
          className="btn btn-outline flex items-center space-x-1"
          aria-label="Add project"
        >
          <Plus size={16} />
          <span>Add</span>
        </button>
      </div>

      {projects.map((project, index) => (
        <div 
          key={index} 
          className="p-4 border border-neutral-200 rounded-lg mb-6 slide-in-right"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-medium">Project {index + 1}</h3>
            <button 
              onClick={() => removeItemFromSection('projects', index)}
              className="text-error-500 hover:text-error-700 transition-colors"
              aria-label="Remove project"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="space-y-4">
            <FormField
              label="Project Title"
              id={`title-${index}`}
              value={project.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              placeholder="Project name"
            />
            
            <FormField
              label="Description"
              id={`description-${index}`}
              value={project.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
              placeholder="Brief description of the project and your role"
              multiline
              rows={2}
            />
            
            <FormField
              label="Technologies Used"
              id={`technologies-${index}`}
              value={project.technologies}
              onChange={(e) => handleChange(index, 'technologies', e.target.value)}
              placeholder="React, Node.js, MongoDB, etc."
              helpText="Separate technologies with commas"
            />
            
            <FormField
              label="Project Link (Optional)"
              id={`link-${index}`}
              value={project.link}
              onChange={(e) => handleChange(index, 'link', e.target.value)}
              placeholder="https://github.com/yourusername/project"
            />
          </div>
        </div>
      ))}
      
      {projects.length === 0 && (
        <div className="text-center py-8 text-neutral-500">
          <p>No projects added yet. Click the Add button to add your projects.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsForm;