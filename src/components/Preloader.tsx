import { useEffect, useState } from 'react';
import runningDog from '../assets/running-dog.gif';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Thời gian loading tối thiểu
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f4f4f2] dark:bg-[#0b0c0e] transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <div className="relative w-32 h-32 flex items-center justify-center mb-4">
        <img
          src={runningDog}
          alt="Loading..."
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextElementSibling) {
              (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
            }
          }}
        />
        <div className="hidden items-center justify-center w-full h-full text-brand-cyan animate-spin-slow">
          <i className="ph-bold ph-spinner text-4xl"></i>
        </div>
      </div>
    </div>
  );
}
