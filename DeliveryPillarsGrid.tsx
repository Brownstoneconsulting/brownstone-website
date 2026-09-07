import React from 'react';

export const DeliveryPillarsGrid: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'Automate Workflows',
      description:
        'Event-driven API & webhook triggers, real-time CRM & database enrichment, routine triage automated without human drag.',
      badge: 'API & WORKFLOW ENGINES',
      metaLeft: 'CORE ACCELERATOR',
      metaRight: '✦ ACTIVE',
    },
    {
      step: '02',
      title: 'Tailor Open Source Models',
      description:
        'Zero proprietary data leakage. Secure foundation models fine-tuned on internal documentation under your governance.',
      badge: 'PRIVATE & SECURE LLMS',
      metaLeft: 'DATA ISOLATION',
      metaRight: '100% PRIVATE',
    },
    {
      step: '03',
      title: 'Build Custom AI Apps',
      description:
        'Deterministic Human-in-the-loop queues, custom operational dashboards, 100% client-owned codebase.',
      badge: 'ENTERPRISE OWNERSHIP',
      metaLeft: 'CLIENT IP',
      metaRight: '100% OWNED',
    },
  ];

  return (
    <div className="mb-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="font-mono text-xs font-bold text-[#1E40AF] tracking-widest uppercase">
          ✦ THREE DELIVERY PILLARS
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mt-2 tracking-tight">
          End-to-End Execution Built for Governance &amp; Speed
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.step}
            className="bg-gradient-to-br from-[#0F2856] via-[#163674] to-[#1E40AF] text-white border border-blue-400/25 rounded-2xl p-7 flex flex-col justify-between shadow-md shadow-blue-950/15 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/30 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-white">
                  {pillar.step}
                </span>
                <span className="font-mono text-[11px] font-bold text-blue-200 bg-white/10 border border-white/20 px-3 py-1 rounded-md tracking-wider uppercase backdrop-blur-xs">
                  {pillar.badge}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight mt-4">
                {pillar.title}
              </h4>
              <p className="text-blue-100/90 text-sm leading-relaxed mt-2 font-normal">
                {pillar.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/15 text-xs font-mono font-semibold text-blue-200 flex items-center justify-between">
              <span>{pillar.metaLeft}</span>
              <span>{pillar.metaRight}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryPillarsGrid;
