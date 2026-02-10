import React from 'react';
import { Section, Container } from '../ui/Layout';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Animations';
import { Calendar, ArrowRight, Trophy, BookOpen, Briefcase } from 'lucide-react';

const news = [
   {
      category: "Achievement",
      date: "Feb 08",
      title: "AJCE Student Team Wins National Hackathon",
      desc: "The 'CodeWarriors' team secured first place in the Smart India Hackathon 2025 for their AI-driven agriculture solution.",
      icon: <Trophy className="w-5 h-5 text-accent" />
   },
   {
      category: "Research",
      date: "Jan 15",
      title: "Patent Granted for Solar-Powered Water Purification",
      desc: "Dr. Arun Kumar and his team received an Indian Patent for their low-cost, high-efficiency water filter design.",
      icon: <BookOpen className="w-5 h-5 text-primary" />
   },
   {
      category: "Placement",
      date: "Dec 20",
      title: "Record Placements: 85% Students Placed in Top MNCs",
      desc: "Major recruiters this season included Google, Microsoft, TCS, and Infosys with highest package of 24 LPA.",
      icon: <Briefcase className="w-5 h-5 text-green-400" />
   }
];

const events = [
   {
      month: "FEB",
      day: "15",
      title: "Azure 2026: National Tech Fest",
      time: "9:00 AM - Main Auditorium"
   },
   {
      month: "FEB",
      day: "22",
      title: "International Conference on Green Energy",
      time: "10:00 AM - Conference Hall"
   },
   {
      month: "MAR",
      day: "05",
      title: "Alumni Meet 2026",
      time: "4:00 PM - Central Courtyard"
   }
];

export function NewsEvents() {
   return (
      <Section id="news" className="bg-background-dark">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

               {/* Latest News */}
               <div>
                  <Reveal>
                     <div className="flex justify-between items-end mb-8">
                        <div>
                           <h2 className="text-primary font-bold tracking-wider uppercase mb-2 text-sm">Latest News</h2>
                           <h3 className="text-3xl font-serif font-bold text-white">Campus Updates</h3>
                        </div>
                        <Button variant="ghost" size="sm" className="hidden md:flex text-primary hover:text-white">View All</Button>
                     </div>

                     <div className="space-y-8">
                        {news.map((item, index) => (
                           <div key={index} className="group flex gap-6 cursor-pointer">
                              <div className="flex-shrink-0 pt-1">
                                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
                                    {item.icon}
                                 </div>
                              </div>
                              <div className="border-b border-white/5 pb-8 group-last:border-0 w-full">
                                 <div className="flex items-center gap-3 mb-2 text-xs font-bold tracking-wider">
                                    <span className="text-primary">{item.category}</span>
                                    <span className="text-white/20">•</span>
                                    <span className="text-text-muted">{item.date}</span>
                                 </div>
                                 <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                                 <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </Reveal>
               </div>

               {/* Upcoming Events */}
               <div>
                  <Reveal delay={0.2}>
                     <div className="flex justify-between items-end mb-8">
                        <div>
                           <h2 className="text-primary font-bold tracking-wider uppercase mb-2 text-sm">Upcoming Events</h2>
                           <h3 className="text-3xl font-serif font-bold text-white">Calendar</h3>
                        </div>
                        <Button variant="ghost" size="sm" className="hidden md:flex text-primary hover:text-white">Full Calendar</Button>
                     </div>

                     <div className="bg-background-light rounded-3xl p-8 border border-white/5 shadow-xl">
                        <div className="space-y-6">
                           {events.map((event, index) => (
                              <div key={index} className="flex gap-6 items-center group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-colors">
                                 <div className="bg-background-dark p-4 rounded-2xl text-center min-w-[80px] border border-white/5 group-hover:border-primary/30 transition-colors">
                                    <span className="block text-xs font-bold text-primary uppercase">{event.month}</span>
                                    <span className="block text-3xl font-bold text-white">{event.day}</span>
                                 </div>
                                 <div>
                                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{event.title}</h4>
                                    <p className="text-text-muted text-sm flex items-center gap-2">
                                       <Calendar className="w-4 h-4" />
                                       {event.time}
                                    </p>
                                 </div>
                                 <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                    <ArrowRight className="w-5 h-5 text-white/50" />
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </Reveal>
               </div>

            </div>
         </Container>
      </Section>
   );
}
