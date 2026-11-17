import {
  Award,
  SlidersHorizontal,
  Gem,
  Compass,
  Layers,
  FileCheck2,
  Clock3,
  ShieldCheck,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/studioData';

const ICON_MAP = {
  Award,
  SlidersHorizontal,
  Gem,
  Compass,
  Layers,
  FileCheck2,
  Clock3,
  ShieldCheck,
} as const;

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#141311] py-20 text-[#F7F4EF] sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/12 pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-2.5 flex items-center gap-2 text-xs font-medium tracking-wide text-[#D4B475]">
              <span>Why Choose ELITE DECOR</span>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <span className="text-white/75">Our Studio Standard</span>
            </div>
            <h2 className="font-display text-balance text-3xl leading-[1.12] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Engineered for Longevity, Transparency &amp; Effortless Handover.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-[#D8D2C8]">
            Great design is measured years after completion—when cabinetry glides cleanly,
            stone surfaces age gracefully, and every room works effortlessly.
          </p>
        </div>

        {/* 8 Studio Strengths Architectural Grid */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between bg-[#191816] p-7 transition-colors duration-150 hover:bg-[#201E1B]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl font-medium text-[#D4B475] tabular-nums">
                      {item.number}
                    </span>
                    <Icon className="h-5 w-5 text-[#D4B475]" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#C7C1B7]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
