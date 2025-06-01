import React, { useState } from 'react';
import { FileDown, Loader2, X } from 'lucide-react';
import { useResume } from '../context/ResumeContext';

const ExportOptions: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isExporting, setIsExporting] = useState(false);
  const { resumeData, selectedTemplate, accentColor } = useResume();
  
  const exportFormats = [
    { id: 'pdf', name: 'PDF Document', description: 'Standard format for sharing resumes' },
    { id: 'print', name: 'Print', description: 'Send directly to your printer' }
  ];

  const handleExport = (format: string) => {
    setIsExporting(true);
    
    // Simulate export process
    setTimeout(() => {
      if (format === 'pdf') {
        // In a real implementation, this would generate and download a PDF
        // For now, we'll just print the resume element
        window.print();
      } else if (format === 'print') {
        window.print();
      }
      
      setIsExporting(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full fade-in">
        <div className="flex justify-between items-center p-6 border-b border-neutral-200">
          <h2 className="text-xl font-semibold">Export Resume</h2>
          <button 
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-700"
            disabled={isExporting}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-neutral-600 mb-4">
            Choose a format to export your resume.
          </p>
          
          <div className="space-y-3">
            {exportFormats.map(format => (
              <button
                key={format.id}
                className="w-full p-4 border border-neutral-200 rounded-lg text-left hover:bg-neutral-50 transition-colors flex justify-between items-center"
                onClick={() => handleExport(format.id)}
                disabled={isExporting}
              >
                <div>
                  <h3 className="font-medium">{format.name}</h3>
                  <p className="text-sm text-neutral-500">{format.description}</p>
                </div>
                <FileDown size={20} className="text-neutral-400" />
              </button>
            ))}
          </div>
          
          {isExporting && (
            <div className="mt-6 flex items-center justify-center">
              <Loader2 size={24} className="animate-spin mr-2 text-primary-600" />
              <span>Preparing your resume...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExportOptions;