import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import FormField from '../ui/FormField';

const ExperienceForm: React.FC = () => {
  const { resumeData, updateSection, addItemToSection, removeItemFromSection } = useResume();
  const { experience } = resumeData;

  const handleChange = (index: number, field: string, value: any) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value
    };
    
    // If setting current to true, clear the end date
    if (field === 'current' && value === true) {
      updatedExperience[index].endDate = '';
    }
    
    updateSection('experience', updatedExperience);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <button 
          onClick={() => addItemToSection('experience')}
          className="btn btn-outline flex items-center space-x-1"
          aria-label="Add experience"
        >
          <Plus size={16} />
          <span>Add</span>
        </button>
      </div>

      {experience.map((job, index) => (
        <div 
          key={index} 
          className="p-4 border border-neutral-200 rounded-lg mb-6 slide-in-right"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-medium">Position {index + 1}</h3>
            <button 
              onClick={() => removeItemFromSection('experience', index)}
              className="text-error-500 hover:text-error-700 transition-colors"
              aria-label="Remove experience"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="space-y-4">
            <FormField
              label="Company"
              id={`company-${index}`}
              value={job.company}
              onChange={(e) => handleChange(index, 'company', e.target.value)}
              placeholder="Company name"
            />
            
            <FormField
              label="Position"
              id={`position-${index}`}
              value={job.position}
              onChange={(e) => handleChange(index, 'position', e.target.value)}
              placeholder="Your job title"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Start Date"
                id={`startDate-${index}`}
                type="month"
                value={job.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
              />
              
              <div className="flex flex-col">
                <FormField
                  label="End Date"
                  id={`endDate-${index}`}
                  type="month"
                  value={job.endDate}
                  onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                  disabled={job.current}
                />
                
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id={`current-${index}`}
                    checked={job.current}
                    onChange={(e) => handleChange(index, 'current', e.target.checked)}
                    className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                  <label htmlFor={`current-${index}`} className="text-sm text-neutral-700">
                    I currently work here
                  </label>
                </div>
              </div>
            </div>
            
            <FormField
              label="Description"
              id={`description-${index}`}
              value={job.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
              placeholder="Describe your responsibilities and achievements"
              multiline
              rows={3}
              helpText="Use bullet points with • or - for better formatting"
            />
          </div>
        </div>
      ))}
      
      {experience.length === 0 && (
        <div className="text-center py-8 text-neutral-500">
          <p>No experience added yet. Click the Add button to add your work experience.</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;