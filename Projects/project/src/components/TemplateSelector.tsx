import React from 'react';
import { X } from 'lucide-react';
import { useResume } from '../context/ResumeContext';

const TemplateSelector: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { selectedTemplate, setSelectedTemplate } = useResume();
  
  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and contemporary design with a focus on readability' },
    { id: 'classic', name: 'Classic', description: 'Traditional resume layout, perfect for conservative industries' },
    { id: 'minimal', name: 'Minimal', description: 'Sleek design with plenty of white space' },
    { id: 'creative', name: 'Creative', description: 'Bold design for standing out in creative fields' }
  ];

  const handleSelect = (templateId: string) => {
    setSelectedTemplate(templateId as any);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto fade-in">
        <div className="flex justify-between items-center p-6 border-b border-neutral-200">
          <h2 className="text-xl font-semibold">Choose a Template</h2>
          <button 
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map(template => (
            <div 
              key={template.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedTemplate === template.id 
                  ? 'border-primary-500 bg-primary-50 shadow-sm' 
                  : 'border-neutral-200 hover:border-primary-300 hover:bg-neutral-50'
              }`}
              onClick={() => handleSelect(template.id)}
            >
              <div className="aspect-w-8 aspect-h-11 mb-3 bg-neutral-100 rounded flex items-center justify-center">
                <div className={`w-full h-64 bg-neutral-200 rounded flex items-center justify-center ${template.id}`}>
                  <span className="text-sm text-neutral-500">{template.name} Preview</span>
                </div>
              </div>
              <h3 className="font-medium text-lg">{template.name}</h3>
              <p className="text-sm text-neutral-600">{template.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;