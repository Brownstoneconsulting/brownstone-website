'use client';

import React, { useState } from 'react';

export interface FocusArea {
  id?: string;
  name: string;
  desc?: string;
  description?: string;
  href: string;
}

export const focusAreas: FocusArea[] = [
  {
    id: 'sales-ops',
    name: 'Sales & Operations (S&OP)',
    desc: 'Autonomous lead triage, real-time inventory validation & 1-click CRM sync',
    description: 'Autonomous lead triage, real-time inventory validation & 1-click CRM sync',
    href: '/focus-areas/sales-operations',
  },
  {
    id: 'it-ops',
    name: 'IT & Technical Operations',
    desc: 'Self-resolving access requests, ticket triage & human-supervised serverless fixes',
    description: 'Self-resolving access requests, ticket triage & human-supervised serverless fixes',
    href: '/focus-areas/it-operations',
  },
  {
    id: 'finance-compliance',
    name: 'Finance & Compliance',
    desc: 'Continuous SEBI audit readiness, invoice matching & automated approval controls',
    description: 'Continuous SEBI audit readiness, invoice matching & automated approval controls',
    href: '/focus-areas/finance-compliance',
  },
  {
    id: 'growth-marketing',
    name: 'Growth & Marketing Operations',
    desc: 'Direct client acquisition & automated WhatsApp triage using your daily tools',
    description: 'Direct client acquisition & automated WhatsApp triage using your daily tools',
    href: '/focus-areas/growth-marketing',
  },
  {
    id: 'hr-talent',
    name: 'HR & Talent Management',
    desc: 'Top 5% resume match scoring, calendar scheduling & 24/7 internal policy assistant',
    description: 'Top 5% resume match scoring, calendar scheduling & 24/7 internal policy assistant',
    href: '/focus-areas/hr-talent',
  },
];

export const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="index.html" className="inline-block select-none py-1 hover:opacity-95 transition-opacity" style={{ textDecoration: 'none !important' }}>
          <span style={{
            fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif",
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: '#0B192C',
            WebkitTextFillColor: '#0B192C',
            textTransform: 'uppercase',
            display: 'inline-block',
            lineHeight: 1
          }}>
            BROWNSTONE CONSULTING
          </span>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
          <a
            href="#hero"
            className="text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-[#1E40AF] transition-colors"
          >
            HOME
          </a>
          <a
            href="/#methodology"
            className="text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-[#1E40AF] transition-colors"
          >
            HOW WE WORK
          </a>

          {/* Focus Areas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-[#1E40AF] transition-colors py-2"
              aria-expanded={isDropdownOpen}
            >
              <span>FOCUS AREAS</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180 text-[#1E40AF]' : 'text-slate-400'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-96 bg-white border border-slate-200 rounded-xl shadow-xl py-3 px-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 mb-1 text-[10px] font-mono font-bold text-[#1E40AF] tracking-widest uppercase border-b border-slate-100 flex items-center justify-between">
                  <span>FUNCTIONAL DEPARTMENT SPECIALIZATIONS</span>
                  <span className="text-slate-400 font-normal">5 DEPARTMENTS</span>
                </div>
                <div className="space-y-1">
                  {focusAreas.map((area) => (
                    <a
                      key={area.id}
                      href={area.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-blue-50/80 transition-all group no-underline"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#1E40AF] transition-colors">
                          {area.name}
                        </span>
                        <span className="text-[10px] text-slate-400 group-hover:text-[#1E40AF] transition-colors">
                          →
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        {area.desc || area.description}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="/philosophy"
            className="text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-[#1E40AF] transition-colors"
          >
            ABOUT OUR PHILOSOPHY
          </a>
        </nav>

        {/* Primary Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#audit-modal"
            className="inline-flex items-center justify-center bg-[#1E40AF] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow active:translate-y-0 hover:-translate-y-0.5"
          >
            Book 30-Min Audit
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-4">
          <a
            href="#hero"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase text-slate-800 hover:text-[#1E40AF]"
          >
            HOME
          </a>
          <a
            href="/#methodology"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase text-slate-800 hover:text-[#1E40AF]"
          >
            HOW WE WORK
          </a>
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="text-xs font-mono font-bold text-[#1E40AF] uppercase tracking-wider">
              FUNCTIONAL SPECIALIZATIONS
            </div>
            {focusAreas.map((area) => (
              <a
                key={area.id}
                href={area.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-3 py-1 text-xs text-slate-700 hover:text-[#1E40AF]"
              >
                <div className="font-semibold">{area.name}</div>
                <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{area.desc || area.description}</div>
              </a>
            ))}
          </div>
          <a
            href="/philosophy"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider uppercase text-slate-800 hover:text-[#1E40AF] pt-2 border-t border-slate-100"
          >
            ABOUT OUR PHILOSOPHY
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
