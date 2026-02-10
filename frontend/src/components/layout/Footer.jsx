import React from 'react';
import { Container } from '../ui/Layout';

export function Footer() {
   return (
      <footer className="bg-background-dark text-text-muted py-16 text-sm border-t border-white/5">
         <Container>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
               <div className="space-y-4">
                  <h3 className="text-white font-serif text-lg font-bold">Amal Jyothi College of Engineering</h3>
                  <p className="leading-relaxed opacity-80 text-text-muted">
                     Kanjirapally, Koovappally P.O.<br />
                     Kottayam, Kerala 686518<br />
                     +91 4828 305500
                  </p>
               </div>

               <div>
                  <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Academics</h4>
                  <ul className="space-y-2">
                     <li><a href="#" className="hover:text-accent transition-colors">Undergraduate</a></li>
                     <li><a href="#" className="hover:text-accent transition-colors">Graduate</a></li>
                     <li><a href="#" className="hover:text-accent transition-colors">Professional Education</a></li>
                     <li><a href="#" className="hover:text-accent transition-colors">Summer Schools</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Resources</h4>
                  <ul className="space-y-2">
                     <li><a href="#" className="hover:text-accent transition-colors">Library</a></li>
                     <li><a href="#" className="hover:text-accent transition-colors">Career Services</a></li>
                     <li><a href="#" className="hover:text-accent transition-colors">Directory</a></li>
                     <li><a href="#" className="hover:text-accent transition-colors">Campus Map</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Connect</h4>
                  <ul className="space-y-2">
                     <li><a href="#" className="hover:text-accent transition-colors">Facebook</a></li>
                     <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
                     <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                     <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
                  </ul>
               </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
               <p>&copy; {new Date().getFullYear()} AJCE. All rights reserved.</p>
               <div className="flex gap-6">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
               </div>
            </div>
         </Container>
      </footer>
   );
}
