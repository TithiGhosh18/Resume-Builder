import React from 'react';
import PersonalForm from './forms/PersonalForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';

interface FormContainerProps {
  activeSection: string;
}

const FormContainer: React.FC<FormContainerProps> = ({ activeSection }) => {
  const renderForm = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalForm />;
      case 'experience':
        return <ExperienceForm />;
      case 'education':
        return <EducationForm />;
      case 'skills':
        return <SkillsForm />;
      case 'projects':
        return <ProjectsForm />;
      default:
        return <PersonalForm />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 slide-up">
      {renderForm()}
    </div>
  );
};

export default FormContainer;