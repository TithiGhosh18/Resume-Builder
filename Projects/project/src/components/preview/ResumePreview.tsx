import React from 'react';
import { useResume } from '../../context/ResumeContext';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import { ResumeData } from '../../types';

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData }) => {
  const { selectedTemplate, accentColor } = useResume();
  
  const renderTemplate = () => {
    const commonProps = { resumeData, accentColor };
    
    switch(selectedTemplate) {
      case 'modern':
        return <ModernTemplate {...commonProps} />;
      case 'classic':
        return <ClassicTemplate {...commonProps} />;
      case 'minimal':
        return <MinimalTemplate {...commonProps} />;
      case 'creative':
        return <CreativeTemplate {...commonProps} />;
      default:
        return <ModernTemplate {...commonProps} />;
    }
  };

  return (
    <div className="bg-white">
      {renderTemplate()}
    </div>
  );
};

export default ResumePreview;