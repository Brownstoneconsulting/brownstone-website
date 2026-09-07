import React from 'react';

export const MethodologyHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#1E40AF] mb-4">
        <span>◆</span>
        <span>OUR METHODOLOGY // THE CLEAR PATH TO ROI</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-snug mb-4">
        How Brownstone Consulting Works to Achieve Your Goals with Measurable Productivity &amp; ROI
      </h2>
      <p className="text-[#475569] text-base md:text-lg leading-relaxed">
        We eliminate speculation and replace generic AI pitching with deterministic operational scoping. 
        We identify your highest-leverage bottlenecks, evaluate API feasibility, and deliver an exact execution roadmap.
      </p>
    </div>
  );
};

export default MethodologyHeader;
