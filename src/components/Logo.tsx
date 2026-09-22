import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl md:text-5xl',
  };

  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-3.5 h-3.5',
  };

  const inkColor = variant === 'dark' ? 'text-[#F5F3EE]' : 'text-[#0A0A0B]';
  const designColor = variant === 'dark' ? 'text-[#A3A29A]' : 'text-[#686759]';

  return (
    <a
      href="#"
      id="brand-logo-link"
      className={`inline-flex flex-col group select-none tracking-tight transition-opacity hover:opacity-90 ${className}`}
      aria-label="Surhay Design Homepage"
    >
      <div className={`font-display font-extrabold flex items-center gap-1.5 leading-none ${sizeClasses[size]}`}>
        <span className={`${inkColor} tracking-tighter font-extrabold`}>Surhay</span>
        <span
          className={`inline-block rounded-full bg-[#0E7490] ${dotSizes[size]} transition-transform duration-300 group-hover:scale-125`}
          style={{ backgroundColor: '#0E7490' }}
          aria-hidden="true"
        />
        <span className={`${designColor} font-normal tracking-tight`}>Design</span>
      </div>
      {showSubtitle && (
        <span className={`text-[11px] uppercase tracking-widest mt-1 ${variant === 'dark' ? 'text-[#A3A29A]' : 'text-[#686759]'}`}>
          Berlin · Digital Studio
        </span>
      )}
    </a>
  );
};
