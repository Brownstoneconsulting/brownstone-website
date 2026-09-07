import React, { useState } from 'react';

type DepartmentKey = 'sales' | 'finance' | 'it' | 'cx';

interface WorkflowNode {
  step: string;
  title: string;
  sub: string;
}

interface DepartmentWorkflow {
  key: DepartmentKey;
  label: string;
  badge: string;
  description: string;
  nodes: WorkflowNode[];
  metrics: {
    latency: string;
    capacity: string;
    governance: string;
  };
}

export const WorkflowVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DepartmentKey>('sales');

  const workflows: Record<DepartmentKey, DepartmentWorkflow> = {
    sales: {
      key: 'sales',
      label: 'Sales',
      badge: 'AUTOMATED INBOUND QUALIFICATION',
      description: 'Accelerate lead triage from hours to seconds with automated API enrichment and CRM synchronization.',
      nodes: [
        { step: '01', title: 'Inbound Webhook', sub: 'Lead form submission' },
        { step: '02', title: 'API Enrichment', sub: 'Under 60s lookup' },
        { step: '03', title: 'AI Fit Score', sub: 'ICP & Intent scoring' },
        { step: '04', title: 'Slack Alert / Auto-Draft', sub: 'Rep notification' },
        { step: '05', title: 'HubSpot & Salesforce Sync', sub: '100% clean data' },
      ],
      metrics: {
        latency: '< 60s Latency',
        capacity: '18.5 hrs Reclaimed',
        governance: '100% CRM Cleanliness',
      },
    },
    finance: {
      key: 'finance',
      label: 'Finance & Risk',
      badge: 'CONTRACT & INVOICE PROCESSING',
      description: 'Eliminate manual document transcription with deterministic clause extraction and 1-click approvals.',
      nodes: [
        { step: '01', title: 'Contract/Invoice Intake', sub: 'PDF/Doc ingestion' },
        { step: '02', title: 'Clause Extraction', sub: 'NLP term parsing' },
        { step: '03', title: 'Deterministic Check', sub: 'Compliance rules' },
        { step: '04', title: '1-Click Human Approval Queue', sub: 'Risk sign-off' },
        { step: '05', title: 'ERP Execution', sub: 'SAP/NetSuite update' },
      ],
      metrics: {
        latency: '99.4% Accuracy',
        capacity: '15+ hrs Reclaimed',
        governance: '100% Audit Trail',
      },
    },
    it: {
      key: 'it',
      label: 'Operations & IT',
      badge: 'SERVERLESS MICRO-SERVICE CONNECTOR',
      description: 'Deploy event-driven background agents on zero-downtime serverless architecture.',
      nodes: [
        { step: '01', title: 'Production Event', sub: 'API webhook trigger' },
        { step: '02', title: 'AWS Serverless Lambda Node', sub: 'Isolated execution' },
        { step: '03', title: 'Vector Index (pgvector)', sub: 'Semantic context' },
        { step: '04', title: 'Parallel Micro-Service Connector', sub: '0% Downtime' },
        { step: '05', title: 'Enterprise System Sync', sub: 'Real-time state' },
      ],
      metrics: {
        latency: '0% Disruption',
        capacity: '14-Day Pilot',
        governance: 'SOC2 / HIPAA Ready',
      },
    },
    cx: {
      key: 'cx',
      label: 'Customer Experience',
      badge: 'RAG KNOWLEDGE SYNTHESIS ENGINE',
      description: 'Synthesize cited responses for complex client inquiries with human-in-the-loop escalation.',
      nodes: [
        { step: '01', title: 'Ticket Intake', sub: 'Omnichannel routing' },
        { step: '02', title: 'RAG Knowledge Query', sub: 'Internal docs search' },
        { step: '03', title: 'Draft Synthesis (Cited)', sub: 'Verifiable sources' },
        { step: '04', title: 'Escalation Gate', sub: 'Tier-2 agent review' },
        { step: '05', title: 'Auto-Dispatch', sub: 'Instant client response' },
      ],
      metrics: {
        latency: '< 2m Resolution',
        capacity: '20+ hrs Reclaimed',
        governance: 'Zero Hallucination',
      },
    },
  };

  const activeWorkflow = workflows[activeTab];

  return (
    <div className="bg-[#0A1628] border border-blue-900/50 rounded-2xl p-6 md:p-10 text-white shadow-xl shadow-blue-950/40 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Visualizer Header & Tab Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-blue-900/40 relative z-10">
        <div>
          <div className="font-mono text-xs font-bold text-blue-400 tracking-widest uppercase mb-1">
            ✦ INTERACTIVE WORKFLOW ARCHITECTURE
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Departmental Workflow Execution
          </h3>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#060D19] border border-blue-900/60 rounded-xl overflow-x-auto">
          {(Object.keys(workflows) as DepartmentKey[]).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`px-4 py-2.5 text-xs font-bold font-sans rounded-lg transition-all whitespace-nowrap ${
                activeTab === tabKey
                  ? 'bg-[#1E40AF] text-white border border-blue-400/40 shadow-sm shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              [ {workflows[tabKey].label} ]
            </button>
          ))}
        </div>
      </div>

      {/* Selected Workflow Description & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-[#0F1F38] border border-blue-800/40 rounded-xl p-4.5 relative z-10">
        <p className="text-sm text-blue-100/90 font-medium">
          {activeWorkflow.description}
        </p>
        <span className="font-mono text-[10px] font-bold text-blue-300 bg-blue-950/80 border border-blue-700/50 px-3.5 py-1.5 rounded-md tracking-wider whitespace-nowrap self-start sm:self-auto shadow-2xs">
          {activeWorkflow.badge}
        </span>
      </div>

      {/* Dynamic Flowchart Node Engine */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative">
          {activeWorkflow.nodes.map((node, idx) => (
            <div key={idx} className="relative flex flex-col">
              <div className="bg-[#132238] border border-blue-500/30 rounded-xl p-4.5 h-full flex flex-col justify-between hover:border-blue-400 hover:bg-[#182C48] transition-all shadow-md group">
                <div>
                  <div className="font-mono text-[10px] font-bold text-blue-400 mb-1.5 group-hover:text-blue-300">
                    NODE {node.step}
                  </div>
                  <div className="font-sans text-sm font-bold text-white leading-snug mb-1">
                    {node.title}
                  </div>
                </div>
                <div className="font-sans text-[11px] text-slate-400 mt-2">
                  {node.sub}
                </div>
              </div>
              {/* Connector Arrow for Desktop */}
              {idx < activeWorkflow.nodes.length - 1 && (
                <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0A1628] border border-blue-500/40 items-center justify-center text-xs text-blue-400 font-bold shadow-md animate-pulse">
                  ➔
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowVisualizer;
