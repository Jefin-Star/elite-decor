import { Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import { SERVICES_LIST, STUDIO_INFO } from '../data/studioData';
import { SmartImage } from './SmartImage';

interface FooterProps {
  onSelectService: (serviceTitle: string) => void;
}

export function Footer({ onSelectService }: FooterProps) {
  const { contact } = STUDIO_INFO;
  const featuredServices = SERVICES_LIST.slice(0, 6);

  return (
    <footer className="border-t border-white/10 bg-[#141311] text-[#D8D2C8]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#top" className="inline-flex items-center gap-3.5">
              <SmartImage
                src={STUDIO_INFO.logoUrl}
                alt="ELITE DECOR Interior Company Logo"
                className="h-12 w-12 rounded-sm border border-[#B68F47]/40 object-cover"
              />
              <div>
                <div className="font-serif text-2xl font-semibold tracking-tight text-white">
                  {STUDIO_INFO.brandName}
                </div>
                <div className="text-xs tracking-wide text-[#D4B475]">
                  Interior Company
                </div>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#B9B2A8]">
              An architectural interior design studio in Edappally, Ernakulam
              specializing in bespoke residences, luxury villas, modular kitchens, and
              turnkey commercial spaces.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ELITE DECOR on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-white/5 text-white transition-colors hover:border-[#D4B475] hover:text-[#D4B475]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${contact.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-white/5 text-white transition-colors hover:border-[#D4B475] hover:text-[#D4B475]"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`tel:+91${contact.phoneRaw}`}
                aria-label="Call ELITE DECOR Studio"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-white/5 text-white transition-colors hover:border-[#D4B475] hover:text-[#D4B475]"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email ELITE DECOR Studio"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-white/5 text-white transition-colors hover:border-[#D4B475] hover:text-[#D4B475]"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-semibold text-white">Studio</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#about" className="transition-colors hover:text-[#D4B475]">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#portfolio" className="transition-colors hover:text-[#D4B475]">
                  Portfolio Gallery
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-[#D4B475]">
                  Design Services
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="transition-colors hover:text-[#D4B475]"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="transition-colors hover:text-[#D4B475]"
                >
                  Client Reviews
                </a>
              </li>
              <li>
                <a
                  href="#consultation"
                  className="transition-colors hover:text-[#D4B475]"
                >
                  Free Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Interior Design Services Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="text-left transition-colors hover:text-[#D4B475]"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-xs text-white/50">Studio Address</span>
                <span className="text-white/90">{contact.address}</span>
              </li>
              <li>
                <span className="block text-xs text-white/50">Phone</span>
                <a
                  href={`tel:+91${contact.phoneRaw}`}
                  className="text-white/90 tabular-nums transition-colors hover:text-[#D4B475]"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="block text-xs text-white/50">WhatsApp</span>
                <a
                  href={`https://wa.me/${contact.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 tabular-nums transition-colors hover:text-[#D4B475]"
                >
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="block text-xs text-white/50">Email</span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white/90 transition-colors hover:text-[#D4B475]"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Copyright Bar */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {STUDIO_INFO.fullBrandName}. All rights
            reserved.
          </p>
          <p>Edappally, Ernakulam · Architectural &amp; Turnkey Interiors</p>
        </div>
      </div>
    </footer>
  );
}
