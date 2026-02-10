import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Layout';

export function Hero() {
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 500], [0, 200]);
   const opacity = useTransform(scrollY, [0, 300], [1, 0]);
   const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

   return (
      <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background-dark">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0">
            <motion.div
               style={{ y, opacity, scale }}
               initial={{ scale: 1.2 }}
               animate={{ scale: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="w-full h-full"
            >
               <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1986&q=80"
                  alt="Amal Jyothi Campus"
                  className="w-full h-full object-cover opacity-60"
               />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/30 via-background-dark/60 to-background-dark" />
         </div>

         <Container className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div
               initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
               animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
               transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
               <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
                  Knowledge for the <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-white to-primary-light animate-gradient bg-300%">Public Good</span>
               </h1>
            </motion.div>

            <motion.p
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="text-xl md:text-2xl text-text-muted mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
            >
               Advancing human knowledge through rigorous inquiry and a commitment to truth.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="flex flex-col sm:flex-row gap-6 justify-center"
            >
               <Button size="lg" className="min-w-[200px] shadow-xl shadow-primary/20 hover:scale-105 hover:shadow-primary/40 transition-all duration-300 text-lg rounded-full">
                  Explore Academics
               </Button>
               <Button variant="outline" size="lg" className="text-white border-white/50 hover:bg-white/10 hover:border-white min-w-[200px] hover:scale-105 transition-all duration-300 text-lg rounded-full backdrop-blur-sm">
                  Plan Your Visit
               </Button>
            </motion.div>
         </Container>
      </div>
   );
}
