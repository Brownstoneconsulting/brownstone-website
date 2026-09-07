'use client';

import React from 'react';

interface ToolItem {
  name: string;
  domain: string;
}

// Row 1: Cloud Infra, AI Models & Foundation LLMs
const row1: ToolItem[] = [
  { name: 'Amazon Web Services', domain: 'aws.amazon.com' },
  { name: 'AWS Lambda', domain: 'aws.amazon.com' },
  { name: 'Amazon Bedrock', domain: 'aws.amazon.com' },
  { name: 'Microsoft Azure', domain: 'azure.microsoft.com' },
  { name: 'Google Cloud', domain: 'cloud.google.com' },
  { name: 'ChatGPT (OpenAI)', domain: 'openai.com' },
  { name: 'Claude (Anthropic)', domain: 'anthropic.com' },
  { name: 'DeepSeek', domain: 'deepseek.com' },
  { name: 'Kimi AI', domain: 'moonshot.cn' },
  { name: 'Google Workspace', domain: 'workspace.google.com' },
];

// Row 2: Data Infra, Vector DBs & Enterprise Systems
const row2: ToolItem[] = [
  { name: 'PostgreSQL (pgvector)', domain: 'postgresql.org' },
  { name: 'Snowflake', domain: 'snowflake.com' },
  { name: 'Databricks', domain: 'databricks.com' },
  { name: 'Pinecone', domain: 'pinecone.io' },
  { name: 'Amazon OpenSearch', domain: 'opensearch.org' },
  { name: 'Salesforce', domain: 'salesforce.com' },
  { name: 'SAP ERP', domain: 'sap.com' },
  { name: 'HubSpot', domain: 'hubspot.com' },
  { name: 'Microsoft 365', domain: 'office.com' },
  { name: 'Microsoft Teams', domain: 'teams.microsoft.com' },
];

// Row 3: Workflow Automation, Communication & Ops
const row3: ToolItem[] = [
  { name: 'n8n', domain: 'n8n.io' },
  { name: 'Make.com', domain: 'make.com' },
  { name: 'Meta', domain: 'meta.com' },
  { name: 'LinkedIn', domain: 'linkedin.com' },
  { name: 'Stripe', domain: 'stripe.com' },
  { name: 'Razorpay', domain: 'razorpay.com' },
  { name: 'Slack', domain: 'slack.com' },
  { name: 'Zendesk', domain: 'zendesk.com' },
  { name: 'Jira', domain: 'atlassian.com' },
  { name: 'Linear', domain: 'linear.app' },
];

function MarqueeRow({ items, direction = 'normal' }: { items: ToolItem[]; direction?: 'normal' | 'reverse' }) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 gap-3.5 py-2 ${
          direction === 'reverse' ? 'animate-marquee-reverse' : 'animate-marquee'
        } hover:[animation-play-state:paused]`}
      >
        {duplicated.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all duration-200 cursor-pointer shadow-[0_1px_4px_rgba(15,23,42,0.05)] group"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shrink-0">
              <img
                src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`}
                alt={`${item.name} logo`}
                className="w-full h-full object-contain rounded-sm"
                loading="lazy"
                width="20"
                height="20"
              />
            </div>
            <span className="text-xs sm:text-[13px] font-semibold text-slate-800 tracking-tight whitespace-nowrap group-hover:text-blue-700 transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ConnectedStackSection() {
  return (
    <section className="relative w-full bg-[#FAFAFC] text-slate-900 py-20 sm:py-24 border-t border-b border-slate-200 overflow-hidden" id="stack">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          Connected to what <span className="text-blue-700 font-bold">you already run.</span>
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          Anything with an API connects directly. The rest connects through browser automation, AWS serverless micro-services, or secure database connectors.
        </p>
      </div>

      <div className="space-y-4 max-w-[1400px] mx-auto">
        <MarqueeRow direction="normal" items={row1} />
        <MarqueeRow direction="reverse" items={row2} />
        <MarqueeRow direction="normal" items={row3} />
      </div>
    </section>
  );
}
