import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';

export default function ProjectList() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="space-y-12 relative z-10">
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center border border-blue-500/20 dark:border-blue-500/30 text-blue-500 dark:text-blue-400">
          <i className="ph-fill ph-rocket-launch text-xl"></i>
        </div>
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
