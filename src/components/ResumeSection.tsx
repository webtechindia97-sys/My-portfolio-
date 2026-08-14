import React from 'react';
import { 
  FileText, 
  Download, 
  Sparkles, 
  Eye, 
  CheckCircle2, 
  Award,
  ArrowRight
} from 'lucide-react';
import { ThemeMode } from '../types';

interface ResumeSectionProps {
  theme: ThemeMode;
  onOpenResumeModal: () => void;
  onContactClick: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ 
  theme, 
  onOpenResumeModal, 
  onContactClick 
}) => {
  return (
    <section 
      id="resume-cta" 
      className={`py-16 sm:py-20 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-950 bg-grid-dark' : 'bg-slate-50/90 bg-grid-light'
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-teal-500/10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`p-8 sm:p-12 rounded-3xl border text-center transition-all shadow-2xl ${
          theme === 'dark'
            ? 'glass-panel-dark bg-slate-900/90 border-cyan-500/30 shadow-cyan-950/40'
            : 'glass-panel-light bg-white border-cyan-200 shadow-slate-200'
        }`}>
          
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 ${
            theme === 'dark' ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
          }`}>
            <FileText className="w-3.5 h-3.5" />
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>

          {/* Main Prompt Headline */}
          <h2 className={`text-2xl sm:text-4xl font-extrabold font-heading tracking-tight max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Want to know more about my <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">skills and experience</span>?
          </h2>

          <p className={`mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Download my comprehensive resume covering verified web development projects, Diploma Computer Science Engineering credentials, and high-accuracy data entry achievements.
          </p>

          {/* Highlights checklist pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 my-6 text-xs sm:text-sm font-medium">
            <span className="inline-flex items-center gap-1.5 text-emerald-500">
              <CheckCircle2 className="w-4 h-4" />
              <span>Full-Stack Web Stack</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-cyan-500">
              <CheckCircle2 className="w-4 h-4" />
              <span>MS Excel &amp; MySQL Specialist</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-indigo-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineering Distinction</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              id="cta-download-resume-btn"
              onClick={onOpenResumeModal}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <button
              id="cta-preview-cv-btn"
              onClick={onOpenResumeModal}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-600 hover:bg-slate-50 bg-white'
              }`}
            >
              <Eye className="w-4 h-4 text-cyan-500" />
              <span>Preview Full CV</span>
            </button>

            <button
              id="cta-contact-fast-btn"
              onClick={onContactClick}
              className={`inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-xs font-semibold ${
                theme === 'dark' ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-500 hover:text-cyan-600'
              } transition-colors cursor-pointer`}
            >
              <span>Or Direct Message Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
