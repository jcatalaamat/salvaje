import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

// Only import ScrollTrigger on the client side
let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(module => {
    ScrollTrigger = module.default;
    gsap.registerPlugin(ScrollTrigger);
  });
}

// Self-Sufficiency and Emotional Literacy programs
const selfSufficiencyPrograms = [
  {
    id: 'permaculture',
    title: 'Permaculture Design',
    description: 'Learn to create sustainable and regenerative systems that mimic natural patterns while producing abundance. Includes hands-on design projects and field experience.',
    duration: '4 weeks',
    format: 'Immersive',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2a9 9 0 019 9c0 3.18-1.65 6.17-4.35 7.86L12 22l-4.65-3.14A9.06 9.06 0 013 11a9 9 0 019-9z" />
        <path d="M12 6v.2" />
        <path d="M7 11c3.33-4.8 7.67 0 11-4.8" />
        <path d="M10.6 13.4a2 2 0 112.8 2.8" />
      </svg>
    )
  },
  {
    id: 'natural-building',
    title: 'Natural Building',
    description: 'Master the arts of building with earth, bamboo, and other natural materials. Design and construct sustainable shelters that work with the land rather than against it.',
    duration: '3 weeks',
    format: 'Hands-on',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9v.01" />
        <path d="M9 12v.01" />
        <path d="M9 15v.01" />
        <path d="M9 18v.01" />
      </svg>
    )
  },
  {
    id: 'nutrition',
    title: 'Holistic Nutrition',
    description: 'Explore the healing power of whole foods, medicinal herbs, and mindful eating practices. Learn to grow, prepare, and preserve nutrient-dense foods for optimal health.',
    duration: '2 weeks',
    format: 'Interactive',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M11 3a8 8 0 018 8v10H3V11a8 8 0 018-8z" />
        <path d="M11 3v19" />
        <path d="M17 7a2 2 0 100 4 2 2 0 000-4z" />
        <path d="M5 7a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    )
  },
  {
    id: 'emotional',
    title: 'Emotional Literacy',
    description: 'Develop tools for processing emotions and creating healthy relationship patterns. Learn communication skills that foster deep connection and authentic expression.',
    duration: '2 weeks',
    format: 'Experiential',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        <path d="M12 5.36V8" />
        <path d="M12 12v3" />
        <circle cx="12" cy="10" r="1" />
      </svg>
    )
  },
];

// Transformational Practices programs
const transformationalPrograms = [
  {
    id: 'medicine',
    title: 'Sacred Plant Medicine',
    description: 'Explore the ancestral traditions of plant medicine, learning to identify, grow, harvest, and prepare remedies from native medicinal plants under indigenous guidance.',
    duration: '2 weeks',
    format: 'Ceremonial',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M8 14l2 2 6-6" />
      </svg>
    )
  },
  {
    id: 'leadership',
    title: 'Regenerative Leadership',
    description: 'Develop the skills, mindset, and practices needed to lead organizations and communities toward truly regenerative futures. Combines inner work with systems thinking.',
    duration: '3 weeks',
    format: 'Hybrid',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="10" />
        <path d="M18 12a6 6 0 01-12 0" />
        <path d="M8 9l4 3 4-3" />
      </svg>
    )
  },
  {
    id: 'ritual',
    title: 'Ceremonial Rites of Passage',
    description: 'Experience transformative rituals and rites designed to mark significant life transitions and connect participants with ancestral wisdom and planetary consciousness.',
    duration: '1 week',
    format: 'Sacred',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="8" r="5" />
        <path d="M12 2v1" />
        <path d="M12 15v7" />
        <path d="M5 8h2" />
        <path d="M17 8h2" />
        <path d="M19 17l-3-1.5" />
        <path d="M5 17l3-1.5" />
      </svg>
    )
  },
  {
    id: 'storytelling',
    title: 'Ancestral Storytelling',
    description: 'Rediscover the power of oral tradition through indigenous storytelling practices. Learn to craft and share narratives that preserve wisdom and build community cohesion.',
    duration: '2 weeks',
    format: 'Immersive',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M8 21h12a2 2 0 002-2v-2H10v2a2 2 0 01-2 2zm14-10v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2h16z" />
        <path d="M4 15V5a2 2 0 012-2h12a2 2 0 012 2v10" />
        <path d="M6 15v-2a2 2 0 012-2h8a2 2 0 012 2v2" />
      </svg>
    )
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const selfSufficiencyRef = useRef<HTMLDivElement>(null);
  const transformationalRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // GSAP animations
  useEffect(() => {
    if (typeof ScrollTrigger === 'undefined') {
      return;
    }
    
    // Animate section title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    // Animate quote
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    // Staggered animation for program cards
    [selfSufficiencyRef, transformationalRef].forEach(ref => {
      if (!ref.current) return;
      
      const cards = ref.current.querySelectorAll('.program-card');
      gsap.fromTo(
        cards,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="programs"
      className="py-32 relative overflow-hidden bg-white"
    >
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-forest-100/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-earth-100/20 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] opacity-[0.07]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#5A5541" d="M47.5,-73.8C59.3,-67.8,65.4,-50.6,70.8,-34.5C76.2,-18.3,80.9,-3.2,78.3,10.5C75.8,24.1,66,36.3,55.6,48.9C45.2,61.6,34.2,74.6,20.3,79.4C6.4,84.2,-10.3,80.8,-24.9,74.2C-39.5,67.6,-51.9,57.9,-61.9,45.3C-71.8,32.7,-79.2,17.2,-79.7,1.3C-80.3,-14.6,-74,-30.5,-63.9,-42.4C-53.8,-54.3,-39.9,-62.1,-26.1,-67.4C-12.3,-72.6,1.5,-75.1,16.4,-74.7C31.3,-74.2,47.3,-70.8,47.5,-73.8Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      <div className="absolute left-[5%] top-[10%] w-24 h-24 border border-gold-500/30 rounded-full opacity-70 pointer-events-none"></div>
      <div className="absolute right-[15%] bottom-[20%] w-40 h-40 border-2 border-forest-400/10 rounded-full opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div ref={titleRef} className="mb-16 max-w-3xl mx-auto text-center">
          <span className="inline-block text-forest-600 uppercase tracking-[0.25em] text-sm font-medium mb-6">Sacred Learning</span>
          <h2 className="section-heading mb-8">Immersive Learning Paths</h2>
          <p className="text-xl text-earth-800 leading-relaxed font-light">
            Teaching individuals how to be self-sufficient, emotionally literate, and deeply connected to the sacred rhythms of life. Each experience integrates ancestral wisdom with modern understanding.
          </p>
        </div>
        
        {/* Quote block */}
        <div 
          ref={quoteRef}
          className="sacred-callout text-center mb-20"
        >
          <p className="font-serif text-xl md:text-2xl text-earth-800 italic">
            "What we teach and remember is the rhythmic balance of natural systems, the art of relating, and the wisdom that flows through indigenous lineages."
          </p>
        </div>
        
        {/* Self-Sufficiency and Emotional Literacy Section */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-serif text-earth-900 mb-10 text-center">
            Curriculum of Self-Sufficiency <span className="text-earth-600">&</span> Emotional Literacy
          </h3>
          
          <div ref={selfSufficiencyRef} className="grid md:grid-cols-2 gap-8">
            {selfSufficiencyPrograms.map((program) => (
              <div 
                key={program.id}
                className="program-card relative overflow-hidden"
              >
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-forest-100 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  {/* Card background pattern */}
                  <div className="absolute inset-0 bg-texture-paper opacity-30"></div>
                  
                  {/* Card content */}
                  <div className="p-8 md:p-10 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                      <div className="w-20 h-20 rounded-full bg-forest-50 flex items-center justify-center border border-forest-100 text-forest-700 shadow-sm flex-shrink-0 mx-auto md:mx-0">
                        <div className="w-10 h-10">
                          {program.icon}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-serif text-forest-900 mb-2 text-center md:text-left">{program.title}</h3>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-forest-50 text-forest-800 border border-forest-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {program.duration}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-earth-50 text-earth-800 border border-earth-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            {program.format}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-earth-700 leading-relaxed mb-8">
                      {program.description}
                    </p>
                    
                    <div className="flex justify-center md:justify-start">
                      <a 
                        href={`#${program.id}`} 
                        className="btn-outline-earth px-6 py-2 rounded-full inline-flex items-center hover:bg-forest-50 transition-all duration-300 group-hover:border-forest-400"
                      >
                        <span>Learn More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden text-forest-100">
                    <div className="absolute -top-12 -right-12 w-24 h-24 transform rotate-45 bg-forest-50 border-b border-forest-100"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative separator */}
        <div className="sacred-separator my-16">
          <span className="sacred-separator-symbol">✧</span>
        </div>
        
        {/* Transformational Practices Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-serif text-earth-900 mb-10 text-center">
            Transformational Practices
          </h3>
          
          <div ref={transformationalRef} className="grid md:grid-cols-2 gap-8">
            {transformationalPrograms.map((program) => (
              <div 
                key={program.id}
                className="program-card relative overflow-hidden"
              >
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gold-200 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  {/* Card background pattern */}
                  <div className="absolute inset-0 bg-texture-paper opacity-30"></div>
                  
                  {/* Card content */}
                  <div className="p-8 md:p-10 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                      <div className="w-20 h-20 rounded-full bg-gold-50 flex items-center justify-center border border-gold-200 text-gold-700 shadow-sm flex-shrink-0 mx-auto md:mx-0">
                        <div className="w-10 h-10">
                          {program.icon}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-serif text-earth-900 mb-2 text-center md:text-left">{program.title}</h3>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold-50 text-earth-800 border border-gold-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {program.duration}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-earth-50 text-earth-800 border border-earth-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            {program.format}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-earth-700 leading-relaxed mb-8">
                      {program.description}
                    </p>
                    
                    <div className="flex justify-center md:justify-start">
                      <a 
                        href={`#${program.id}`} 
                        className="btn-outline-earth px-6 py-2 rounded-full inline-flex items-center hover:bg-gold-50 transition-all duration-300 group-hover:border-gold-400"
                      >
                        <span>Learn More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden text-gold-200">
                    <div className="absolute -top-12 -right-12 w-24 h-24 transform rotate-45 bg-gold-50 border-b border-gold-200"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-forest-200/30 via-gold-200/40 to-earth-200/30 blur-xl rounded-full transform -translate-y-1/4 scale-[1.2] opacity-70"></div>
            <div className="relative">
              <h3 className="text-2xl font-serif text-earth-900 mb-6">Ready to walk this path of learning?</h3>
              <a 
                href="#calendar" 
                className="btn-primary-gold px-8 py-3 rounded-full inline-flex items-center shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>View Program Calendar</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 