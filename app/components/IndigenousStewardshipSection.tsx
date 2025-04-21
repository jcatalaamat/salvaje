import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Indigenous wisdom quotes
const indigenousWisdom = [
  {
    quote: "We are the land, and the land is us. What we do to the land, we do to ourselves.",
    attribution: "Indigenous wisdom"
  },
  {
    quote: "We do not inherit the earth from our ancestors; we borrow it from our children.",
    attribution: "Native American proverb"
  },
  {
    quote: "The land is sacred. These words are at the core of your being. The land is our mother, the rivers our blood, the air our breath and the forest our mind.",
    attribution: "Ancestral teaching"
  }
];

// Indigenous collaboration principles
const collaborationPrinciples = [
  {
    id: "respect",
    title: "Respect",
    description: "Honoring indigenous sovereignty, traditions and protocols in all interactions."
  },
  {
    id: "reciprocity",
    title: "Reciprocity",
    description: "Ensuring mutual benefit and exchange, not extraction of wisdom or resources."
  },
  {
    id: "integration",
    title: "Integration",
    description: "Weaving indigenous ways of knowing into the fabric of all community activities."
  },
  {
    id: "acknowledgment",
    title: "Acknowledgment",
    description: "Recognizing the traditional stewards of the land and their ongoing relationship with it."
  }
];

// Ceremony-based approaches
const ceremonialPractices = [
  {
    id: "land",
    title: "Land Ceremonies",
    description: "Rituals to honor and connect with the land before making changes to it."
  },
  {
    id: "seasons",
    title: "Seasonal Celebrations",
    description: "Marking the turning of seasons and natural cycles with community gatherings."
  },
  {
    id: "transitions",
    title: "Transition Rites",
    description: "Ceremonies that honor significant personal and community transitions."
  },
  {
    id: "gratitude",
    title: "Gratitude Practices",
    description: "Regular expressions of thanks to the land, waters, and all beings."
  }
];

export default function IndigenousStewardshipSection() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const principlesRef = useRef(null);
  const practicesRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin (only run on client)
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate the wisdom quote
    const quoteElements = quoteRef.current.querySelectorAll('.wisdom-quote');
    
    gsap.fromTo(quoteElements, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate the principles
    const principleElements = principlesRef.current.querySelectorAll('.principle-card');
    
    gsap.fromTo(principleElements, 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: principlesRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate the ceremonial practices
    const practiceElements = practicesRef.current.querySelectorAll('.practice-card');
    
    gsap.fromTo(practiceElements, 
      { opacity: 0, x: 30 },
      { 
        opacity: 1, 
        x: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: practicesRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate the image
    gsap.fromTo(imageRef.current, 
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="indigenous-integration" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-earth-pattern opacity-20"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="var(--color-amber-gold)" d="M42.8,-73.2C56.9,-66.7,70.5,-58.2,79.4,-45.5C88.3,-32.7,92.4,-16.3,90.2,-1.3C88.1,13.8,79.7,27.6,70.6,40.4C61.5,53.2,51.8,65,39.5,74.8C27.2,84.7,13.6,92.6,-0.7,93.8C-15,95,-30,89.5,-43.7,81.1C-57.3,72.8,-69.7,61.6,-77.5,47.4C-85.3,33.3,-88.5,16.6,-87.6,0.5C-86.7,-15.6,-81.7,-31.3,-73.1,-44.9C-64.5,-58.6,-52.2,-70.2,-38.3,-76.8C-24.4,-83.4,-12.2,-84.9,1,-86.6C14.2,-88.2,28.6,-79.8,42.8,-73.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="var(--color-clay)" d="M39.7,-51.1C52.9,-45.9,65.9,-36.2,73.4,-22.7C80.8,-9.1,82.7,8.3,77.5,23.1C72.3,37.9,60,50.1,45.7,59.9C31.4,69.7,15.7,77.1,0.7,76.2C-14.3,75.3,-28.5,66.2,-39.9,55.3C-51.3,44.4,-59.8,31.7,-65.4,17.1C-71,2.4,-73.7,-14.1,-67.5,-26.1C-61.3,-38.1,-46.2,-45.6,-32.5,-50.6C-18.8,-55.6,-6.3,-58.1,5.9,-55.8C18,-53.6,26.5,-56.4,39.7,-51.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-earth-600 uppercase tracking-[0.25em] text-sm font-medium mb-6">Ancient Wisdom, Modern Times</span>
          <h2 className="section-heading mb-8">Indigenous Integration</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed font-light">
            Our approach centers indigenous wisdom and ceremony, recognizing the deep knowledge of the land's 
            original stewards. We seek to learn from and collaborate with local indigenous communities with 
            humility and respect.
          </p>
        </motion.div>

        {/* Wisdom Quotes Carousel */}
        <div className="mb-20 relative" ref={quoteRef}>
          <div className="max-w-4xl mx-auto px-8 py-12 bg-earth-50/80 backdrop-blur-sm rounded-lg border border-earth-100 shadow-inner">
            {indigenousWisdom.map((item, index) => (
              <div key={index} className="wisdom-quote text-center mb-6 last:mb-0">
                <p className="text-xl md:text-2xl italic text-earth-800 mb-4 font-serif leading-relaxed">"{item.quote}"</p>
                <p className="text-earth-600 font-medium">{item.attribution}</p>
              </div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 opacity-30">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--color-earth-900)" strokeWidth="1" />
              <path d="M2 12H22M12 2V22" stroke="var(--color-earth-900)" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 opacity-30">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--color-earth-900)" strokeWidth="1" />
              <path d="M2 12H22M12 2V22" stroke="var(--color-earth-900)" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Core content grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Collaboration Principles */}
          <div ref={principlesRef}>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-earth-900 mb-4 font-serif">
                Collaboration Principles
              </h3>
              <p className="text-earth-700 font-light">
                Our relationships with indigenous communities are guided by these essential principles, 
                ensuring respectful and mutually beneficial exchanges of knowledge and support.
              </p>
            </div>
            
            <div className="space-y-5">
              {collaborationPrinciples.map((principle) => (
                <div key={principle.id} className="principle-card bg-white/80 backdrop-blur-sm p-5 rounded-lg border border-earth-100 shadow-sm transition-all hover:shadow-md">
                  <h4 className="text-lg font-medium text-earth-900 mb-2">{principle.title}</h4>
                  <p className="text-earth-700 font-light">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Ceremonial Practices */}
          <div ref={practicesRef}>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-earth-900 mb-4 font-serif">
                Ceremony-Based Approach
              </h3>
              <p className="text-earth-700 font-light">
                We integrate ceremony into all aspects of our community life, 
                honoring the sacred connection between humans and the natural world.
              </p>
            </div>
            
            <div className="space-y-5">
              {ceremonialPractices.map((practice) => (
                <div key={practice.id} className="practice-card bg-white/80 backdrop-blur-sm p-5 rounded-lg border border-earth-100 shadow-sm transition-all hover:shadow-md">
                  <h4 className="text-lg font-medium text-earth-900 mb-2">{practice.title}</h4>
                  <p className="text-earth-700 font-light">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Image and commitment */}
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3" ref={imageRef}>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/images/indigenous-ceremony.jpg" 
                  alt="Indigenous ceremony" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm font-medium uppercase tracking-wider mb-1">Sacred Connection</p>
                  <h4 className="text-xl font-serif">Honoring ancestral wisdom through ceremony</h4>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-earth-900 mb-4 font-serif">
              Our Commitment
            </h3>
            <p className="text-earth-700 mb-6 font-light">
              We acknowledge that true connection to the land requires a deep commitment 
              to learning from those who have stewarded it for generations. We pledge to:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-amber-gold font-bold mr-2">→</span>
                <span className="text-earth-800">Consult with indigenous elders before land development</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-gold font-bold mr-2">→</span>
                <span className="text-earth-800">Create opportunities for indigenous-led workshops and teachings</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-gold font-bold mr-2">→</span>
                <span className="text-earth-800">Allocate resources to support indigenous-led land restoration</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-gold font-bold mr-2">→</span>
                <span className="text-earth-800">Center indigenous voices in community governance</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 