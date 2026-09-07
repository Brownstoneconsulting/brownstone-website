import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  secondaryTag1: string;
  secondaryTag2: string;
  image: string;
  overlayBadge: string;
  telemetryPill: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Listen & Diagnose',
    subtitle: 'Operational Bottleneck Audit',
    description:
      'We sit with the people who do the actual daily work and map how each process runs, where data gets trapped, and where your team loses billable hours.',
    highlight: '60-Min Scoping Session',
    secondaryTag1: 'Strict Governance',
    secondaryTag2: 'Production Ready',
    image: '/images/phase01_workflow_reconnaissance.png',
    overlayBadge: 'Step 1: Operational Discovery',
    telemetryPill: 'Zero Assumptions • Ground-Truth Scoping',
  },
  {
    number: '02',
    title: 'Architect & Build in Sprints',
    subtitle: '14-Day Testable Pilot Pipeline',
    description:
      'We engineer in rapid, 2-week iterations with your technical stakeholders reviewing each build. A functional, testable pipeline runs within the first 14 days.',
    highlight: '2-Week Rapid Iterations',
    secondaryTag1: 'Sandbox Testing',
    secondaryTag2: 'Iterative Review',
    image: '/images/phase02_sprint_architecture.png',
    overlayBadge: 'Step 2: Rapid Prototyping',
    telemetryPill: '2-Week Cycles • Live Sandbox Environment',
  },
  {
    number: '03',
    title: 'Deploy, Document & Hand Over',
    subtitle: 'Full Source Code & Infrastructure Ownership',
    description:
      'The finished system deploys directly inside your cloud infrastructure (AWS/Azure/Private Cloud), fully documented with source code, CI/CD pipelines, and your internal operators trained to run it.',
    highlight: '100% Client Ownership',
    secondaryTag1: 'Full Source Code',
    secondaryTag2: 'Operator Training',
    image: '/images/phase03_enterprise_handover.png',
    overlayBadge: 'Step 3: Enterprise Handover',
    telemetryPill: '100% Code Ownership • In-House Governance',
  },
];

export const ProcessDeliverySection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F8FAFC] text-slate-900 py-20 border-t border-b border-slate-200 font-sans" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-bold text-[#1E40AF] tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1E40AF]"></span>
            <span>THREE-PHASE DELIVERY LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-3.5">
            Built with your team, <span className="text-[#1E40AF] font-bold">in short cycles.</span> Live, documented, and handed over.
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            We don't leave you with slide decks or opaque black boxes. Every engagement follows a disciplined 3-phase delivery ledger with complete code ownership, operator training, and transparent governance.
          </p>
        </div>

        {/* 3 High-Trust Visual Case Cards */}
        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-500 group relative overflow-hidden font-sans"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Imagery Column (5 cols) */}
                <div className="lg:col-span-5 relative w-full">
                  <div className="relative w-full rounded-xl overflow-hidden border border-slate-200/80 shadow-md aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[240px] group-hover:shadow-lg transition-all duration-500">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>

                    {/* Top Overlay Badge */}
                    <div className="absolute top-3.5 left-3.5 bg-slate-900/85 text-white backdrop-blur-md font-sans text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 shadow-sm z-10">
                      <span>{step.overlayBadge}</span>
                    </div>

                    {/* Bottom-Right Floating Pill (Crisp, High-Readability) */}
                    <div className="absolute bottom-3.5 right-3.5 bg-white/95 text-slate-900 backdrop-blur-md font-sans text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200/90 shadow-sm flex items-center gap-1.5 z-10">
                      <span className="text-[#1E40AF]">✦</span>
                      <span>{step.telemetryPill}</span>
                    </div>
                  </div>
                </div>

                {/* Content Column (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Header Row: Phase Number + Subtitle Tag */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="font-sans text-2xl font-bold text-[#1E40AF]">
                        {step.number}
                      </span>
                      <span className="text-slate-300 font-sans font-light text-lg">•</span>
                      <span className="font-sans text-xs font-semibold text-[#1E40AF] tracking-wide uppercase">
                        {step.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight mb-3 group-hover:text-[#1E40AF] transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#475569] text-base leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Clean Slate/Blue Tags Row */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-100 font-sans">
                    <span className="text-xs font-semibold text-[#1E40AF] bg-blue-50 border border-blue-200/80 px-3 py-1.5 rounded-md">
                      ✦ {step.highlight}
                    </span>
                    <span className="text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md">
                      {step.secondaryTag1}
                    </span>
                    <span className="text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md">
                      {step.secondaryTag2}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessDeliverySection;
