import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultResumeData } from '../data/defaultData';
import { ResumeData, Template } from '../types';

interface ResumeContextType {
  resumeData: ResumeData;
  updateResumeData: (section: string, field: string, value: any) => void;
  updateSection: (section: string, data: any) => void;
  addItemToSection: (section: string) => void;
  removeItemFromSection: (section: string, index: number) => void;
  selectedTemplate: Template;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<Template>>;
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load data from localStorage or use default
  const loadSavedData = () => {
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : defaultResumeData;
  };

  const [resumeData, setResumeData] = useState<ResumeData>(loadSavedData);
  const [selectedTemplate, setSelectedTemplate] = useState<Template>('modern');
  const [accentColor, setAccentColor] = useState<string>('#0ea5e9');

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const updateResumeData = (section: string, field: string, value: any) => {
    setResumeData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value
      }
    }));
  };

  const updateSection = (section: string, data: any) => {
    setResumeData(prevData => ({
      ...prevData,
      [section]: data
    }));
  };

  const addItemToSection = (section: string) => {
    if (Array.isArray(resumeData[section])) {
      const emptyItem = getEmptyItem(section);
      setResumeData(prevData => ({
        ...prevData,
        [section]: [...prevData[section], emptyItem]
      }));
    }
  };

  const removeItemFromSection = (section: string, index: number) => {
    if (Array.isArray(resumeData[section])) {
      setResumeData(prevData => ({
        ...prevData,
        [section]: prevData[section].filter((_, i) => i !== index)
      }));
    }
  };

  const getEmptyItem = (section: string) => {
    switch (section) {
      case 'experience':
        return {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          current: false,
          description: ''
        };
      case 'education':
        return {
          institution: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          gpa: ''
        };
      case 'skills':
        return {
          name: '',
          level: 'Intermediate'
        };
      case 'projects':
        return {
          title: '',
          description: '',
          technologies: '',
          link: ''
        };
      default:
        return {};
    }
  };

  return (
    <ResumeContext.Provider value={{
      resumeData,
      updateResumeData,
      updateSection,
      addItemToSection,
      removeItemFromSection,
      selectedTemplate,
      setSelectedTemplate,
      accentColor,
      setAccentColor
    }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};