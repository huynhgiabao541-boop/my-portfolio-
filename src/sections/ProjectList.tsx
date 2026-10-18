import { projects } from '../data/portfolioData';
import CardFanCarousel from '../components/ui/card-fan-carousel';
import { GlassEffect } from '../components/ui/liquid-glass';
import { useTranslation } from 'react-i18next';

export default function ProjectList() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="space-y-6 sm:space-y-8 relative z-10">
      {/* Header Bar */}
      <div className="flex items-center gap-4 mb-2">
        <GlassEffect className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-800 dark:text-blue-400 font-normal">
          <i className="ph-fill ph-rocket-launch text-xl"></i>
        </GlassEffect>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {t('projects_list.title')}
          </h2>
        </div>
      </div>

      {/* 3D Card Fan Carousel */}
      <CardFanCarousel projects={projects} />
    </section>
  );
}
