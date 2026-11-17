import { CalendarCheck, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface FloatingActionsProps {
  onBookConsultation: () => void;
}

export function FloatingActions({ onBookConsultation }: FloatingActionsProps) {
  return (
    <div className="fixed right-4 bottom-4 z-30 flex items-center gap-2.5 sm:right-6 sm:bottom-6">
      <a
        href={`https://wa.me/${STUDIO_INFO.contact.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ELITE DECOR on WhatsApp"
        className="flex h-11 items-center gap-2 rounded-sm border border-[#256D43] bg-[#1D5C38] px-4 text-xs font-semibold text-white shadow-md transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#256D43] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B475]"
      >
        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">WhatsApp</span>
      </a>

      <button
        type="button"
        onClick={onBookConsultation}
        aria-label="Book a Free Consultation"
        className="flex h-11 items-center gap-2 rounded-sm border border-[#C6A15B]/60 bg-[#141311] px-4 text-xs font-semibold text-[#F7F4EF] shadow-md transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#26231F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B475]"
      >
        <CalendarCheck className="h-4 w-4 shrink-0 text-[#D4B475]" aria-hidden="true" />
        <span className="whitespace-nowrap">Free Consultation</span>
      </button>
    </div>
  );
}
