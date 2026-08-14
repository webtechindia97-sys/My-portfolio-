import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  Sheet, 
  Sparkles, 
  CheckCircle, 
  Cpu, 
  Globe, 
  Clock, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { ThemeMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  theme: ThemeMode;
  onExploreProjects: () => void;
  onContactMe: () => void;
}

export const About: React.FC<AboutProps> = ({ theme, onExploreProjects, onContactMe }) => {
  const highlights = [
    {
      icon: Code2,
      title: 'Modern Web Engineering',
      desc: 'Building responsive, standards-compliant web interfaces with HTML5, CSS3, JavaScript, Bootstrap 5, and PHP backends.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Sheet,
      title: 'Precision Data Entry & Excel',
      desc: 'Expertise in high-speed data transcription, advanced formulas (XLOOKUP, Pivot Tables), data sanitization, and MySQL pipelines.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Cpu,
      title: 'Computer Science Foundation',
      desc: 'Diploma in Computer Science Engineering providing deep understanding of algorithms, database schema design, and software lifecycle.',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Sparkles,
      title: 'AI & Prompt Engineering',
      desc: 'Leveraging AI LLMs and automation tools to accelerate development workflows, debug efficiently, and enhance productivity.',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const quickFacts = [
    { label: 'Degree', value: 'Diploma in Computer Science Engineering', icon: GraduationCap },
    { label: 'Role', value: 'Web Developer & Data Entry Specialist', icon: Code2 },
    { label: 'Experience', value: '2+ Years of Practical Freelance & Project Experience', icon: Clock },
    { label: 'Accuracy Standard', value: '99.9% Error-Free Quality Guarantee', icon: ShieldCheck },
    { label: 'Availability', value: 'Full-Time / Freelance / Contract (Remote)', icon: Globe },
    { label: 'Core Mission', value: 'Crafting practical digital solutions that deliver results', icon: Award },
  ];

  return (
    <section 
      id="about" 
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900/60' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-3 ${
            theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-600 border border-cyan-200'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            About <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Sahil Ansari</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A Diploma Computer Science Engineer dedicated to modern web craft and precision data management.
          </p>
        </div>

        {/* Main Grid: Story & Bio on Left, Highlights Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Detailed Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              theme === 'dark' 
                ? 'glass-panel-dark bg-slate-900/80 border-slate-800' 
                : 'glass-panel-light bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl sm:text-2xl font-bold font-heading mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Bridging Creative Web Development with Exacting Data Management
              </h3>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <p>
                  I am <strong>Sahil Ansari</strong>, a passionate <span className="text-cyan-500 font-semibold">Diploma Computer Science Engineer</span> with a strong foundation in software principles, responsive frontend design, and backend data manipulation.
                </p>
                <p>
                  My journey began with a curiosity about how digital interfaces work under the hood. Over the years, I honed dual proficiencies: crafting fast, accessible, and user-centric websites (HTML5, CSS3, JavaScript, Bootstrap 5, PHP, MySQL) while mastering high-speed, 100% accurate data entry and advanced MS Excel workflows for enterprise efficiency.
                </p>
                <p>
                  Whether creating an interactive e-commerce store, building a dynamic business portal, or structuring complex spreadsheets with automated formulas and pivot tables, I treat every project with rigorous attention to detail, code hygiene, and timely delivery.
                </p>
              </div>

              {/* Core Pillars Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                {[
                  'Clean & Standards-Compliant Code',
                  'Mobile-First Responsive Designs',
                  '99.9% Data Accuracy & Integrity',
                  'Prompt AI & Workflow Automation',
                  'Fast Turnaround & Clear Communication',
                  'Cross-Browser Tested & Verified'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons in About */}
              <div className="flex flex-wrap items-center gap-3 pt-6">
                <button
                  id="about-btn-projects"
                  onClick={onExploreProjects}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 text-white font-semibold text-xs sm:text-sm hover:bg-cyan-600 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  Explore Featured Projects
                </button>
                <button
                  id="about-btn-contact"
                  onClick={onContactMe}
                  className={`px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm border transition-all cursor-pointer ${
                    theme === 'dark'
                      ? 'border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400'
                      : 'border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-600'
                  }`}
                >
                  Get In Touch Directly
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Key Facts Card & Skill Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Facts Card */}
            <div className={`p-6 rounded-2xl border transition-all ${
              theme === 'dark'
                ? 'glass-panel-dark bg-slate-900/80 border-slate-800'
                : 'glass-panel-light bg-white border-slate-200 shadow-sm'
            }`}>
              <h4 className={`text-base font-bold font-heading mb-4 flex items-center gap-2 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
              }`}>
                <Sparkles className="w-4 h-4" />
                <span>Professional Snapshot</span>
              </h4>

              <div className="space-y-3.5">
                {quickFacts.map((fact, idx) => {
                  const Icon = fact.icon;
                  return (
                    <div 
                      key={idx} 
                      className={`p-3 rounded-xl border transition-all ${
                        theme === 'dark' 
                          ? 'bg-slate-950/60 border-slate-800/80 hover:border-cyan-500/30' 
                          : 'bg-slate-50/90 border-slate-200/80 hover:border-cyan-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg shrink-0 ${
                          theme === 'dark' ? 'bg-slate-800 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className={`text-xs font-mono uppercase tracking-wider ${
                            theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            {fact.label}
                          </p>
                          <p className={`text-xs sm:text-sm font-semibold mt-0.5 ${
                            theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                          }`}>
                            {fact.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Highlights Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                id={`about-highlight-${idx}`}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'glass-panel-dark bg-slate-900/60 border-slate-800 hover:border-cyan-500/50'
                    : 'glass-panel-light bg-white border-slate-200/90 hover:border-cyan-400 shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md mb-3.5`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className={`text-base font-bold font-heading mb-1.5 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h4>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
