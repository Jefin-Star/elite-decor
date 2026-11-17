import { useState, useEffect } from 'react';
import {
  Home,
  Building2,
  Landmark,
  LayoutGrid,
  UtensilsCrossed,
  BedDouble,
  Box,
  SunMedium,
  DoorClosed,
  Hammer,
  KeyRound,
  ArrowRight,
  Check,
  X,
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/studioData';
import { SmartImage } from './SmartImage';

interface ServicesSectionProps {
  onSelectServiceForConsultation: (service: ServiceItem) => void;
}

const ICON_MAP = {
  Home,
  Building2,
  Landmark,
  LayoutGrid,
  UtensilsCrossed,
  BedDouble,
  Box,
  SunMedium,
  DoorClosed,
  Hammer,
  KeyRound,
} as const;

export function ServicesSection({
  onSelectServiceForConsultation,
}: ServicesSectionProps) {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (!activeService) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveService(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeService]);

  return (
    <section id="services" className="border-t border-[#E2DDD3] bg-[#F7F4EF] py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-2.5 flex items-center gap-2 text-xs font-medium tracking-wide text-[#8D6B2E]">
              <span>Interior Design Services</span>
              <span aria-hidden="true">·</span>
              <span>Concept to Turnkey Execution</span>
            </div>
            <h2 className="font-display text-balance text-3xl leading-[1.12] font-semibold tracking-tight text-[#191816] sm:text-4xl lg:text-[2.75rem]">
              Comprehensive Architectural &amp; Interior Solutions Under One Studio.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-[#5A554E]">
            Whether commissioning a single bespoke modular kitchen or an entire turnkey
            villa, every discipline is delivered with unified architectural rigor.
          </p>
        </div>

        {/* 11 Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((service) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <article
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-sm border border-[#E2DDD3] bg-[#FAF8F4] transition-transform duration-200 hover:-translate-y-0.5"
              >
                {/* Service Visual Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EFEAE1]">
                  <SmartImage
                    src={service.image}
                    alt={service.title}
                    fallbackTitle={service.title}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Service Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-[#8D6B2E] tabular-nums">
                        <span>{service.number}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#5A554E]">{service.typicalTimeline}</span>
                      </div>
                      <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#E2DDD3] bg-[#F7F4EF] text-[#191816]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#191816]">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#4A463F]">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#E2DDD3] pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveService(service)}
                      className="inline-flex min-h-[40px] items-center gap-2 text-xs font-semibold tracking-wide text-[#191816] transition-colors hover:text-[#8D6B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D6B2E]"
                    >
                      <span>Explore Service</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Explore Service Detail Modal */}
      {activeService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeService.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0C0B]/80 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setActiveService(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sm border border-[#E2DDD3] bg-[#FAF8F4] text-[#191816]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveService(null)}
              aria-label="Close service details"
              className="absolute top-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-sm bg-[#141311]/85 text-white transition-colors hover:bg-[#191816]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden bg-[#EFEAE1]">
              <SmartImage
                src={activeService.image}
                alt={activeService.title}
                fallbackTitle={activeService.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#8D6B2E] tabular-nums">
                <span>Service {activeService.number}</span>
                <span aria-hidden="true">·</span>
                <span>{activeService.startingScope}</span>
                <span aria-hidden="true">·</span>
                <span>Typical Timeline: {activeService.typicalTimeline}</span>
              </div>

              <h3 className="mt-2 font-serif text-3xl font-semibold text-[#191816]">
                {activeService.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#4A463F] sm:text-base">
                {activeService.fullDescription}
              </p>

              <div className="mt-6 border-t border-[#E2DDD3] pt-5">
                <h4 className="text-xs font-semibold tracking-wide text-[#191816]">
                  Included Deliverables
                </h4>
                <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {activeService.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#4A463F]"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#8D6B2E]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-[#E2DDD3] pt-5">
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="min-h-[44px] rounded-sm border border-[#DDD6C8] px-5 py-2.5 text-xs font-semibold text-[#4A463F] transition-colors hover:border-[#191816] hover:text-[#191816]"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const srv = activeService;
                    setActiveService(null);
                    onSelectServiceForConsultation(srv);
                  }}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[#191816] px-6 py-2.5 text-xs font-semibold text-[#F7F4EF] transition-colors hover:bg-[#33302B]"
                >
                  <span>Book Consultation for This Service</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
