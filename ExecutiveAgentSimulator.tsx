'use client';

import React, { useState, useEffect } from 'react';

// Icons using inline SVG for 100% dependency-free rendering matching Lucide
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/>
  </svg>
);

const CheckCircle2Icon = ({ className }: { className?: string }) => (
  <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

interface ChatScenario {
  id: string;
  pill: string;
  userMsg: string;
  aiResponse: string;
  meta: string;
  badge: string;
}

const chatScenarios: ChatScenario[] = [
  {
    id: 'docs',
    pill: '📄 Find Docs',
    userMsg: 'Find the signed Acme Corp contract and latest SLA agreement.',
    aiResponse: 'Located Acme_MSA_2026.pdf (Signed). Key clause: 99.9% uptime SLA. Link ready.',
    meta: 'Storage: Cloud Drive • Instant Match',
    badge: '1.2s RETRIEVAL',
  },
  {
    id: 'expiry',
    pill: '⚠️ Expiries',
    userMsg: 'Which vendor documents or compliance certs expire next month?',
    aiResponse: '2 items flagged: AWS Enterprise SLA (24 days) and Vendor NDA #8492. Renewal drafts prepared.',
    meta: 'SEBI CSCRF Audit Guard Active',
    badge: '2 FLAGGED',
  },
  {
    id: 'schedule',
    pill: '🗓️ Schedule',
    userMsg: 'Organize today, protect 2 hrs deep work, and email my team.',
    aiResponse: 'Blocked 10 AM–12 PM for focus, moved 2 syncs to Slack, and emailed briefing to your team.',
    meta: 'Google Workspace Synced',
    badge: 'DISPATCHED',
  },
  {
    id: 'board',
    pill: '📊 Board Deck',
    userMsg: 'Make a 6-slide PPT and PDF summary for tomorrow’s board review.',
    aiResponse: 'Generated Board_Review_Q3.pdf & 6-slide PPT. Awaiting your 1-click review to send.',
    meta: 'Human-in-the-loop • No auto-send',
    badge: 'READY FOR SIGN-OFF',
  },
];

export default function CompactAgentChat() {
  const [activeId, setActiveId] = useState(chatScenarios[0].id);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveId((prev) => {
        const currentIndex = chatScenarios.findIndex((s) => s.id === prev);
        const nextIndex = (currentIndex + 1) % chatScenarios.length;
        return chatScenarios[nextIndex].id;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const active = chatScenarios.find((s) => s.id === activeId) || chatScenarios[0];

  const handleSelect = (id: string) => {
    setActiveId(id);
    setIsAutoPlay(false);
  };

  return (
    <div className="w-full max-w-[370px] sm:max-w-[390px] mx-auto rounded-2xl bg-white border border-blue-200/80 shadow-lg shadow-blue-900/5 p-4 sm:p-5 font-sans">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] font-bold text-slate-800 tracking-tight uppercase">
            Brownstone Operations Agent
          </span>
        </div>
        <span className="font-mono text-[9px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
          LIVE DEMO
        </span>
      </div>

      {/* Scenario Pill Buttons */}
      <div className="grid grid-cols-4 gap-1 p-1 bg-slate-50 border border-slate-200/70 rounded-xl mb-3.5">
        {chatScenarios.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className={`py-1 px-1 rounded-lg font-mono text-[10px] font-semibold transition-all text-center cursor-pointer truncate ${
              activeId === item.id
                ? 'bg-[#1E40AF] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {item.pill}
          </button>
        ))}
      </div>

      {/* Two-Way Chat Conversation Window */}
      <div className="space-y-3 min-h-[175px] flex flex-col justify-center py-1">
        
        {/* User Message (Right Side) */}
        <div className="flex items-start justify-end gap-2">
          <div className="max-w-[85%] bg-slate-100 text-slate-800 rounded-2xl rounded-tr-sm p-3 text-xs leading-relaxed border border-slate-200">
            <span className="font-mono text-[9px] font-bold text-slate-500 block mb-0.5 uppercase">
              YOU (EXECUTIVE)
            </span>
            "{active.userMsg}"
          </div>
          <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-1">
            <UserIcon className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* AI Response Message (Left Side) */}
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-[#1E40AF] flex items-center justify-center text-white shrink-0 mt-1 shadow-xs">
            <SparklesIcon className="w-3.5 h-3.5 text-blue-200" />
          </div>
          <div className="max-w-[85%] bg-blue-50/60 border border-blue-200/90 text-slate-900 rounded-2xl rounded-tl-sm p-3 text-xs leading-relaxed shadow-xs">
            <div className="flex items-center justify-between mb-1 pb-1 border-b border-blue-100">
              <span className="font-mono text-[9px] font-bold text-blue-800 uppercase">
                BROWNSTONE AI
              </span>
              <span className="font-mono text-[8px] font-bold bg-white text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded">
                {active.badge}
              </span>
            </div>
            
            <p className="text-slate-800 text-[11.5px] leading-relaxed">
              {active.aiResponse}
            </p>

            <div className="mt-2 pt-1.5 border-t border-blue-100 flex items-center gap-1 text-[9px] font-mono text-slate-500">
              <CheckCircle2Icon className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>{active.meta}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Compact Interactive Action Footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
        <span className="text-slate-500 flex items-center gap-1">
          <ShieldCheckIcon className="w-3.5 h-3.5 text-blue-700" />
          <span>Human-in-the-Loop Signoff</span>
        </span>
        <a 
          href="#audit-modal" 
          data-modal-target="audit-modal"
          className="font-bold text-[#1E40AF] hover:underline flex items-center gap-0.5"
        >
          <span>Try Workflow</span>
          <ArrowRightIcon className="w-2.5 h-2.5" />
        </a>
      </div>

    </div>
  );
}

export { CompactAgentChat };
