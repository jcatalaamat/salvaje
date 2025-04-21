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

// Timeline phases
const timelinePhases = [
  {
    id: "phase1",
    title: "Phase 1",
    description: "Land acquisition and initial infrastructure development. Formation of founding member council and early adopters.",
    date: "Current",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M2 22L12 2L22 22H2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: "phase2",
    title: "Phase 2",
    description: "First residential buildings, communal spaces, and permaculture systems established. Initial educational programs launched.",
    date: "Year 1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M21 7.35304L21 16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: "year2",
    title: "Year 2",
    description: "Integration of technological infrastructure, renewable energy systems, and community governance refined.",
    date: "Year 2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: "year3",
    title: "Year 3",
    description: "Full community established with integrated educational programs, visitor options, and expanded impact initiatives.",
    date: "Year 3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7.5 12H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 7.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  }
];

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const governanceRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const daoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // GSAP animations
  useEffect(() => {
    if (typeof ScrollTrigger === 'undefined') {
      return;
    }
    
    // Animate values cards
    if (valuesRef.current) {
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
    }
    
    // Animate governance structures
    if (governanceRef.current) {
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
    }
    
    // Animate timeline
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      const timelineLine = timelineRef.current.querySelector('.timeline-line');
      
      gsap.fromTo(
        timelineLine,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
      
      gsap.fromTo(
        timelineItems,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.25,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    // Animate DAO section
    if (daoRef.current) {
      const elements = daoRef.current.querySelectorAll('.dao-item');
      gsap.fromTo(
        elements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: daoRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
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
        <div className="mb-16 max-w-3xl mx-auto text-center">
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
            We're looking to offer shelter for those dedicated to supporting the collective and fighting for truth & dignity. Our governance systems draw from ancient wisdom and modern organizational design to create a structure that's both resilient and adaptive.
          </motion.p>
        </div>
        
        {/* Core Values */}
        <div className="mb-24">
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
        
        {/* Project Timeline */}
        <div className="mb-24">
          <motion.h3 
            className="text-2xl font-serif text-earth-900 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Development Timeline
          </motion.h3>
          
          <div ref={timelineRef} className="relative">
            {/* Timeline connector line */}
            <div className="timeline-line absolute top-10 left-0 right-0 h-1 bg-earth-200 transform origin-left"></div>
            
            {/* Timeline steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 pt-16">
              {timelinePhases.map((phase, index) => (
                <div key={phase.id} className="timeline-item relative">
                  {/* Phase circle */}
                  <div className="absolute -top-16 left-1/2 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-earth-400 flex items-center justify-center">
                    <div className="text-earth-700">
                      {phase.icon}
                    </div>
                  </div>
                  
                  {/* Phase content */}
                  <div className="bg-white rounded-xl shadow-md p-6 border border-earth-100 h-full hover:shadow-lg transition-all duration-300">
                    <div className="text-earth-500 text-sm font-medium mb-2">{phase.date}</div>
                    <h4 className="text-xl font-serif text-earth-900 mb-3">{phase.title}</h4>
                    <p className="text-earth-700 text-sm">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
          
          <div ref={governanceRef} className="grid md:grid-cols-3 gap-8 mb-24">
            {governanceStructures.map((structure, index) => (
              <div key={structure.title} className="governance-item">
                <div className={`rounded-xl shadow-md overflow-hidden ${structure.color} border ${structure.borderColor}`}>
                  <div className={`p-6 ${structure.textColor}`}>
                    <h4 className="text-xl font-serif mb-3">{structure.title}</h4>
                    <p className="text-earth-700 text-sm">{structure.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* DAO and Contribution Section */}
        <div ref={daoRef} className="mb-16">
          <motion.h3 
            className="text-2xl font-serif text-earth-900 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Structure Rooted in Trust & Transparency
          </motion.h3>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="dao-item sacred-callout text-center">
              <p className="font-serif text-xl text-earth-800 italic">
                "Using blockchain technology to provide full transparency around decision-making and resource flow — from investors to participants."
              </p>
            </div>
            
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="dao-item bg-white p-8 rounded-xl shadow-lg border border-earth-100">
                <h4 className="text-xl font-serif text-earth-900 mb-4">Decentralized Governance</h4>
                <p className="text-earth-700 mb-4">Our DAO (Decentralized Autonomous Organization) enables transparent voting, resource allocation, and decision-making for all community members.</p>
                <ul className="space-y-2 text-earth-700">
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    <span>Transparent voting mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    <span>Resource allocation tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    <span>Multi-signature treasury management</span>
                  </li>
                </ul>
              </div>
              
              <div className="dao-item bg-white p-8 rounded-xl shadow-lg border border-earth-100">
                <h4 className="text-xl font-serif text-earth-900 mb-4">Contribution Paths</h4>
                <p className="text-earth-700 mb-4">Multiple ways to participate in and contribute to our community, with varying levels of commitment and involvement.</p>
                <ul className="space-y-2 text-earth-700">
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    <span>Core founding members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    <span>Resident contributors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    <span>Program participants and visitors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    <span>Remote contributors and supporters</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="dao-item mt-16 text-center">
              <p className="text-earth-700 text-lg">
                Together, they will form the Council of Founding Members.
              </p>
            </div>
          </div>
        </div>
        
        {/* Community Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="#join" 
            className="inline-block px-8 py-3 bg-earth-600 text-white rounded-full hover:bg-earth-700 transition-colors shadow-md hover:shadow-lg"
          >
            Join Our Community
          </a>
        </motion.div>
      </div>
    </section>
  );
} 