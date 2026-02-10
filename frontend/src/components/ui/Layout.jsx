import React from 'react';
import { cn } from '../../utils';

export function Section({ className, children, id, ...props }) {
   return (
      <section id={id} className={cn("py-20 md:py-32 relative overflow-hidden", className)} {...props}>
         {children}
      </section>
   );
}

export function Container({ className, children, ...props }) {
   return (
      <div className={cn("container mx-auto px-4 md:px-6 relative z-10", className)} {...props}>
         {children}
      </div>
   );
}
