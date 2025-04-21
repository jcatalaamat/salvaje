import React, { useEffect, useState } from 'react'
import './base.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import VisionSection from './components/VisionSection'
import LandSection from './components/LandSection'
import ProgramsSection from './components/ProgramsSection'
import CommunitySection from './components/CommunitySection'
import IndigenousStewardshipSection from './components/IndigenousStewardshipSection'
import JoinSection from './components/JoinSection'
import HeroSection from './components/HeroSection'

// Import framer-motion for page transitions
import { motion } from 'framer-motion'

export default function Index() {
  const [isMounted, setIsMounted] = useState(false);

  // Scroll restoration when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMounted(true);
  }, []);
  
  return (
    <div className="bg-earth-50">
      <Navbar />
      
      {/* We're nesting components that together create a flowing, cohesive experience */}
      <main>
        {isMounted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            
            {/* Decorative divider */}
            <div className="relative h-20 overflow-hidden">
              <svg 
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  className="fill-earth-50"
                />
              </svg>
            </div>
            
            <VisionSection />
            
            {/* Decorative divider */}
            <div className="relative h-20 overflow-hidden">
              <svg 
                className="absolute bottom-0 left-0 w-full transform rotate-180"
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  className="fill-earth-100"
                />
              </svg>
            </div>
            
            <LandSection />
            
            {/* Decorative divider with parallax effect */}
            <div className="relative h-24 overflow-hidden bg-earth-100">
              <svg 
                className="absolute top-0 left-0 w-full"
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                  className="fill-white"
                />
              </svg>
            </div>
            
            <ProgramsSection />
            
            {/* Decorative divider */}
            <div className="relative h-20 overflow-hidden">
              <svg 
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  className="fill-earth-50"
                />
              </svg>
            </div>
            
            <CommunitySection />
            
            {/* Decorative divider */}
            <div className="relative h-20 overflow-hidden">
              <svg 
                className="absolute bottom-0 left-0 w-full transform rotate-180"
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" 
                  className="fill-earth-50"
                />
              </svg>
            </div>
            
            {/* Decorative divider */}
            <div className="relative h-20 overflow-hidden">
              <svg 
                className="absolute bottom-0 left-0 w-full transform rotate-180"
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" 
                  className="fill-earth-100"
                />
              </svg>
            </div>
            
            <IndigenousStewardshipSection />
            
            {/* Decorative divider for Indigenous section */}
            <div className="relative h-20 overflow-hidden">
              <svg 
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  className="fill-earth-50"
                />
              </svg>
            </div>
            
            <JoinSection />
          </motion.div>
        ) : (
          /* Show a minimal loading state before client-side hydration */
          <div className="h-screen flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-earth-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
