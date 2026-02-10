import React from 'react';
import { cn } from '../../utils';

export function Button({
   className,
   variant = 'primary',
   size = 'md',
   children,
   ...props
}) {
   const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20',
      outline: 'border-2 border-primary text-primary hover:bg-primary/5',
      ghost: 'hover:bg-slate-100 text-slate-700',
   };

   const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
   };

   return (
      <button
         className={cn(
            'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            variants[variant],
            sizes[size],
            className
         )}
         {...props}
      >
         {children}
      </button>
   );
}
