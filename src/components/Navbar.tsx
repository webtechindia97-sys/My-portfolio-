import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code2, 
  User, 
  Wrench, 
  FolderGit2, 
  Layers, 
  GraduationCap, 
  FileText, 
  Mail, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home', icon: Code2 },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'experience', label: 'Experience', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'services', 'experience', 'resume-cta', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'hero' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark'
            ? 'glass-panel-dark bg-slate-950/85 shadow-lg shadow-cyan-950/20 py-3'
            : 'glass-panel-light bg-white/90 shadow-md shadow-slate-200/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <button 
            id="brand-logo-btn"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
              <span>SA</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`font-bold tracking-tight text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Sahil Ansari
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              </div>
              <p className={`text-xs font-mono tracking-wider ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>
                &lt;WebDev & Data /&gt;
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? theme === 'dark'
                        ? 'text-cyan-400 bg-cyan-500/10 font-semibold'
                        : 'text-cyan-600 bg-cyan-50 font-semibold shadow-xs'
                      : theme === 'dark'
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Quick Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResumeModal}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-all duration-200 cursor-pointer ${
                theme === 'dark'
                  ? 'border-slate-700 text-slate-200 hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-800/50'
                  : 'border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-600 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-900/90 text-amber-400 border-slate-700 hover:border-amber-400/50 hover:bg-slate-800'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-cyan-500 hover:text-cyan-600 shadow-sm'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform rotate-0 hover:rotate-90 duration-300" />
              ) : (
                <Moon className="w-4 h-4 transition-transform rotate-0 hover:-rotate-12 duration-300" />
              )}
            </button>

            {/* Hire Me CTA Button */}
            <button
              id="nav-hire-me-btn"
              onClick={() => scrollToSection('contact')}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile menu"
              className={`md:hidden p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-900 text-slate-200 border-slate-700 hover:bg-slate-800'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className={`md:hidden border-b transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-slate-950/95 border-slate-800/80 backdrop-blur-xl'
              : 'bg-white/95 border-slate-200 backdrop-blur-xl shadow-xl'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? theme === 'dark'
                        ? 'text-cyan-400 bg-cyan-500/15 font-semibold border-l-4 border-cyan-400'
                        : 'text-cyan-600 bg-cyan-50 font-semibold border-l-4 border-cyan-600'
                      : theme === 'dark'
                        ? 'text-slate-300 hover:bg-slate-900 hover:text-white'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-500" />
                  <span>{link.label}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <button
                id="mobile-nav-resume"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium border cursor-pointer ${
                  theme === 'dark'
                    ? 'border-slate-700 text-slate-200 hover:bg-slate-900'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-4 h-4 text-cyan-500" />
                <span>View & Download Resume</span>
              </button>

              <button
                id="mobile-nav-contact"
                onClick={() => scrollToSection('contact')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get In Touch / Hire Me</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
