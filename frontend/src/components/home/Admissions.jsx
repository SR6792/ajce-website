import React from 'react';
import { Section, Container } from '../ui/Layout';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Animations';
import { CheckCircle2, GraduationCap, BookOpen, Users } from 'lucide-react';

export function Admissions() {
   return (
      <Section id="admissions" className="bg-primary/5">
         <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
               <Reveal>
                  <h2 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">Admissions</h2>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Join Our Community</h3>
                  <p className="text-text-muted text-lg">
                     We welcome students with the passion to innovate and the drive to excel in engineering.
                  </p>
               </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* B.Tech Card */}
               <Reveal delay={0.1} className="bg-background-light p-8 rounded-3xl border border-white/5 flex flex-col shadow-xl hover:-translate-y-2 transition-transform duration-300">
                  <div className="p-4 bg-primary/10 w-fit rounded-2xl mb-6 text-primary">
                     <GraduationCap className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">B.Tech</h4>
                  <p className="text-text-muted mb-8 text-sm">Comprehensive 4-year undergraduate programs in 10 engineering disciplines.</p>

                  <ul className="space-y-3 mb-8 flex-grow">
                     {["KEAM Entrance", "Management Quota", "NRI Quota"].map((item, i) => (
                        <li key={i} className="flex items-center text-white/80 text-sm">
                           <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                           {item}
                        </li>
                     ))}
                  </ul>
                  <Button className="w-full rounded-xl">Apply B.Tech</Button>
               </Reveal>

               {/* M.Tech Card */}
               <Reveal delay={0.2} className="bg-background-dark p-8 rounded-3xl border border-primary/20 flex flex-col shadow-2xl scale-105 relative z-10">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
                  <div className="p-4 bg-primary w-fit rounded-2xl mb-6 text-white">
                     <BookOpen className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">M.Tech</h4>
                  <p className="text-text-muted mb-8 text-sm">Advanced specialization for graduates to deepen expertise and research capability.</p>

                  <ul className="space-y-3 mb-8 flex-grow">
                     {["GATE Valid Score", "Sponsored Seats", "Research Focus"].map((item, i) => (
                        <li key={i} className="flex items-center text-white/90 text-sm">
                           <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                           {item}
                        </li>
                     ))}
                  </ul>
                  <Button variant="outline" className="w-full rounded-xl border-white/20 text-white hover:bg-white/10">Apply M.Tech</Button>
               </Reveal>

               {/* MCA & PhD Card */}
               <Reveal delay={0.3} className="bg-background-light p-8 rounded-3xl border border-white/5 flex flex-col shadow-xl hover:-translate-y-2 transition-transform duration-300">
                  <div className="p-4 bg-accent/10 w-fit rounded-2xl mb-6 text-accent">
                     <Users className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">MCA & PhD</h4>
                  <p className="text-text-muted mb-8 text-sm">Master of Computer Applications and Doctoral programs for advanced research.</p>

                  <ul className="space-y-3 mb-8 flex-grow">
                     {["3/2 Year MCA", "Doctoral Research", "Fellowships"].map((item, i) => (
                        <li key={i} className="flex items-center text-white/80 text-sm">
                           <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                           {item}
                        </li>
                     ))}
                  </ul>
                  <Button variant="ghost" className="w-full rounded-xl border border-white/10 text-white hover:bg-white/5">Explore Programs</Button>
               </Reveal>
            </div>
         </Container>
      </Section>
   );
}
