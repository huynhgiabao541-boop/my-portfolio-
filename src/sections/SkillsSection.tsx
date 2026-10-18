import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassEffect } from '../components/ui/liquid-glass';
import { useTranslation } from 'react-i18next';
import { skills } from '../data/portfolioData';

type TabId = 'backend' | 'database' | 'devops' | 'frontend';

interface TechItem {
  name: string;
  icon: string;
  highlight?: boolean;
}

interface CategoryData {
  id: TabId;
  label: string;
  icon: string;
  tagline: string;
  description: string;
  accentColor: string; // for glow effects
  techs: TechItem[];
  highlights: string[];
}

export default function SkillsSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabId>('backend');

  const categories: CategoryData[] = [
    {
      id: 'backend',
      label: 'Backend & Architecture',
      icon: 'ph-cpu',
      tagline: 'Core Focus & High Performance Systems',
      description: 'Chuyên sâu xây dựng RESTful APIs quy mô lớn, áp dụng Clean Architecture, CQRS pattern, tích hợp background jobs tự động và xử lý nghiệp vụ phức tạp.',
      accentColor: 'from-brand-cyan/20 to-blue-500/20',
      techs: [
        { name: ".NET (C#)", icon: "ph-fill ph-file-c-sharp", highlight: true },
        { name: "Node.js (Express / NestJS)", icon: "ph-fill ph-code", highlight: true },
        { name: "RESTful API", icon: "ph-fill ph-arrows-left-right", highlight: true },
        { name: "Clean Architecture", icon: "ph-fill ph-stack", highlight: true },
        { name: "CQRS & MediatR", icon: "ph-fill ph-git-branch", highlight: true },
        { name: "GraphQL", icon: "ph-fill ph-graph" },
        { name: "Hangfire", icon: "ph-fill ph-clock" },
        { name: "Microservices", icon: "ph-fill ph-cubes" },
      ],
      highlights: [
        "Thiết kế hệ thống đa tầng bảo trì dễ dàng và tách bạch domain logic.",
        "Xử lý background task với Hangfire (quản lý trạng thái mượn/trả, thông báo quá hạn).",
        "Áp dụng phân quyền đa tầng và JWT authentication an toàn."
      ]
    },
    {
      id: 'database',
      label: 'Database & Tuning',
      icon: 'ph-database',
      tagline: 'Relational DBs, Modeling & Optimization',
      description: 'Đam mê thiết kế cơ sở dữ liệu quan hệ chặt chẽ, tối ưu hóa chỉ mục (Indexes), Store Procedures và xử lý truy vấn thời gian thực cho dữ liệu khối lượng lớn.',
      accentColor: 'from-blue-500/20 to-indigo-500/20',
      techs: [
        { name: "SQL Server", icon: "ph-fill ph-database", highlight: true },
        { name: "PostgreSQL", icon: "ph-fill ph-database", highlight: true },
        { name: "MySQL", icon: "ph-fill ph-database" },
        { name: "Prisma ORM", icon: "ph-fill ph-brackets-curly", highlight: true },
        { name: "EF Core", icon: "ph-fill ph-tree-structure", highlight: true },
        { name: "Query Optimization", icon: "ph-fill ph-lightning", highlight: true },
      ],
      highlights: [
        "Thiết kế và chuẩn hóa schema dữ liệu cho các giải đấu thể thao và chuỗi bán lẻ ERP.",
        "Tối ưu SQL Server hỗ trợ xử lý dữ liệu kiểm tra chất lượng (QA/QC) thời gian thực.",
        "Viết stored procedures và indexing giúp tăng tốc độ truy vấn đáng kể."
      ]
    },
    {
      id: 'devops',
      label: 'DevOps & Cloud',
      icon: 'ph-hard-drives',
      tagline: 'Containerization, Automation & Deployment',
      description: 'Đóng gói sản phẩm bằng Docker, xây dựng pipeline tích hợp và triển khai tự động (CI/CD), quản lý server VPS độc lập và tích hợp lưu trữ đám mây.',
      accentColor: 'from-indigo-500/20 to-purple-500/20',
      techs: [
        { name: "Docker", icon: "ph-fill ph-package", highlight: true },
        { name: "Portainer", icon: "ph-fill ph-cube" },
        { name: "Jenkins CI/CD", icon: "ph-fill ph-gear", highlight: true },
        { name: "Cloud Server (VPS)", icon: "ph-fill ph-cloud", highlight: true },
        { name: "AWS S3", icon: "ph-fill ph-hard-drive" },
        { name: "Linux / Nginx", icon: "ph-fill ph-terminal" },
      ],
      highlights: [
        "Tự động hóa build, test và deploy qua Jenkins pipeline cho nhiều môi trường.",
        "Container hóa các ứng dụng .NET và Node.js chạy ổn định trên Docker/Portainer.",
        "Tích hợp AWS S3 lưu trữ tệp tin và xử lý xuất báo cáo tự động."
      ]
    },
    {
      id: 'frontend',
      label: 'Frontend & Tools',
      icon: 'ph-paint-brush',
      tagline: 'UI Integration, DevTools & Soft Skills',
      description: 'Khả năng xây dựng giao diện hiện đại, responsive mượt mà với React, thành thạo công cụ phát triển chuyên nghiệp và kỹ năng phối hợp nhóm hiệu quả.',
      accentColor: 'from-emerald-500/20 to-cyan-500/20',
      techs: [
        { name: "React", icon: "ph-fill ph-atom", highlight: true },
        { name: "Tailwind CSS", icon: "ph-fill ph-paint-brush", highlight: true },
        { name: "TypeScript", icon: "ph-fill ph-brackets-curly", highlight: true },
        { name: "Vite", icon: "ph-fill ph-lightning" },
        { name: "Git / GitHub", icon: "ph-fill ph-git-pull-request", highlight: true },
        { name: "Postman", icon: "ph-fill ph-paper-plane-tilt" },
        { name: "Visual Studio / VS Code", icon: "ph-fill ph-terminal-window" },
      ],
      highlights: [
        "Xây dựng giao diện ERP dashboard tương tác với GraphQL API.",
        "Quy trình làm việc chuẩn Git Flow, quản lý mã nguồn và review code chặt chẽ.",
        "Kỹ năng mềm: Làm việc nhóm, thuyết trình kỹ thuật và tư duy giải quyết vấn đề."
      ]
    }
  ];

  const currentCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="space-y-8 sm:space-y-12 relative z-10">
      {/* Title */}
      <div className="flex items-center gap-4 mb-2">
        <GlassEffect className="w-10 h-10 rounded-lg flex items-center justify-center text-brand-cyan dark:text-brand-cyan font-normal">
          <i className="ph-fill ph-code text-xl"></i>
        </GlassEffect>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          {t('skills_section.title')}
        </h2>
      </div>

      {/* 4 Tabs Navbar: Grid 2x2 trên mobile, thanh ngang viên thuốc trên tablet/desktop */}
      <div className="w-full flex justify-center">
        <div className="w-full sm:w-auto p-1.5 rounded-2xl sm:rounded-full bg-slate-200/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-300/40 dark:border-white/10 shadow-lg">
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-1.5 font-medium text-xs sm:text-sm">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full transition-all duration-300 z-10 flex items-center justify-center gap-2 cursor-pointer ${
                    isActive
                      ? 'text-slate-900 dark:text-white font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-brand-cyan'
                  }`}
                >
                  {/* Sliding Pill Animation */}
                  {isActive && (
                    <motion.div
                      layoutId="skills-nav-pill"
                      className="absolute inset-0 bg-white dark:bg-slate-700/90 rounded-xl sm:rounded-full shadow-md -z-10 border border-slate-200/60 dark:border-white/15"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <i className={`ph-fill ${cat.icon} text-base sm:text-lg ${isActive ? 'text-brand-cyan' : ''}`}></i>
                  <span className="text-center truncate">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCategory.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <GlassEffect className="w-full rounded-2xl sm:rounded-3xl p-6 sm:p-10 font-normal relative overflow-hidden">
            {/* Ambient Dynamic Background Glow */}
            <div
              className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${currentCategory.accentColor} blur-3xl rounded-full pointer-events-none -z-0 opacity-80`}
            />

            <div className="relative z-10 space-y-8">
              {/* Top: Category Title & Description */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">
                  <i className="ph-bold ph-sparkle"></i>
                  <span>{currentCategory.tagline}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {currentCategory.label}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                  {currentCategory.description}
                </p>
              </div>

              {/* Middle: Technologies Grid Badges */}
              <div className="space-y-3">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {currentCategory.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className={`flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default ${
                        tech.highlight
                          ? 'bg-brand-cyan/15 dark:bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/40 shadow-sm shadow-brand-cyan/10'
                          : 'bg-slate-200/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10'
                      }`}
                    >
                      <i className={`${tech.icon} text-lg text-brand-cyan`}></i>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Practical Highlights & Soft Skills */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                    Điểm nổi bật thực tế
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {currentCategory.highlights.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <i className="ph-bold ph-check text-brand-cyan mt-1 shrink-0"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Soft Skills Quick Panel */}
                <div className="space-y-2">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                    Kỹ năng mềm bổ trợ
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {skills.softSkills.map((soft, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                      >
                        <i className="ph-fill ph-star text-amber-500"></i>
                        {soft}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </GlassEffect>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
