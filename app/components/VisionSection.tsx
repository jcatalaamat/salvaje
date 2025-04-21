import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

// Only import ScrollTrigger on the client side
let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(module => {
    ScrollTrigger = module.default;
    gsap.registerPlugin(ScrollTrigger);
  });
}

const visionPillars = [
  {
    title: "Community-Driven Growth",
    description: "Stepping out of over-capitalization by prioritizing equitable access and mutual support over profit.",
    icon: "🌱",
    symbol: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="20" stroke="#A77F63" strokeWidth="1" />
        <path d="M32 12V52" stroke="#A77F63" strokeWidth="1" />
        <path d="M22 22L42 42" stroke="#A77F63" strokeWidth="1" />
        <path d="M22 42L42 22" stroke="#A77F63" strokeWidth="1" />
      </svg>
    ),
    color: "bg-gradient-to-br from-earth-50 to-earth-100 border-l-4 border-earth-500"
  },
  {
    title: "Human-Centered Healing",
    description: "Creating a third way focused on supporting each other while living in reciprocity with the Earth.",
    icon: "🌿",
    symbol: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="20" stroke="#5A5541" strokeWidth="1" />
        <circle cx="32" cy="32" r="10" stroke="#5A5541" strokeWidth="1" />
        <path d="M32 12V52" stroke="#5A5541" strokeWidth="1" />
        <path d="M12 32H52" stroke="#5A5541" strokeWidth="1" />
      </svg>
    ),
    color: "bg-gradient-to-br from-forest-50 to-forest-100 border-l-4 border-forest-500"
  },
  {
    title: "Decolonized Dialogue",
    description: "Engaging with indigenous communities in sustainable ways, reclaiming a grounded approach to the sacred.",
    icon: "🔄",
    symbol: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 12C20.9543 12 12 20.9543 12 32C12 43.0457 20.9543 52 32 52" stroke="#D4B48E" strokeWidth="1" />
        <path d="M32 52C43.0457 52 52 43.0457 52 32C52 20.9543 43.0457 12 32 12" stroke="#D4B48E" strokeWidth="1" />
        <path d="M32 2L32 22" stroke="#D4B48E" strokeWidth="1" />
        <path d="M28 6L32 2L36 6" stroke="#D4B48E" strokeWidth="1" />
        <path d="M32 62L32 42" stroke="#D4B48E" strokeWidth="1" />
        <path d="M36 58L32 62L28 58" stroke="#D4B48E" strokeWidth="1" />
      </svg>
    ),
    color: "bg-gradient-to-br from-gold-100 to-gold-200 border-l-4 border-gold-500"
  },
  {
    title: "Sovereignty & Self-Sufficiency",
    description: "Enhancing autonomy without reliance on external power structures or overarching governmental systems.",
    icon: "🛡️",
    symbol: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8L52 18V32C52 43.0457 43.0457 52 32 52C20.9543 52 12 43.0457 12 32V18L32 8Z" stroke="#3B2F2F" strokeWidth="1" />
        <circle cx="32" cy="32" r="10" stroke="#3B2F2F" strokeWidth="1" />
        <path d="M32 22V42" stroke="#3B2F2F" strokeWidth="1" />
        <path d="M22 32H42" stroke="#3B2F2F" strokeWidth="1" />
      </svg>
    ),
    color: "bg-gradient-to-br from-ocean-50 to-ocean-100 border-l-4 border-ocean-500"
  }
];

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // GSAP animations
  useEffect(() => {
    // Make sure ScrollTrigger is loaded and elements exist
    if (typeof ScrollTrigger === 'undefined' || !quoteRef.current) {
      return;
    }
    
    if (quoteRef.current) {
      const quote = quoteRef.current;
      
      gsap.fromTo(
        quote, 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          scrollTrigger: {
            trigger: quote,
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background organic shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.07]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#A77F63" d="M40.8,-68.7C51.9,-61.3,59.5,-48.5,65.1,-35.3C70.6,-22.1,74.1,-8.6,73.2,4.6C72.3,17.8,67,30.8,58.4,41.1C49.8,51.4,37.9,59.1,24.7,65.3C11.5,71.5,-3,76.3,-17.2,75.1C-31.4,73.9,-45.3,66.7,-55.8,56.1C-66.3,45.6,-73.4,31.6,-75.7,16.8C-78.1,2,-75.6,-13.8,-69.9,-28.2C-64.2,-42.5,-55.2,-55.4,-43.1,-62.5C-30.9,-69.6,-15.5,-70.9,-0.2,-70.6C15.1,-70.3,29.7,-76.1,40.8,-68.7Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 opacity-[0.07]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#D4B48E" d="M32.1,-54.3C42.6,-51.2,52.8,-44.6,59.9,-35.1C67,-25.5,70.9,-12.8,72.1,1C73.2,14.8,71.6,29.6,63.5,39.4C55.4,49.2,40.9,54,26.9,60.8C12.9,67.6,-0.6,76.5,-15.4,77.6C-30.2,78.8,-46.3,72.2,-57.2,60.8C-68.1,49.5,-73.8,33.3,-76.3,16.6C-78.8,-0.1,-78.2,-17.3,-71.5,-30.8C-64.9,-44.3,-52.1,-54.1,-38.7,-56.4C-25.2,-58.7,-12.6,-53.5,-0.6,-52.5C11.5,-51.5,22.9,-54.6,32.1,-54.3Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="mb-24 text-center"
        >
          <span className="inline-block text-earth-500 uppercase tracking-widest text-sm font-medium mb-4">Our Philosophy</span>
          <h2 className="section-heading">The Vision of Salvaje</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed font-light">
            We are redefining the concept of a conscious community while witnessing the fall of new-age spirituality. 
            We are looking for a third way focused on the human factor — on how to heal and support each other as we live in reciprocity with the Earth.
          </p>
        </motion.div>

        {/* Vision Pillars with asymmetric layout */}
        <div className="grid md:grid-cols-5 gap-12 mb-20">
          {/* Left column - 3 spans */}
          <div className="md:col-span-3 space-y-12">
            {visionPillars.slice(0, 2).map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`${pillar.color} p-10 rounded-xl shadow-lg transition-all duration-500 
                  hover:shadow-xl group relative overflow-hidden`}
              >
                {/* Background patterns */}
                <div className="absolute top-0 right-0 opacity-[0.03] w-60 h-60 transform translate-x-1/4 -translate-y-1/4">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path fill="#000000" d="M40.8,-68.7C51.9,-61.3,59.5,-48.5,65.1,-35.3C70.6,-22.1,74.1,-8.6,73.2,4.6C72.3,17.8,67,30.8,58.4,41.1C49.8,51.4,37.9,59.1,24.7,65.3C11.5,71.5,-3,76.3,-17.2,75.1C-31.4,73.9,-45.3,66.7,-55.8,56.1C-66.3,45.6,-73.4,31.6,-75.7,16.8C-78.1,2,-75.6,-13.8,-69.9,-28.2C-64.2,-42.5,-55.2,-55.4,-43.1,-62.5C-30.9,-69.6,-15.5,-70.9,-0.2,-70.6C15.1,-70.3,29.7,-76.1,40.8,-68.7Z" transform="translate(100 100)" />
                  </svg>
                </div>
                
                <div className="relative">
                  <div className="flex items-center mb-5">
                    <div className="mr-5 opacity-90 transform transition-transform duration-700 group-hover:scale-110">
                      {pillar.symbol}
                    </div>
                    <h3 className="text-2xl font-serif text-earth-900">{pillar.title}</h3>
                  </div>
                  <p className="text-earth-800 leading-relaxed ml-[76px]">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right column - 2 spans */}
          <div className="md:col-span-2 space-y-12">
            {visionPillars.slice(2).map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: (index + 2) * 0.15 }}
                className={`${pillar.color} p-10 rounded-xl shadow-lg transition-all duration-500 
                  hover:shadow-xl group relative overflow-hidden`}
              >
                {/* Background patterns */}
                <div className="absolute top-0 right-0 opacity-[0.03] w-60 h-60 transform translate-x-1/4 -translate-y-1/4">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path fill="#000000" d="M40.8,-68.7C51.9,-61.3,59.5,-48.5,65.1,-35.3C70.6,-22.1,74.1,-8.6,73.2,4.6C72.3,17.8,67,30.8,58.4,41.1C49.8,51.4,37.9,59.1,24.7,65.3C11.5,71.5,-3,76.3,-17.2,75.1C-31.4,73.9,-45.3,66.7,-55.8,56.1C-66.3,45.6,-73.4,31.6,-75.7,16.8C-78.1,2,-75.6,-13.8,-69.9,-28.2C-64.2,-42.5,-55.2,-55.4,-43.1,-62.5C-30.9,-69.6,-15.5,-70.9,-0.2,-70.6C15.1,-70.3,29.7,-76.1,40.8,-68.7Z" transform="translate(100 100)" />
                  </svg>
                </div>
                
                <div className="relative">
                  <div className="flex items-center mb-5">
                    <div className="mr-5 opacity-90 transform transition-transform duration-700 group-hover:scale-110">
                      {pillar.symbol}
                    </div>
                    <h3 className="text-2xl font-serif text-earth-900">{pillar.title}</h3>
                  </div>
                  <p className="text-earth-800 leading-relaxed ml-[76px]">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote section */}
        <div
          ref={quoteRef}
          className="mt-24 p-12 bg-texture-paper bg-cover bg-center rounded-xl shadow-xl relative overflow-hidden mx-auto max-w-4xl text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-6 left-6 w-16 h-16 opacity-30">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 28H12C12 20.8203 17.8203 15 25 15V23C22.2386 23 20 25.2386 20 28Z" stroke="#A77F63" strokeWidth="1" />
              <path d="M36 28H28C28 20.8203 33.8203 15 41 15V23C38.2386 23 36 25.2386 36 28Z" stroke="#A77F63" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-6 right-6 w-16 h-16 opacity-30 rotate-180">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 28H12C12 20.8203 17.8203 15 25 15V23C22.2386 23 20 25.2386 20 28Z" stroke="#A77F63" strokeWidth="1" />
              <path d="M36 28H28C28 20.8203 33.8203 15 41 15V23C38.2386 23 36 25.2386 36 28Z" stroke="#A77F63" strokeWidth="1" />
            </svg>
          </div>
          
          <p className="text-2xl text-earth-800 italic font-serif leading-relaxed mb-6 relative z-10">
            "This is a regenerative, heart-led social project dedicated to future generations and the defense of human integrity. 
            It's a community made to radiate outward and plant seeds of change, rather than being an isolated bubble that turns in a closed circle."
          </p>
          
          <div className="h-0.5 w-16 bg-gold-500/50 mx-auto my-6"></div>
          
          <p className="text-earth-700 uppercase tracking-widest text-sm">
            Our Manifesto
          </p>
        </div>
      </div>
    </section>
  );
} 