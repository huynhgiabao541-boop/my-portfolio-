import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import { GlassEffect } from '../components/ui/liquid-glass';
import { useTranslation } from 'react-i18next';

export default function ProjectList() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="space-y-12 relative z-10">
      <div className="flex items-center gap-4 mb-8">
        <GlassEffect className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-800 dark:text-blue-400 font-normal">
          <i className="ph-fill ph-rocket-launch text-xl"></i>
        </GlassEffect>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('projects_list.title')}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
