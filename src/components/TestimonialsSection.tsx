import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = TESTIMONIALS.length;
  const active = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      id="testimonials"
      className="border-t border-[#E2DDD3] bg-[#EFEAE1]/75 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Section Header + Slider Navigation */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-2.5 flex items-center gap-2 text-xs font-medium tracking-wide text-[#8D6B2E]">
              <span>Client Stories</span>
              <span aria-hidden="true">·</span>
              <span>Verified Handover Reviews</span>
            </div>
            <h2 className="font-display text-balance text-3xl leading-[1.12] font-semibold tracking-tight text-[#191816] sm:text-4xl lg:text-[2.75rem]">
              Trusted by Homeowners &amp; Business Leaders Across Kochi.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="mr-2 text-xs font-medium text-[#5A554E] tabular-nums">
              0{currentIndex + 1} / 0{total}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous client testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-[#D4CCC0] bg-[#FAF8F4] text-[#191816] transition-colors hover:border-[#191816] hover:bg-[#191816] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8D6B2E]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next client testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-[#D4CCC0] bg-[#FAF8F4] text-[#191816] transition-colors hover:border-[#191816] hover:bg-[#191816] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8D6B2E]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Active Featured Testimonial Card */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 rounded-sm border border-[#E2DDD3] bg-[#FAF8F4] p-7 sm:p-10 lg:grid-cols-12 lg:p-12">
          {/* Quote & Outcome Column */}
          <div className="flex flex-col justify-between lg:col-span-8">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Quote className="h-8 w-8 text-[#B68F47]" aria-hidden="true" />
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center gap-0.5 text-[#B68F47]"
                    aria-label={`${active.rating} out of 5 stars`}
                  >
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#191816] tabular-nums">
                    {active.rating}.0 / 5.0
                  </span>
                </div>
              </div>

              <blockquote className="mt-6 font-serif text-2xl leading-[1.38] font-normal text-[#191816] sm:text-[1.75rem]">
                “{active.quote}”
              </blockquote>
            </div>

            <div className="mt-8 border-t border-[#E2DDD3] pt-5">
              <div className="text-xs font-semibold text-[#8D6B2E]">
                Verified Project Outcome
              </div>
              <p className="mt-1 text-sm font-medium text-[#191816]">
                {active.outcome}
              </p>
            </div>
          </div>

          {/* Client Attribution Column */}
          <div className="flex flex-col justify-between border-t border-[#E2DDD3] pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-[#191816] font-serif text-lg font-semibold text-[#D4B475]">
                  {active.initials}
                </div>
                <div>
                  <div className="font-serif text-xl font-semibold text-[#191816]">
                    {active.clientName}
                  </div>
                  <div className="text-xs text-[#5A554E]">{active.roleOrProperty}</div>
                </div>
              </div>

              <dl className="mt-7 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3] text-sm">
                <div className="py-3">
                  <dt className="text-xs text-[#5A554E]">Scope Delivered</dt>
                  <dd className="mt-0.5 font-medium text-[#191816]">
                    {active.projectScope}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Slide Selector Tabs */}
            <div className="mt-6 flex items-center gap-2" role="tablist" aria-label="Select testimonial">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === currentIndex}
                  aria-label={`View review by ${item.clientName}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-sm transition-all duration-200 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#191816]'
                      : 'w-2.5 bg-[#D4CCC0] hover:bg-[#8D6B2E]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
