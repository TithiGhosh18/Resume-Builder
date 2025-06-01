import React from 'react';
import { User, Briefcase, GraduationCap, Code, FolderKanban, X } from 'lucide-react';
import { ResumeSection } from '../types';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onClose: () => void;
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange, onClose, isMobile }) => {
  const sections: ResumeSection[] = [
    { id: 'personal', label: 'Personal Info', icon: 'User' },
    { id: 'experience', label: 'Experience', icon: 'Briefcase' },
    { id: 'education', label: 'Education', icon: 'GraduationCap' },
    { id: 'skills', label: 'Skills', icon: 'Code' },
    { id: 'projects', label: 'Projects', icon: 'FolderKanban' }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User size={20} />;
      case 'Briefcase': return <Briefcase size={20} />;
      case 'GraduationCap': return <GraduationCap size={20} />;
      case 'Code': return <Code size={20} />;
      case 'FolderKanban': return <FolderKanban size={20} />;
      default: return <User size={20} />;
    }
  };

  return (
    <div className="h-full flex flex-col p-4">
      {isMobile && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Sections</h2>
          <button onClick={onClose} className="p-1">
            <X size={20} />
          </button>
        </div>
      )}
      
      <nav className="space-y-1">
        {sections.map(section => (
          <button
            key={section.id}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors
              ${activeSection === section.id 
                ? 'bg-primary-50 text-primary-700' 
                : 'hover:bg-neutral-100 text-neutral-700'}`}
            onClick={() => onSectionChange(section.id)}
          >
            <span className={activeSection === section.id ? 'text-primary-600' : 'text-neutral-500'}>
              {getIcon(section.icon)}
            </span>
            <span className="font-medium">{section.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="mt-auto pt-4 border-t border-neutral-200 text-sm text-neutral-500">
        <p className="mb-1">
          All changes are automatically saved to your browser.
        </p>
        <button 
          onClick={() => {
            if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
              localStorage.removeItem('resumeData');
              window.location.reload();
            }
          }}
          className="text-error-600 hover:text-error-700 text-sm font-medium"
        >
          Reset All Data
        </button>
      </div>
    </div>
  );
};

export default Sidebar;