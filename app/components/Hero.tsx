import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center"
        style={{ 
          transform: `translateY(${scrollY * 0.15}px)`,
          backgroundPosition: `50% ${50 + scrollY * 0.05}%` 
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-earth-900/70 z-10" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg font-serif">
            Salvaje
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
            A regenerative community dedicated to protecting human integrity 
            and living in harmony with nature.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition duration-300"
          >
            Join Our Vision
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 12, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut" 
        }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </div>
  );
} 