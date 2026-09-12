import { useDarkMode } from '../hooks/useDarkMode';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { theme, toggleTheme } = useDarkMode();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi');
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-nav">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono font-bold text-base tracking-wide">
          <div className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_#22d3ee]"></div>
          <span className="text-slate-900 dark:text-white">huynhgiabao</span><span className="text-slate-500">.dev</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-mono text-base text-slate-600 dark:text-slate-400">
          <a href="#about" className="hover:text-brand-cyan transition-colors">{t('nav.about')}</a>
          <a href="#education" className="hover:text-brand-cyan transition-colors">{t('nav.education')}</a>
          <a href="#experience" className="hover:text-brand-cyan transition-colors">{t('nav.experience')}</a>
          <a href="#projects" className="hover:text-brand-cyan transition-colors">{t('nav.projects')}</a>
          <a href="#skills" className="hover:text-brand-cyan transition-colors">{t('nav.skills')}</a>
        </nav>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="font-mono text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-brand-cyan transition-colors">
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
