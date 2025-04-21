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

const programs = [
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
    id: 'arts',
    title: 'Ecological Arts & Crafts',
    description: 'Rediscover ancient craft techniques using natural materials. Learn pottery, weaving, natural building, and other practices that connect creativity with ecology.',
    duration: '2 weeks',
    format: 'Hands-on',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M2 12h5" />
        <path d="M17 12h5" />
        <path d="M12 2v5" />
        <path d="M12 17v5" />
        <path d="M4.93 4.93l3.54 3.54" />
        <path d="M15.54 15.54l3.54 3.54" />
        <path d="M4.93 19.07l3.54-3.54" />
        <path d="M15.54 8.46l3.54-3.54" />
      </svg>
    )
  }
];

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // GSAP animations
  useEffect(() => {
    if (typeof ScrollTrigger === 'undefined' || !titleRef.current || !cardsRef.current) {
      return;
    }
    
    // Animate section title
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
    
    // Staggered animation for program cards
    const cards = cardsRef.current.querySelectorAll('.program-card');
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
          trigger: cardsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-32 relative overflow-hidden bg-gradient-to-br from-forest-50/30 via-white to-forest-50/20"
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
        <div ref={titleRef} className="mb-20 max-w-3xl mx-auto text-center">
          <span className="inline-block text-forest-600 uppercase tracking-[0.25em] text-sm font-medium mb-6">Sacred Learning</span>
          <h2 className="section-heading mb-8">Educational Programs</h2>
          <p className="text-xl text-earth-800 leading-relaxed font-light">
            Our educational offerings are designed to reconnect participants with ancient wisdom while integrating modern understanding. Each experience is carefully crafted to nurture both practical skills and spiritual growth.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className={`program-card relative overflow-hidden ${
                index % 2 === 0 ? 'md:mt-12' : 'md:mb-12'
              }`}
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
                      className="btn-outline-forest px-6 py-2 rounded-full inline-flex items-center hover:bg-forest-50 transition-all duration-300 group-hover:border-forest-400"
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
              <h3 className="text-2xl font-serif text-earth-900 mb-6">Interested in our educational experiences?</h3>
              <a 
                href="#calendar" 
                className="btn-primary-forest px-8 py-3 rounded-full inline-flex items-center shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>View Program Calendar</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonial */}
        <div className="mt-32 relative">
          <div className="absolute left-0 right-0 h-full w-full max-w-4xl mx-auto">
            <div className="absolute top-0 left-6 transform -translate-y-1/2 text-gold-300 opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gold-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full bg-gold-50 flex-shrink-0 overflow-hidden border-2 border-gold-100 shadow-md">
                <div className="w-full h-full bg-texture-paper bg-cover bg-center"></div>
              </div>
              
              <div>
                <p className="text-earth-800 text-lg italic leading-relaxed mb-4">
                  "The permaculture design course at Salvaje was truly transformative. The combination of practical skills, indigenous wisdom, and community connection has forever changed how I relate to the land. I left with not only new knowledge but a profound sense of purpose."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-earth-900">Maria Rodriguez</h4>
                    <p className="text-sm text-earth-600">Permaculture Design Graduate</p>
                  </div>
                  <div className="flex text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 