import SkillBadge from './SkillBadge';
import GlassCard from './GlassCard';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ project }: { project: any }) {
  const { t } = useTranslation();
  const isFeatured = project.id === 1;

  return (
    <div className={isFeatured ? "prism-good-border h-full group cursor-default" : "glass-card rounded-2xl h-full flex flex-col relative overflow-hidden group"}>
      <div className={isFeatured ? "bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl rounded-[15px] p-6 h-full flex flex-col relative overflow-hidden" : "relative z-10 flex flex-col h-full p-6"}>
        {isFeatured && (
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-cyan/20 blur-3xl rounded-full z-0 pointer-events-none group-hover:bg-brand-cyan/30 transition-all"></div>
        )}

        {project.image && (
          <div
            className="absolute top-0 left-0 right-0 h-40 z-0 opacity-40 dark:opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover blur-[2px]"
            />
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full pt-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2 flex-wrap">
              {project.name}
              {isFeatured && (
                <span className="px-2 py-0.5 rounded bg-gradient-to-r from-brand-cyan to-blue-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <i className="ph-fill ph-star"></i>
                </span>
              )}
            </h3>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-200/50 dark:bg-white/10 flex items-center justify-center border border-slate-300/50 dark:border-white/20 text-slate-600 dark:text-slate-300 hover:bg-slate-300/50 dark:hover:bg-white/20 hover:text-brand-cyan dark:hover:text-white transition-all shrink-0">
                <i className="ph-bold ph-arrow-up-right"></i>
              </a>
            ) : isFeatured ? (
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 dark:bg-brand-cyan/20 flex items-center justify-center border border-brand-cyan/30 dark:border-brand-cyan/50 text-brand-cyan shrink-0">
                <i className="ph-fill ph-trophy"></i>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg bg-slate-200/50 dark:bg-white/10 flex items-center justify-center border border-slate-300/50 dark:border-white/20 text-slate-600 dark:text-slate-300 shrink-0">
                <i className="ph-bold ph-folder"></i>
              </div>
            )}
          </div>

          <p className="text-brand-cyan text-sm font-mono mb-3">{t(`projects_list.${project.id}.role`)}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1">
            {t(`projects_list.${project.id}.description`)}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.map((tech: string, i: number) => (
              <SkillBadge key={i} skill={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
