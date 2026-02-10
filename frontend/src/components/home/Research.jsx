import React from 'react';
import { Section, Container } from '../ui/Layout';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Animations';
import { CountUp } from '../ui/CountUp';
import { Lightbulb, Zap, Bot, Droplets } from 'lucide-react';

const stats = [
   { label: "Research Centers", value: 18, suffix: "" },
   { label: "Patents Granted", value: 32, suffix: "" },
   { label: "Annual Funding", value: 45, prefix: "₹", suffix: "Cr" },
   { label: "Published Papers", value: 450, suffix: "+" },
];

export function Research() {
   return (
      <Section id="research" className="bg-background-dark relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <Reveal>
                     <h2 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">Innovation Hub</h2>
                     <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                        Pioneering Tomorrow's <br />Technology
                     </h3>
                     <p className="text-lg text-text-muted leading-relaxed mb-8">
                        At AJCE, research isn't just academic—it's about impact. From renewable energy solutions that power our rural communities to AI algorithms that solve complex logistics, our work transforms lives.
                     </p>

                     <div className="grid grid-cols-2 gap-8 mb-10">
                        {stats.map((stat, index) => (
                           <div key={index} className="border-l-2 border-white/10 pl-6">
                              <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                                 <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                              </p>
                              <p className="text-sm text-text-muted uppercase tracking-wider">{stat.label}</p>
                           </div>
                        ))}
                     </div>

                     <Button>Explore Our Research</Button>
                  </Reveal>
               </div>

               <div className="flex flex-col gap-6">
                  <Reveal delay={0.2} className="p-8 bg-background-light rounded-2xl border border-white/5 shadow-2xl hover:border-primary/30 transition-colors group">
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:scale-110 transition-transform">
                           <Zap className="w-8 h-8" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-white mb-2">Green Energy</h4>
                           <p className="text-text-muted">Developing sustainable solar and bio-energy systems for a cleaner Kerala.</p>
                        </div>
                     </div>
                  </Reveal>
                  <Reveal delay={0.3} className="p-8 bg-background-light rounded-2xl border border-white/5 shadow-2xl hover:border-primary/30 transition-colors group ml-0 md:ml-8">
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                           <Bot className="w-8 h-8" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-white mb-2">Robotics & AI</h4>
                           <p className="text-text-muted">Automation solutions for agriculture, healthcare, and industrial safety.</p>
                        </div>
                     </div>
                  </Reveal>
                  <Reveal delay={0.4} className="p-8 bg-background-light rounded-2xl border border-white/5 shadow-2xl hover:border-primary/30 transition-colors group">
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                           <Droplets className="w-8 h-8" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-white mb-2">Water Tech</h4>
                           <p className="text-text-muted">Advanced purification and management systems for community water resources.</p>
                        </div>
                     </div>
                  </Reveal>
               </div>
            </div>
         </Container>
      </Section>
   );
}
