
interface SkillBadgeProps {
  skill: string;
  className?: string;
}

export default function SkillBadge({ skill, className = '' }: SkillBadgeProps) {
  return (
    <span className={`text-xs px-2 py-1 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 ${className}`}>
      {skill}
    </span>
  );
}
