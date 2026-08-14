import React from 'react';
import { 
  Layers, 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Rocket, 
  Keyboard, 
  FileSpreadsheet, 
  Wrench, 
  Check, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { ThemeMode, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesProps {
  theme: ThemeMode;
  onInquireService: (serviceTitle: string) => void;
}

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Smartphone,
  ShoppingCart,
  Rocket,
  Keyboard,
  FileSpreadsheet,
  Wrench,
};

export const Services: React.FC<ServicesProps> = ({ theme, onInquireService }) => {
  return (
    <section 
      id="services" 
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-950 bg-grid-dark' : 'bg-slate-50/80 bg-grid-light'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-3 ${
            theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-600 border border-cyan-200'
          }`}>
            <Layers className="w-3.5 h-3.5" />
            <span>SOLUTIONS &amp; OFFERINGS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Professional <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Tailored digital craftsmanship—from custom responsive web coding to automated, high-precision spreadsheet management.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_DATA.map((service) => {
            const IconComponent = serviceIconMap[service.iconName] || Code;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group ${
                  theme === 'dark'
                    ? 'glass-panel-dark bg-slate-900/70 border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/30'
                    : 'glass-panel-light bg-white border-slate-200/90 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-100'
                }`}
              >
                {/* Top Section */}
                <div className="space-y-4">
                  
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-500/30' 
                        : 'bg-cyan-50 text-cyan-600 border border-cyan-100'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {service.badge && (
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full ${
                        service.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xs'
                          : theme === 'dark'
                            ? 'bg-slate-800 text-slate-300 border border-slate-700'
                            : 'bg-slate-100 text-slate-700'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className={`text-xl font-bold font-heading mb-2 group-hover:text-cyan-400 transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Features Checklist */}
                  <div className="pt-2 space-y-2 border-t border-slate-200/50 dark:border-slate-800/80">
                    <span className={`text-xs font-mono uppercase tracking-wider font-semibold block mb-1 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      What&apos;s Included:
                    </span>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Deliverables & Inquiry CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800/80 space-y-3">
                  <div className={`p-3 rounded-xl text-xs font-medium ${
                    theme === 'dark' ? 'bg-slate-950/70 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-700 border border-slate-200'
                  }`}>
                    <span className="font-semibold text-cyan-500 block mb-0.5">📦 Deliverable:</span>
                    <span>{service.deliverables}</span>
                  </div>

                  <button
                    id={`inquire-service-${service.id}`}
                    onClick={() => onInquireService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white border border-cyan-500/30 transition-all duration-200 cursor-pointer group/btn"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Client Guarantee Ribbon */}
        <div className={`mt-14 p-6 rounded-2xl border text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 ${
          theme === 'dark' 
            ? 'glass-panel-dark bg-slate-900/60 border-slate-800 text-slate-300' 
            : 'glass-panel-light bg-white border-slate-200 text-slate-700 shadow-sm'
        }`}>
          <ShieldCheck className="w-8 h-8 text-emerald-500 shrink-0" />
          <div className="text-left text-xs sm:text-sm">
            <p className="font-bold font-heading">100% Quality &amp; On-Time Delivery Guarantee</p>
            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
              Every web project is verified for mobile responsiveness and performance. Every data entry task undergoes double-pass validation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
