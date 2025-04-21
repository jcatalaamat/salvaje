import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Only import ScrollTrigger on the client side
let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(module => {
    ScrollTrigger = module.default;
    gsap.registerPlugin(ScrollTrigger);
  });
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  
  // GSAP animations
  useEffect(() => {
    // Initial animation sequence
    const tl = gsap.timeline({ 
      defaults: { 
        ease: "power3.out",
      }
    });
    
    // Animate the background image scale
    tl.fromTo(
      imageContainerRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2.5 },
      0
    );
    
    // Animate the overlay gradient
    tl.fromTo(
      ".hero-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      0.3
    );
    
    // Heading animation with split text
    if (headingRef.current) {
      const heading = headingRef.current;
      
      // Split text into words
      const words = heading.innerText.split(' ');
      heading.innerHTML = '';
      
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = "inline-block overflow-hidden mx-1";
        
        const innerSpan = document.createElement('span');
        innerSpan.className = "inline-block transform anim-word";
        innerSpan.textContent = word;
        
        wordSpan.appendChild(innerSpan);
        heading.appendChild(wordSpan);
      });
      
      // Animate each word individually
      gsap.fromTo(
        '.anim-word',
        { 
          y: 100, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.08,
          duration: 1.2,
          delay: 0.8
        }
      );
    }
    
    // Animate subheading with character reveal
    if (subheadingRef.current) {
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 1.5 }
      );
    }
    
    // Animate buttons
    gsap.fromTo(
      '.cta-button',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, delay: 1.8 }
    );
    
    // Animate decorative elements
    gsap.fromTo(
      '.decorative-element',
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, stagger: 0.2, duration: 1, delay: 2 }
    );
    
    // Scroll animation for parallax effect
    if (typeof ScrollTrigger !== 'undefined' && imageContainerRef.current) {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self: any) => {
          const progress = self.progress;
          gsap.to(imageContainerRef.current, {
            y: progress * 150,
            duration: 0.5,
            ease: "none"
          });
          
          gsap.to('.hero-content', {
            y: progress * -50,
            duration: 0.5,
            ease: "none"
          });
        }
      });
    }
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative h-screen min-h-[800px] w-full overflow-hidden"
    >
      {/* Background image with parallax effect */}
      <div 
        ref={imageContainerRef}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div className="absolute inset-0 bg-forest-900/40 z-10"></div>
        <img 
          src="/images/hero-background.jpg" 
          alt="Lush forest landscape"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Gradient overlay */}
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-transparent via-forest-900/40 to-forest-900/80 z-20"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-30 pointer-events-none">
        {/* Top left shape */}
        <div className="decorative-element absolute top-[10%] left-[5%] w-64 h-64 rounded-full border border-earth-300/20 backdrop-blur-sm"></div>
        
        {/* Bottom right shape */}
        <div className="decorative-element absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full border-2 border-earth-300/10 backdrop-blur-sm"></div>
        
        {/* Center accent */}
        <div className="decorative-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full radial-gradient opacity-20"></div>
      </div>
      
      {/* Hero content */}
      <div className="hero-content relative z-40 h-full flex flex-col justify-center items-center text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-block text-earth-300 uppercase tracking-[0.3em] text-sm sm:text-base font-medium mb-6"
        >
          Regenerative Community
        </motion.span>
        
        <h1 
          ref={headingRef}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-8 tracking-tight"
        >
          A Living Blueprint for Conscious Living
        </h1>
        
        <p 
          ref={subheadingRef}
          className="max-w-3xl mx-auto text-xl sm:text-2xl text-earth-100 mb-12 leading-relaxed"
        >
          Join a vibrant community integrating ecological design, indigenous wisdom, and social innovation to create regenerative human habitats.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <a 
            href="#join" 
            className="cta-button px-8 py-4 bg-earth-600 hover:bg-earth-700 text-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg font-medium"
          >
            Join Our Community
          </a>
          <a 
            href="#vision" 
            className="cta-button px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Explore Our Vision
          </a>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-earth-300 text-sm tracking-wider mb-2">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-earth-300">
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 