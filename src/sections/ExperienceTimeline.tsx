import { experiences } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';

export default function ExperienceTimeline() {
  return (
    <>
      {/* Education */}
      <section id="education" className="space-y-12 relative z-10">
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-lg bg-brand-cyan/10 dark:bg-brand-cyan/20 flex items-center justify-center border border-brand-cyan/20 dark:border-brand-cyan/30 text-brand-cyan">
            <i className="ph-fill ph-graduation-cap text-xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Học vấn</h2>
        </div>

        <div className="space-y-6">
          <GlassCard className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12 relative overflow-hidden group">
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-3xl rounded-full z-0 pointer-events-none group-hover:bg-brand-cyan/20 transition-all">
            </div>

            <div className="md:w-1/4 shrink-0 relative z-10">
              <span
                className="font-mono text-base text-brand-cyan bg-brand-cyan/5 dark:bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">10/2022 - 11/2026</span>
            </div>
            <div className="relative z-10 space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Software Engineering</h3>
              <p className="text-brand-cyan/90 dark:text-brand-cyan/80 font-mono text-base">FPT University</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Điểm trung bình (GPA): <strong className="text-slate-800 dark:text-slate-200">7.3/10</strong>.<br />
                Chuyên ngành Kỹ thuật Phần mềm, được đào tạo bài bản về kiến trúc phần mềm, cơ sở dữ liệu, và quy trình phát triển dự án.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="space-y-12 relative z-10">
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-lg bg-brand-cyan/10 dark:bg-brand-cyan/20 flex items-center justify-center border border-brand-cyan/20 dark:border-brand-cyan/30 text-brand-cyan">
            <i className="ph-fill ph-briefcase text-xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Kinh nghiệm làm việc</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <GlassCard
              key={exp.id}
              className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12 relative overflow-hidden group">
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-3xl rounded-full z-0 pointer-events-none group-hover:bg-brand-cyan/20 transition-all">
              </div>

              <div className="md:w-1/4 shrink-0 relative z-10">
                <span
                  className={`font-mono text-base px-3 py-1 rounded-full border ${exp.id === 1 ? 'text-brand-cyan bg-brand-cyan/5 dark:bg-brand-cyan/10 border-brand-cyan/20' : 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10'}`}>
                  {exp.period}
                </span>
              </div>
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                <p className="text-brand-cyan/90 dark:text-brand-cyan/80 font-mono text-base">{exp.company}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
