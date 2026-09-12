import { skills } from '../data/portfolioData';
import LiquidPill from '../components/LiquidPill';
import { useTranslation } from 'react-i18next';

export default function SkillsSection() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="space-y-12 relative z-10">
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-lg bg-slate-200/80 dark:bg-white/10 flex items-center justify-center border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white">
          <i className="ph-fill ph-code text-xl"></i>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('skills_section.title')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <LiquidPill className="w-full flex items-center p-4 text-left">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-cyan/10 dark:bg-brand-cyan/20 border border-brand-cyan/20 dark:border-brand-cyan/30 text-brand-cyan mr-4 shrink-0">
            <i className="ph-fill ph-database"></i>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Backend & Database</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">{skills.backend.join(', ')}, {skills.databases.join(', ')}.</p>
          </div>
        </LiquidPill>

        <LiquidPill className="w-full flex items-center p-4 text-left">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-200/80 dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white mr-4 shrink-0">
            <i className="ph-fill ph-layout"></i>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Frontend</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">{skills.frontend.join(', ')}.</p>
          </div>
        </LiquidPill>

        <LiquidPill className="w-full flex items-center p-4 text-left">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-200/80 dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white mr-4 shrink-0">
            <i className="ph-fill ph-hard-drives"></i>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">DevOps & Deployment</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">{skills.devops.join(', ')}.</p>
          </div>
        </LiquidPill>

        <LiquidPill className="w-full flex items-center p-4 text-left">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-200/80 dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white mr-4 shrink-0">
            <i className="ph-fill ph-wrench"></i>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t('skills_section.tools_and_soft_skills')}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">{skills.tools.join(', ')}. {t('skills_section.soft_skills_list')}.</p>
          </div>
        </LiquidPill>

      </div>
    </section>
  );
}
