import React from 'react';
import logoImg from '../assets/images/Logoritatiritas.jpg';

interface RitaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark' | 'white';
}

export const RitaLogo: React.FC<RitaLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  // Height definitions for crisp scaling
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  }[size];

  // If used in dark sections (variant === 'white'), wrap in a clean crisp white surface
  if (variant === 'white') {
    return (
      <div
        className={`inline-flex items-center justify-center bg-white px-3 py-1.5 rounded-xl shadow-md border border-white/20 select-none ${className}`}
      >
        <img
          src={logoImg}
          alt="RITA - Galicia Production Services"
          className={`${heightClasses} w-auto object-contain transition-transform duration-300 hover:scale-105`}
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="RITA - Galicia Production Services"
        className={`${heightClasses} w-auto object-contain transition-transform duration-300 hover:scale-105`}
        loading="eager"
      />
    </div>
  );
};
