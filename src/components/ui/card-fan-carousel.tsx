import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import SkillBadge from "../SkillBadge";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectCardItem {
  id: number;
  name: string;
  role: string;
  description: string;
  techStack: string[];
  link?: string;
  image?: string;
}

interface CardFanCarouselProps {
  projects: ProjectCardItem[];
}

const MAX_VISIBLE = 7;
const HALF = 3;

const FAN_POSITIONS = [
  { rot: -21, scale: 0.7756, x: -30, y: 7.3, zIndex: 1 },
  { rot: -14, scale: 0.8498, x: -22, y: 4.0, zIndex: 2 },
  { rot: -7, scale: 0.9346, x: -11, y: 1.3, zIndex: 3 },
  { rot: 0, scale: 1.0, x: 0, y: 0.0, zIndex: 10 },
  { rot: 7, scale: 0.9346, x: 11, y: 1.3, zIndex: 3 },
  { rot: 14, scale: 0.8498, x: 22, y: 4.0, zIndex: 2 },
  { rot: 21, scale: 0.7756, x: 30, y: 7.3, zIndex: 1 },
];

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.28;
  if (width < 640) return 0.38;
  if (width < 768) return 0.5;
  if (width < 1024) return 0.75;
  return 1.0;
}

function getHeightMultiplier(width: number) {
  let idealPx: number;
  if (width < 480) idealPx = 22 * 16;
  else if (width < 640) idealPx = 26 * 16;
  else if (width < 768) idealPx = 28 * 16;
  else if (width < 1024) idealPx = 34 * 16;
  else idealPx = 38 * 16;

  const available = window.innerHeight * 0.7;
  if (available >= idealPx) return 1;
  return available / idealPx;
}

function getSlotConfig(_totalCards: number, slot: number) {
  if (slot >= 0 && slot < FAN_POSITIONS.length) {
    return FAN_POSITIONS[slot];
  }
  return FAN_POSITIONS[HALF];
}

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border-[1.5px] border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-[16px] text-black/40 dark:text-white/55 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-black/25 dark:hover:border-white/25 hover:text-black/70 dark:hover:text-white/80 active:opacity-70 transition-colors duration-300 before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:border before:border-black/[0.04] dark:before:border-white/[0.04] before:pointer-events-none";

export default function CardFanCarousel({ projects }: CardFanCarouselProps) {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);
  const directionRef = useRef<"left" | "right" | null>(null);
  const prevVisible = useRef<Set<number>>(new Set());

  const totalCards = projects.length;
  const needsPagination = totalCards > 1;
  const [centerIndex, setCenterIndex] = useState(0);

  // State phóng to modal chi tiết dự án
  const [selectedProject, setSelectedProject] = useState<ProjectCardItem | null>(null);

  // Khóa cuộn trang và lắng nghe phím Escape khi Modal mở
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const getVisibleMap = useCallback(
    (center: number) => {
      const map = new Map<number, number>();
      const centerSlot = HALF; // Slot 3 là vị trí trung tâm trong FAN_POSITIONS
      for (let i = 0; i < totalCards; i++) {
        let diff = i - center;
        if (diff > totalCards / 2) diff -= totalCards;
        if (diff <= -totalCards / 2) diff += totalCards;

        const slot = centerSlot + diff;
        if (slot >= 0 && slot < MAX_VISIBLE) {
          map.set(i, slot);
        }
      }
      return map;
    },
    [totalCards]
  );

  const cycle = useCallback(
    (direction: "left" | "right") => {
      if (isAnimating.current || !needsPagination) return;
      isAnimating.current = true;
      directionRef.current = direction;
      setCenterIndex((prev) =>
        direction === "right"
          ? (prev + 1) % totalCards
          : (prev - 1 + totalCards) % totalCards
      );
    },
    [totalCards, needsPagination]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !totalCards) return;

    const cardElements = Array.from(
      container.querySelectorAll<HTMLElement>(".fan-project-card")
    );
    if (!cardElements.length) return;

    const visibleMap = getVisibleMap(centerIndex);
    const previouslyVisible = prevVisible.current;
    const direction = directionRef.current;
    const isFirstMount = !hasEntered.current;
    const multiplier = getResponsiveMultiplier(window.innerWidth);
    const hMult = getHeightMultiplier(window.innerWidth);
    const slotCount = totalCards >= MAX_VISIBLE ? MAX_VISIBLE : totalCards;
    const config = (slot: number) => getSlotConfig(slotCount, slot);

    if (isFirstMount) isAnimating.current = true;

    let completedCount = 0;
    const visibleCount = visibleMap.size;
    const onCardDone = () => {
      if (++completedCount >= visibleCount) {
        isAnimating.current = false;
        if (isFirstMount) hasEntered.current = true;
      }
    };

    const fallbackTimer = setTimeout(() => {
      isAnimating.current = false;
    }, 1200);

    cardElements.forEach((card, cardIndex) => {
      const slot = visibleMap.get(cardIndex);
      const wasVisible = previouslyVisible.has(cardIndex);

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = config(slot);
        const target = {
          x: `${x * multiplier}rem`,
          y: `${y * hMult}rem`,
          rotation: rot,
          scale,
          opacity: 1,
          zIndex,
        };

        if (isFirstMount) {
          gsap.set(card, {
            x: 0,
            y: `${12 * hMult}rem`,
            rotation: 0,
            scale: 0.5,
            opacity: 0,
          });
          gsap.to(card, {
            ...target,
            duration: 1.2,
            ease: "elastic.out(1.05,.78)",
            delay: 0.2 + slot * 0.06,
            onComplete: onCardDone,
          });
        } else if (!wasVisible) {
          const enterX = direction === "right" ? 40 : -40;
          gsap.set(card, {
            x: `${enterX}rem`,
            y: `${y * hMult}rem`,
            rotation: direction === "right" ? 30 : -30,
            scale: 0.5,
            opacity: 0,
          });
          gsap.to(card, {
            ...target,
            duration: 0.6,
            ease: "power2.out",
            onComplete: onCardDone,
          });
        } else {
          gsap.to(card, {
            ...target,
            duration: 0.5,
            ease: "power2.out",
            onComplete: onCardDone,
          });
        }
      } else if (wasVisible) {
        const exitX = direction === "right" ? -40 : 40;
        gsap.to(card, {
          x: `${exitX}rem`,
          opacity: 0,
          scale: 0.5,
          rotation: direction === "right" ? -30 : 30,
          duration: 0.4,
          ease: "power2.in",
          zIndex: 0,
        });
      } else if (isFirstMount) {
        gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 });
      }
    });

    prevVisible.current = new Set(visibleMap.keys());

    // Hover Fan Effect
    const visibleEntries: { el: HTMLElement; slot: number }[] = [];
    cardElements.forEach((el, i) => {
      const slot = visibleMap.get(i);
      if (slot !== undefined) visibleEntries.push({ el, slot });
    });
    visibleEntries.sort((a, b) => a.slot - b.slot);

    let activeSlot: number | null = null;
    let leaveTimer: number | null = null;
    const centerSlot = visibleEntries.length >> 1;

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const mult = getResponsiveMultiplier(window.innerWidth);
      const hM = getHeightMultiplier(window.innerWidth);

      visibleEntries.forEach(({ el, slot }) => {
        const base = config(slot);
        let targetX = base.x * mult;
        let targetY = base.y * hM;
        let targetRot = base.rot;
        let targetScale = base.scale;
        let delay = 0;

        if (hoveredSlot !== null) {
          const distance = Math.abs(slot - hoveredSlot);
          delay = distance * 0.02;

          if (slot === hoveredSlot) {
            targetY -= 2.5 * hM;
            targetScale *= 1.08;
          } else {
            const normalized =
              centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
            const pushStrength =
              8 *
              (1 - Math.abs(normalized)) *
              (1 + 0.2 * Math.max(0, 3 - distance));

            if (slot < hoveredSlot) {
              targetX -= pushStrength * mult;
              targetRot -= 3 / (distance + 1);
            } else {
              targetX += pushStrength * mult;
              targetRot += 3 / (distance + 1);
            }

            if (slot === visibleEntries.length - 1 && hoveredSlot < centerSlot)
              targetY -= 1 * hM;
            if (slot === 0 && hoveredSlot > centerSlot) targetY -= 1 * hM;
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.02;
        }

        gsap.to(el, {
          x: `${targetX}rem`,
          y: `${targetY}rem`,
          rotation: targetRot,
          scale: targetScale,
          duration: 0.5,
          delay,
          ease: "elastic.out(1,.75)",
          overwrite: "auto",
        });
        gsap.set(el, { zIndex: base.zIndex });
      });
    };

    const enterHandlers = visibleEntries.map(({ el, slot }) => {
      const handler = () => {
        if (isAnimating.current) return;
        if (leaveTimer) {
          clearTimeout(leaveTimer);
          leaveTimer = null;
        }
        if (activeSlot !== slot) {
          activeSlot = slot;
          updateHoverLayout(slot);
        }
      };
      el.addEventListener("mouseenter", handler);
      return { el, handler };
    });

    const onMouseLeave = () => {
      if (isAnimating.current) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = window.setTimeout(() => {
        activeSlot = null;
        updateHoverLayout(null);
      }, 50);
    };
    container.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => {
      if (!isAnimating.current) updateHoverLayout(activeSlot);
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(fallbackTimer);
      enterHandlers.forEach(({ el, handler }) =>
        el.removeEventListener("mouseenter", handler)
      );
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [centerIndex, totalCards, getVisibleMap, needsPagination]);

  if (!totalCards) return null;

  const chevron = (direction: "left" | "right") => (
    <svg
      className="relative z-[2] w-4 h-4 md:w-5 md:h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline
        points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"}
      />
    </svg>
  );

  // Điều hướng trong Modal phóng to
  const openNextModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      const currentIdx = projects.findIndex((p) => p.id === selectedProject.id);
      const nextIdx = (currentIdx + 1) % totalCards;
      setSelectedProject(projects[nextIdx]);
      setCenterIndex(nextIdx);
    }
  };

  const openPrevModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      const currentIdx = projects.findIndex((p) => p.id === selectedProject.id);
      const prevIdx = (currentIdx - 1 + totalCards) % totalCards;
      setSelectedProject(projects[prevIdx]);
      setCenterIndex(prevIdx);
    }
  };

  return (
    <div className="flex flex-col items-center w-full relative z-20 py-2">
      {/* Khung chứa các card xòe quạt */}
      <div className="flex items-center justify-center w-full max-w-[80rem] min-h-[460px] sm:min-h-[520px]">
        <div
          ref={containerRef}
          className="relative flex justify-center items-center w-full h-[450px] sm:h-[480px]"
        >
          {projects.map((project, index) => {
            const isCenter = index === centerIndex;
            return (
              <div
                key={project.id}
                onClick={() => {
                  if (!isCenter && !isAnimating.current) {
                    setCenterIndex(index);
                  } else if (isCenter) {
                    // Click vào card ở giữa để phóng to
                    setSelectedProject(project);
                  }
                }}
                className={`fan-project-card absolute w-[280px] sm:w-[340px] md:w-[360px] h-[390px] sm:h-[430px] rounded-2xl cursor-pointer transition-shadow duration-300 ${
                  isCenter
                    ? "shadow-2xl shadow-brand-cyan/25 ring-2 ring-brand-cyan/50"
                    : "shadow-lg opacity-85 hover:opacity-100"
                }`}
              >
                <div className="h-full w-full rounded-2xl overflow-hidden relative flex flex-col justify-between p-5 sm:p-6 border border-white/20 dark:border-white/10 shadow-2xl group text-white">
                  {/* Full Background Image */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-slate-800 z-0" />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/30" />
                  <div className="absolute inset-0 z-0 backdrop-blur-[1px]" />

                  {/* Header: Title & Action */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-extrabold text-lg sm:text-xl text-white leading-snug">
                        {project.name}
                      </h3>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {/* Nút phóng to chi tiết */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                            setCenterIndex(index);
                          }}
                          title={t("projects_list.modal_zoom_title", "Phóng to xem chi tiết")}
                          className="w-8 h-8 rounded-lg bg-white/15 hover:bg-cyan-400 hover:text-slate-950 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                        >
                          <i className="ph-bold ph-arrows-out-simple text-base"></i>
                        </button>

                        {/* Nút mở link trực tiếp (nếu có) */}
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 rounded-lg bg-white/15 hover:bg-cyan-400 text-white hover:text-slate-950 flex items-center justify-center border border-white/20 transition-all"
                          >
                            <i className="ph-bold ph-arrow-up-right text-base"></i>
                          </a>
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-white/10 text-slate-400 flex items-center justify-center">
                            <i className="ph-bold ph-folder text-base"></i>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-mono text-white/95 font-semibold">
                      {t(`projects_list.${project.id}.role`, project.role)}
                    </p>
                  </div>

                  {/* Body: Description (Rút gọn trên card) */}
                  <div className="relative z-10 my-auto py-2">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-4">
                      {t(`projects_list.${project.id}.description`, project.description)}
                    </p>
                    {isCenter && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-cyan-300 mt-1.5 font-medium underline underline-offset-2">
                        {t("projects_list.click_to_view", "Nhấn để xem đầy đủ")}{" "}
                        <i className="ph-bold ph-arrow-right"></i>
                      </span>
                    )}
                  </div>

                  {/* Footer: Tech Badges */}
                  <div className="relative z-10 pt-3 border-t border-white/15">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <SkillBadge
                          key={idx}
                          skill={tech}
                          className="text-[11px] py-0.5 px-2 bg-white/10 text-slate-200 border-white/15"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Controls */}
      {needsPagination && (
        <div className="flex items-center justify-center gap-4 mt-6 z-30">
          <button
            type="button"
            className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`}
            onClick={() => cycle("left")}
            aria-label="Previous"
          >
            {chevron("left")}
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => {
                  if (!isAnimating.current) setCenterIndex(i);
                }}
                aria-label={`Jump to card ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === centerIndex
                    ? "w-6 bg-black/70 dark:bg-white/80 scale-[1.2]"
                    : "w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`}
            onClick={() => cycle("right")}
            aria-label="Next"
          >
            {chevron("right")}
          </button>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL PHÓNG TO XEM ĐẦY ĐỦ NỘI DUNG DỰ ÁN (EXPANDED MODAL) */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Dialog Card */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] bg-slate-900 border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white"
            >
              {/* Nút Đóng Modal */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <i className="ph-bold ph-x text-lg"></i>
              </button>

              {/* Nút Previous & Next trong Modal */}
              <button
                type="button"
                onClick={openPrevModal}
                aria-label="Previous project in modal"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-cyan-400 hover:text-slate-950 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <i className="ph-bold ph-caret-left text-lg"></i>
              </button>
              <button
                type="button"
                onClick={openNextModal}
                aria-label="Next project in modal"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-cyan-400 hover:text-slate-950 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <i className="ph-bold ph-caret-right text-lg"></i>
              </button>

              {/* Header Image Header (Ảnh to rõ ràng) */}
              <div className="relative w-full h-48 sm:h-64 shrink-0 overflow-hidden bg-slate-950">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500">
                    <i className="ph-bold ph-image text-5xl"></i>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                {/* Badge Role trên ảnh */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/15 border border-white/25 text-white backdrop-blur-md">
                    {t(`projects_list.${selectedProject.id}.role`, selectedProject.role)}
                  </span>
                </div>
              </div>

              {/* Nội dung chi tiết đầy đủ 100% */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-5 no-scrollbar">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {selectedProject.name}
                  </h3>
                </div>

                {/* Toàn bộ mô tả dự án không bị cắt */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    {t("projects_list.modal_desc_title", "Mô tả dự án & Trách nhiệm thực hiện")}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line">
                    {t(`projects_list.${selectedProject.id}.description`, selectedProject.description)}
                  </p>
                </div>

                {/* Toàn bộ Tech Stack */}
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    {t("projects_list.modal_tech_title", "Công nghệ sử dụng (Tech Stack)")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <SkillBadge
                        key={idx}
                        skill={tech}
                        className="text-xs py-1 px-3 bg-cyan-500/15 text-cyan-200 border-cyan-500/30"
                      />
                    ))}
                  </div>
                </div>

                {/* Nút truy cập dự án / Demo */}
                {selectedProject.link && (
                  <div className="pt-4 flex justify-end">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-400/25"
                    >
                      <span>{t("projects_list.modal_view_site", "Xem trang web dự án")}</span>
                      <i className="ph-bold ph-arrow-up-right text-base"></i>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
