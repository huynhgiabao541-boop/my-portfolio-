export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 mt-12 bg-white/40 dark:bg-black/20 backdrop-blur-md relative z-10">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="font-bold text-slate-900 dark:text-white mb-2">Học vấn</div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">FPT University — Software Engineering</p>
          <p className="text-slate-500 font-mono text-sm mt-1">10/2022 - Dự kiến 11/2026 • GPA: 7.3</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-sm">
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
      <div className="text-center py-4 border-t border-slate-200 dark:border-white/5 text-xs text-slate-500 font-mono">
        © 2026 Huỳnh Gia Bảo. Designed with Antigravity.
      </div>
    </footer>
  );
}
