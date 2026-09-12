import { useDarkMode } from '../hooks/useDarkMode';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/Gemini_Generated_Image_2otfu52otfu52otf-Photoroom.svg';

export default function Header() {
  const { theme, toggleTheme } = useDarkMode();
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'skills'];
      // Use center of screen roughly for determining active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          const offsetBottom = bottom + window.scrollY;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi');
  };

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'education', label: t('nav.education') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') }
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-nav rounded-b-full">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-base tracking-wide">
          <div
            className="h-10 w-[87px] bg-cyan-600 dark:bg-cyan-300 transition-colors"
            style={{
              WebkitMaskImage: `url(${logo})`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url(${logo})`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center'
            }}
          />
        </div>
        <nav className="hidden md:flex items-center gap-1 font-medium text-sm text-slate-600 dark:text-slate-400 p-1 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-4 py-1.5 rounded-full transition-colors z-10 ${activeSection === item.id ? 'text-slate-900 dark:text-white' : 'hover:text-brand-cyan'
                }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/80 dark:bg-slate-700/80 rounded-full shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-brand-cyan transition-colors">
            {i18n.language === 'vi' ? 'EN' : 'VI'}
          </button>
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-brand-cyan transition-colors">
            {theme === 'dark' ? (
              <i className="ph-fill ph-sun text-lg"></i>
            ) : (
              <i className="ph-fill ph-moon text-lg"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
