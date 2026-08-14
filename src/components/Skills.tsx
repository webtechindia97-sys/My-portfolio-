import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  LayoutGrid, 
  Smartphone, 
  Server, 
  Terminal, 
  Database, 
  Sheet, 
  Keyboard, 
  GitBranch, 
  Sparkles,
  Layers,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { ThemeMode, SkillItem } from '../types';
import { SKILLS_DATA } from '../data/portfolioData';

interface SkillsProps {
  theme: ThemeMode;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Palette,
  FileCode2,
  LayoutGrid,
  Smartphone,
  Server,
  Terminal,
  Database,
  Sheet,
  Keyboard,
  GitBranch,
  Sparkles,
};

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'data' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Competencies', count: SKILLS_DATA.length },
    { id: 'frontend', label: 'Frontend & UI', count: SKILLS_DATA.filter(s => s.category === 'frontend').length },
    { id: 'backend', label: 'Backend & Database', count: SKILLS_DATA.filter(s => s.category === 'backend').length },
    { id: 'data', label: 'Data Entry & MS Excel', count: SKILLS_DATA.filter(s => s.category === 'data').length },
    { id: 'tools', label: 'Tools & AI Automation', count: SKILLS_DATA.filter(s => s.category === 'tools').length },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === activeCategory);

  return (
    <section 
      id="skills" 
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-950 bg-grid-dark' : 'bg-slate-50/80 bg-grid-light'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-3 ${
            theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-600 border border-cyan-200'
          }`}>
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Skills &amp; <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A verified toolkit combining frontend precision, robust backend management, and rapid data accuracy.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`skill-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 font-semibold'
                    : theme === 'dark'
                      ? 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-cyan-300 hover:text-slate-900 shadow-xs'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : theme === 'dark'
                      ? 'bg-slate-800 text-slate-400'
                      : 'bg-slate-100 text-slate-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            
            return (
              <div
                key={skill.id}
                id={`skill-card-${skill.id}`}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'glass-panel-dark bg-slate-900/70 border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-950/30'
                    : 'glass-panel-light bg-white border-slate-200/90 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-100'
                }`}
              >
                {/* Card Top Row: Icon + Name + Percentage */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${
                      theme === 'dark'
                        ? 'bg-slate-800/90 text-cyan-400 border border-cyan-500/20'
                        : 'bg-cyan-50 text-cyan-600 border border-cyan-100'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-base font-bold font-heading ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        {skill.name}
                      </h3>
                      <span className={`text-xs font-mono uppercase tracking-wider ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {skill.experience}
                      </span>
                    </div>
                  </div>

                  {/* Level percentage */}
                  <div className="text-right">
                    <span className="text-lg font-bold font-mono bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className={`w-full h-2 rounded-full overflow-hidden my-3 ${
                  theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'
                }`}>
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed mt-2 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {skill.description}
                </p>

                {/* Badges / Category Tag */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 text-xs">
                  <span className={`capitalize font-mono text-[11px] ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                  }`}>
                    #{skill.category}
                  </span>
                  {skill.popular && (
                    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      theme === 'dark' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Specialist</span>
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Dual Core Summary Highlight Box */}
        <div className={`mt-14 p-6 sm:p-8 rounded-2xl border transition-all ${
          theme === 'dark'
            ? 'glass-panel-dark bg-slate-900/80 border-slate-800'
            : 'glass-panel-light bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-2xl shrink-0 ${
                theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
              }`}>
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-base font-bold font-heading mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Dual Expertise Advantage
                </h4>
                <p className={`text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Unlike single-discipline developers, Sahil combines clean frontend/backend programming with rapid, meticulous database entry and spreadsheet architecture.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2.5 text-xs font-mono">
              <span className={`px-3 py-1.5 rounded-lg border ${
                theme === 'dark' ? 'bg-slate-950 border-slate-800 text-cyan-400' : 'bg-slate-50 border-slate-200 text-cyan-700'
              }`}>
                🚀 Fast Turnaround
              </span>
              <span className={`px-3 py-1.5 rounded-lg border ${
                theme === 'dark' ? 'bg-slate-950 border-slate-800 text-emerald-400' : 'bg-slate-50 border-slate-200 text-emerald-700'
              }`}>
                🎯 99.9% Data Accuracy
              </span>
              <span className={`px-3 py-1.5 rounded-lg border ${
                theme === 'dark' ? 'bg-slate-950 border-slate-800 text-indigo-400' : 'bg-slate-50 border-slate-200 text-indigo-700'
              }`}>
                📱 100% Mobile Ready
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
