import React, { useEffect, useRef, useState } from "react";

export function CountUp({
   value,
   duration = 2000,
   prefix = "",
   suffix = "",
}) {
   const [count, setCount] = useState(0);
   const ref = useRef(null);
   const started = useRef(false);

   useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting && !started.current) {
               started.current = true;

               let start = 0;
               const increment = value / (duration / 16);

               const step = () => {
                  start += increment;
                  if (start < value) {
                     setCount(Math.floor(start));
                     requestAnimationFrame(step);
                  } else {
                     setCount(value);
                  }
               };

               requestAnimationFrame(step);
            }
         },
         { threshold: 0.3 }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
   }, [value, duration]);

   return (
      <span ref={ref}>
         {prefix}
         {count}
         {suffix}
      </span>
   );
}
