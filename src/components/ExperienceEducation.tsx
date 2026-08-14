import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle, 
  Award,
  Layers,
  Building2,
  Code2
} from 'lucide-react';
import { ThemeMode } from '../types';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';

interface ExperienceEducationProps {
  theme: ThemeMode;
}

export const ExperienceEducation: React.FC<ExperienceEducationProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'experience' | 'education'>('both');

  return (
    <section 
      id="experience" 
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900/60' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-3 ${
            theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-600 border border-cyan-200'
          }`}>
            <GraduationCap className="w-3.5 h-3.5" />
            <span>CAREER PATH &amp; ACADEMICS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Experience &amp; <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Demonstrated track record in web engineering, data analysis, and an accredited Computer Science Engineering foundation.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex p-1.5 rounded-2xl border ${
            theme === 'dark' ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              id="tab-view-all"
              onClick={() => setActiveTab('both')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'both'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm font-semibold'
                  : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Side-by-Side View
            </button>
            <button
              id="tab-view-exp"
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm font-semibold'
                  : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Work Experience ({EXPERIENCE_DATA.length})
            </button>
            <button
              id="tab-view-edu"
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm font-semibold'
                  : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Education ({EDUCATION_DATA.length})
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className={`grid gap-10 ${
          activeTab === 'both' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          
          {/* Column 1: Experience Timeline */}
          {(activeTab === 'both' || activeTab === 'experience') && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold font-heading ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    Work &amp; Project Experience
                  </h3>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    Web Development &amp; Data Operations
                  </p>
                </div>
              </div>

              {/* Experience Items */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-8">
                {EXPERIENCE_DATA.map((item) => (
                  <div key={item.id} className="relative group">
                    
                    {/* Timeline Node Marker */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform"></div>

                    {/* Timeline Card */}
                    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                      theme === 'dark'
                        ? 'glass-panel-dark bg-slate-900/80 border-slate-800 hover:border-cyan-500/40'
                        : 'glass-panel-light bg-white border-slate-200 hover:border-cyan-400 shadow-sm'
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className={`text-base font-bold font-heading ${
                            theme === 'dark' ? 'text-white' : 'text-slate-900'
                          }`}>
                            {item.role}
                          </h4>
                          <p className="text-xs font-semibold text-cyan-500 flex items-center gap-1.5 mt-0.5">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>{item.companyOrType}</span>
                          </p>
                        </div>

                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium ${
                          theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {item.period}
                        </span>
                      </div>

                      <p className={`text-xs sm:text-sm leading-relaxed mt-2.5 ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {item.description}
                      </p>

                      {/* Achievements List */}
                      <div className="mt-4 space-y-1.5">
                        {item.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                              {ach}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/60">
                        {item.skillsUsed.map((sk, idx) => (
                          <span 
                            key={idx}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                              theme === 'dark' ? 'bg-slate-800/80 text-cyan-300' : 'bg-cyan-50 text-cyan-800'
                            }`}
                          >
                            {sk}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: Education Timeline */}
          {(activeTab === 'both' || activeTab === 'education') && (
            <div id="education" className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold font-heading ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    Academic Education
                  </h3>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    Engineering Diploma &amp; Schooling
                  </p>
                </div>
              </div>

              {/* Education Items */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 space-y-8">
                {EDUCATION_DATA.map((item) => (
                  <div key={item.id} className="relative group">
                    
                    {/* Timeline Node Marker */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 group-hover:scale-125 transition-transform"></div>

                    {/* Education Card */}
                    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                      theme === 'dark'
                        ? 'glass-panel-dark bg-slate-900/80 border-slate-800 hover:border-indigo-500/40'
                        : 'glass-panel-light bg-white border-slate-200 hover:border-indigo-400 shadow-sm'
                    }`}>
                      
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold mb-1.5 ${
                            theme === 'dark' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-50 text-indigo-700'
                          }`}>
                            {item.badge}
                          </span>
                          <h4 className={`text-base sm:text-lg font-bold font-heading ${
                            theme === 'dark' ? 'text-white' : 'text-slate-900'
                          }`}>
                            {item.degree}
                          </h4>
                          <p className="text-xs font-medium text-slate-400 mt-0.5">
                            {item.institution}
                          </p>
                        </div>

                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium ${
                          theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {item.period}
                        </span>
                      </div>

                      {item.scoreOrGrade && (
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold my-2.5 ${
                          theme === 'dark' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}>
                          <Award className="w-3.5 h-3.5" />
                          <span>{item.scoreOrGrade}</span>
                        </div>
                      )}

                      {/* Highlights */}
                      <div className="mt-3 space-y-2">
                        {item.keyHighlights.map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                            <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                            <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}>
                              {hl}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
