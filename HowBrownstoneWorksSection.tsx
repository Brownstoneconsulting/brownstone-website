import React from 'react';
import MethodologyHeader from './MethodologyHeader';
import DiagnosticAuditCard from './DiagnosticAuditCard';
import DeliveryPillarsGrid from './DeliveryPillarsGrid';
import WorkflowVisualizer from './WorkflowVisualizer';

interface HowBrownstoneWorksSectionProps {
  onBookAudit?: () => void;
}

export const HowBrownstoneWorksSection: React.FC<HowBrownstoneWorksSectionProps> = ({ onBookAudit }) => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#F4F7FB] border-t border-b border-blue-200/60 scroll-mt-24" id="methodology">
      <div className="max-w-6xl mx-auto space-y-14">
        <MethodologyHeader />
        <DiagnosticAuditCard onBookAudit={onBookAudit} />
        <DeliveryPillarsGrid />
        <WorkflowVisualizer />
      </div>
    </section>
  );
};

export default HowBrownstoneWorksSection;
