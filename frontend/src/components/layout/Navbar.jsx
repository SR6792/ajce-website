import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { cn } from '../../utils';
import { Container } from '../ui/Layout';
import { Button } from '../ui/Button';

const navItems = [
   { name: 'About', href: '#about' },
   { name: 'Academics', href: '#academics' },
   { name: 'Admissions', href: '#admissions' },
   { name: 'Campus Life', href: '#campus-life' },
   { name: 'Research', href: '#research' },
   { name: 'News', href: '#news' },
];

export function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <nav
         className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            isScrolled ? "bg-background-dark/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
         )}
      >
         <Container>
            <div className="flex items-center justify-between">
               {/* Logo */}
               <div className="flex items-center gap-4">
                  <div className="relative group">
                     <div className={cn("absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500")} />
                     <img
                        src="https://yt3.googleusercontent.com/nlTpu0fMg5ncB695ZvyfFaVzq3VooYZiMAUq3VYpt_SRpE2MoRyd35E1EjACdnSDN7ihZWZcOA=s160-c-k-c0x00ffffff-no-rj"
                        alt="AJCE Logo"
                        className="w-16 h-16 object-contain relative z-10 drop-shadow-lg p-1 bg-white/90 rounded-full"
                        onError={(e) => {
                           e.target.onerror = null;
                           e.target.src = "https://placehold.co/100x100/3b82f6/ffffff?text=AJCE"; // Fallback
                        }}
                     />
                  </div>
                  <span className={cn("font-serif font-bold text-xl tracking-tight leading-none hidden sm:block", isScrolled ? "text-text-main" : "text-white")}>
                     Amal Jyothi<br />
                     <span className="text-sm font-sans font-normal opacity-90">College of Engineering</span>
                  </span>
               </div>

               {/* Desktop Menu */}
               <div className="hidden lg:flex items-center gap-8">
                  <div className="flex gap-6">
                     {navItems.map((item) => (
                        <a
                           key={item.name}
                           href={item.href}
                           className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group"
                        >
                           {item.name}
                           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                     ))}
                  </div>
                  <Button size="sm" className="rounded-full">Apply Now</Button>
               </div>

               {/* Mobile Menu Button */}
               <button
                  className="lg:hidden text-white p-2"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  {isOpen ? <X /> : <Menu />}
               </button>
            </div>
         </Container>

         {/* Mobile Menu */}
         {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-b border-white/10 p-4 animate-in slide-in-from-top-4">
               <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                     <a
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-white/90 hover:text-primary transition-colors py-2 border-b border-white/5"
                        onClick={() => setIsOpen(false)}
                     >
                        {item.name}
                     </a>
                  ))}
                  <Button className="w-full mt-4 rounded-full">Apply Now</Button>
               </div>
            </div>
         )}
      </nav>
   );
}
