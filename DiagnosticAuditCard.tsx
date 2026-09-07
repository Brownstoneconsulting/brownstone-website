import React, { useState } from 'react';

interface ExecutiveCaseStudyCardProps {
  className?: string;
}

export const ExecutiveCaseStudyCard: React.FC<ExecutiveCaseStudyCardProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-900/5 group mx-auto ${className}`}>
      {/* Main Image */}
      <img
        src="/images/diagnostic-audit-consultation.jpg"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop';
        }}
        alt="Senior leadership in focused diagnostic process architecture review"
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        loading="eager"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>

      {/* Top-Left Badge */}
      <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md border border-white/15">
        <span className="text-xs font-semibold text-white tracking-wide">
          Operational Scoping Session
        </span>
      </div>

      {/* Bottom Floating Glass Card */}
      <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-slate-900">
            Root-Cause Process Mapping
          </span>
          <span className="text-[10px] font-semibold text-[#1E40AF] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded shrink-0">
            Deterministic ROI
          </span>
        </div>
        <p className="text-[11px] text-slate-600 mt-1 leading-snug font-normal">
          Pinpointing manual bottlenecks and engineering feasibility before code commitment.
        </p>
      </div>
    </div>
  );
};

interface DiagnosticAuditCardProps {
  onBookAudit?: () => void;
}

export const DiagnosticAuditCard: React.FC<DiagnosticAuditCardProps> = ({ onBookAudit }) => {
  return (
    <div className="bg-gradient-to-br from-[#FFFFFF] via-[#F6F9FD] to-[#EDF4FC] border border-blue-200/90 rounded-2xl p-6 md:p-10 shadow-lg shadow-blue-900/5 mb-16 transition-all hover:shadow-xl hover:shadow-blue-900/10 font-sans">
      {/* Top 2-Column Hero Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 pb-8 border-b border-blue-200/60">
        
        {/* Left Column (7 cols): Eyebrow Badge, Headline, Sub-headline & Trust Guarantee */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow Badge & Recommended Tag */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="flex items-center gap-2.5 font-sans text-xs font-bold text-[#1E40AF] tracking-wider uppercase">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#1E40AF]"></span>
              <span>THE AI DIAGNOSTIC AUDIT</span>
            </div>
            <span className="font-sans text-[11px] font-semibold px-3 py-1 bg-blue-100/80 text-[#1E40AF] border border-blue-200/80 rounded-md tracking-wide shadow-2xs">
              RECOMMENDED START
            </span>
          </div>

          {/* Primary Value Headline & Sub-headline */}
          <h3 className="text-2xl sm:text-3xl lg:text-3.5xl font-bold text-[#0F172A] mb-4 leading-snug tracking-tight">
            Know where automation drives ROI before you write a single line of code.
          </h3>
          <p className="text-[#475569] text-base lg:text-lg leading-relaxed mb-6">
            A structured operational scoping session that produces a deterministic roadmap of where AI belongs—and where it doesn't.
          </p>

          {/* Trust Guarantee Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/90 border border-blue-100 rounded-xl text-xs sm:text-sm text-[#475569] font-medium shadow-2xs w-fit">
            <span className="text-lg">📄</span>
            <span>Yours to keep. Build it with Brownstone, or hand it to your internal engineering team.</span>
          </div>
        </div>

        {/* Right Column (5 cols): Hard-Constrained Executive Consultation Visual Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <ExecutiveCaseStudyCard />
        </div>

      </div>

      {/* 3-Step Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Step 01 */}
        <div className="bg-white border border-blue-100/90 rounded-xl p-6 shadow-sm hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between">
          <div>
            <div className="font-sans text-xs font-bold text-[#1E40AF] tracking-wider uppercase mb-2.5 group-hover:text-[#1D4ED8] transition-colors">
              01. INTERVIEW (60 min)
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              With the domain heads and operators who do the actual daily work.
            </p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="bg-white border border-blue-100/90 rounded-xl p-6 shadow-sm hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between">
          <div>
            <div className="font-sans text-xs font-bold text-[#1E40AF] tracking-wider uppercase mb-2.5 group-hover:text-[#1D4ED8] transition-colors">
              02. BLUEPRINT REPORT
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Bottleneck audit, API feasibility map, and clear ROI model.
            </p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="bg-white border border-blue-100/90 rounded-xl p-6 shadow-sm hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between">
          <div>
            <div className="font-sans text-xs font-bold text-[#1E40AF] tracking-wider uppercase mb-2.5 group-hover:text-[#1D4ED8] transition-colors">
              03. EXECUTIVE REVIEW (30 min)
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Walkthrough of the pilot plan, timeline, and definitive first production step.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-blue-200/60">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1E40AF] font-sans">
          <span>✦ 100% DETERMINISTIC SCOPING</span>
          <span className="text-slate-300">•</span>
          <span>NO CODE OBLIGATION</span>
        </div>
        <a
          href="#audit-booking"
          onClick={(e) => {
            if (onBookAudit) {
              e.preventDefault();
              onBookAudit();
            }
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-semibold text-sm rounded-lg transition-all shadow-md shadow-blue-900/15 hover:shadow-lg hover:shadow-blue-900/25 active:translate-y-0 hover:-translate-y-0.5 no-underline"
        >
          <span>Book a 30-Min Diagnostic Audit</span>
          <span className="text-base">→</span>
        </a>
      </div>
    </div>
  );
};

export default DiagnosticAuditCard;
