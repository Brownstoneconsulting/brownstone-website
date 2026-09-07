'use client';

import React from 'react';

// Fallback / Inline SVG Icon Components to ensure zero missing dependency crashes
function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  );
}

function ShieldCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068l-6.75 4.5a2.25 2.25 0 01-2.314 0l-6.75-4.5A3.75 3.75 0 012.25 12V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25V12z" />
    </svg>
  );
}

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white text-slate-900 min-h-screen pt-28 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <a className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#1E40AF] transition-colors" href="/">
            <ArrowLeft className="w-3.5 h-3.5"/>
            <span>Back to Home</span>
          </a>
        </div>

        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5"/>
            <span>Governance &amp; Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Effective Date: September 2026 • Last Updated: September 2026
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-2">
            Brownstone Consulting (&quot;Brownstone&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects the privacy of individuals who interact with our Website, services, personnel, and business operations.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            This Privacy Policy explains how we collect, use, disclose, retain, protect, and otherwise process personal information in connection with brownstoneconsulting.in and related Brownstone services and communications.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-sm text-slate-600 leading-relaxed font-normal">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Scope</h2>
            <p>This Privacy Policy applies to personal information collected through:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Brownstone&apos;s Website;</li>
              <li>Contact and enquiry forms;</li>
              <li>Business communications;</li>
              <li>Emails;</li>
              <li>Recruitment or career submissions;</li>
              <li>Events and professional interactions;</li>
              <li>Client and prospective-client interactions; and</li>
              <li>Other channels through which this Privacy Policy is presented.</li>
            </ul>
            <p className="text-xs text-slate-500 italic">
              Where Brownstone processes information on behalf of a client as part of a professional engagement, the applicable client agreement and data-processing documentation may govern that processing.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">2. Information We May Collect</h2>
            <p>Depending on your interaction with Brownstone, we may collect categories of information including:</p>
            
            <div className="space-y-3 pl-2">
              <div>
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide">Identity Information</h4>
                <p className="text-xs text-slate-600">Name, Job title, Organization, and Professional profile information.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide">Contact Information</h4>
                <p className="text-xs text-slate-600">Email address, Telephone number, Business address, and related communication details.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide">Business Information</h4>
                <p className="text-xs text-slate-600">Company information, Industry, Project requirements, Areas of operational interest, and information voluntarily provided during scoping consultations.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide">Technical Information</h4>
                <p className="text-xs text-slate-600">IP address, Browser type, Device information, Operating system, Website activity, Referring website, and System logs.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide">Communication Information</h4>
                <p className="text-xs text-slate-600">Information contained in correspondence or communications you transmit to Brownstone.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium">We seek to collect only information that is reasonably relevant to the purpose for which it is collected.</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. How We Collect Information</h2>
            <p>Information may be collected directly from you, through Website forms, business meetings, emails, professional interactions, cookies and technical logs, or from publicly available business sources where permitted by applicable law.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. How We Use Information</h2>
            <p>We use personal information for legitimate business purposes including: responding to enquiries, evaluating prospective client engagements, delivering contracted professional services, improving Website performance, preventing fraud or security abuse, complying with regulatory standards, and maintaining audit logs.</p>
            <p className="font-medium text-slate-700">We do not collect personal information indiscriminately.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">5. Legal Basis and Applicable Requirements</h2>
            <p>Processing is based on consent, contract execution, preliminary steps taken prior to entering a contract, legal obligations, or legitimate business interests.</p>
            <p>Where Indian data-protection requirements apply, Brownstone processes personal data in accordance with applicable statutory standards and their effective enforcement dates. Where cross-border interactions occur, jurisdiction-specific standards govern.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">6. Artificial Intelligence and Personal Information</h2>
            <p>Brownstone may use artificial intelligence technologies as part of internal operations and client deliverables. We strictly distinguish between:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-xs text-slate-900 block mb-1">Internal Operations</span>
                <span className="text-xs text-slate-600">AI utilized strictly for Brownstone&apos;s internal productivity and administrative acceleration under strict confidentiality.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
                <span className="font-bold text-xs text-[#1E40AF] block mb-1">Client Deployments</span>
                <span className="text-xs text-slate-600">Custom deterministic AI systems deployed inside client environments governed by contracted service agreements.</span>
              </div>
            </div>
            <p>We enforce data segregation, human review gates, model validation, and strict data minimization across all AI implementations.</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">7. Client Data</h2>
            <p>Where Brownstone processes data on behalf of a client, roles and duties (as a service provider, processor, data fiduciary, or intermediary) are established by contract. Where required, a separate Data Processing Agreement (DPA) establishes security controls, retention, deletion, and breach-management frameworks.</p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">8. Data Sharing</h2>
            <p>We may share information with vetted technology providers, cloud infrastructure services, security auditors, or regulatory authorities where legally required. Third parties are bound by strict contractual compliance.</p>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold text-xs">
              ✦ We do not sell personal information as a business model.
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">9. Third-Party Technology Providers</h2>
            <p>Brownstone relies on established enterprise providers for hosting, telemetry, security, and communications. Each provider processes information under their respective enterprise security standards.</p>
          </section>

          {/* Contact Verification */}
          <div className="pt-8 border-t border-slate-200 space-y-2 text-xs text-slate-500">
            <p className="font-bold text-slate-800 uppercase tracking-wide">Data Protection Inquiries:</p>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#1E40AF]"/>
              <a href="mailto:hello@brownstoneconsulting.in" className="hover:underline text-[#1E40AF] font-medium">hello@brownstoneconsulting.in</a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#1E40AF] mt-0.5"/>
              <span>G-40 D wing Elco Arcade, Hill Rd, Bandra West, Mumbai, Maharashtra</span>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
