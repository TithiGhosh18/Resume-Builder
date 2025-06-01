import React from 'react';
import { useResume } from '../../context/ResumeContext';
import FormField from '../ui/FormField';

const PersonalForm: React.FC = () => {
  const { resumeData, updateResumeData } = useResume();
  const { personal } = resumeData;

  const handleChange = (field: string, value: string) => {
    updateResumeData('personal', field, value);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="First Name"
          id="firstName"
          value={personal.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          placeholder="John"
        />
        
        <FormField
          label="Last Name"
          id="lastName"
          value={personal.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
          placeholder="Doe"
        />
      </div>
      
      <FormField
        label="Professional Title"
        id="title"
        value={personal.title}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="Frontend Developer"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Email"
          id="email"
          type="email"
          value={personal.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="johndoe@example.com"
        />
        
        <FormField
          label="Phone"
          id="phone"
          value={personal.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="(123) 456-7890"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Website"
          id="website"
          value={personal.website}
          onChange={(e) => handleChange('website', e.target.value)}
          placeholder="https://johndoe.com"
        />
        
        <FormField
          label="Location"
          id="location"
          value={personal.location}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="New York, NY"
        />
      </div>
      
      <FormField
        label="Professional Summary"
        id="summary"
        value={personal.summary}
        onChange={(e) => handleChange('summary', e.target.value)}
        placeholder="Experienced developer with 5+ years in frontend technologies..."
        multiline
        rows={4}
      />
    </div>
  );
};

export default PersonalForm;