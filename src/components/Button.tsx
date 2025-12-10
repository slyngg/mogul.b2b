import React from 'react';
import { cn } from '../utils/cn'; // I'll need to create this utility

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}) => {
  return (
    <button
      className={cn(
        "relative px-8 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group",
        {
          'bg-white text-black hover:bg-gray-200': variant === 'primary',
          'bg-transparent border border-white/20 text-white hover:border-white/40': variant === 'outline',
          'bg-mogul-card text-white hover:bg-mogul-navy': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mask-linear">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue to-transparent animate-border-beam" />
        </div>
      )}
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      )}
    </button>
  );
};
