import { useState, useEffect, useCallback } from 'react';
import {
  ZoomIn,
  ZoomOut,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  PortfolioCategory,
  PortfolioProject,
} from '../data/studioData';
import { SmartImage } from './SmartImage';

interface PortfolioSectionProps {
  onRequestSimilar: (project: PortfolioProject) => void;
}

export function PortfolioSection({ onRequestSimilar }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory>('All Projects');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  const activeIndex = activeProject
    ? filteredProjects.findIndex((p) => p.id === activeProject.id)
    : -1;

  const handleClose = useCallback(() => {
    setActiveProject(null);
    setZoomed(false);
  }, []);

  const handleNext = useCallback(() => {
    if (filteredProjects.length === 0 || activeIndex === -1) return;
    const nextIdx = (activeIndex + 1) % filteredProjects.length;
    setActiveProject(filteredProjects[nextIdx]);
    setZoomed(false);
  }, [activeIndex, filteredProjects]);

  const handlePrev = useCallback(() => {
    if (filteredProjects.length === 0 || activeIndex === -1) return;
    const prevIdx =
      (activeIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveProject(filteredProjects[prevIdx]);
    setZoomed(false);
  }, [activeIndex, filteredProjects]);

  useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProject, handleClose, handleNext, handlePrev]);

  return (
    <section id="portfolio" className="border-t border-[#E2DDD3] bg-[#EFEAE1]/65 py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-2.5 flex items-center gap-2 text-xs font-medium tracking-wide text-[#8D6B2E]">
              <span>Curated Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Selected Residences &amp; Commercial Works</span>
            </div>
            <h2 className="font-display text-balance text-3xl leading-[1.12] font-semibold tracking-tight text-[#191816] sm:text-4xl lg:text-[2.75rem]">
              Spaces Crafted With Light, Proportion &amp; Quiet Luxury.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-[#5A554E]">
            Explore completed works across ten architectural disciplines. Select any
            project to inspect material details and zoom into full-resolution photography.
          </p>
        </div>

        {/* Category Filter Controls (Functional buttons, single-line labels) */}
        <div
          role="tablist"
          aria-label="Filter projects by interior design category"
          className="no-scrollbar mt-10 flex items-center gap-2 overflow-x-auto border-b border-[#E2DDD3] pb-4"
        >
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`min-h-[40px] shrink-0 rounded-sm px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D6B2E] ${
                  isActive
                    ? 'bg-[#191816] text-[#F7F4EF]'
                    : 'border border-[#DDD6C8] bg-[#FAF8F4] text-[#4A463F] hover:border-[#B68F47] hover:text-[#191816]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Dynamic Bento / Editorial Grid */}
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => {
            const isFeaturedWide =
              selectedCategory === 'All Projects' && project.featured && idx === 0;
            return (
              <article
                key={project.id}
                className={`group flex flex-col overflow-hidden rounded-sm border border-[#E2DDD3] bg-[#FAF8F4] transition-transform duration-200 hover:-translate-y-0.5 ${
                  isFeaturedWide ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Clickable Image Frame */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveProject(project);
                    setZoomed(false);
                  }}
                  aria-label={`Inspect ${project.title} in lightbox`}
                  className={`relative w-full overflow-hidden bg-[#E5DEC9] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D6B2E] ${
                    isFeaturedWide ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <SmartImage
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    fallbackTitle={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                  <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-sm bg-[#141311]/85 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                    <ZoomIn className="h-3.5 w-3.5 text-[#D4B475]" aria-hidden="true" />
                    <span>View &amp; Zoom</span>
                  </span>
                </button>

                {/* Card Copy: Clean Unboxed Metadata */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#5A554E]">
                      <span className="font-medium text-[#8D6B2E]">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.style}</span>
                    </div>

                    <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#191816]">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveProject(project);
                          setZoomed(false);
                        }}
                        className="text-left transition-colors hover:text-[#8D6B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D6B2E]"
                      >
                        {project.title}
                      </button>
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#4A463F]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-end border-t border-[#E2DDD3] pt-4 text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveProject(project);
                        setZoomed(false);
                      }}
                      className="inline-flex shrink-0 items-center gap-1 font-semibold text-[#191816] transition-colors hover:text-[#8D6B2E]"
                    >
                      <span>Inspect</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Zoom Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0C0B]/92 p-4 backdrop-blur-sm sm:p-6"
          onClick={handleClose}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-sm border border-white/15 bg-[#191816] text-[#F7F4EF] lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top-Right Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close project lightbox"
              className="absolute top-3 right-3 z-20 flex h-11 w-11 items-center justify-center rounded-sm bg-[#141311]/85 text-white transition-colors hover:bg-[#C6A15B] hover:text-[#141311] focus-visible:outline-2 focus-visible:outline-[#D4B475]"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left / Top Zoomable Image Viewport */}
            <div className="relative flex-1 overflow-auto bg-[#0D0C0B] lg:min-h-[540px]">
              <div className="flex h-full min-h-[300px] items-center justify-center p-2 sm:p-4">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  onClick={() => setZoomed((z) => !z)}
                  className={`max-h-[60vh] w-auto cursor-zoom-in rounded-sm object-contain transition-transform duration-300 ease-out lg:max-h-[82vh] ${
                    zoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'
                  }`}
                />
              </div>

              {/* Lightbox Media Controls */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoomed((z) => !z)}
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-sm bg-[#141311]/85 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-[#C6A15B] hover:text-[#141311]"
                >
                  {zoomed ? (
                    <>
                      <ZoomOut className="h-4 w-4" aria-hidden="true" />
                      <span>Reset Zoom</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="h-4 w-4" aria-hidden="true" />
                      <span>Zoom Image</span>
                    </>
                  )}
                </button>

                {filteredProjects.length > 1 && (
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous project"
                      className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#141311]/85 text-white backdrop-blur-sm transition-colors hover:bg-[#C6A15B] hover:text-[#141311]"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next project"
                      className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#141311]/85 text-white backdrop-blur-sm transition-colors hover:bg-[#C6A15B] hover:text-[#141311]"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Project Specifications Panel */}
            <div className="flex w-full shrink-0 flex-col justify-between border-t border-white/10 bg-[#191816] p-6 sm:p-8 lg:w-[380px] lg:border-t-0 lg:border-l">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#D4B475]">
                  <span>{activeProject.category}</span>
                  <span aria-hidden="true" className="text-white/30">
                    ·
                  </span>
                  <span className="text-white/75">{activeProject.style}</span>
                </div>

                <h3 className="mt-2 font-serif text-2xl font-semibold text-white sm:text-3xl">
                  {activeProject.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#D8D2C8]">
                  {activeProject.description}
                </p>

                <dl className="mt-6 divide-y divide-white/10 border-y border-white/10 text-sm tabular-nums">
                  <div className="flex justify-between py-3">
                    <dt className="text-white/60">Execution Timeline</dt>
                    <dd className="font-medium text-white">{activeProject.timeline}</dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <div className="text-xs font-medium text-[#D4B475]">
                    Signature Materials
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                    {activeProject.materials.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const proj = activeProject;
                    handleClose();
                    onRequestSimilar(proj);
                  }}
                  className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-sm bg-[#C6A15B] px-5 py-3 text-sm font-semibold text-[#141311] transition-colors hover:bg-[#D4B475]"
                >
                  <span>Request Similar Design</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
