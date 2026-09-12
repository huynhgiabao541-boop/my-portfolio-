import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`bg-white/10 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] ${className}`}>
      {children}
    </div>
  );
}
