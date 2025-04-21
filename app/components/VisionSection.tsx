import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const visionPillars = [
  {
    title: "Community-Driven Growth",
    description: "Stepping out of over-capitalization by prioritizing equitable access and mutual support over profit.",
    icon: "🌱",
    color: "bg-gradient-to-br from-earth-100 to-earth-200"
  },
  {
    title: "Human-Centered Healing",
    description: "Creating a third way focused on supporting each other while living in reciprocity with the Earth.",
    icon: "🌿",
    color: "bg-gradient-to-br from-forest-100 to-forest-200"
  },
  {
    title: "Decolonized Dialogue",
    description: "Engaging with indigenous communities in sustainable ways, reclaiming a grounded approach to the sacred.",
    icon: "🔄",
    color: "bg-gradient-to-br from-amber-100 to-amber-200"
  },
  {
    title: "Sovereignty & Self-Sufficiency",
    description: "Enhancing autonomy without reliance on external power structures or overarching governmental systems.",
    icon: "🛡️",
    color: "bg-gradient-to-br from-ocean-100 to-ocean-200"
  }
];

export default function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#A67D3D" d="M40.8,-68.7C51.9,-61.3,59.5,-48.5,65.1,-35.3C70.6,-22.1,74.1,-8.6,73.2,4.6C72.3,17.8,67,30.8,58.4,41.1C49.8,51.4,37.9,59.1,24.7,65.3C11.5,71.5,-3,76.3,-17.2,75.1C-31.4,73.9,-45.3,66.7,-55.8,56.1C-66.3,45.6,-73.4,31.6,-75.7,16.8C-78.1,2,-75.6,-13.8,-69.9,-28.2C-64.2,-42.5,-55.2,-55.4,-43.1,-62.5C-30.9,-69.6,-15.5,-70.9,-0.2,-70.6C15.1,-70.3,29.7,-76.1,40.8,-68.7Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-full">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#2CA73C" d="M32.1,-54.3C42.6,-51.2,52.8,-44.6,59.9,-35.1C67,-25.5,70.9,-12.8,72.1,1C73.2,14.8,71.6,29.6,63.5,39.4C55.4,49.2,40.9,54,26.9,60.8C12.9,67.6,-0.6,76.5,-15.4,77.6C-30.2,78.8,-46.3,72.2,-57.2,60.8C-68.1,49.5,-73.8,33.3,-76.3,16.6C-78.8,-0.1,-78.2,-17.3,-71.5,-30.8C-64.9,-44.3,-52.1,-54.1,-38.7,-56.4C-25.2,-58.7,-12.6,-53.5,-0.6,-52.5C11.5,-51.5,22.9,-54.6,32.1,-54.3Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-earth-900 mb-6 font-serif">Our Vision</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed">
            We are redefining the concept of a conscious community while witnessing the fall of new-age spirituality. 
            We are looking for a third way focused on the human factor — on how to heal and support each other as we live in reciprocity with the Earth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${pillar.color} p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2`}
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold text-earth-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-700">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 p-8 bg-earth-50 rounded-xl shadow-xl"
        >
          <p className="text-lg text-earth-800 italic">
            "This is a regenerative, heart-led social project dedicated to future generations and the defense of human integrity. 
            It's a community made to radiate outward and plant seeds of change, rather than being an isolated bubble that turns in a closed circle."
          </p>
        </motion.div>
      </div>
    </div>
  );
} 