'use client';

import React from 'react';
import Link from 'next/link';

// Inline SVG Icon helpers to ensure robust execution without missing package dependencies
function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function Phone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.488-5.127-3.787-6.615-6.615l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function ArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
'use client';

import React from 'react';
import Link from 'next/link';

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function Phone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.488-5.127-3.787-6.615-6.615l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function ArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  );
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#070F1E] via-[#0A192F] to-[#050B14] text-slate-300 border-t border-blue-900/40 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Section 1: Upper 5-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1 & 2: Brand & Direct Outreach (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <Link href="/" className="inline-block select-none mb-3 hover:opacity-95 transition-opacity" style={{ textDecoration: 'none !important', display: 'block' }}>
                <span style={{
                  fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif",
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: '#FFFFFF',
                  WebkitTextFillColor: '#FFFFFF',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  lineHeight: 1
                }}>
                  BROWNSTONE CONSULTING
                </span>
              </Link>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
                Operational discipline over software bloat. We advise executive leadership on process architecture, risk mitigation, and quiet, audit-ready workflows.
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <a href="mailto:hello@brownstoneconsulting.in" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400 shrink-0"/>
                <span>hello@brownstoneconsulting.in</span>
              </a>
              <a href="tel:+918652168748" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400 shrink-0"/>
                <span>+91 8652168748</span>
              </a>
              <div className="flex items-start gap-2.5 max-w-sm">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"/>
                <span className="leading-snug">G-40 D wing Elco Arcade, Hill Rd, Bandra West, Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Column 3: PRACTICE (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              PRACTICE
            </span>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link className="hover:text-white transition-colors" href="/focus-areas/growth-marketing">Growth &amp; Marketing Operations</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/focus-areas/finance-compliance">Financial Controls &amp; SEBI</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/focus-areas/it-operations">IT &amp; Technical Operations</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/focus-areas/sales-operations">Sales &amp; Operations</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/focus-areas/hr-talent">HR &amp; Talent Management</Link></li>
            </ul>
          </div>

          {/* Column 4: ADVISORY (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              ADVISORY
            </span>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link className="hover:text-white transition-colors" href="/how-we-work">Our Methodology</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/about">About Our Philosophy</Link></li>
              <li>
                <Link className="inline-flex items-center gap-1.5 hover:text-white transition-colors group" href="/careers">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-950 text-blue-300 border border-blue-800">
                    HIRING
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: GOVERNANCE & Executive Audit Guarantee Card (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              GOVERNANCE
            </span>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link className="hover:text-white transition-colors" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-white transition-colors text-blue-400 font-medium" href="/faqs">Frequently Asked Questions</Link></li>
            </ul>

            {/* 30-Min Executive Audit Guarantee Card */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-[#0D2347]/80 to-[#0A192F]/90 backdrop-blur-md border border-blue-900/40 shadow-lg">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[9px] font-bold text-blue-300 bg-slate-900/80 border border-blue-800/50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  INSTITUTIONAL GUARANTEE
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              </div>
              <h4 className="text-xs font-bold text-white mb-1">30-Min Executive Audit</h4>
              <p className="text-[11px] text-slate-300 leading-normal mb-3">
                Speak directly with a Senior Managing Partner. Confidential diagnostic review with strict NDA compliance.
              </p>
              <Link href="/#audit" className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-xs font-semibold tracking-wide shadow-md transition-all">
                <span>Schedule Audit Session</span>
                <span className="text-blue-200">➔</span>
              </Link>
              <div className="mt-2.5 pt-2 border-t border-blue-900/30 flex items-center gap-1.5 text-[10px] text-slate-400">
                <Clock className="w-3 h-3 text-blue-400 shrink-0"/>
                <span>Response within 2 business hours.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Section 2: Centered Institutional Governance Row */}
        <div className="my-8 pt-6 border-t border-blue-900/40 text-center">
          <p className="text-[11px] text-slate-400 font-medium tracking-widest uppercase">
            Regulatory Disclosures • Corporate Governance • Operational Risk &amp; Security • Privacy Statement • DPDP Act Compliance
          </p>
        </div>

        {/* Section 3: Bottom Legal & Verified Channels */}
        <div className="pt-6 border-t border-blue-900/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Brownstone Consulting. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/brownstone-consulting-46a429434/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/></svg>
            </a>
            <a href="https://www.instagram.com/brownstone.consulting/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
            </a>
            <a href="https://x.com/Brownstone_in" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.youtube.com/@BrownstoneConsulting" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          <div>
            <button onClick={scrollToTop} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-700/60 text-xs text-slate-400 hover:text-white hover:border-blue-500 transition-colors cursor-pointer">
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5"/>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
  );
}
