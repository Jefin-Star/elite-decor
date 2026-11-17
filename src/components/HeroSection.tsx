import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import { STUDIO_INFO, STUDIO_STATS } from '../data/studioData';
import { SmartImage } from './SmartImage';

interface HeroSectionProps {
  onBookConsultation: () => void;
}

export function HeroSection({ onBookConsultation }: HeroSectionProps) {
  return (
    <section id="top" className="relative bg-[#141311] text-[#F7F4EF]">
      {/* Full-bleed Architectural Hero Backdrop */}
      <div className="relative flex min-h-[82vh] items-end pt-24 pb-16 sm:items-center sm:pt-28 sm:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <SmartImage
            src={STUDIO_INFO.heroImage}
            alt="Luxury contemporary living room designed by ELITE DECOR Interior Company"
            loading="eager"
            fallbackTitle={STUDIO_INFO.fullBrandName}
            className="h-full w-full object-cover object-center"
          />
          {/* Measured gradient scrim guaranteeing 4.5:1+ contrast */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#141311]/92 via-[#141311]/70 to-[#141311]/30"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#141311]/85 via-transparent to-[#141311]/45"
          />
        </div>

        {/* Editorial Hero Copy */}
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            {/* Clean unboxed metadata kicker */}
            <div className="mb-5 flex flex-wrap items-center gap-2.5 text-sm tracking-wide text-[#D4B475]">
              <span className="font-medium">{STUDIO_INFO.fullBrandName}</span>
              <span aria-hidden="true" className="text-white/40">
                ·
              </span>
              <span className="text-white/80">Edappally, Ernakulam</span>
            </div>

            <h1 className="font-display text-balance text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.06] font-semibold tracking-tight text-white">
              {STUDIO_INFO.heroHeadline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#E7E2D8] sm:text-lg">
              {STUDIO_INFO.heroSubcopy}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBookConsultation}
                className="inline-flex min-h-[48px] shrink-0 items-center gap-2.5 rounded-sm bg-[#C6A15B] px-7 py-3.5 text-sm font-semibold text-[#141311] whitespace-nowrap transition-colors duration-150 hover:bg-[#D4B475] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B475]"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-sm border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-medium text-white whitespace-nowrap backdrop-blur-sm transition-colors duration-150 hover:border-white/65 hover:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Explore Our Projects</span>
                <ArrowDownRight className="h-4 w-4 text-[#D4B475]" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width 4-Column Studio Credentials Row */}
      <div className="border-t border-white/12 bg-[#1A1815]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
          {STUDIO_STATS.map((stat) => (
            <div key={stat.id} className="px-5 py-6 sm:px-8 sm:py-7">
              <div className="font-serif text-3xl font-semibold tracking-tight text-[#D4B475] tabular-nums sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-white">{stat.label}</div>
              <div className="mt-0.5 text-xs text-white/65">{stat.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
