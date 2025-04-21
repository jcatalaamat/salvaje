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

// Land features data
const landFeatures = [
  {
    title: "Pristine Forest",
    description: "30 hectares of protected primary and secondary forest, home to diverse flora and fauna.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M17 14h.01" />
        <path d="M7 7l2 3h4l-2-9-4 6Z" />
        <path d="m11 11 2 1 4-4L9 3l2 8Z" />
        <path d="M17 14h.01" />
        <path d="M18 10c.5-1 2.5-3 3.5-3a2.5 2.5 0 0 1 0 5" />
        <path d="M16.5 19A2.5 2.5 0 0 1 19 16.5c1.5 0 2.5 2 2.5 3.5a2.5 2.5 0 0 1-5 0Z" />
        <path d="M13 19c-1 0-2 0-2.5-1.5a3 3 0 0 0-1-1.5 2.5 2.5 0 0 1 0-4 2.5 2.5 0 0 0 0-4" />
        <path d="M5.7 14.8A2.5 2.5 0 0 0 6 19a2.5 2.5 0 0 1 0 5H4.5c-1.5 0-3-2-2.5-4 .5-2 2-3 4-3Z" />
      </svg>
    )
  },
  {
    title: "Flowing Waters",
    description: "Three pristine streams wind through the property, nurturing life and providing fresh water year-round.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M3 7h3c2 0 4 1 4 3s-2 3-4 3H3v4"/>
        <path d="M14 7h1.5a2.5 2.5 0 1 1 0 5H14"/>
        <path d="M14 12h2.5a2.5 2.5 0 1 1 0 5H14v-9.5"/>
        <path d="M5 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0z"/>
        <path d="M15 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0z"/>
        <path d="M19 12a2 2 0 1 0 0-4"/>
      </svg>
    )
  },
  {
    title: "Fertile Valleys",
    description: "Expansive valleys with rich, volcanic soil perfect for regenerative agriculture and food forests.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M2 22c1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2 1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2"/>
        <path d="M2 16c1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2 1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2"/>
        <path d="M2 10c1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2 1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 2"/>
      </svg>
    )
  },
  {
    title: "Mountain Views",
    description: "Breathtaking panoramic views of surrounding mountains and the Pacific Ocean in the distance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
      </svg>
    )
  }
];

// Image gallery items
const galleryImages = [
  {
    src: "/images/land-1.jpg",
    alt: "Aerial view of the property showing forest and valleys",
    caption: "Aerial view showcasing the property's diverse ecosystems"
  },
  {
    src: "/images/land-2.jpg",
    alt: "Clear stream running through the property",
    caption: "One of three pristine streams flowing through the land"
  },
  {
    src: "/images/land-3.jpg",
    alt: "Mountain vista from property viewpoint",
    caption: "Panoramic mountain vista from one of our viewpoints"
  },
  {
    src: "/images/land-4.jpg",
    alt: "Fertile valleys with early permaculture design",
    caption: "Fertile valley being developed with permaculture principles"
  }
];

// Animation variants
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

export default function LandSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // GSAP animations
  useEffect(() => {
    if (typeof ScrollTrigger === 'undefined') return;
    
    // Main title and intro text animations
    if (textRef.current) {
      const elements = textRef.current.querySelectorAll('.animate-gsap');
      
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
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
    
    // Gallery images staggered appearance and parallax
    if (galleryRef.current) {
      const images = galleryRef.current.querySelectorAll('.gallery-image');
      
      gsap.fromTo(
        images,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
      
      // Apply a subtle parallax effect to each image
      images.forEach((image) => {
        gsap.fromTo(
          image,
          { y: -10 },
          {
            y: 10,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });
    }
    
    // Parallax effect on background image
    if (parallaxRef.current) {
      gsap.fromTo(
        parallaxRef.current,
        { backgroundPosition: '50% 0%' },
        {
          backgroundPosition: '50% 20%',
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
      id="land"
      className="py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Parallax background with gradient overlay */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: 'url("/images/land-texture.jpg")' }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
      
      {/* Organic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-64 -bottom-32 w-[800px] h-[800px] rounded-full bg-earth-50/20 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -right-32 top-1/3 w-[600px] h-[600px] rounded-full bg-forest-50/30 mix-blend-multiply blur-3xl"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 right-[15%] w-24 h-24 border border-earth-300/20 rounded-full opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-40 left-[5%] w-16 h-16 border border-earth-400/20 rounded-full opacity-70 pointer-events-none"></div>
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-4/5 h-20 bg-gradient-radial from-earth-50/30 to-transparent opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header section */}
        <div ref={textRef} className="max-w-3xl mx-auto text-center mb-24">
          <span className="inline-block text-earth-600 uppercase tracking-[0.25em] text-sm font-medium mb-6 animate-gsap">The Land</span>
          <h2 className="section-heading mb-12 animate-gsap">Where Nature Inspires Our Vision</h2>
          <p className="text-xl text-earth-700 leading-relaxed mb-8 animate-gsap">
            Nestled in the heart of the Costa Rican mountains, our 50-hectare sanctuary combines pristine forests, flowing streams, and fertile valleys—creating the perfect canvas for regenerative design and conscious community.
          </p>
          <div className="animate-gsap">
            <div className="relative inline-flex items-center text-earth-600 font-medium group cursor-pointer">
              <span className="mr-2">Discover our location</span>
              <span className="relative z-10 inline-block w-6 h-6 rounded-full bg-earth-100 flex items-center justify-center group-hover:bg-earth-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 w-full h-full transform translate-y-1.5 translate-x-1.5 bg-earth-100/50 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
        
        {/* Features section */}
        <div ref={featuresRef} className="mb-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {landFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-earth-100 hover:shadow-2xl transition-all duration-500 h-full group relative overflow-hidden">
                  {/* Decorative circle */}
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-forest-50 opacity-20 transform group-hover:scale-125 transition-transform duration-500"></div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-earth-50 flex items-center justify-center border border-earth-100 text-earth-700 shadow-sm mb-6 group-hover:bg-earth-100 transition-colors duration-300 relative z-10">
                    <div className="w-8 h-8">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif text-forest-900 mb-3 relative z-10">{feature.title}</h3>
                  <p className="text-earth-700 leading-relaxed relative z-10">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Image Gallery */}
        <div ref={galleryRef} className="relative mb-20">
          <h3 className="text-2xl font-serif text-center text-earth-800 mb-16">Experience The Land</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-image relative group overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-w-4 aspect-h-3 bg-earth-100 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative inline-block max-w-xl mx-auto p-10 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-earth-50 via-forest-50 to-earth-50 rounded-2xl opacity-70"></div>
              <div className="absolute inset-0 backdrop-blur-sm rounded-2xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-serif text-earth-900 mb-6">Want to experience the land in person?</h3>
                <p className="text-earth-700 mb-8">Join one of our immersive retreats or schedule a guided tour of the property.</p>
                <a 
                  href="#events" 
                  className="btn-primary-earth px-8 py-3 rounded-full inline-flex items-center shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>View Upcoming Events</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
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