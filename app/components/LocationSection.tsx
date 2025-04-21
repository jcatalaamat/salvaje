import React, { useRef, useEffect } from 'react';
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

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  
  // GSAP animations
  useEffect(() => {
    // Make sure ScrollTrigger is loaded
    if (typeof ScrollTrigger === 'undefined' || !imageContainerRef.current || !mapRef.current) {
      return;
    }
    
    if (imageContainerRef.current) {
      const images = imageContainerRef.current.querySelectorAll('.location-image');
      
      gsap.fromTo(
        images, 
        { 
          y: 100,
          opacity: 0,
          scale: 0.9,
        }, 
        { 
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { 
          clipPath: "inset(10% 10% 10% 10% round 10px)",
          opacity: 0.8,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 20px)",
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-earth-50">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-texture-noise bg-repeat opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          style={{ opacity }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="inline-block text-earth-600 uppercase tracking-widest text-sm font-medium mb-4">Our Location</span>
          <h2 className="section-heading">Where Sacred Meets Nature</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed font-light">
            Nestled in the pristine wilderness of Costa Rica, our community embraces the rhythm of nature
            while focusing on regenerative practices and sustainable living.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
          {/* Left column: Location information */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-xl shadow-xl p-8 md:p-10 mb-8 border border-earth-100"
            >
              <h3 className="text-2xl font-serif text-earth-900 mb-6">Costa Rica: A Haven of Biodiversity</h3>
              <p className="mb-6 text-earth-800 leading-relaxed">
                Located on the enchanting Pacific coast of Costa Rica, Salvaje integrates seamlessly with the natural surroundings. 
                Our community sits at the intersection of lush rainforest and pristine beaches, creating an environment that nurtures 
                both body and spirit.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="text-gold-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-earth-700">350+ days of sunshine per year</span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-earth-700">Access to world-class beaches and surfing</span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-earth-700">Biodiverse ecosystem with abundant wildlife</span>
                </li>
                <li className="flex items-start">
                  <div className="text-gold-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-earth-700">Year-round tropical climate (24-30°C/75-86°F)</span>
                </li>
              </ul>
              
              <div className="pt-2">
                <button className="btn-outline-earth transition-all duration-300 hover:bg-earth-100">
                  Learn about our climate
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gradient-to-br from-forest-50 to-forest-100 rounded-xl shadow-lg p-8 md:p-10 border border-forest-200"
            >
              <h3 className="text-2xl font-serif text-forest-900 mb-4">Sustainable Infrastructure</h3>
              <p className="text-forest-800 leading-relaxed">
                Our community is designed with permaculture principles, featuring solar power, 
                rainwater harvesting, and natural building methods that honor the land while 
                providing modern comforts.
              </p>
            </motion.div>
          </div>
          
          {/* Right column: Interactive map */}
          <div ref={mapRef} className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011352.3075493403!2d-85.78566566938428!3d9.747257633255499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f92e56221acc925%3A0x6254f72535819a2b!2sCosta%20Rica!5e0!3m2!1sen!2sus!4v1655668767440!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay with pulsing location marker */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[280px]">
              <h4 className="text-earth-900 font-medium mb-1">Salvaje Community</h4>
              <p className="text-sm text-earth-700">Pacific Coast, Costa Rica</p>
            </div>
            
            {/* Pulsing location marker - positioned at a specific area on the map */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-gold-500 rounded-full relative">
                <div className="absolute inset-0 bg-gold-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gallery section */}
        <div ref={imageContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div 
            className="location-image col-span-1 md:col-span-2 h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl"
            style={{ y }}
          >
            <img 
              src="/images/location-1.jpg" 
              alt="Costa Rica coastline" 
              className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
            />
          </motion.div>
          
          <motion.div 
            className="location-image col-span-1 h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [30, -50]) }}
          >
            <img 
              src="/images/location-2.jpg" 
              alt="Rainforest canopy" 
              className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
            />
          </motion.div>
          
          <motion.div 
            className="location-image col-span-1 h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [50, -30]) }}
          >
            <img 
              src="/images/location-3.jpg" 
              alt="Sustainable housing" 
              className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
            />
          </motion.div>
          
          <motion.div 
            className="location-image col-span-1 md:col-span-2 h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [70, -20]) }}
          >
            <img 
              src="/images/location-4.jpg" 
              alt="Community garden" 
              className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
            />
          </motion.div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-earth-900 mb-6">Ready to join our community?</h3>
          <button className="btn-primary-gold py-4 px-8 text-lg shadow-xl hover:shadow-gold-500/20">
            Schedule a Visit
          </button>
        </motion.div>
      </div>
    </section>
  );
} 