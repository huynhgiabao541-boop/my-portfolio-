import { useState } from 'react';
import { skills } from '../data/portfolioData';
import { GlassEffect } from '../components/ui/liquid-glass';
import { useTranslation } from 'react-i18next';

type Tab = 'backend' | 'frontend' | 'devops' | 'tools';

export default function SkillsSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<Tab>('backend');

  const tabs: { id: Tab; label: string; icon: string; image: string; content: string }[] = [
    {
      id: 'backend',
      label: 'Backend & Database',
      icon: 'ph-database',
      image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&q=80&w=800',
      content: `${skills.backend.join(', ')}, ${skills.databases.join(', ')}.`
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: 'ph-layout',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800',
      content: `${skills.frontend.join(', ')}.`
    },
    {
      id: 'devops',
      label: 'DevOps & Deployment',
      icon: 'ph-hard-drives',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800',
      content: `${skills.devops.join(', ')}.`
    },
    {
      id: 'tools',
      label: t('skills_section.tools_and_soft_skills'),
      icon: 'ph-wrench',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
      content: `${skills.tools.join(', ')}. ${t('skills_section.soft_skills_list')}.`
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab)!;

  return (
    <section id="skills" className="space-y-8 sm:space-y-12 relative z-10">
      <div className="flex items-center gap-4 mb-4 sm:mb-8">
        <GlassEffect className="w-10 h-10 rounded-lg flex items-center justify-center text-brand-cyan dark:text-brand-cyan font-normal">
          <i className="ph-fill ph-code text-xl"></i>
        </GlassEffect>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{t('skills_section.title')}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

        {/* Cột Trái: Nội dung & Hình ảnh (Style giống ProjectCard) */}
        <div className="h-full group cursor-default min-h-[320px] sm:min-h-[400px]">
          <GlassEffect className="h-full w-full rounded-[15px] font-normal">
            <div className="relative flex flex-col h-full p-5 sm:p-8 overflow-hidden">

              {/* Hình ảnh với mask mờ dần xuống dưới */}
              <div
                className="absolute top-0 left-0 right-0 h-64 sm:h-80 z-0 opacity-40 dark:opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
                }}
              >
                <img
                  src={activeTabData.image}
                  alt={activeTabData.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Nội dung chữ */}
              <div className="relative z-10 flex flex-col h-full mt-auto justify-end pt-24 sm:pt-32">
                <h3 className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3 sm:mb-4">
                  {activeTabData.label}
                </h3>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeTabData.content}
                </p>
              </div>

            </div>
          </GlassEffect>
        </div>

        {/* Cột Phải: Các Tabs */}
        <div className="flex flex-col gap-4 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="text-left w-full transition-all duration-300 focus:outline-none"
            >
              <GlassEffect
                className={`w-full flex items-center p-4 transition-all duration-300 rounded-2xl font-normal text-left ${activeTab === tab.id
                  ? 'ring-2 ring-brand-cyan/50 bg-white/50 dark:bg-white/10 scale-[1.02]'
                  : 'hover:scale-[1.01] opacity-70 hover:opacity-100'
                  }`}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 shrink-0 transition-colors ${activeTab === tab.id
                    ? 'bg-brand-cyan/20 border-brand-cyan/30 text-brand-cyan'
                    : 'bg-slate-200/80 dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white'
                    } border`}
                >
                  <i className={`ph-fill ${tab.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className={`font-bold mb-1 transition-colors ${activeTab === tab.id ? 'text-brand-cyan' : 'text-slate-900 dark:text-white'
                    }`}>
                    {tab.label}
                  </h4>
                  {activeTab === tab.id && (
                    <p className="text-sm text-brand-cyan/80 animate-fade-in">Đang chọn</p>
                  )}
                </div>
              </GlassEffect>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
