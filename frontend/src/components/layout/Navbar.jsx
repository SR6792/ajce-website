import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, LogIn, LogOut, UserCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
   const [user, setUser] = useState(null);
   const [showUserMenu, setShowUserMenu] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();

   // Check for logged-in user on mount and on route change
   useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
         try {
            setUser(JSON.parse(storedUser));
         } catch {
            setUser(null);
         }
      } else {
         setUser(null);
      }
   }, [location]);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
      setShowUserMenu(false);
      navigate('/');
   };

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
                           e.target.src = "https://placehold.co/100x100/3b82f6/ffffff?text=AJCE";
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

                  {/* User Greeting or Login Link */}
                  {user ? (
                     <div className="relative">
                        <button
                           onClick={() => setShowUserMenu(!showUserMenu)}
                           className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                        >
                           <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-xs font-bold uppercase">
                              {user.name?.charAt(0) || 'U'}
                           </div>
                           <span className="text-sm font-medium text-white max-w-[120px] truncate">
                              Hi, {user.name?.split(' ')[0] || 'User'}
                           </span>
                           <ChevronDown className={cn("w-3.5 h-3.5 text-text-muted transition-transform duration-300", showUserMenu && "rotate-180")} />
                        </button>

                        {/* Dropdown */}
                        {showUserMenu && (
                           <div className="absolute right-0 top-full mt-2 w-52 bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/30 overflow-hidden animate-in slide-in-from-top-2">
                              <div className="p-3 border-b border-white/[0.06]">
                                 <p className="text-sm font-medium text-white truncate">{user.name}</p>
                                 <p className="text-xs text-text-muted truncate">{user.email}</p>
                              </div>
                              <button
                                 onClick={handleLogout}
                                 className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors duration-200"
                              >
                                 <LogOut className="w-4 h-4" />
                                 Sign Out
                              </button>
                           </div>
                        )}
                     </div>
                  ) : (
                     <Link to="/login" className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group flex items-center gap-1.5">
                        <LogIn className="w-4 h-4" />
                        Login
                     </Link>
                  )}

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

                  {/* Mobile: User Greeting or Login */}
                  {user ? (
                     <div className="py-2 border-b border-white/5">
                        <div className="flex items-center gap-3 mb-3">
                           <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-sm font-bold uppercase">
                              {user.name?.charAt(0) || 'U'}
                           </div>
                           <div>
                              <p className="text-sm font-medium text-white">Hi, {user.name?.split(' ')[0] || 'User'}</p>
                              <p className="text-xs text-text-muted">{user.email}</p>
                           </div>
                        </div>
                        <button
                           onClick={() => { handleLogout(); setIsOpen(false); }}
                           className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                        >
                           <LogOut className="w-4 h-4" />
                           Sign Out
                        </button>
                     </div>
                  ) : (
                     <Link
                        to="/login"
                        className="flex items-center gap-2 text-lg font-medium text-white/90 hover:text-primary transition-colors py-2 border-b border-white/5"
                        onClick={() => setIsOpen(false)}
                     >
                        <LogIn className="w-5 h-5" />
                        Login
                     </Link>
                  )}

                  <Button className="w-full mt-4 rounded-full">Apply Now</Button>
               </div>
            </div>
         )}
      </nav>
   );
}
