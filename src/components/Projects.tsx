import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Play, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Eye
} from 'lucide-react';
import { ThemeMode, ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  theme: ThemeMode;
  onContactClickWithSubject?: (subject: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ theme, onContactClickWithSubject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: PROJECTS_DATA.length },
    { id: 'ecommerce', label: 'E-Commerce', count: PROJECTS_DATA.filter(p => p.category === 'ecommerce').length },
    { id: 'grocery', label: 'Grocery Delivery', count: PROJECTS_DATA.filter(p => p.category === 'grocery').length },
    { id: 'business', label: 'Business & Corporate', count: PROJECTS_DATA.filter(p => p.category === 'business').length },
    { id: 'data-entry', label: 'Data Entry & Excel', count: PROJECTS_DATA.filter(p => p.category === 'data-entry').length },
    { id: 'web-dev', label: 'Web Development', count: PROJECTS_DATA.filter(p => p.category === 'web-dev').length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <section 
      id="projects" 
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A selection of live web applications, e-commerce storefronts, business platforms, and automated data entry systems.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                id={`project-filter-${tab.id}`}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 font-semibold'
                    : theme === 'dark'
                      ? 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-cyan-300 hover:text-slate-900 shadow-xs'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : theme === 'dark'
                      ? 'bg-slate-800 text-slate-400'
                      : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className={`rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 group ${
                theme === 'dark'
                  ? 'glass-panel-dark bg-slate-900/80 border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/40'
                  : 'glass-panel-light bg-white border-slate-200/90 hover:border-cyan-400 hover:shadow-xl hover:shadow-slate-200'
              }`}
            >
              {/* Project Visual Container with Zoom Effect */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-lg text-[11px] font-mono font-semibold bg-slate-950/80 text-cyan-300 backdrop-blur-md border border-cyan-500/30">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Overlay Quick View Button */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 rounded-xl bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg hover:bg-cyan-400 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Preview &amp; Test</span>
                  </button>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <h3 className={`text-lg font-bold font-heading group-hover:text-cyan-400 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-medium ${
                        theme === 'dark'
                          ? 'bg-slate-800 text-cyan-300 border border-slate-700/60'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-medium ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons: Live Demo & GitHub */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  
                  {/* Live Demo Button */}
                  <button
                    id={`project-demo-btn-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Live Demo</span>
                  </button>

                  {/* GitHub Button */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-github-btn-${project.id}`}
                      className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                        theme === 'dark'
                          ? 'border-slate-700 text-slate-200 hover:border-slate-600 hover:bg-slate-800'
                          : 'border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-100'
                      }`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Case Study & Live Simulator Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          theme={theme}
          onClose={() => setSelectedProject(null)}
          onSelectProjectForContact={(title) => {
            if (onContactClickWithSubject) {
              onContactClickWithSubject(`Inquiry regarding ${title}`);
            }
          }}
        />
      )}
    </section>
  );
};
