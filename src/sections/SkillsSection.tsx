import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassEffect } from '../components/ui/liquid-glass';
import { useTranslation } from 'react-i18next';

type SkillCategory = 'backend' | 'database' | 'devops' | 'frontend';

interface TechItem {
  name: string;
  icon: string;
  highlight?: boolean;
}

interface CategoryConfig {
  id: SkillCategory;
  icon: string;
  image: string;
  techs: TechItem[];
}

export default function SkillsSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('backend');

  const categoriesConfig: CategoryConfig[] = [
    {
      id: 'backend',
      icon: 'ph-cpu',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
      techs: [
        { name: ".NET (C#)", icon: "ph-fill ph-file-c-sharp", highlight: true },
        { name: "Node.js (Express / NestJS)", icon: "ph-fill ph-code", highlight: true },
        { name: "RESTful API", icon: "ph-fill ph-arrows-left-right", highlight: true },
        { name: "Clean Architecture", icon: "ph-fill ph-stack", highlight: true },
        { name: "CQRS & MediatR", icon: "ph-fill ph-git-branch", highlight: true },
        { name: "GraphQL", icon: "ph-fill ph-graph" },
        { name: "Hangfire", icon: "ph-fill ph-clock" },
      ],
    },
    {
      id: 'database',
      icon: 'ph-database',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200',
      techs: [
        { name: "SQL Server", icon: "ph-fill ph-database", highlight: true },
        { name: "PostgreSQL", icon: "ph-fill ph-database", highlight: true },
        { name: "MySQL", icon: "ph-fill ph-database" },
        { name: "Prisma ORM", icon: "ph-fill ph-brackets-curly", highlight: true },
        { name: "EF Core", icon: "ph-fill ph-tree-structure", highlight: true },
        { name: "Query Optimization", icon: "ph-fill ph-lightning", highlight: true },
      ],
    },
    {
      id: 'devops',
      icon: 'ph-hard-drives',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200',
      techs: [
        { name: "Docker", icon: "ph-fill ph-package", highlight: true },
        { name: "Portainer", icon: "ph-fill ph-cube" },
        { name: "Jenkins CI/CD", icon: "ph-fill ph-gear", highlight: true },
        { name: "Cloud Server (VPS)", icon: "ph-fill ph-cloud", highlight: true },
        { name: "AWS S3", icon: "ph-fill ph-hard-drive" },
      ],
    },
    {
      id: 'frontend',
      icon: 'ph-paint-brush',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1200',
      techs: [
        { name: "React", icon: "ph-fill ph-atom", highlight: true },
        { name: "Tailwind CSS", icon: "ph-fill ph-paint-brush", highlight: true },
        { name: "TypeScript", icon: "ph-fill ph-brackets-curly", highlight: true },
        { name: "Vite", icon: "ph-fill ph-lightning" },
        { name: "Git / GitHub", icon: "ph-fill ph-git-pull-request", highlight: true },
        { name: "Postman", icon: "ph-fill ph-paper-plane-tilt" },
      ],
    }
  ];

  const softSkillIndices = [0, 1, 2];

  return (
    <section id="skills" className="space-y-6 sm:space-y-8 relative z-10">
      {/* Title */}
      <div className="flex items-center gap-4 mb-2">
        <GlassEffect className="w-10 h-10 rounded-lg flex items-center justify-center text-brand-cyan dark:text-brand-cyan font-normal">
          <i className="ph-fill ph-code text-xl"></i>
        </GlassEffect>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          {t('skills_section.title')}
        </h2>
      </div>

      {/* 4 Card Expandable Gallery (Accordion ngang trên Desktop, dọc trên Mobile) */}
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 w-full min-h-[580px] lg:h-[500px]">
        {categoriesConfig.map((cat) => {
          const isExpanded = activeCategory === cat.id;
          const label = t(`skills_section.categories.${cat.id}.label`);
          const tagline = t(`skills_section.categories.${cat.id}.tagline`);
          const description = t(`skills_section.categories.${cat.id}.desc`);
          const highlights = [
            t(`skills_section.categories.${cat.id}.highlight_1`),
            t(`skills_section.categories.${cat.id}.highlight_2`),
            t(`skills_section.categories.${cat.id}.highlight_3`),
          ];

          return (
            <motion.div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              onMouseEnter={() => setActiveCategory(cat.id)}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer border transition-all duration-300 shadow-xl ${
                isExpanded
                  ? 'border-brand-cyan/60 shadow-brand-cyan/15 ring-1 ring-brand-cyan/30'
                  : 'border-slate-300/40 dark:border-white/10 hover:border-brand-cyan/30'
              }`}
              style={{ flex: 1 }}
              animate={{
                flex: isExpanded ? 3.2 : 0.75,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {/* Full Background Image */}
              <img
                src={cat.image}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Gradient & Dark Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isExpanded
                    ? 'bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40'
                    : 'bg-black/60 dark:bg-black/70 hover:bg-black/45'
                }`}
              />

              {/* Giao diện khi Card đang Thu nhỏ (Collapsed View) */}
              {!isExpanded && (
                <div className="absolute inset-0 z-10 flex flex-row lg:flex-col items-center justify-between p-5 lg:py-8 lg:px-4 text-center">
                  <div className="w-10 h-10 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-md flex items-center justify-center text-brand-cyan border border-white/20 text-xl shadow-md">
                    <i className={`ph-fill ${cat.icon}`}></i>
                  </div>

                  <div className="lg:[writing-mode:vertical-rl] lg:rotate-180 font-bold text-base sm:text-lg text-white tracking-wide">
                    {label}
                  </div>

                  <span className="w-2 h-2 rounded-full bg-brand-cyan/80"></span>
                </div>
              )}

              {/* Giao diện khi Card Mở rộng (Expanded View) */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-8 text-white overflow-y-auto no-scrollbar"
                >
                  {/* Top Bar: Icon + Tagline + Title */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 backdrop-blur-md flex items-center justify-center text-brand-cyan border border-brand-cyan/40 text-xl">
                        <i className={`ph-fill ${cat.icon}`}></i>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan">
                        {tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {label}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                      {description}
                    </p>
                  </div>

                  {/* Middle: Badges Matrix */}
                  <div className="my-auto py-4 space-y-2.5">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      {t('skills_section.title')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.techs.map((tech) => (
                        <div
                          key={tech.name}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                            tech.highlight
                              ? 'bg-brand-cyan/25 text-cyan-200 border border-brand-cyan/40 shadow-sm shadow-brand-cyan/20'
                              : 'bg-white/10 text-slate-200 border border-white/10 hover:bg-white/20'
                          }`}
                        >
                          <i className={`${tech.icon} text-base text-brand-cyan`}></i>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Highlights */}
                  <div className="pt-3 border-t border-white/15 space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Highlights
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <i className="ph-bold ph-check text-brand-cyan mt-0.5 shrink-0"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Dòng tóm tắt kỹ năng mềm - 3 màu Đỏ Vàng Cam */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <i className="ph-fill ph-users-three text-brand-cyan"></i>
          {t('skills_section.tools_and_soft_skills')}:
        </span>
        {softSkillIndices.map((idx) => {
          const colorfulGlass = [
            // Đỏ kính nhẹ nhàng
            'bg-red-500/12 dark:bg-red-500/15 text-red-600 dark:text-red-300 border-red-500/25 dark:border-red-400/25 shadow-xs shadow-red-500/5',
            // Vàng kính nhẹ nhàng
            'bg-amber-400/15 dark:bg-amber-400/15 text-amber-700 dark:text-amber-200 border-amber-400/30 dark:border-amber-400/25 shadow-xs shadow-amber-400/5',
            // Cam kính nhẹ nhàng
            'bg-orange-500/12 dark:bg-orange-500/15 text-orange-600 dark:text-orange-300 border-orange-500/25 dark:border-orange-400/25 shadow-xs shadow-orange-500/5',
          ];
          const glassColor = colorfulGlass[idx % colorfulGlass.length];

          return (
            <span
              key={idx}
              className={`px-3 py-1 rounded-md border font-medium backdrop-blur-md transition-all duration-300 ${glassColor}`}
            >
              {t(`skills_section.soft_skills.${idx}`)}
            </span>
          );
        })}
      </div>
    </section>
  );
}
