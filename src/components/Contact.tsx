import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageSquare, 
  Clock, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { ThemeMode, ContactFormData } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  theme: ThemeMode;
  prefilledSubject?: string;
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ 
  theme, 
  prefilledSubject = '', 
  onShowToast 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: prefilledSubject || '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Update subject if parent changes it
  React.useEffect(() => {
    if (prefilledSubject) {
      setFormData(prev => ({ ...prev, subject: prefilledSubject }));
    }
  }, [prefilledSubject]);

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject';
    if (!formData.message.trim()) newErrors.message = 'Please provide your message details';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Message sent successfully! Sahil will reply shortly.');
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section 
      id="contact" 
      className={`py-20 lg:py-28 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900/80' : 'bg-slate-100/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-3 ${
            theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-600 border border-cyan-200'
          }`}>
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET&apos;S TALK BUSINESS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Get In <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Have a web development project, need high-speed data entry, or want to discuss a contract role? Send a message below.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              theme === 'dark'
                ? 'glass-panel-dark bg-slate-900/90 border-slate-800'
                : 'glass-panel-light bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold font-heading mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Contact Information
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Feel free to reach out directly via email, phone, or connect on professional networks.
              </p>

              {/* Direct Info Cards List */}
              <div className="space-y-4">
                
                {/* 1. Email */}
                <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                  theme === 'dark' ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase text-slate-400">Email Address</p>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className={`text-xs sm:text-sm font-semibold hover:text-cyan-500 transition-colors break-all ${
                          theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className={`p-2 rounded-lg border transition-all cursor-pointer ${
                      theme === 'dark' ? 'border-slate-800 hover:bg-slate-800 text-slate-300' : 'border-slate-300 hover:bg-slate-200 text-slate-700'
                    }`}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* 2. Phone */}
                <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                  theme === 'dark' ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-slate-400">Phone &amp; WhatsApp</p>
                    <a 
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
                      className={`text-xs sm:text-sm font-semibold hover:text-emerald-500 transition-colors ${
                        theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                      }`}
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* 3. Location */}
                <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                  theme === 'dark' ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-slate-400">Work Location</p>
                    <p className={`text-xs sm:text-sm font-semibold ${
                      theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Connections */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <p className="text-xs font-mono uppercase text-slate-400 font-semibold">
                  Social Profiles &amp; Code:
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-social-github"
                    className={`flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-950 border-slate-800 text-slate-200 hover:border-cyan-500 hover:text-cyan-400'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-cyan-600 hover:text-cyan-600'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-social-linkedin"
                    className={`flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-950 border-slate-800 text-slate-200 hover:border-indigo-500 hover:text-indigo-400'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600'
                    }`}
                  >
                    <Linkedin className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className={`mt-6 p-3 rounded-xl flex items-center gap-2.5 text-xs font-medium ${
                theme === 'dark' ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-800 border border-cyan-200'
              }`}>
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Quick Response Guarantee: typically replies within 2–4 hours</span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              theme === 'dark'
                ? 'glass-panel-dark bg-slate-900/90 border-slate-800'
                : 'glass-panel-light bg-white border-slate-200 shadow-sm'
            }`}>
              
              <div className="mb-6">
                <h3 className={`text-xl sm:text-2xl font-bold font-heading ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Send Sahil a Direct Message
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Fill in the project details or inquiry below for an instant quote &amp; consultation.
                </p>
              </div>

              {/* Success Banner if message was submitted */}
              {isSubmitted ? (
                <div className={`p-8 rounded-2xl text-center space-y-4 border animate-fade-in ${
                  theme === 'dark' ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'
                }`}>
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-emerald-400">
                    Message Received Successfully!
                  </h4>
                  <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Thank you, <strong>{formData.name}</strong>. Sahil Ansari has received your inquiry regarding <em>&quot;{formData.subject}&quot;</em> and will get back to you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all cursor-pointer shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email (2 cols) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label 
                        htmlFor="contact-name"
                        className={`text-xs font-semibold font-mono ${
                          theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Your Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border transition-all ${
                          errors.name
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                            : theme === 'dark'
                              ? 'bg-slate-950/70 border-slate-800 text-slate-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                              : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label 
                        htmlFor="contact-email"
                        className={`text-xs font-semibold font-mono ${
                          theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                            : theme === 'dark'
                              ? 'bg-slate-950/70 border-slate-800 text-slate-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                              : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Phone & Subject (2 cols) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label 
                        htmlFor="contact-phone"
                        className={`text-xs font-semibold font-mono ${
                          theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="e.g. +1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border transition-all ${
                          theme === 'dark'
                            ? 'bg-slate-950/70 border-slate-800 text-slate-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                        }`}
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label 
                        htmlFor="contact-subject"
                        className={`text-xs font-semibold font-mono ${
                          theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Subject / Project Scope <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="e.g. E-Commerce Website Development"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border transition-all ${
                          errors.subject
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                            : theme === 'dark'
                              ? 'bg-slate-950/70 border-slate-800 text-slate-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                              : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="contact-message"
                      className={`text-xs font-semibold font-mono ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Project Description &amp; Requirements <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Please tell Sahil about your website goals, required features, timeline, or data entry details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm border transition-all resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : theme === 'dark'
                            ? 'bg-slate-950/70 border-slate-800 text-slate-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending Your Message...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-mono pt-1">
                    🔒 Client information is kept strictly confidential.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
