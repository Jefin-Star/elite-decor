import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function SmartImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'lazy',
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFEAE1] via-[#E5DEC9] to-[#D7CEBB] p-6 text-center text-[#5A554E] ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="mb-2 h-6 w-6 text-[#8D6B2E]" aria-hidden="true" />
        <span className="font-serif text-base font-medium text-[#191816]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
