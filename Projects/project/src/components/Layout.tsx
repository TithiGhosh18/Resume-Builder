import React, { useState } from 'react';
import { Menu, FileDown, Palette, BookTemplate as Templates } from 'lucide-react';
import Sidebar from './Sidebar';
import FormContainer from './FormContainer';
import ResumePreview from './preview/ResumePreview';
import TemplateSelector from './TemplateSelector';
import ColorPicker from './ColorPicker';
import ExportOptions from './ExportOptions';
import { useResume } from '../context/ResumeContext';

const Layout: React.FC = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const { resumeData } = useResume();

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    closeMobileSidebar();
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-primary-600">
            <a href="/">ResumeBuilder</a>
          </h1>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowTemplates(true)}
              className="btn btn-outline flex items-center space-x-1"
            >
              <Templates size={16} />
              <span className="hidden sm:inline">Templates</span>
            </button>
            
            <button 
              onClick={() => setShowColorPicker(true)}
              className="btn btn-outline flex items-center space-x-1"
            >
              <Palette size={16} />
              <span className="hidden sm:inline">Colors</span>
            </button>
            
            <button 
              onClick={() => setShowExportOptions(true)}
              className="btn btn-primary flex items-center space-x-1"
            >
              <FileDown size={16} />
              <span>Export</span>
            </button>
            
            <button 
              className="md:hidden btn btn-outline"
              onClick={toggleMobileSidebar}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-grow flex flex-col md:flex-row">
        {/* Sidebar - Hidden on mobile unless toggled */}
        <div className={`
          md:block md:w-64 bg-white shadow-sm
          ${isMobileSidebarOpen ? 'block fixed inset-0 z-50 bg-white' : 'hidden'}
        `}>
          <Sidebar 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange}
            onClose={closeMobileSidebar}
            isMobile={isMobileSidebarOpen}
          />
        </div>

        {/* Main content area */}
        <div className="flex-grow overflow-hidden">
          <div className="container mx-auto p-4 lg:p-6 flex flex-col lg:flex-row gap-8">
            {/* Form area */}
            <div className="lg:w-1/2 max-w-2xl mx-auto lg:mx-0">
              <FormContainer activeSection={activeSection} />
            </div>
            
            {/* Preview area */}
            <div className="lg:w-1/2 max-w-2xl mx-auto lg:mx-0">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template selector modal */}
      {showTemplates && (
        <TemplateSelector onClose={() => setShowTemplates(false)} />
      )}

      {/* Color picker modal */}
      {showColorPicker && (
        <ColorPicker onClose={() => setShowColorPicker(false)} />
      )}

      {/* Export options modal */}
      {showExportOptions && (
        <ExportOptions onClose={() => setShowExportOptions(false)} />
      )}
    </div>
  );
};

export default Layout;