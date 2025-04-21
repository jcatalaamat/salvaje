import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const circleRefs = useRef<HTMLDivElement[]>([]);
  
  // Create refs for animated sacred circles
  const addToCircles = (el: HTMLDivElement | null) => {
    if (el && !circleRefs.current.includes(el)) {
      circleRefs.current.push(el);
    }
  };
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Initialize GSAP animations on component mount
  useEffect(() => {
    if (heroRef.current) {
      // Animate sacred circles with random floating movement
      circleRefs.current.forEach((circle, index) => {
        const duration = 10 + Math.random() * 15;
        const xMovement = 20 + Math.random() * 20;
        const yMovement = 15 + Math.random() * 25;
        const delay = Math.random() * 5;
        
        gsap.to(circle, {
          x: `+=${xMovement}`,
          y: `+=${yMovement}`,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: delay
        });
      });
      
      // Letter animation for title
      if (titleRef.current && titleRef.current.textContent) {
        const letters = titleRef.current.textContent.split('');
        titleRef.current.textContent = '';
        letters.forEach((letter, i) => {
          const span = document.createElement('span');
          span.textContent = letter;
          span.style.opacity = '0';
          span.style.transform = 'translateY(20px)';
          span.style.display = 'inline-block';
          span.style.transition = `opacity 0.4s ease, transform 0.4s ease`;
          span.style.transitionDelay = `${i * 0.05 + 0.5}s`;
          titleRef.current?.appendChild(span);
          
          setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
          }, 100);
        });
      }
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-earth-800"
    >
      {/* Sacred animated circles in background */}
      <div 
        ref={addToCircles}
        className="sacred-circle w-80 h-80 top-[5%] left-[10%] opacity-10"
      />
      <div 
        ref={addToCircles}
        className="sacred-circle w-64 h-64 bottom-[15%] right-[5%] opacity-20"
      />
      <div 
        ref={addToCircles}
        className="sacred-circle w-48 h-48 top-[40%] right-[15%] opacity-15"
      />
      
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-texture-earth bg-cover bg-center opacity-30"
        style={{ 
          transform: `translateY(${scrollY * 0.15}px)`,
          backgroundPosition: `50% ${50 + scrollY * 0.05}%` 
        }}
      />
      
      {/* Video background for premium feel (would be replaced with actual video) */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-800/50 to-earth-900 z-10" />
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero.jpg"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Central sacred symbol */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full border-2 border-gold-500/30 opacity-40 animate-pulse-slow z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] rounded-full border border-gold-500/20 opacity-30 animate-pulse-slow z-10" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Sacred glyph/symbol */}
          <div className="mb-8 opacity-80">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <circle cx="32" cy="32" r="30" stroke="#D4B48E" strokeWidth="1" />
              <circle cx="32" cy="32" r="20" stroke="#D4B48E" strokeWidth="1" />
              <path d="M32 2V62" stroke="#D4B48E" strokeWidth="1" />
              <path d="M2 32H62" stroke="#D4B48E" strokeWidth="1" />
              <path d="M9.37256 9.37256L54.6274 54.6274" stroke="#D4B48E" strokeWidth="1" />
              <path d="M54.6274 9.37256L9.37256 54.6274" stroke="#D4B48E" strokeWidth="1" />
            </svg>
          </div>
          
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-light text-white mb-6 tracking-wider font-serif leading-tight"
          >
            Salvaje
          </h1>
          
          <div className="h-0.5 w-24 bg-gold-500/70 mx-auto mb-8"></div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="text-xl md:text-2xl text-earth-50/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            A regenerative community dedicated to protecting human integrity 
            and living in harmony with nature.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-lg px-10 py-4"
            >
              Join Our Vision
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-lg px-10 py-4"
            >
              Explore Our Land
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut" 
        }}
      >
        <p className="text-earth-50/70 text-sm tracking-widest mb-3 uppercase">Explore</p>
        <svg className="w-6 h-6 text-earth-50/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
} 