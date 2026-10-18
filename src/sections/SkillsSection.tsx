import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassEffect } from '../components/ui/liquid-glass';
import { useTranslation } from 'react-i18next';
import { skills } from '../data/portfolioData';

type SkillCategory = 'backend' | 'database' | 'devops' | 'frontend';

interface TechItem {
  name: string;
  icon: string;
  highlight?: boolean;
}

interface CategoryData {
  id: SkillCategory;
  label: string;
  icon: string;
  image: string;
  tagline: string;
  description: string;
  techs: TechItem[];
  highlights: string[];
}

export default function SkillsSection() {
  const { t } = useTranslation();
  // Mặc định chọn Backend, người dùng hover hoặc click sẽ đổi card đang mở
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('backend');

  const categories: CategoryData[] = [
    {
      id: 'backend',
      label: 'Backend & Architecture',
      icon: 'ph-cpu',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
      tagline: 'Core Focus & High Scalability',
      description: 'Chuyên sâu xây dựng RESTful APIs quy mô lớn, áp dụng Clean Architecture, CQRS pattern, tích hợp background jobs tự động và xử lý nghiệp vụ phức tạp.',
      techs: [
        { name: ".NET (C#)", icon: "ph-fill ph-file-c-sharp", highlight: true },
        { name: "Node.js (Express / NestJS)", icon: "ph-fill ph-code", highlight: true },
        { name: "RESTful API", icon: "ph-fill ph-arrows-left-right", highlight: true },
        { name: "Clean Architecture", icon: "ph-fill ph-stack", highlight: true },
        { name: "CQRS & MediatR", icon: "ph-fill ph-git-branch", highlight: true },
        { name: "GraphQL", icon: "ph-fill ph-graph" },
        { name: "Hangfire", icon: "ph-fill ph-clock" },
      ],
      highlights: [
        "Thiết kế hệ thống đa tầng bảo trì dễ dàng và tách bạch domain logic.",
        "Xử lý background task tự động với Hangfire.",
        "Phân quyền đa tầng và JWT authentication an toàn."
      ]
    },
    {
      id: 'database',
      label: 'Database & Tuning',
      icon: 'ph-database',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200',
      tagline: 'Relational DBs, Modeling & Optimization',
      description: 'Đam mê thiết kế cơ sở dữ liệu quan hệ chặt chẽ, tối ưu hóa chỉ mục (Indexes), Store Procedures và xử lý truy vấn thời gian thực cho dữ liệu khối lượng lớn.',
      techs: [
        { name: "SQL Server", icon: "ph-fill ph-database", highlight: true },
        { name: "PostgreSQL", icon: "ph-fill ph-database", highlight: true },
        { name: "MySQL", icon: "ph-fill ph-database" },
        { name: "Prisma ORM", icon: "ph-fill ph-brackets-curly", highlight: true },
        { name: "EF Core", icon: "ph-fill ph-tree-structure", highlight: true },
        { name: "Query Optimization", icon: "ph-fill ph-lightning", highlight: true },
      ],
      highlights: [
        "Thiết kế và chuẩn hóa schema dữ liệu cho giải đấu và chuỗi bán lẻ ERP.",
        "Tối ưu SQL Server hỗ trợ xử lý dữ liệu QA/QC thời gian thực.",
        "Viết stored procedures và indexing tăng tốc độ truy vấn."
      ]
    },
    {
      id: 'devops',
      label: 'DevOps & Cloud',
      icon: 'ph-hard-drives',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200',
      tagline: 'Containerization, Automation & Deployment',
      description: 'Đóng gói sản phẩm bằng Docker, xây dựng pipeline tích hợp và triển khai tự động (CI/CD), quản lý server VPS độc lập và tích hợp lưu trữ đám mây.',
      techs: [
        { name: "Docker", icon: "ph-fill ph-package", highlight: true },
        { name: "Portainer", icon: "ph-fill ph-cube" },
        { name: "Jenkins CI/CD", icon: "ph-fill ph-gear", highlight: true },
        { name: "Cloud Server (VPS)", icon: "ph-fill ph-cloud", highlight: true },
        { name: "AWS S3", icon: "ph-fill ph-hard-drive" },
      ],
      highlights: [
        "Tự động hóa build, test và deploy qua Jenkins pipeline.",
        "Container hóa các ứng dụng .NET và Node.js chạy ổn định trên Docker.",
        "Tích hợp AWS S3 lưu trữ tệp tin và báo cáo."
      ]
    },
    {
      id: 'frontend',
      label: 'Frontend & Tools',
      icon: 'ph-paint-brush',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1200',
      tagline: 'UI Integration, DevTools & Soft Skills',
      description: 'Khả năng xây dựng giao diện hiện đại, responsive mượt mà với React, thành thạo công cụ phát triển chuyên nghiệp và kỹ năng phối hợp nhóm hiệu quả.',
      techs: [
        { name: "React", icon: "ph-fill ph-atom", highlight: true },
        { name: "Tailwind CSS", icon: "ph-fill ph-paint-brush", highlight: true },
        { name: "TypeScript", icon: "ph-fill ph-brackets-curly", highlight: true },
        { name: "Vite", icon: "ph-fill ph-lightning" },
        { name: "Git / GitHub", icon: "ph-fill ph-git-pull-request", highlight: true },
        { name: "Postman", icon: "ph-fill ph-paper-plane-tilt" },
      ],
      highlights: [
        "Xây dựng giao diện ERP dashboard tương tác với GraphQL API.",
        "Quy trình làm việc chuẩn Git Flow, quản lý mã nguồn chặt chẽ.",
        "Kỹ năng mềm: Làm việc nhóm, thuyết trình và giải quyết vấn đề."
      ]
    }
  ];

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
        {categories.map((cat) => {
          const isExpanded = activeCategory === cat.id;

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
                // Trên Desktop: Bung rộng gấp 3 lần theo chiều ngang
                flex: isExpanded ? 3.2 : 0.75,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {/* Full Background Image */}
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Gradient & Dark Overlay (Tối hơn khi thu nhỏ, sáng và rõ khi mở rộng) */}
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

                  {/* Chữ đứng dọc trên desktop */}
                  <div className="lg:[writing-mode:vertical-rl] lg:rotate-180 font-bold text-base sm:text-lg text-white tracking-wide">
                    {cat.label}
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
                        {cat.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {cat.label}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                      {cat.description}
                    </p>
                  </div>

                  {/* Middle: Badges Matrix */}
                  <div className="my-auto py-4 space-y-2.5">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Công nghệ & Frameworks
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

                  {/* Bottom: Highlights & Soft Skills */}
                  <div className="pt-3 border-t border-white/15 space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Điểm nổi bật
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {cat.highlights.map((item, idx) => (
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

      {/* Dòng tóm tắt kỹ năng mềm */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <i className="ph-fill ph-users-three text-brand-cyan"></i>
          {t('skills_section.tools_and_soft_skills')}:
        </span>
        {skills.softSkills.map((softSkill, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-md bg-slate-200/60 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 font-medium"
          >
            {softSkill}
          </span>
        ))}
      </div>
    </section>
  );
}
