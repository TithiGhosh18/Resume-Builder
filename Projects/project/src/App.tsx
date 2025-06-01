import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResumeProvider } from './context/ResumeContext';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  return (
    <ResumeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/builder" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </ResumeProvider>
  );
}

export default App;