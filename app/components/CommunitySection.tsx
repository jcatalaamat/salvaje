import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import gsap from 'gsap';

// Only import ScrollTrigger on the client side
let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(module => {
    ScrollTrigger = module.default;
    gsap.registerPlugin(ScrollTrigger);
  });
}

const communityValues = [
  {
    id: 'regeneration',
    title: 'Regeneration',
    description: 'We design systems that enhance the health and vitality of natural ecosystems, ensuring our actions build rather than deplete.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 18H16C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16V18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 10H16C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'sovereignty',
    title: 'Sovereignty',
    description: 'We honor the autonomy of each individual while recognizing our interdependence within the larger community and ecosystem.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'reciprocity',
    title: 'Reciprocity',
    description: 'We build relationships based on mutual benefit, ensuring fair exchange that respects all beings, including the land itself.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M17 20L21 16M21 16L17 12M21 16H7M7 4L3 8M3 8L7 12M3 8H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'integration',
    title: 'Integration',
    description: 'We embrace the full spectrum of human experience, weaving together inner and outer work, traditional wisdom and modern knowledge.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.3018 3.33033 20.5763C3.68184 20.8508 4.11501 20.9999 4.561 21H19.439C19.885 20.9999 20.3182 20.8508 20.6697 20.5763C21.0212 20.3018 21.2708 19.9177 21.379 19.485L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const governanceStructures = [
  {
    title: "Sociocracy",
    description: "Our decision-making framework based on consent rather than consensus, ensuring all voices are heard while enabling effective action.",
    color: "bg-forest-50",
    borderColor: "border-forest-200",
    textColor: "text-forest-800"
  },
  {
    title: "Working Circles",
    description: "Self-organizing teams focused on specific domains of community life, from land stewardship to educational programming.",
    color: "bg-earth-50",
    borderColor: "border-earth-200",
    textColor: "text-earth-800"
  },
  {
    title: "Council Gatherings",
    description: "Regular community-wide meetings where we share information, make collective decisions, and deepen our connections.",
    color: "bg-gold-50",
    borderColor: "border-gold-200",
    textColor: "text-earth-900"
  }
];

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const governanceRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // GSAP animations
  useEffect(() => {
    if (typeof ScrollTrigger === 'undefined' || !valuesRef.current || !governanceRef.current) {
      return;
    }
    
    // Animate values cards
    const valueCards = valuesRef.current.querySelectorAll('.value-card');
    gsap.fromTo(
      valueCards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    // Animate governance structures
    const governanceItems = governanceRef.current.querySelectorAll('.governance-item');
    gsap.fromTo(
      governanceItems,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: governanceRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="community"
      className="py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-earth-50/40 to-white -z-10"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 -z-10">
        <motion.div 
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-forest-100 rounded-full blur-3xl"
          style={{ y }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-earth-100 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        ></motion.div>
      </div>
      
      {/* Sacred geometry light pattern */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="400" fill="none" stroke="#555" strokeWidth="1" />
          <circle cx="400" cy="400" r="300" fill="none" stroke="#555" strokeWidth="1" />
          <circle cx="400" cy="400" r="200" fill="none" stroke="#555" strokeWidth="1" />
          <circle cx="400" cy="400" r="100" fill="none" stroke="#555" strokeWidth="1" />
          <line x1="0" y1="400" x2="800" y2="400" stroke="#555" strokeWidth="1" />
          <line x1="400" y1="0" x2="400" y2="800" stroke="#555" strokeWidth="1" />
          <line x1="0" y1="0" x2="800" y2="800" stroke="#555" strokeWidth="1" />
          <line x1="800" y1="0" x2="0" y2="800" stroke="#555" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <motion.span 
            className="inline-block text-earth-600 uppercase tracking-[0.25em] text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Living Together
          </motion.span>
          <motion.h2 
            className="section-heading mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Community Structure
          </motion.h2>
          <motion.p 
            className="text-xl text-earth-800 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're building a conscious community centered around shared values and regenerative practices.
            Our governance systems draw from ancient wisdom and modern organizational design to create a structure that's both resilient and adaptive.
          </motion.p>
        </div>
        
        {/* Core Values */}
        <div className="mb-32">
          <motion.h3 
            className="text-2xl font-serif text-earth-900 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Core Community Values
          </motion.h3>
          
          <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityValues.map((value, index) => (
              <div key={value.id} className="value-card">
                <div className="bg-white rounded-xl shadow-lg border border-earth-100 p-8 h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden group">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 bg-texture-paper opacity-20"></div>
                  
                  {/* Accent decorative element */}
                  <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-forest-50 rounded-full opacity-20 transform transition-transform duration-700 group-hover:scale-150"></div>
                  
                  <div className="relative z-10">
                    <div className="text-forest-700 mb-6">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-serif text-forest-900 mb-4">{value.title}</h4>
                    <p className="text-earth-700">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Governance Structure */}
        <div>
          <motion.h3 
            className="text-2xl font-serif text-earth-900 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our Governance Structure
          </motion.h3>
          
          <div ref={governanceRef} className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-forest-200 via-earth-200 to-gold-200 hidden md:block"></div>
              
              {governanceStructures.map((structure, index) => (
                <div key={structure.title} className="governance-item mb-16 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Circle connector */}
                    <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md border border-earth-100 flex-shrink-0 z-10 mx-auto">
                      <span className="text-2xl text-earth-700 font-serif">{index + 1}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={`rounded-xl p-8 border shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl flex-1 ${structure.color} ${structure.borderColor}`}>
                      <h4 className={`text-xl font-serif mb-4 ${structure.textColor}`}>{structure.title}</h4>
                      <p className="text-earth-700">{structure.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to action */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-earth-200/30 via-gold-200/40 to-forest-200/30 blur-xl rounded-full transform -translate-y-1/4 scale-[1.2] opacity-70"></div>
              <div className="relative">
                <h3 className="text-2xl font-serif text-earth-900 mb-6">Want to learn more about our community?</h3>
                <a 
                  href="#join" 
                  className="btn-primary-earth px-8 py-3 rounded-full inline-flex items-center shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Join Our Community</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 