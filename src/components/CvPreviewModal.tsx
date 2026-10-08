import React, { useEffect, useState } from 'react';
import {
  X,
  FileDown,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Target,
  User,
  Wrench,
  CheckCircle2,
  Globe,
  Clock,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Layers,
  FileText
} from 'lucide-react';
import { Logo } from './Logo';
import { downloadCv } from '../utils/downloadCv';

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvPreviewModal: React.FC<CvPreviewModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'ui' | 'pdf'>('ui');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    downloadCv('Abu_Raihan_CV.pdf');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-preview-title"
    >
      <div
        className="relative w-full max-w-5xl h-[92vh] sm:h-[90vh] bg-[#08090C] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-zinc-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-zinc-950/95 border-b border-zinc-800 shrink-0 gap-3">
          
          {/* Identity & Back */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors cursor-pointer shrink-0"
              title="Back to portfolio"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back</span>
            </button>

            <div className="flex items-center gap-2.5 truncate">
              <Logo variant="mark" size={22} />
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <h3 id="cv-preview-title" className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                    Md Abu Raihan — CV Preview
                  </h3>
                  <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Official Document
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono hidden sm:block">
                  Abu_Raihan_CV.pdf
                </p>
              </div>
            </div>
          </div>

          {/* View Mode Toggle & Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* View Mode Tabs */}
            <div className="hidden sm:inline-flex items-center p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveTab('ui')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'ui'
                    ? 'bg-red-600 text-white font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Website UI</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pdf')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'pdf'
                    ? 'bg-red-600 text-white font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileText className="w-3 h-3" />
                <span>PDF Document</span>
              </button>
            </div>

            {/* Primary Action: Download CV */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-sm transition-all cursor-pointer group"
              title="Download official CV PDF"
            >
              <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer"
              aria-label="Close preview"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 w-full bg-[#08090C] overflow-y-auto">
          
          {activeTab === 'ui' ? (
            /* ============================================================ */
            /* TAB 1: WEBSITE UI BASED PREVIEW (Signature Dark/Red Theme)  */
            /* ============================================================ */
            <div className="max-w-4xl mx-auto p-4 sm:p-8 space-y-6">
              
              {/* CV Top Header Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0e14] border border-zinc-800 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-950/20 blur-3xl pointer-events-none rounded-full" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>Curriculum Vitae</span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                      MD ABU RAIHAN
                    </h1>

                    <p className="text-sm sm:text-base font-medium text-red-400 mt-1">
                      Computer Science Diploma Student | Customer Service & Technical Support
                    </p>
                  </div>

                  {/* Contact Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 text-xs font-mono text-zinc-300">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                      <Phone className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <a href="tel:01619887937" className="hover:text-white">01619887937</a>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                      <Mail className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <a href="mailto:raihanns143@gmail.com" className="hover:text-white">raihanns143@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                      <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span>Saheb Bazar, Rajshahi</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                      <Globe className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span>iamraihan.xo.je</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2-Column Responsive Body Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* LEFT COLUMN: Experience, Education, Profile */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Profile */}
                  <div className="p-6 rounded-2xl bg-[#0c0e14] border border-zinc-800 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 font-bold mb-3">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Profile</span>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Motivated and customer-focused Diploma in Computer Science student with 1 year of work experience at Online Telecom, Naogaon. Interested in technology, smartphones, accessories and customer support, with a willingness to learn and grow in a professional retail environment.
                    </p>
                  </div>

                  {/* Work Experience */}
                  <div className="p-6 rounded-2xl bg-[#0c0e14] border border-zinc-800 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 font-bold mb-4">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Work Experience</span>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h4 className="text-base font-bold text-white">Online Telecom, Naogaon</h4>
                        <span className="text-xs font-mono text-emerald-400">1 Year</span>
                      </div>
                      <p className="text-xs font-medium text-zinc-400 italic mb-3">
                        Telecom / Customer Support
                      </p>

                      <ul className="space-y-2 text-xs text-zinc-300">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                          <span>Customer assistance and day-to-day service support.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                          <span>Basic handling of telecom-related products and services.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                          <span>Communicating with customers and understanding requirements.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                          <span>Working responsibly in a customer-facing environment.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="p-6 rounded-2xl bg-[#0c0e14] border border-zinc-800 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 font-bold mb-4">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Education</span>
                    </div>

                    <div className="space-y-3">
                      {/* Diploma */}
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="font-bold text-white text-sm">
                            Diploma in Computer Science
                          </h4>
                          <span className="text-xs font-mono text-emerald-400">
                            Ongoing · 8th Semester
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">
                          Bangladesh Polytechnic Institute
                        </p>
                      </div>

                      {/* SSC */}
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="font-bold text-white text-sm">
                            Secondary School Certificate (SSC)
                          </h4>
                          <span className="text-xs font-mono text-zinc-400">
                            GPA 4.86 · 2022
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">
                          Ahsanullah Memorial Government High School
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Career Objective */}
                  <div className="p-6 rounded-2xl bg-[#0c0e14] border border-zinc-800 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 font-bold mb-3">
                      <Target className="w-3.5 h-3.5" />
                      <span>Career Objective</span>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      To build a career in a customer-oriented technology and retail environment where I can apply my computer knowledge, communication skills and practical experience while continuously learning new technologies.
                    </p>
                  </div>

                  {/* Personal Details */}
                  <div className="p-6 rounded-2xl bg-[#0c0e14] border border-zinc-800 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 font-bold mb-4">
                      <User className="w-3.5 h-3.5" />
                      <span>Personal Details</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-850">
                        <span className="text-zinc-500 font-mono block text-[11px] mb-0.5">Date of Birth</span>
                        <span className="text-zinc-200 font-medium">15 October 2005</span>
                      </div>
                      <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-850">
                        <span className="text-zinc-500 font-mono block text-[11px] mb-0.5">Address</span>
                        <span className="text-zinc-200 font-medium">Saheb Bazar, Rajshahi</span>
                      </div>
                      <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-850">
                        <span className="text-zinc-500 font-mono block text-[11px] mb-0.5">Nationality</span>
                        <span className="text-zinc-200 font-medium">Bangladeshi</span>
                      </div>
                      <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-850">
                        <span className="text-zinc-500 font-mono block text-[11px] mb-0.5">Gender</span>
                        <span className="text-zinc-200 font-medium">Male</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* RIGHT COLUMN: Skills, Strengths, Languages, Availability */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Technical Skills */}
                  <div className="p-6 rounded-2xl bg-[#0c0e14] border border-zinc-800 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 font-bold mb-4">
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Technical Skills</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      {[
                        'Basic computer hardware & software troubleshooting',
                        'Windows operating system',
                        'Microsoft Word, Excel & PowerPoint',
                        'Android / smartphone setup & configuration',
                        'Basic networking & Internet troubleshooting',
                        'Email, web browsing & online services',
                        'Basic smartphone & accessories knowledge',
                        'Customer service & problem solving',
                      ].map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-950 border border-zinc-850 text-zinc-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strengths */}
                  <div className="p-6 rounded-2xl bg-[#0c0e14] border border-zinc-800 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 font-bold mb-4">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Strengths</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        'Quick learner',
                        'Good communication',
                        'Customer-friendly',
                        'Responsible & punctual',
                        'Teamwork',
                        'Adaptable to tech',
                      ].map((str, i) => (
                        <div
                          key={i}
                          className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-850 text-zinc-300 text-center font-medium"
                        >
                          {str}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="p-6 rounded-2xl bg-[#0c0e14] border border-zinc-800 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 font-bold mb-4">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Languages</span>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950 border border-zinc-850">
                        <span className="text-zinc-200">Bangla</span>
                        <span className="text-red-400 font-semibold">Native</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950 border border-zinc-850">
                        <span className="text-zinc-200">English</span>
                        <span className="text-zinc-400">Basic / Conversational</span>
                      </div>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="p-6 rounded-2xl bg-[#0c0e14] border border-zinc-800 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 font-bold mb-3">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Availability</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Available for suitable full-time opportunities and willing to learn company-specific products, systems and procedures.
                    </p>
                  </div>

                  {/* Reference */}
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 text-center">
                    <span className="text-xs font-mono text-zinc-400">
                      Reference: <span className="text-zinc-200 font-medium">Available upon request</span>
                    </span>
                  </div>

                </div>

              </div>

            </div>
          ) : (
            /* ============================================================ */
            /* TAB 2: ORIGINAL VECTOR DOCUMENT RENDER                      */
            /* ============================================================ */
            <div className="p-4 sm:p-8 flex flex-col items-center justify-center min-h-full">
              <div className="max-w-2xl w-full rounded-xl bg-zinc-950 border border-zinc-800 p-2 sm:p-4 shadow-2xl">
                <img
                  src="/cv-preview.png"
                  alt="Abu Raihan Official CV Document Render"
                  className="w-full h-auto object-contain rounded shadow-lg block"
                  loading="eager"
                />
              </div>
            </div>
          )}

        </div>

        {/* Bottom Status & Quick Action Bar */}
        <div className="px-4 sm:px-6 py-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 shrink-0">
          <div className="flex items-center gap-2 font-mono text-[11px] truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-zinc-300 font-medium">Abu_Raihan_CV.pdf</span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline text-zinc-500">Ready for instant download</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-xs shadow-sm transition-colors cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV (PDF)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
