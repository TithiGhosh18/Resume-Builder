import React from 'react';
import { X } from 'lucide-react';
import { useResume } from '../context/ResumeContext';

const ColorPicker: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { accentColor, setAccentColor } = useResume();
  
  const colorOptions = [
    { id: 'blue', value: '#0ea5e9', name: 'Blue' },
    { id: 'indigo', value: '#6366f1', name: 'Indigo' },
    { id: 'purple', value: '#8b5cf6', name: 'Purple' },
    { id: 'pink', value: '#ec4899', name: 'Pink' },
    { id: 'red', value: '#ef4444', name: 'Red' },
    { id: 'orange', value: '#f97316', name: 'Orange' },
    { id: 'amber', value: '#f59e0b', name: 'Amber' },
    { id: 'green', value: '#10b981', name: 'Green' },
    { id: 'teal', value: '#14b8a6', name: 'Teal' },
    { id: 'cyan', value: '#06b6d4', name: 'Cyan' }
  ];

  const handleSelect = (color: string) => {
    setAccentColor(color);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full fade-in">
        <div className="flex justify-between items-center p-6 border-b border-neutral-200">
          <h2 className="text-xl font-semibold">Choose a Color Theme</h2>
          <button 
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-neutral-600 mb-4">
            Select a primary color for your resume. This will affect headers, section titles, and accents.
          </p>
          
          <div className="grid grid-cols-5 gap-3">
            {colorOptions.map(color => (
              <button
                key={color.id}
                className={`w-full aspect-square rounded-full border-2 transition-all ${
                  accentColor === color.value 
                    ? 'border-neutral-800 scale-110' 
                    : 'border-transparent hover:scale-105'
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => handleSelect(color.value)}
                title={color.name}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-neutral-200">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Custom Color
            </label>
            <input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="w-full h-10 cursor-pointer rounded border border-neutral-300"
            />
          </div>
          
          <button 
            className="mt-6 w-full btn btn-primary"
            onClick={onClose}
          >
            Apply Color
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;