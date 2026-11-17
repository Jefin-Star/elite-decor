import {
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  MapPin,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export function ContactSection() {
  const { contact } = STUDIO_INFO;

  return (
    <section
      id="contact"
      className="border-t border-[#E2DDD3] bg-[#EFEAE1]/55 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          {/* Left Column: Direct Contact Details */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="mb-2.5 flex items-center gap-2 text-xs font-medium tracking-wide text-[#8D6B2E]">
                <span>Visit Our Studio</span>
                <span aria-hidden="true">·</span>
                <span>Ernakulam, Kerala</span>
              </div>

              <h2 className="font-display text-balance text-3xl leading-[1.12] font-semibold tracking-tight text-[#191816] sm:text-4xl">
                Connect With ELITE DECOR.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#4A463F] sm:text-base">
                Schedule an in-person material library walkthrough at our Edappally studio
                or reach our project coordinators directly via phone, WhatsApp, or email.
              </p>

              {/* Hairline-Separated Contact Directory */}
              <div className="mt-8 divide-y divide-[#DDD6C8] border-y border-[#DDD6C8]">
                <a
                  href={`tel:+91${contact.phoneRaw}`}
                  className="group flex min-h-[60px] items-center justify-between gap-4 py-4 transition-colors hover:text-[#8D6B2E]"
                >
                  <div className="flex items-center gap-3.5">
                    <Phone
                      className="h-4 w-4 shrink-0 text-[#8D6B2E]"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="text-xs text-[#5A554E]">Studio Phone</div>
                      <div className="text-sm font-semibold text-[#191816] tabular-nums group-hover:text-[#8D6B2E]">
                        {contact.phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <ExternalLink
                    className="h-4 w-4 text-[#8E877D] group-hover:text-[#8D6B2E]"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={`https://wa.me/${contact.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[60px] items-center justify-between gap-4 py-4 transition-colors hover:text-[#8D6B2E]"
                >
                  <div className="flex items-center gap-3.5">
                    <MessageCircle
                      className="h-4 w-4 shrink-0 text-[#8D6B2E]"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="text-xs text-[#5A554E]">WhatsApp Consultation</div>
                      <div className="text-sm font-semibold text-[#191816] tabular-nums group-hover:text-[#8D6B2E]">
                        {contact.whatsappDisplay}
                      </div>
                    </div>
                  </div>
                  <ExternalLink
                    className="h-4 w-4 text-[#8E877D] group-hover:text-[#8D6B2E]"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="group flex min-h-[60px] items-center justify-between gap-4 py-4 transition-colors hover:text-[#8D6B2E]"
                >
                  <div className="flex items-center gap-3.5">
                    <Mail
                      className="h-4 w-4 shrink-0 text-[#8D6B2E]"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="text-xs text-[#5A554E]">Email Inquiries</div>
                      <div className="text-sm font-semibold text-[#191816] group-hover:text-[#8D6B2E]">
                        {contact.email}
                      </div>
                    </div>
                  </div>
                  <ExternalLink
                    className="h-4 w-4 text-[#8E877D] group-hover:text-[#8D6B2E]"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[60px] items-center justify-between gap-4 py-4 transition-colors hover:text-[#8D6B2E]"
                >
                  <div className="flex items-center gap-3.5">
                    <Instagram
                      className="h-4 w-4 shrink-0 text-[#8D6B2E]"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="text-xs text-[#5A554E]">Instagram Portfolio</div>
                      <div className="text-sm font-semibold text-[#191816] group-hover:text-[#8D6B2E]">
                        {contact.instagramHandle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink
                    className="h-4 w-4 text-[#8E877D] group-hover:text-[#8D6B2E]"
                    aria-hidden="true"
                  />
                </a>

                <div className="flex items-start gap-3.5 py-4">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8D6B2E]"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs text-[#5A554E]">Studio Address</div>
                    <div className="text-sm font-semibold text-[#191816]">
                      {contact.address}
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-[#5A554E]">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{contact.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Location Map (OpenStreetMap Embed + Google Maps Directions Link) */}
          <div className="lg:col-span-7">
            <div className="relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-sm border border-[#DDD6C8] bg-[#FAF8F4]">
              <iframe
                title="ELITE DECOR Interior Company Studio Location — Edappally, Ernakulam"
                src="https://www.openstreetmap.org/export/embed.html?bbox=76.2980%2C10.0150%2C76.3270%2C10.0370&layer=mapnik&marker=10.0261%2C76.3125"
                loading="lazy"
                className="h-full min-h-[340px] w-full flex-1 border-0 grayscale-[25%] contrast-[1.03]"
              />

              {/* Studio Map Pin Footer Bar */}
              <div className="flex flex-col justify-between gap-4 border-t border-[#E2DDD3] bg-[#FAF8F4] px-6 py-4 sm:flex-row sm:items-center">
                <div>
                  <div className="font-serif text-lg font-semibold text-[#191816]">
                    {STUDIO_INFO.fullBrandName}
                  </div>
                  <div className="text-xs text-[#5A554E]">
                    {contact.shortAddress} · 10.0261° N, 76.3125° E
                  </div>
                </div>

                <a
                  href={contact.googleMapsDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] shrink-0 items-center justify-center gap-2 rounded-sm bg-[#191816] px-5 py-2.5 text-xs font-semibold text-[#F7F4EF] whitespace-nowrap transition-colors hover:bg-[#33302B]"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#D4B475]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
