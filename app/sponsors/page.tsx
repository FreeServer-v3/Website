"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

// Mock data for sponsors
const sponsors = [
  { id: 1, name: 'TechCorp', tier: 'Gold', logo: '/api/placeholder/200/100' },
  { id: 2, name: 'InnoSystems', tier: 'Silver', logo: '/api/placeholder/200/100' },
  { id: 3, name: 'DevWorks', tier: 'Bronze', logo: '/api/placeholder/200/100' },
  { id: 4, name: 'CloudNine', tier: 'Gold', logo: '/api/placeholder/200/100' },
  { id: 5, name: 'ByteBuddies', tier: 'Silver', logo: '/api/placeholder/200/100' },
  { id: 6, name: 'CodeCrafters', tier: 'Bronze', logo: '/api/placeholder/200/100' },
];

const SponsorsListPage = () => {
  return (
    <div className="bg-[#121214] text-zinc-100 min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-[#1B1B1F] z-10">
        <nav className="container mx-auto py-4">
          {/* Add navigation items here */}
        </nav>
      </header>

      <main className="container mx-auto pt-20 pb-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-xl mb-8">We're grateful for the support of these amazing organizations</p>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full"
          >
            Become a Sponsor
          </Button>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1B1B1F] p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300"
            >
              <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="w-full h-32 object-contain mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{sponsor.name}</h3>
              <p className="text-orange-500 font-medium">{sponsor.tier} Sponsor</p>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold mb-4">Want to Support FreeServer?</h2>
          <p className="text-xl mb-8">Join our community of sponsors and help shape the future of FreeServer</p>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full"
          >
            <Gift className="mr-2 h-5 w-5" />
            Sponsor Us
          </Button>
        </motion.section>
      </main>

      <footer className="bg-[#1B1B1F] py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 FreeServer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SponsorsListPage;