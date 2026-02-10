import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../utils';

export function Reveal({ children, className, delay = 0, duration = 0.5 }) {
   const ref = React.useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-10%" });

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 30 }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
         transition={{ duration, delay, ease: "easeOut" }}
         className={cn(className)}
      >
         {children}
      </motion.div>
   );
}
