import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShinyText from './ShinyText';
import { FileText, Palette, Download, Layout as LayoutIcon } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Professional Templates',
      description: 'Choose from multiple professionally designed resume templates'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Customizable Design',
      description: 'Personalize colors and styling to match your preferences'
    },
    {
      icon: <LayoutIcon className="w-6 h-6" />,
      title: 'Real-time Preview',
      description: 'See your changes instantly as you build your resume'
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Easy Export',
      description: 'Download your resume as a PDF or print it directly'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className=" md:w[400px] md:pt-[100px]  m-auto text-center justify-center md:h-[400px]">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black"
           
          >
          <ShinyText text="Built Your Perfect Resume" disabled={false} speed={7} className='bg-black' />

          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Build a professional resume in minutes with our easy-to-use builder. Choose from beautiful templates and customize every detail.
          </p>
          <button
            onClick={() => navigate('/builder')}
            className="btn btn-primary text-lg px-8 py-3 rounded-full transform transition hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary-500 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Resume?</h2>
          <p className="text-lg text-neutral-600 mb-6">
            Join thousands of job seekers who have created successful resumes using our builder.
          </p>
          <button
            onClick={() => navigate('/builder')}
            className="btn btn-primary text-lg px-8 py-3 rounded-full transform transition hover:scale-105"
          >
            Start Building Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 bg-white bg-opacity-50">
        <div className="container mx-auto px-4 text-center text-neutral-600">
          <p>© 2024 Resume Builder. All rights reserved.</p>
        </div>
      </footer>
      <style>
  {`
    @keyframes shine {
      0% {
        background-position: -200% center;
      }
      100% {
        background-position: 200% center;
      }
    }
  `}
</style>

    </div>
  );
};

export default LandingPage;