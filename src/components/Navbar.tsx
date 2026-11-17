import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { SmartImage } from './SmartImage';

interface NavbarProps {
  onBookConsultation: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onBookConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-[#E2DDD3] bg-[#F7F4EF]/95 text-[#191816] backdrop-blur-md'
          : 'border-b border-white/15 bg-[#141311]/70 text-white backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Single-line Brand Zone */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B68F47]"
        >
          <SmartImage
            src={STUDIO_INFO.logoUrl}
            alt="ELITE DECOR monogram"
            loading="eager"
            className="h-9 w-9 shrink-0 rounded-sm border border-[#B68F47]/40 object-cover"
          />
          <span className="font-serif text-xl font-semibold tracking-tight whitespace-nowrap">
            {STUDIO_INFO.brandName}
          </span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative shrink-0 py-1 text-sm font-medium whitespace-nowrap transition-colors duration-150 after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B68F47] ${
                scrolled
                  ? 'text-[#3A3631] hover:text-[#191816] after:bg-[#8D6B2E]'
                  : 'text-white/85 hover:text-white after:bg-[#D4B475]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Drawer Trigger */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onBookConsultation}
            className={`hidden min-h-[40px] shrink-0 items-center justify-center rounded-sm px-5 py-2 text-xs font-semibold tracking-wide whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B68F47] sm:inline-flex ${
              scrolled
                ? 'bg-[#191816] text-[#F7F4EF] hover:bg-[#33302B]'
                : 'bg-[#C6A15B] text-[#141311] hover:bg-[#D4B475]'
            }`}
          >
            Book Consultation
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-current/20 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E2DDD3] bg-[#F7F4EF] px-6 py-5 text-[#191816] md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center border-b border-[#E2DDD3]/70 text-base font-medium text-[#191816]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onBookConsultation();
              }}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-sm bg-[#191816] px-5 py-3 text-sm font-semibold text-[#F7F4EF]"
            >
              Book a Free Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
