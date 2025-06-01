import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import FormField from '../ui/FormField';
import { skillLevels } from '../../data/defaultData';

const SkillsForm: React.FC = () => {
  const { resumeData, updateSection, addItemToSection, removeItemFromSection } = useResume();
  const { skills } = resumeData;

  const handleChange = (index: number, field: string, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = {
      ...updatedSkills[index],
      [field]: value
    };
    updateSection('skills', updatedSkills);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <button 
          onClick={() => addItemToSection('skills')}
          className="btn btn-outline flex items-center space-x-1"
          aria-label="Add skill"
        >
          <Plus size={16} />
          <span>Add</span>
        </button>
      </div>

      <p className="text-sm text-neutral-600 mb-4">
        Add your technical and professional skills. Rating your proficiency helps employers understand your expertise level.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="p-3 border border-neutral-200 rounded-lg flex items-center justify-between slide-in-right"
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            <div className="flex-grow grid grid-cols-2 gap-2">
              <FormField
                label=""
                id={`skill-${index}`}
                value={skill.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                placeholder="Skill name"
                hideLabel
              />
              
              <select
                value={skill.level}
                onChange={(e) => handleChange(index, 'level', e.target.value)}
                className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              >
                {skillLevels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
            
            <button 
              onClick={() => removeItemFromSection('skills', index)}
              className="ml-2 text-error-500 hover:text-error-700 transition-colors"
              aria-label="Remove skill"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
      
      {skills.length === 0 && (
        <div className="text-center py-8 text-neutral-500">
          <p>No skills added yet. Click the Add button to add your skills.</p>
        </div>
      )}
    </div>
  );
};

export default SkillsForm;