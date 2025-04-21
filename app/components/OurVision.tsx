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

// Core values data
const coreValues = [
  {
    id: 'regeneration',
    title: 'Regeneration',
    description: 'Beyond sustainability, we design systems that restore and regenerate the ecological and social fabric of our community.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 12a5 5 0 0 1 8 0" />
        <path d="M12 6v3" />
        <path d="M9 9c0 .552.895 1 2 1s2-.448 2-1" />
        <path d="M12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    )
  },
  {
    id: 'holistic',
    title: 'Holistic Wellbeing',
    description: 'We nurture the interconnected health of the individual, community, and ecosystem to cultivate wholeness and harmony.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" />
        <path d="M12 8v8" />
        <path d="M8.5 14 12 17.5 15.5 14" />
        <path d="M8 8.5l4-3.5 4 3.5" />
      </svg>
    )
  },
  {
    id: 'indigenous',
    title: 'Indigenous Wisdom',
    description: 'We honor and integrate ancestral knowledge systems while creating space for cultural exchange and healing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6a2 2 0 0 0-2 2c0 2 4 2 4 4a2 2 0 0 1-2 2" />
        <path d="M12 16h.01" />
      </svg>
    )
  },
  {
    id: 'community',
    title: 'Conscious Community',
    description: 'We create intentional structures that foster deep connection, collective wisdom, and authentic relating.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  }
];

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay * 0.1,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

const valueCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.3 + (delay * 0.1),
      ease: "backOut"
    }
  })
};

export default function OurVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useEffect(() => {
    if (typeof ScrollTrigger === 'undefined') return;
    
    // Title animations with letter split
    if (titleRef.current) {
      const title = titleRef.current;
      
      // Split text by words
      const words = title.innerText.split(' ');
      title.innerHTML = '';
      
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = "inline-block";
        wordSpan.style.overflow = "hidden";
        
        const innerSpan = document.createElement('span');
        innerSpan.className = "anim-word inline-block";
        innerSpan.innerText = word + (index < words.length - 1 ? ' ' : '');
        
        wordSpan.appendChild(innerSpan);
        title.appendChild(wordSpan);
      });
      
      const wordElements = title.querySelectorAll('.anim-word');
      
      gsap.fromTo(
        wordElements,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }
    
    // Image parallax effect
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 0 },
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5
          }
        }
      );
    }
    
    // Quote animation
    if (quoteRef.current) {
      const quoteElements = quoteRef.current.querySelectorAll('.anim-quote');
      
      gsap.fromTo(
        quoteElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    // Values cards staggered animations
    if (valuesRef.current) {
      const cards = valuesRef.current.querySelectorAll('.value-card');
      
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="py-32 md:py-40 relative overflow-hidden"
    >
      {/* Background grain texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: 'url("/images/noise-texture.png")', 
          backgroundSize: 'auto',
          zIndex: 0
        }}
      />
      
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-[20%] top-[10%] w-[800px] h-[800px] rounded-full bg-earth-50/30 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -right-[30%] top-[40%] w-[600px] h-[600px] rounded-full bg-forest-50/30 mix-blend-multiply blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column: Vision content */}
          <div>
            <motion.span
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariants}
              className="inline-block text-earth-600 uppercase tracking-[0.25em] text-sm font-medium mb-4"
            >
              Our Vision
            </motion.span>
            
            <h2 
              ref={titleRef}
              className="section-heading font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-forest-900 leading-tight mb-12"
            >
              A Regenerative Blueprint for Conscious Living
            </h2>
            
            <motion.p
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariants}
              className="text-xl text-forest-700 leading-relaxed mb-8"
            >
              Salvaje is more than a community—it's a living laboratory for regenerative human settlement. Our vision emerges from the understanding that humans can be a positive force for ecological and social regeneration.
            </motion.p>
            
            <motion.p
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariants}
              className="text-forest-700 leading-relaxed mb-12"
            >
              By integrating modern ecological design with indigenous wisdom and innovative social systems, we're creating a blueprint for how humans can thrive in harmony with the natural world. Our community serves as both sanctuary and catalyst—a place to heal from the patterns of extraction and separation while developing the skills and awareness needed to create a more beautiful world.
            </motion.p>
            
            {/* Quote */}
            <div 
              ref={quoteRef}
              className="pl-6 border-l-2 border-earth-300 mb-12"
            >
              <p className="text-xl font-serif italic text-earth-700 anim-quote">
                "We are not separate from nature, we are nature becoming aware of itself."
              </p>
              <p className="mt-2 text-earth-600 anim-quote">
                — Indigenous wisdom principle
              </p>
            </div>
            
            <motion.div
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariants}
            >
              <a 
                href="#community"
                className="group inline-flex items-center text-earth-700 hover:text-earth-900 transition-colors duration-300"
              >
                <span className="mr-3 relative">
                  <span className="absolute inset-0 bg-earth-100 rounded-full -rotate-45 group-hover:rotate-0 transition-transform duration-300"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 relative z-10">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="font-medium">Learn about our community structure</span>
              </a>
            </motion.div>
          </div>
          
          {/* Right column: Image */}
          <div className="relative">
            <div 
              ref={imageRef}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/vision-image.jpg" 
                alt="Community members in a circle on the land" 
                className="w-full h-auto object-cover"
              />
              
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-earth-100 rounded-full z-0"></div>
            <div className="absolute -right-4 -top-4 w-32 h-32 border-2 border-forest-200 rounded-full z-0"></div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-earth-600 uppercase tracking-[0.25em] text-sm font-medium mb-6"
            >
              Guiding Principles
            </motion.span>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif text-forest-900 mb-8"
            >
              Our Core Values
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-forest-700 leading-relaxed"
            >
              These values form the foundation of our community culture and decision-making processes. They guide how we relate to the land, each other, and the broader world.
            </motion.p>
          </div>
          
          {/* Values grid */}
          <div 
            ref={valuesRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={value.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={valueCardVariants}
                className="value-card group bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-forest-50 overflow-hidden"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 text-earth-500 group-hover:text-earth-600 transition-colors duration-300 mb-6">
                    {value.icon}
                  </div>
                  
                  <h4 className="text-xl font-medium text-forest-900 mb-3">{value.title}</h4>
                  <p className="text-forest-700">{value.description}</p>
                </div>
                
                {/* Bottom accent */}
                <div className="h-1.5 w-full bg-earth-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="bg-gradient-to-r from-forest-50/70 via-earth-50/80 to-forest-50/70 backdrop-blur-sm rounded-3xl p-12 md:p-16 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-serif text-forest-900 mb-6">Ready to Join Our Vision?</h3>
            <p className="text-xl text-forest-700 mb-10 max-w-2xl mx-auto">
              Whether you're interested in becoming a community member, attending an educational program, or simply learning more about our model—we invite you to take the next step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="#join" 
                className="px-8 py-4 bg-earth-600 hover:bg-earth-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Membership
              </a>
              <a 
                href="#education" 
                className="px-8 py-4 bg-white hover:bg-forest-50 text-forest-700 rounded-lg shadow-md hover:shadow-lg border border-forest-100 transition-all duration-300"
              >
                View Educational Programs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 