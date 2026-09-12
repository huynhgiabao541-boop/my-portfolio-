import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="relative z-10 flex flex-col items-center text-center space-y-8">
      <div className="relative w-40 h-40 flex items-center justify-center mb-4">
        <div
          className="absolute inset-0 bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/80 dark:border-white/20 rounded-full shadow-lg z-10 flex flex-col items-center justify-center overflow-hidden">
          <picture>
            <source srcSet="482029458_2469570630053863_8634627401507065921_n.jpg" type="image/webp" />
            <img src="482029458_2469570630053863_8634627401507065921_n.jpg?v=1" alt="Huỳnh Gia Bảo"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling && (e.currentTarget.nextElementSibling as HTMLElement).classList.remove('hidden') }} />
          </picture>
          <i className="ph-fill ph-user text-5xl text-slate-400 dark:text-slate-400 mb-1 hidden"></i>
        </div>
        <div
          className="absolute inset-2 bg-gradient-to-t from-brand-cyan/60 to-brand-blue/40 blur-md rounded-full animate-liquid-morph z-0 mix-blend-multiply dark:mix-blend-screen">
        </div>
      </div>

      <div className="space-y-4 max-w-4xl">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/30 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-white/20 shadow-sm text-sm text-brand-cyan mb-2">
          <i className="ph-fill ph-fish animate-pulse text-black dark:text-cyan-100"></i>
          <span className="font-bold font-mono text-slate-800 dark:text-cyan-300">{t('hero.role')}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {t('hero.hello')} <span className="text-gradient-cyan">Huỳnh Gia Bảo</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
          <span className="underline decoration-brand-cyan decoration-2 underline-offset-4 font-semibold text-slate-800 dark:text-slate-200">{t('hero.exp_highlight')}</span>{t('hero.desc_1')}<strong className="text-slate-800 dark:text-slate-200">.NET Core</strong>{t('hero.desc_2')}<strong className="text-slate-800 dark:text-slate-200">Node.js</strong>{t('hero.desc_3')}
        </p>
      </div>

      <div className="flex items-center gap-4 pt-4">
        <a href="#projects"
          className="px-6 py-3 rounded-xl bg-brand-cyan text-white dark:text-slate-950 font-bold hover:bg-cyan-500 dark:hover:bg-cyan-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center gap-2">
          {t('hero.view_projects')} <i className="ph-bold ph-arrow-right"></i>
        </a>
        <a href="Huynh-Gia-Bao-CV.pdf" download="Huynh-Gia-Bao-Backend.pdf"
          className="px-6 py-3 rounded-xl bg-white/30 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-700 dark:text-slate-200 font-bold hover:text-brand-cyan dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/10 hover:border-cyan-200 dark:hover:border-white/30 transition-all flex items-center gap-2">
          {t('hero.download_cv')} <i className="ph-bold ph-download-simple"></i>
        </a>
        <a href="https://www.facebook.com/nhunuococ.man.3/" target="_blank"
          className="w-12 h-12 rounded-xl bg-white/30 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-cyan dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/10 hover:border-cyan-200 dark:hover:border-white/30 transition-all">
          <i className="ph-fill ph-facebook-logo text-xl"></i>
        </a>
        <a href="mailto:Huynhgiabao541@gmail.com"
          className="w-12 h-12 rounded-xl bg-white/30 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-cyan dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/10 hover:border-cyan-200 dark:hover:border-white/30 transition-all">
          <i className="ph-fill ph-envelope-simple text-xl"></i>
        </a>
      </div>
    </section>
  );
}
