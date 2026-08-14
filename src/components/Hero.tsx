import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Database, 
  Sheet, 
  Terminal,
  FileCode,
  Github,
  Linkedin,
  MapPin
} from 'lucide-react';
import { ThemeMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  theme: ThemeMode;
  onOpenResumeModal: () => void;
  onViewWorkClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  theme, 
  onOpenResumeModal, 
  onViewWorkClick, 
  onContactClick 
}) => {
  return (
    <section 
      id="hero" 
      className={`relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-950 text-slate-100 bg-grid-dark' : 'bg-slate-50/80 text-slate-900 bg-grid-light'
      }`}
    >
      {/* Background Neon Ambient Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border shadow-xs transition-all ${
              theme === 'dark' 
                ? 'bg-slate-900/90 border-cyan-500/30 text-cyan-300' 
                : 'bg-white border-cyan-200 text-cyan-700 shadow-sm'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Freelance & Contract Projects</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className={`text-sm sm:text-base font-semibold font-mono tracking-wide uppercase ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
              }`}>
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className={`text-xl sm:text-2xl lg:text-3xl font-semibold ${
                  theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  Web Developer
                </span>
                <span className="text-cyan-500 font-bold text-xl">|</span>
                <span className={`text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent`}>
                  Data Entry Professional
                </span>
              </div>
            </div>

            {/* Short Introduction */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {PERSONAL_INFO.tagline}
            </p>

            {/* Location and Education badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>India • Remote Worldwide</span>
              </div>
              <div className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Diploma Computer Science Engineer</span>
              </div>
            </div>

            {/* Action Buttons: View My Work, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              {/* Button 1: View My Work */}
              <button
                id="hero-btn-view-work"
                onClick={onViewWorkClick}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Button 2: Download Resume */}
              <button
                id="hero-btn-download-resume"
                onClick={onOpenResumeModal}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-800'
                    : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-600 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </button>

              {/* Button 3: Contact Me */}
              <button
                id="hero-btn-contact-me"
                onClick={onContactClick}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm border transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'border-transparent text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-3 pt-2">
              <span className={`text-xs font-mono uppercase ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                Connect:
              </span>
              <a 
                href={PERSONAL_INFO.socials.github} 
                target="_blank" 
                rel="noreferrer"
                id="hero-social-github"
                aria-label="GitHub Profile"
                className={`p-2 rounded-lg border transition-all ${
                  theme === 'dark' 
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50' 
                    : 'bg-white border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-400 shadow-xs'
                }`}
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_INFO.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                id="hero-social-linkedin"
                aria-label="LinkedIn Profile"
                className={`p-2 rounded-lg border transition-all ${
                  theme === 'dark' 
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50' 
                    : 'bg-white border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-400 shadow-xs'
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                id="hero-social-email"
                aria-label="Direct Email"
                className={`p-2 rounded-lg border transition-all ${
                  theme === 'dark' 
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50' 
                    : 'bg-white border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-400 shadow-xs'
                }`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Circular / Glass Profile Display with Floating Badges (5 Cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Outer Glow Ring */}
            <div className="relative w-72 sm:w-88 md:w-96 h-72 sm:h-88 md:h-96 flex items-center justify-center">
              
              {/* Animated Rotating Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 p-[3px] animate-spin-slow opacity-80 filter blur-[1px]"></div>
              
              {/* Profile Glass Card Body */}
              <div className={`relative w-[96%] h-[96%] rounded-full flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-300 ${
                theme === 'dark'
                  ? 'glass-panel-dark bg-slate-900/90 shadow-2xl shadow-cyan-950/60'
                  : 'glass-panel-light bg-white/95 shadow-2xl shadow-slate-300/80'
              }`}>
                
                {/* Background Tech Watermark Pattern */}
                <div className="absolute inset-0 opacity-10 bg-radial from-cyan-500 to-transparent"></div>
                
                {/* Avatar Visual with Developer Icon & Initials */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-cyan-500 via-teal-500 to-indigo-600 p-1 shadow-lg mb-3">
                  <div className={`w-full h-full rounded-full flex flex-col items-center justify-center ${
                    theme === 'dark' ? 'bg-slate-950' : 'bg-slate-900'
                  }`}>
                    <Code2 className="w-10 h-10 text-cyan-400 mb-0.5" />
                    <span className="text-white font-extrabold text-sm font-heading tracking-wider">SAHIL</span>
                  </div>
                </div>

                {/* Profile Title in Card */}
                <h2 className={`relative z-10 text-lg sm:text-xl font-bold font-heading ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Sahil Ansari
                </h2>
                <p className={`relative z-10 text-xs font-mono font-medium ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  CSE Engineer &amp; Full-Stack Dev
                </p>

                {/* Accuracy & Speed Micro-Indicator */}
                <div className={`relative z-10 mt-3 px-3 py-1 rounded-full text-[11px] font-medium flex items-center gap-1.5 ${
                  theme === 'dark' ? 'bg-slate-800/80 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>99.9% Data Accuracy Guaranteed</span>
                </div>

              </div>

              {/* Floating Tech Pill 1 - Top Left (Web Dev / HTML5 & CSS3) */}
              <div className={`absolute -top-2 left-2 sm:-left-4 px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs font-semibold shadow-lg border animate-bounce duration-1000 ${
                theme === 'dark'
                  ? 'glass-panel-dark bg-slate-900/95 border-cyan-500/40 text-cyan-300'
                  : 'glass-panel-light bg-white border-cyan-200 text-cyan-700'
              }`}>
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                <span>HTML5 / CSS3 / JS</span>
              </div>

              {/* Floating Tech Pill 2 - Top Right (Bootstrap 5 & PHP) */}
              <div className={`absolute -top-2 right-2 sm:-right-4 px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs font-semibold shadow-lg border ${
                theme === 'dark'
                  ? 'glass-panel-dark bg-slate-900/95 border-indigo-500/40 text-indigo-300'
                  : 'glass-panel-light bg-white border-indigo-200 text-indigo-700'
              }`}>
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Bootstrap &amp; PHP</span>
              </div>

              {/* Floating Tech Pill 3 - Bottom Left (Excel Data Entry) */}
              <div className={`absolute -bottom-3 left-0 sm:-left-6 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-xs font-semibold shadow-lg border ${
                theme === 'dark'
                  ? 'glass-panel-dark bg-slate-900/95 border-emerald-500/40 text-emerald-300'
                  : 'glass-panel-light bg-white border-emerald-200 text-emerald-700'
              }`}>
                <Sheet className="w-3.5 h-3.5 text-emerald-400" />
                <span>MS Excel &amp; Data Entry</span>
              </div>

              {/* Floating Tech Pill 4 - Bottom Right (MySQL / Python) */}
              <div className={`absolute -bottom-3 right-0 sm:-right-6 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-xs font-semibold shadow-lg border ${
                theme === 'dark'
                  ? 'glass-panel-dark bg-slate-900/95 border-cyan-500/40 text-cyan-300'
                  : 'glass-panel-light bg-white border-cyan-200 text-cyan-700'
              }`}>
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>MySQL &amp; Python</span>
              </div>

            </div>

          </div>

        </div>

        {/* Quick Stats Ribbon */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div 
                key={idx}
                id={`hero-stat-${idx}`}
                className={`p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'glass-panel-dark bg-slate-900/50 border-slate-800/80 hover:border-cyan-500/40'
                    : 'glass-panel-light bg-white/80 border-slate-200/80 hover:border-cyan-400 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold font-heading bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <div className={`p-2 rounded-xl ${
                    theme === 'dark' ? 'bg-slate-800 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                  }`}>
                    {idx === 0 && <Code2 className="w-4 h-4" />}
                    {idx === 1 && <CheckCircle2 className="w-4 h-4" />}
                    {idx === 2 && <Sparkles className="w-4 h-4" />}
                    {idx === 3 && <Terminal className="w-4 h-4" />}
                  </div>
                </div>
                <p className={`mt-1 text-xs sm:text-sm font-medium ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
