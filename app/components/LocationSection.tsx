import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';

// Only import ScrollTrigger on the client side
let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(module => {
    ScrollTrigger = module.default;
    gsap.registerPlugin(ScrollTrigger);
  });
}

const locationDetails = {
  name: "Península de Osa, Costa Rica",
  coordinates: "8°27'N 83°29'W",
  elevation: "0-780m above sea level",
  climate: "Tropical rainforest",
  biodiversity: "One of Earth's most biodiverse regions",
  property: "23 acres of forest and ocean access",
  highlights: [
    "Primary rainforest preservation",
    "Proximity to Corcovado National Park",
    "Ocean and beach access",
    "Year-round freshwater springs",
    "Abundant wildlife and medicinal plants",
    "Supportive local community"
  ],
  images: [
    "/images/costa-rica-1.jpg",
    "/images/costa-rica-2.jpg",
    "/images/costa-rica-3.jpg"
  ]
};

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  
  // GSAP animations
  useEffect(() => {
    // Make sure ScrollTrigger is loaded and elements exist
    if (typeof ScrollTrigger === 'undefined' || !mapRef.current || !imagesRef.current) {
      return;
    }
    
    // Animate the map
    gsap.fromTo(
      mapRef.current, 
      { scale: 0.9, opacity: 0.5 }, 
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1.2,
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 1
        } 
      }
    );
    
    // Animate the image gallery with staggered effect
    const images = imagesRef.current.querySelectorAll('.image-card');
    gsap.fromTo(
      images, 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        } 
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-gold-50/30 to-white">
      {/* Background organic shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-0 w-full h-full opacity-[0.04]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#A77F63" d="M47.7,-57.2C59.5,-45.7,65.8,-28.4,67.2,-11.2C68.6,6,65.2,23.1,56.4,36.9C47.6,50.8,33.5,61.3,15.7,70C-2.1,78.7,-23.6,85.5,-39.5,78.6C-55.3,71.7,-65.5,51.1,-71.4,30.5C-77.3,9.9,-78.9,-10.7,-71.2,-27.4C-63.5,-44.1,-46.6,-56.8,-30,-65.4C-13.3,-74,-6.6,-78.4,5.9,-85.4C18.5,-92.4,36.9,-102,47.7,-57.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 w-full h-full opacity-[0.05]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#5A5541" d="M30.5,-50.6C39.9,-40.8,48.2,-32.3,54.1,-21.6C60,-10.9,63.5,2,62.6,15.2C61.7,28.5,56.4,42.1,46.4,51.6C36.3,61.2,21.6,66.7,5.9,69.1C-9.8,71.6,-26.5,71.1,-37.1,63.3C-47.7,55.6,-52.2,40.7,-57.2,26.6C-62.3,12.6,-68,-.6,-67.1,-13.6C-66.2,-26.7,-58.7,-39.6,-47.8,-49.7C-36.9,-59.7,-22.6,-66.8,-9.2,-65.9C4.2,-65,16.7,-56.1,30.5,-50.6Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-earth-50/50 to-transparent pointer-events-none"></div>
      <div className="absolute right-[10%] top-[15%] w-40 h-40 border border-gold-500/20 rounded-full opacity-70 pointer-events-none"></div>
      <div className="absolute left-[5%] bottom-[25%] w-72 h-72 border-2 border-earth-400/10 rounded-full opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-24 text-center">
          <span className="inline-block text-gold-600 uppercase tracking-[0.25em] text-sm font-medium mb-6">Sacred Land</span>
          <h2 className="section-heading">Our Location</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed font-light">
            Nestled in one of the most biodiverse regions on Earth, our community finds its home in the 
            vibrant Península de Osa, Costa Rica — where the rainforest meets the Pacific Ocean.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Map and location details */}
          <div>
            <div ref={mapRef} className="relative mb-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl mb-4 border-2 border-gold-100">
                {/* Replace with actual map or image */}
                <div className="absolute inset-0 bg-texture-paper bg-cover bg-center"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-8">
                    {/* Simplified Costa Rica map */}
                    <path d="M400,150 C450,170 500,200 550,220 C600,240 650,250 680,300 C710,350 720,400 700,450 C680,500 650,530 600,550 C550,570 500,580 450,560 C400,540 350,520 300,500 C250,480 200,460 180,410 C160,360 170,310 190,260 C210,210 240,180 290,160 C340,140 380,140 400,150Z" fill="#f1efe4" stroke="#A77F63" strokeWidth="2"/>
                    {/* Península de Osa */}
                    <path d="M330,400 C340,410 350,420 340,430 C330,440 320,450 310,440 C300,430 290,420 300,410 C310,400 320,390 330,400Z" fill="#A77F63" stroke="#5A5541" strokeWidth="1"/>
                    {/* Location marker */}
                    <circle cx="320" cy="420" r="8" fill="#D4B48E" stroke="#5A5541" strokeWidth="2"/>
                    <circle cx="320" cy="420" r="16" fill="none" stroke="#D4B48E" strokeWidth="1" opacity="0.6">
                      <animate attributeName="r" values="16;24;16" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
                    </circle>
                    {/* Ocean */}
                    <text x="500" y="450" fill="#5A5541" fontFamily="serif" fontSize="24" fontStyle="italic">Pacific Ocean</text>
                    {/* Nicaragua */}
                    <text x="400" y="100" fill="#5A5541" fontFamily="serif" fontSize="20">Nicaragua</text>
                    {/* Panama */}
                    <text x="550" y="500" fill="#5A5541" fontFamily="serif" fontSize="20">Panama</text>
                    {/* Salvaje */}
                    <text x="280" y="440" fill="#5A5541" fontFamily="serif" fontSize="16" fontWeight="bold" textAnchor="end">Salvaje</text>
                    {/* Compass */}
                    <g transform="translate(650, 150) scale(0.8)">
                      <circle cx="0" cy="0" r="30" fill="none" stroke="#5A5541" strokeWidth="1"/>
                      <path d="M0,-35 L0,-25 M0,25 L0,35 M-35,0 L-25,0 M25,0 L35,0" stroke="#5A5541" strokeWidth="1"/>
                      <path d="M0,-20 L5,-5 L0,0 L-5,-5 Z" fill="#D4B48E"/>
                      <path d="M0,20 L-5,5 L0,0 L5,5 Z" fill="#5A5541"/>
                      <text x="0" y="-38" fill="#5A5541" fontSize="12" textAnchor="middle" fontFamily="serif">N</text>
                      <text x="38" y="4" fill="#5A5541" fontSize="12" textAnchor="middle" fontFamily="serif">E</text>
                      <text x="0" y="46" fill="#5A5541" fontSize="12" textAnchor="middle" fontFamily="serif">S</text>
                      <text x="-38" y="4" fill="#5A5541" fontSize="12" textAnchor="middle" fontFamily="serif">W</text>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="bg-earth-50 border border-earth-100 rounded-lg p-6 shadow-lg -mt-32 ml-12 relative max-w-xs z-10">
                <h3 className="text-xl text-earth-900 font-serif mb-2">{locationDetails.name}</h3>
                <div className="flex items-center mb-4">
                  <div className="h-px bg-earth-200 flex-grow"></div>
                  <span className="px-3 text-earth-400 text-sm font-medium">{locationDetails.coordinates}</span>
                  <div className="h-px bg-earth-200 flex-grow"></div>
                </div>
                <ul className="space-y-2 text-earth-700">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 flex-shrink-0 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                      </svg>
                    </span>
                    <span>{locationDetails.climate}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 flex-shrink-0 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </span>
                    <span>{locationDetails.property}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 flex-shrink-0 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </span>
                    <span>{locationDetails.biodiversity}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Property description */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl text-earth-900 font-serif mb-4">Sacred Meeting Point</h3>
              <p className="text-earth-700 leading-relaxed mb-6">
                Our land sits at the sacred junction where the primary rainforest meets the Pacific Ocean, creating a unique 
                ecosystem teeming with life and ancient wisdom. This pristine corner of Costa Rica has been recognized by 
                National Geographic as "the most biologically intense place on Earth."
              </p>
              <p className="text-earth-700 leading-relaxed">
                The property spans 23 acres with direct access to pristine beaches, year-round freshwater springs, 
                and medicine-rich forests. Here, our community finds itself immersed in nature's rhythms, where the 
                boundaries between human habitation and wild ecosystems blur into harmony.
              </p>
            </motion.div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-gold-100 rounded-lg p-6 shadow-md">
              <h4 className="text-xl text-earth-900 font-serif mb-4">Sacred Land Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {locationDetails.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-gold-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-earth-700 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <a href="#" className="btn-primary-gold px-8 py-3 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105">
                <span>Visit Our Location</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Image gallery */}
        <div ref={imagesRef} className="mt-32">
          <h3 className="text-2xl text-earth-900 font-serif mb-10 text-center">Experience the Land</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {locationDetails.images.map((image, index) => (
              <div key={index} className="image-card group">
                <div className={`relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl transform transition-transform duration-700 ${
                  index === 0 ? 'md:translate-y-12' : index === 2 ? 'md:-translate-y-12' : ''
                } hover:scale-[1.02] group-hover:shadow-2xl`}>
                  <div className="absolute inset-0 bg-earth-200 animate-pulse"></div>
                  {/* Replace with actual images once available */}
                  <div className="absolute inset-0 bg-texture-paper bg-cover bg-center opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {index === 0 && (
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-3/4 h-3/4 text-earth-400">
                        <path fill="currentColor" d="M45.7,-77.8C58.9,-69.3,69.2,-55.2,76.6,-40.2C84,-25.2,88.6,-9.1,87.4,6.9C86.3,23,79.5,39.1,68.5,50.8C57.5,62.5,42.4,69.7,27.2,75.8C12,81.9,-3.4,86.9,-18,84.7C-32.6,82.6,-46.5,73.3,-58.8,61.6C-71.1,49.9,-81.7,35.9,-87.4,19.7C-93,3.5,-93.6,-14.9,-87.6,-31C-81.7,-47.1,-69.2,-61,-54.2,-68.5C-39.1,-76,-19.6,-77.2,-1.2,-75.3C17.1,-73.5,32.5,-86.3,45.7,-77.8Z" transform="translate(100 100)" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-3/4 h-3/4 text-earth-400">
                        <path fill="currentColor" d="M54.2,-75.7C69.6,-68.6,81.2,-52.3,86.9,-34.8C92.6,-17.3,92.4,1.5,86.7,18.3C81,35,69.7,49.7,55.5,60.7C41.3,71.7,24.1,78.9,4.9,82.7C-14.4,86.4,-35.8,86.6,-54,78.7C-72.2,70.7,-87.1,54.6,-90.8,36.7C-94.4,18.8,-86.9,-0.9,-80.2,-20.5C-73.5,-40.2,-67.7,-59.9,-54.8,-68.4C-41.9,-76.8,-22,-74.2,-2.1,-71.2C17.7,-68.2,38.7,-82.9,54.2,-75.7Z" transform="translate(100 100)" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-3/4 h-3/4 text-earth-400">
                        <path fill="currentColor" d="M34.8,-53.8C46.5,-45.9,58.4,-39.2,66.2,-28.6C74,-18,77.6,-3.5,75.2,10.1C72.8,23.7,64.2,36.3,53.6,47.2C43,58.1,30.2,67.2,15.8,71.4C1.3,75.7,-14.7,75.2,-28.2,69.3C-41.7,63.4,-52.6,52.3,-60.4,39.2C-68.2,26.2,-72.8,11.4,-73.2,-3.8C-73.6,-19,-69.9,-34.5,-60.8,-45.3C-51.7,-56.1,-37.3,-62.3,-24,-64.6C-10.8,-66.9,1.3,-65.4,11.8,-61.2C22.3,-57.1,23.1,-61.6,34.8,-53.8Z" transform="translate(100 100)" />
                      </svg>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                    <h4 className="font-serif text-lg mb-2">
                      {index === 0 ? 'Primary Rainforest' : index === 1 ? 'Pristine Beaches' : 'Natural Springs'}
                    </h4>
                    <p className="text-sm text-white/90 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {index === 0 
                        ? 'Home to countless medicinal plants and wildlife species found nowhere else on Earth.'
                        : index === 1 
                        ? 'Where the jungle meets the Pacific, creating a sacred boundary between worlds.'
                        : 'Year-round fresh water sources sustain our community and local ecosystems.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a href="#" className="btn-outline-earth px-8 py-3 rounded-full inline-flex items-center hover:bg-earth-50 transition-all duration-300 transform hover:scale-105">
              <span>View Full Gallery</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 