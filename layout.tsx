import React from 'react';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Brownstone Consulting — Executive Operational Advisory',
  description:
    'Operational discipline over software bloat. We advise executive leadership on process architecture, risk mitigation, and quiet, audit-ready workflows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col justify-between antialiased">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
