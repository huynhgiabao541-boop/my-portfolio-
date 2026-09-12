import React, { useState, MouseEvent, ReactNode } from 'react';

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface LiquidPillProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function LiquidPill({ children, className = '', onClick }: LiquidPillProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const newRipple = { x, y, size, id: Date.now() };
    setRipples(prev => [...prev, newRipple]);

    if (onClick) onClick(e);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <div 
      className={`relative overflow-hidden bg-white/30 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-sm transition-all hover:bg-white/80 dark:hover:bg-white/5 hover:border-slate-300 dark:hover:border-white/20 cursor-pointer ${className}`} 
      onClick={handleClick}
    >
      {children}
      {ripples.map(r => (
        <span
          key={r.id}
          className="absolute rounded-full bg-cyan-400/30 dark:bg-cyan-400/40 pointer-events-none"
          style={{
            width: r.size,
            height: r.size,
            left: r.x,
            top: r.y,
            animation: 'ripple 0.6s linear forwards',
            transform: 'scale(0)'
          }}
        />
      ))}
    </div>
  );
}
