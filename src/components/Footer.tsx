import React from 'react';
import { 
  Heart, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code2, 
  Sparkles,
  Sheet
} from 'lucide-react';
import { ThemeMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="main-footer"
      className={`border-t transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-slate-950 border-slate-800/80 text-slate-400'
          : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200/60 dark:border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                <span>SA</span>
              </div>
              <div>
                <span className={`font-bold text-lg tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Sahil Ansari
                </span>
                <p className="text-xs font-mono text-cyan-500">
                  Web Developer &amp; Data Entry Professional
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              Diploma Computer Science Engineer building modern, responsive, high-speed websites and delivering 99.9% accurate data entry solutions.
            </p>

            {/* Social Icons with Smooth Hover Animations */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                id="footer-social-github"
                aria-label="Sahil Ansari GitHub"
                className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-cyan-600 hover:border-cyan-400 hover:shadow-md'
                }`}
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                id="footer-social-linkedin"
                aria-label="Sahil Ansari LinkedIn"
                className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-400 hover:shadow-md'
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="footer-social-email"
                aria-label="Email Sahil Ansari"
                className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-400 hover:shadow-md'
                }`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                id="footer-social-whatsapp"
                aria-label="WhatsApp Sahil Ansari"
                className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-400 hover:shadow-md'
                }`}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['About', 'Skills', 'Projects', 'Services', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {item} Section
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Specialized Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Responsive Website Development</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>E-Commerce &amp; Grocery Delivery Portals</span>
              </li>
              <li className="flex items-center gap-2">
                <Sheet className="w-3.5 h-3.5 text-emerald-400" />
                <span>MS Excel &amp; 99.9% Accurate Data Entry</span>
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>PHP &amp; MySQL Database Systems</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Required Exact Copyright Text */}
          <p className="font-medium text-center sm:text-left">
            Sahil Ansari &copy; 2026 — Designed &amp; Developed with passion.
          </p>

          {/* Back to top button */}
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-200 cursor-pointer ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-800'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-cyan-500 hover:text-cyan-600 hover:bg-white shadow-xs'
            }`}
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};
