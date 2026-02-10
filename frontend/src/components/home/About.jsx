import React from 'react';
import { Section, Container } from '../ui/Layout';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Animations';
import { ArrowRight } from 'lucide-react';

export function About() {
   return (
      <Section id="about" className="bg-background-light">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="relative">
                  <Reveal>
                     <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                           src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                           alt="Students walking through campus"
                           className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
                     </div>
                     {/* Floating Badge */}
                     <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                        <p className="text-white font-serif text-3xl font-bold mb-1">Since</p>
                        <p className="text-white/80 text-5xl font-bold">2001</p>
                     </div>
                  </Reveal>
               </div>

               <div>
                  <Reveal delay={0.2}>
                     <h2 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">About Us</h2>
                     <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                        Creating Technology <br />
                        for the <span className="text-primary-light">Future</span>
                     </h3>
                     <p className="text-lg text-text-muted leading-relaxed mb-6">
                        Amal Jyothi College of Engineering is dedicated to creating a vibrant community of engineers who are equipped to solve the challenges of the modern world. We combine rigorous academic training with a strong emphasis on ethical values and social responsibility.
                     </p>
                     <p className="text-lg text-text-muted leading-relaxed mb-8">
                        Located in the foothills of the Western Ghats, our campus provides an inspiring environment for learning, innovation, and personal growth.
                     </p>
                     <Button variant="ghost" className="text-primary hover:text-white p-0 hover:bg-transparent group">
                        Read Our Mission <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </Button>
                  </Reveal>
               </div>
            </div>
         </Container>
      </Section>
   );
}
