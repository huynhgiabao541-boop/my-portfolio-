import { useTranslation } from 'react-i18next';
import footerLogo from '../assets/ChatGPT Image Sep 12, 2026, 01_48_26 PM.svg';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mt-12 glass-nav border-t-0 border-b-0 rounded-t-[30%] relative z-10">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Cột trái: SVG Image */}
        <div className="flex justify-center md:justify-start">
          <img src={footerLogo} alt="Footer Artwork" className="w-full max-w-[400px] h-auto object-contain dark:invert" />
        </div>

        {/* Cột phải: Nội dung hiện tại */}
        <div className="flex flex-col gap-8">
          <div className="text-center md:text-left">
            <div className="font-bold text-slate-900 dark:text-white mb-2">{t('nav.education')}</div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">FPT University — Software Engineering</p>
            <p className="text-slate-500 font-medium text-sm mt-1">10/2022 - {t('footer.expected')} 11/2026 • GPA: 7.1</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm justify-center md:justify-start">
            <a href="tel:0936993764"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-cyan transition-colors">
              <i className="ph-fill ph-phone text-lg"></i> 0936 993 764
            </a>
            <a href="mailto:Huynhgiabao541@gmail.com"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-cyan transition-colors">
              <i className="ph-fill ph-envelope-simple text-lg"></i> Huynhgiabao541@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-slate-200 dark:border-white/5 text-xs text-slate-500 font-medium tracking-wide">
        © 2026 Huỳnh Gia Bảo. Designed with Antigravity.
      </div>
    </footer>
  );
}
