import React, { useRef, useEffect, useState } from 'react';
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

// Land details in 3 columns
const landDetails = [
  {
    title: "Topography & Access",
    details: [
      "50 hectares of diverse landscape",
      "Flat areas suitable for building",
      "Hills and valleys for varying microclimates",
      "Year-round water access from streams",
      "Maintained road access to the property"
    ]
  },
  {
    title: "Cultural Importance",
    details: [
      "Located near Mazunte village",
      "Rich in indigenous heritage",
      "Vibrant local community energy",
      "Close to sacred ceremonial sites",
      "Supportive neighboring villages"
    ]
  },
  {
    title: "Development Potential",
    details: [
      "Space for 20+ sustainable homes",
      "Last undeveloped piece in the area",
      "Nutrient-rich volcanic soil",
      "Private road infrastructure",
      "Natural boundaries for privacy"
    ]
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
  const [currentImage, setCurrentImage] = useState(0);
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
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
        <div ref={textRef} className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-earth-600 uppercase tracking-[0.25em] text-sm font-medium mb-6 animate-gsap">The Land</span>
          <h2 className="section-heading mb-12 animate-gsap">Where Nature Inspires Our Vision</h2>
          <p className="text-xl text-earth-700 leading-relaxed mb-8 animate-gsap">
            Nestled in the heart of the Costa Rican mountains, our 50-hectare sanctuary combines pristine forests, flowing streams, and fertile valleys—creating the perfect canvas for regenerative design and conscious community.
          </p>
        </div>
        
        {/* Enhanced Land Visualization */}
        <div className="mb-20 relative rounded-xl overflow-hidden shadow-2xl">
          {/* Map overlay with drone images carousel */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            {/* Map base layer */}
            <div className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
              style={{ backgroundImage: 'url("/images/map-overlay.jpg")' }}>
            </div>
            
            {/* Drone image carousel */}
            <div className="absolute inset-0 z-10">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-lg font-serif">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel navigation */}
            <div className="absolute bottom-8 right-8 z-20 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage 
                      ? "bg-white scale-100" 
                      : "bg-white/50 scale-75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Quote overlay */}
            <div className="absolute top-8 left-8 right-8 z-20 md:max-w-md bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <p className="text-white text-lg md:text-xl italic font-serif">
                "The land is nestled in front of a natural reserve… offering privacy and deep peace — being both protected and connected."
              </p>
            </div>
          </div>
        </div>
        
        {/* 3 Columns Layout for Land Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {landDetails.map((column, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-earth-50/80 p-8 rounded-lg border-t-4 border-earth-400/30 shadow-md"
            >
              <h3 className="text-xl font-serif text-earth-800 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-earth-500 mr-2 mt-1">•</span>
                    <span className="text-earth-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="p-6 bg-gradient-to-br from-earth-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-earth-100"
              >
                <div className="w-16 h-16 mb-4 text-earth-600 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-earth-700">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-earth-900 mb-2">{feature.title}</h3>
                <p className="text-earth-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 