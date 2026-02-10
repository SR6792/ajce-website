import { cn } from '../../utils';
import React from 'react';
import { Section, Container } from '../ui/Layout';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Animations';

const features = [
   {
      id: 1,
      title: "Vibrant Community",
      desc: "Home to 3000+ students from diverse backgrounds.",
      img: "https://picsum.photos/seed/ajce_students_life/800/1000",
      span: "md:col-span-1",
   },
   {
      id: 2,
      title: "Arts & Culture",
      desc: "Celebrating creativity through Azure and other fests.",
      img: "https://picsum.photos/seed/ajce_culture/800/1000",
      span: "md:col-span-1",
   },
   {
      id: 3,
      title: "Sports & Fitness",
      desc: "International standard courts and gymnasiums.",
      img: "https://picsum.photos/seed/ajce_sports/800/1000",
      span: "md:col-span-1",
   },
];

export function CampusLife() {
   return (
      <Section id="campus-life" className="bg-background-light py-24">
         <Container>
            <div className="mb-16 text-center max-w-3xl mx-auto">
               <Reveal>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Life at AJCE</h2>
                  <p className="text-lg text-text-muted leading-relaxed">
                     Experience a self-contained township on our 60-acre campus. From academic excellence to holistic development,
                     we provide an environment where you can thrive.
                  </p>
               </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[500px]">
               {features.map((feature, index) => (
                  <Reveal key={feature.id} delay={index * 0.2} className={cn("relative group overflow-hidden rounded-3xl cursor-pointer shadow-xl", feature.span)}>
                     <img
                        src={feature.img}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                     <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 translate-y-4 group-hover:translate-y-0">
                           {feature.desc}
                        </p>
                     </div>
                  </Reveal>
               ))}
            </div>

            <div className="mt-16 text-center">
               <Button variant="outline" size="lg" className="rounded-full border-primary/50 text-white hover:bg-primary/10 px-8">
                  View Full Gallery
               </Button>
            </div>
         </Container>
      </Section>
   );
}
