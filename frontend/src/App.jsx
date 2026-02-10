import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { Academics } from './components/home/Academics';
import { Research } from './components/home/Research';
import { Admissions } from './components/home/Admissions';
import { CampusLife } from './components/home/CampusLife';
import { NewsEvents } from './components/home/NewsEvents';

function App() {
   return (
      <div className="bg-background-dark min-h-screen text-text-main font-sans selection:bg-primary selection:text-white">
         <Navbar />
         <main>
            <Hero />
            <About />
            <Academics />
            <Research />
            <Admissions />
            <CampusLife />
            <NewsEvents />
         </main>
         <Footer />
      </div>
   );
}

export default App;
