import React, { useRef, useEffect } from 'react';
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

const principles = [
  {
    title: "Regenerative Living",
    description: "We operate as a living laboratory for sustainable living practices that regenerate rather than deplete natural and social ecosystems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 2v20" />
        <path d="M12 22s-8-4-8-10" />
        <path d="M12 22s8-4 8-10" />
        <path d="M2.5 5.5L12 2" />
        <path d="M21.5 5.5L12 2" />
      </svg>
    )
  },
  {
    title: "Ancestral Wisdom",
    description: "We honor and integrate indigenous knowledge systems and practices, acknowledging that true sustainability requires reconnecting with ancestral wisdom.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    )
  },
  {
    title: "Conscious Community",
    description: "We cultivate deep, authentic relationships based on shared values, mutual support, and collective growth toward higher consciousness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    title: "Holistic Education",
    description: "We blend practical skills with inner development, recognizing that true transformation requires engaging mind, body, heart, and spirit.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    )
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.9,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // GSAP animations
  useEffect(() => {
    if (typeof ScrollTrigger === 'undefined') return;
    
    // Animate section title and intro text
    if (textRef.current) {
      const elements = textRef.current.querySelectorAll('.animate-gsap');
      
      gsap.fromTo(
        elements,
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    // Parallax effect for background image
    if (parallaxRef.current) {
      gsap.fromTo(
        parallaxRef.current,
        {
          backgroundPosition: '50% 0%',
        },
        {
          backgroundPosition: '50% 30%',
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Parallax background with gradient overlay */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15"
        style={{ backgroundImage: 'url("/images/vision-bg.jpg")' }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
      
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-earth-50/30 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -left-32 top-1/4 w-[500px] h-[500px] rounded-full bg-forest-50/20 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -bottom-80 right-1/4 w-[700px] h-[700px] rounded-full bg-gold-50/10 mix-blend-multiply blur-3xl"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-earth-200/30 to-transparent"></div>
      <div className="absolute right-[15%] top-[20%] w-32 h-32 border border-earth-400/10 rounded-full opacity-70 pointer-events-none"></div>
      <div className="absolute left-[10%] bottom-[25%] w-48 h-48 border border-forest-400/10 rounded-full opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div ref={textRef} className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-earth-600 uppercase tracking-[0.25em] text-sm font-medium mb-6 animate-gsap">Our Vision</span>
          <h2 className="section-heading mb-12 animate-gsap">Cultivating a Regenerative Future</h2>
          <div className="relative mb-16 animate-gsap">
            <blockquote className="text-2xl md:text-3xl text-earth-800 font-serif italic leading-relaxed">
              <span className="text-gold-500 text-5xl absolute -left-6 top-0 opacity-50">"</span>
              We envision a world where humans live in harmony with the rhythms of nature, where communities thrive through authentic connection, and where ancient wisdom meets innovation to create truly regenerative systems.
              <span className="text-gold-500 text-5xl absolute -right-2 bottom-0 opacity-50">"</span>
            </blockquote>
          </div>
          <p className="text-xl text-earth-700 leading-relaxed mb-8 animate-gsap">
            Salvaje is more than a community—it's a living embodiment of what's possible when we align our lives with natural principles. We're pioneering a way of living that honors the wisdom of indigenous cultures while embracing appropriate technology and innovation.
          </p>
          <p className="text-xl text-earth-700 leading-relaxed animate-gsap">
            Through immersive education, regenerative agriculture, and conscious community design, we're creating a template for a new way of living that can be adapted and scaled to diverse contexts worldwide.
          </p>
        </div>

        <div className="relative mt-32">
          <div className="absolute left-0 right-0 h-full w-full">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-earth-200/50 to-transparent transform -translate-x-1/2"></div>
          </div>
          
          <h3 className="text-center text-2xl md:text-3xl text-earth-800 font-serif mb-16">Our Guiding Principles</h3>
          
          <div ref={principlesRef} className="relative grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-forest-100 p-8 hover:shadow-2xl transition-all duration-500 h-full group">
                  {/* Card background pattern */}
                  <div className="absolute inset-0 bg-texture-paper opacity-20"></div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-earth-50 flex items-center justify-center border border-earth-100 text-earth-700 shadow-sm mb-6 group-hover:bg-earth-100 transition-colors duration-300">
                    <div className="w-8 h-8">
                      {principle.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-serif text-forest-900 mb-4">{principle.title}</h4>
                  <p className="text-earth-700 leading-relaxed">{principle.description}</p>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -top-10 -right-10 w-20 h-20 transform rotate-45 bg-earth-100"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-earth-200/40 via-gold-200/50 to-forest-200/40 blur-xl rounded-full transform -translate-y-1/4 scale-[1.3] opacity-70"></div>
              <div className="relative">
                <h3 className="text-2xl font-serif text-earth-900 mb-6">Want to learn more about our approach?</h3>
                <a 
                  href="#community" 
                  className="btn-primary-forest px-8 py-3 rounded-full inline-flex items-center shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span>Explore Our Community</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 