import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import FormField from '../ui/FormField';

const EducationForm: React.FC = () => {
  const { resumeData, updateSection, addItemToSection, removeItemFromSection } = useResume();
  const { education } = resumeData;

  const handleChange = (index: number, field: string, value: any) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value
    };
    updateSection('education', updatedEducation);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <button 
          onClick={() => addItemToSection('education')}
          className="btn btn-outline flex items-center space-x-1"
          aria-label="Add education"
        >
          <Plus size={16} />
          <span>Add</span>
        </button>
      </div>

      {education.map((edu, index) => (
        <div 
          key={index} 
          className="p-4 border border-neutral-200 rounded-lg mb-6 slide-in-right"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-medium">Education {index + 1}</h3>
            <button 
              onClick={() => removeItemFromSection('education', index)}
              className="text-error-500 hover:text-error-700 transition-colors"
              aria-label="Remove education"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="space-y-4">
            <FormField
              label="Institution"
              id={`institution-${index}`}
              value={edu.institution}
              onChange={(e) => handleChange(index, 'institution', e.target.value)}
              placeholder="University or school name"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Degree"
                id={`degree-${index}`}
                value={edu.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                placeholder="Bachelor of Science"
              />
              
              <FormField
                label="Field of Study"
                id={`field-${index}`}
                value={edu.field}
                onChange={(e) => handleChange(index, 'field', e.target.value)}
                placeholder="Computer Science"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Start Date"
                id={`startDate-${index}`}
                type="month"
                value={edu.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
              />
              
              <FormField
                label="End Date (or Expected)"
                id={`endDate-${index}`}
                type="month"
                value={edu.endDate}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
              />
            </div>
            
            <FormField
              label="GPA (Optional)"
              id={`gpa-${index}`}
              value={edu.gpa}
              onChange={(e) => handleChange(index, 'gpa', e.target.value)}
              placeholder="3.5"
            />
          </div>
        </div>
      ))}
      
      {education.length === 0 && (
        <div className="text-center py-8 text-neutral-500">
          <p>No education added yet. Click the Add button to add your education.</p>
        </div>
      )}
    </div>
  );
};

export default EducationForm;