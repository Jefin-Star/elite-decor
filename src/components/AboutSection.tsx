import { STUDIO_INFO } from '../data/studioData';
import { SmartImage } from './SmartImage';

export function AboutSection() {
  return (
    <section id="about" className="bg-[#F7F4EF] py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Full-height Editorial Studio Photograph */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-sm border border-[#E2DDD3] bg-[#EFEAE1]">
              <SmartImage
                src={STUDIO_INFO.aboutImage}
                alt="ELITE DECOR interior designers reviewing natural marble, brass hardware, and floor plans"
                fallbackTitle="ELITE DECOR Design Atelier"
                className="h-full w-full object-cover lg:h-full"
              />
            </div>
          </div>

          {/* Right Column: Studio Philosophy & Craftsmanship */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-medium tracking-wide text-[#8D6B2E]">
                <span>About Our Studio</span>
                <span aria-hidden="true">·</span>
                <span>Est. Kochi Studio</span>
              </div>

              <h2 className="font-display text-balance text-3xl leading-[1.12] font-semibold tracking-tight text-[#191816] sm:text-4xl lg:text-[2.75rem]">
                Architecture of Calm, Tailored for How You Live &amp; Work.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#4A463F]">
                At <strong className="font-semibold text-[#191816]">{STUDIO_INFO.fullBrandName}</strong>,
                great interior design begins long before selecting finishes. Our architects and senior
                designers study natural daylight, spatial circulation, acoustics, and daily family
                routines to compose spaces that feel effortless from day one.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#4A463F]">
                From tranquil Kerala villas and urban high-rise apartments to flagship commercial
                lounges and corporate offices, we unite timeless natural stones, sustainably sourced
                hardwoods, and precision European hardware under disciplined turnkey project delivery.
              </p>
            </div>

            {/* 3 Clean Hairline-Separated Studio Pillars (No cards-within-cards or border-l-4) */}
            <div className="mt-10 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3]">
              <div className="py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl font-semibold text-[#191816]">
                    01. Material Integrity &amp; Detail
                  </h3>
                  <span className="text-xs font-medium text-[#8D6B2E]">BWP &amp; Natural Stone</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5A554E]">
                  Every surface—from honed travertine and fluted walnut to moisture-resistant marine
                  plywood—is vetted for longevity in tropical coastal environments.
                </p>
              </div>

              <div className="py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl font-semibold text-[#191816]">
                    02. Residential &amp; Commercial Mastery
                  </h3>
                  <span className="text-xs font-medium text-[#8D6B2E]">420+ Spaces</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5A554E]">
                  Dedicated design teams for private residences, luxury villas, executive offices,
                  and boutique hospitality showrooms across Ernakulam.
                </p>
              </div>

              <div className="py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl font-semibold text-[#191816]">
                    03. Personalized Turnkey Delivery
                  </h3>
                  <span className="text-xs font-medium text-[#8D6B2E]">Single Point Contact</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5A554E]">
                  Photorealistic 3D sign-offs, transparent itemized BOQs, and weekly milestone
                  tracking from bare shell to final key handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
