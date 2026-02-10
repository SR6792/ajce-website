import React from 'react';
import { Section, Container } from '../ui/Layout';
import { Reveal } from '../ui/Animations';
import { ArrowRight, Cpu, Settings, PenTool, Wifi, FlaskConical, Utensils } from 'lucide-react';
import { cn } from '../../utils';

const departments = [
   {
      icon: <Cpu className="w-8 h-8" />,
      title: "Computer Science",
      desc: "Cutting-edge curriculum in AI, Data Science, and Software Engineering.",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
   },
   {
      icon: <Settings className="w-8 h-8" />,
      title: "Mechanical Engg",
      desc: "Design and manufacturing for the next industrial revolution.",
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
   },
   {
      icon: <PenTool className="w-8 h-8" />,
      title: "Civil Engineering",
      desc: "Building sustainable infrastructure for a changing world.",
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
   },
   {
      icon: <Wifi className="w-8 h-8" />,
      title: "Electronics & Comm",
      desc: "Advancing global connectivity through modern telecommunications.",
      color: "bg-green-500/10 text-green-400 border-green-500/20"
   },
   {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Chemical Engg",
      desc: "Innovative processes for material science and biotechnology.",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
   },
   {
      icon: <Utensils className="w-8 h-8" />,
      title: "Food Technology",
      desc: "Engineering solutions for food safety and sustainable production.",
      color: "bg-red-500/10 text-red-400 border-red-500/20"
   }
];

export function Academics() {
   return (
      <Section id="academics" className="bg-background-dark">
         <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
               <Reveal>
                  <h2 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">Academic Departments</h2>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Fostering Innovation</h3>
                  <p className="text-text-muted text-lg">
                     Our comprehensive programs are designed to foster innovation and technical excellence across diverse engineering disciplines.
                  </p>
               </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {departments.map((dept, index) => (
                  <Reveal key={index} delay={index * 0.1}>
                     <div className="group p-8 rounded-3xl bg-background-light border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col cursor-pointer">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors", dept.color)}>
                           {dept.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{dept.title}</h4>
                        <p className="text-text-muted leading-relaxed mb-6 flex-grow">{dept.desc}</p>
                        <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-primary transition-colors">
                           Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                     </div>
                  </Reveal>
               ))}
            </div>
         </Container>
      </Section>
   );
}
