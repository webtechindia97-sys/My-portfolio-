import React, { useRef } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Sheet, 
  Award,
  Sparkles,
  Github,
  Linkedin
} from 'lucide-react';
import { ThemeMode } from '../types';
import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCE_DATA, EDUCATION_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  theme: ThemeMode;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ theme, onClose, onShowToast }) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = React.useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate clean text-based / printable format download
    const element = document.createElement('a');
    const resumeText = `
SAHIL ANSARI - CURRICULUM VITAE
Web Developer & Data Entry Professional
Diploma in Computer Science Engineering

CONTACT INFORMATION:
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
Status: ${PERSONAL_INFO.status}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.bio}

CORE TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Responsive Web Design
- Backend & DB: PHP, Python, MySQL
- Data & Productivity: MS Excel (VLOOKUP, Pivot Tables, Formulas), High-Speed Data Entry (60+ WPM, 99.9% Accuracy)
- Tools & AI: Git, GitHub, Prompt Engineering, VS Code

EDUCATION:
1. ${EDUCATION_DATA[0].degree}
   - ${EDUCATION_DATA[0].institution} (${EDUCATION_DATA[0].status})
   - Grade: ${EDUCATION_DATA[0].scoreOrGrade}
2. ${EDUCATION_DATA[1].degree}
   - ${EDUCATION_DATA[1].institution} (${EDUCATION_DATA[1].status})

WORK EXPERIENCE:
${EXPERIENCE_DATA.map(exp => `
* ${exp.role} | ${exp.companyOrType} (${exp.period})
  ${exp.description}
  Achievements:
  ${exp.achievements.map(a => `  - ${a}`).join('\n')}
`).join('\n')}

FEATURED PROJECTS:
${PROJECTS_DATA.map(p => `
* ${p.title} (${p.categoryLabel})
  Tech: ${p.technologies.join(', ')}
  Summary: ${p.description}
`).join('\n')}

---
Sahil Ansari © 2026 — Designed & Developed with passion.
    `;

    const file = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Sahil_Ansari_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    onShowToast('Resume downloaded successfully!');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(
      `Sahil Ansari - Web Developer & Data Entry Specialist | Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Portfolio: https://sahil-ansari-dev.com`
    );
    setCopied(true);
    onShowToast('Contact details copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="resume-modal-container"
        className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col transition-all ${
          theme === 'dark' 
            ? 'glass-panel-dark bg-slate-900 border-slate-700 text-slate-100' 
            : 'glass-panel-light bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className={`flex flex-wrap items-center justify-between px-6 py-4 border-b gap-3 ${
          theme === 'dark' ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-heading">
                Sahil Ansari — Official Resume / CV
              </h3>
              <p className="text-xs font-mono text-cyan-500">
                Diploma Computer Science Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-copy-btn"
              onClick={handleCopyText}
              className={`p-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
              title="Copy Summary"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">Copy Info</span>
            </button>

            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className={`p-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              id="resume-download-btn"
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center gap-1.5 shadow-md hover:opacity-95 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                theme === 'dark' 
                  ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' 
                  : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950/20 text-xs sm:text-sm print:p-0 print:bg-white print:text-black">
          
          <div ref={resumeRef} className="space-y-8">
            
            {/* Header Document Area */}
            <div className="border-b border-slate-200/60 dark:border-slate-800 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-cyan-400">
                    SAHIL ANSARI
                  </h1>
                  <p className="text-sm font-semibold tracking-wide mt-1 text-slate-200">
                    Web Developer | Data Entry Professional | Diploma CS Engineer
                  </p>
                </div>

                <div className="space-y-1 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>India (Available for Remote Worldwide)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Professional Profile</span>
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Diploma Computer Science Engineer with solid practical expertise in developing responsive, accessible, and fast web applications alongside executing high-volume, error-free data entry and advanced MS Excel spreadsheet automation. Dedicated to writing clean semantic code, ensuring 99.9% data accuracy, and delivering exceptional business outcomes.
              </p>
            </div>

            {/* Section: Core Skills Matrix */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Technical Skills Matrix</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-1">Frontend Development:</span>
                  <p className="text-slate-300">HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Responsive Web Design, Flexbox/Grid</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-1">Backend &amp; Databases:</span>
                  <p className="text-slate-300">PHP, Python scripting, MySQL Relational Database, REST API Endpoints</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="font-bold text-emerald-300 block mb-1">Data Entry &amp; MS Excel:</span>
                  <p className="text-slate-300">MS Excel (VLOOKUP, XLOOKUP, Pivot Tables, Macros), Data Cleansing, 60+ WPM Typing (99.9% Accuracy)</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="font-bold text-indigo-300 block mb-1">Version Control &amp; AI Tools:</span>
                  <p className="text-slate-300">Git, GitHub, Prompt Engineering (Gemini, Claude, GPT), VS Code, Cross-Browser Testing</p>
                </div>
              </div>
            </div>

            {/* Section: Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Education</span>
              </h2>

              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-sm text-slate-100">{edu.degree}</h3>
                      <p className="text-xs text-slate-400">{edu.institution} • <span className="text-emerald-400 font-semibold">{edu.scoreOrGrade}</span></p>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Work Experience &amp; Accomplishments</span>
              </h2>

              <div className="space-y-4">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <h3 className="font-bold text-sm text-slate-100">{exp.role} <span className="text-cyan-400 font-normal">| {exp.companyOrType}</span></h3>
                      <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                    </div>
                    <p className="text-xs text-slate-300">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 pl-1">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Key Projects Showcase */}
            <div className="space-y-3 pt-2">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Highlighted Portfolio Projects</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {PROJECTS_DATA.slice(0, 4).map((p) => (
                  <div key={p.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <p className="font-bold text-slate-200">{p.title}</p>
                    <p className="text-[11px] font-mono text-cyan-400 mt-0.5">{p.technologies.join(' • ')}</p>
                    <p className="text-slate-400 mt-1 text-[11px]">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
