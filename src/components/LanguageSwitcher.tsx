// src/components/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'vi' ? 'en' : 'vi';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-full bg-white/30 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-white/80 dark:hover:bg-white/10 transition-all"
        >
            {i18n.language === 'vi' ? 'EN' : 'VI'}
        </button>
    );
}