import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('sahil_portfolio_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Premium dark mode by default
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [prefilledSubject, setPrefilledSubject] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('sahil_portfolio_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'hero' ? 0 : offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleInquireService = (serviceTitle: string) => {
    setPrefilledSubject(`Project Inquiry: ${serviceTitle}`);
    scrollToSection('contact');
    showToast(`Service "${serviceTitle}" selected in contact form!`);
  };

  const handleSelectProjectForContact = (projectTitle: string) => {
    setPrefilledSubject(`Custom Project Request: Similar to ${projectTitle}`);
    scrollToSection('contact');
    showToast(`Selected "${projectTitle}" for project discussion!`);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Sticky Glass Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          theme={theme}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onViewWorkClick={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. About Me Section */}
        <About
          theme={theme}
          onExploreProjects={() => scrollToSection('projects')}
          onContactMe={() => scrollToSection('contact')}
        />

        {/* 3. Skills Section */}
        <Skills theme={theme} />

        {/* 4. Projects Section */}
        <Projects
          theme={theme}
          onContactClickWithSubject={handleSelectProjectForContact}
        />

        {/* 5. Services Section */}
        <Services
          theme={theme}
          onInquireService={handleInquireService}
        />

        {/* 6. Experience & Education Timeline */}
        <ExperienceEducation theme={theme} />

        {/* 7. Dedicated Resume CTA Section */}
        <ResumeSection
          theme={theme}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 8. Contact Section */}
        <Contact
          theme={theme}
          prefilledSubject={prefilledSubject}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Interactive Resume CV Modal */}
      {resumeModalOpen && (
        <ResumeModal
          theme={theme}
          onClose={() => setResumeModalOpen(false)}
          onShowToast={showToast}
        />
      )}

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        theme={theme}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
