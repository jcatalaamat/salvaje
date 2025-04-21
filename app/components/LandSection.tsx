import React, { useState } from 'react';
import { motion } from 'framer-motion';

const landFeatures = [
  {
    id: 'ocean',
    name: 'Pacific Ocean',
    description: 'The land is near the beautiful Pacific coast, offering amazing ocean views and access.',
    position: { top: '30%', left: '15%' },
  },
  {
    id: 'sierra',
    name: 'Sierra Madre',
    description: 'The majestic Sierra Madre mountains provide shelter and natural resources for the community.',
    position: { top: '20%', left: '70%' },
  },
  {
    id: 'reserve',
    name: 'Natural Reserve',
    description: 'The land is nestled in front of a protected natural reserve, ensuring pristine surroundings.',
    position: { top: '60%', left: '80%' },
  },
  {
    id: 'permaculture',
    name: 'Permaculture Areas',
    description: 'Flat areas perfect for implementing regenerative agricultural practices.',
    position: { top: '70%', left: '40%' },
  },
  {
    id: 'water',
    name: 'Water Access',
    description: 'Natural access to water sources for sustainable community use.',
    position: { top: '50%', left: '25%' },
  },
];

export default function LandSection() {
  const [activeFeature, setActiveFeature] = useState(null);
  const [hoverFeature, setHoverFeature] = useState(null);

  const handleFeatureClick = (id) => {
    setActiveFeature(id === activeFeature ? null : id);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-earth-50 to-earth-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-earth-900 mb-6 font-serif">The Land</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed">
            Located on the coast of Oaxaca, where the Sierra Madre meets the Pacific Ocean near the small town of Mazunte —
            a vibrant community with rich culture and natural beauty.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Interactive map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl">
              {/* Map background */}
              <div className="absolute inset-0 bg-[url('/images/land-map.jpg')] bg-cover bg-center">
                {/* This would be replaced with an actual satellite image of the land */}
              </div>
              
              {/* Map overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/40 to-transparent pointer-events-none"></div>
              
              {/* Interactive hotspots */}
              {landFeatures.map((feature) => (
                <button
                  key={feature.id}
                  className={`absolute z-10 w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    activeFeature === feature.id || hoverFeature === feature.id
                      ? 'bg-amber-500 scale-125'
                      : 'bg-white scale-100'
                  }`}
                  style={{ 
                    top: feature.position.top, 
                    left: feature.position.left,
                    boxShadow: '0 0 0 2px rgba(255,255,255,0.5)'
                  }}
                  onClick={() => handleFeatureClick(feature.id)}
                  onMouseEnter={() => setHoverFeature(feature.id)}
                  onMouseLeave={() => setHoverFeature(null)}
                >
                  <span className="sr-only">{feature.name}</span>
                  {(activeFeature === feature.id || hoverFeature === feature.id) && (
                    <div 
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 p-2 bg-white rounded shadow-lg text-left text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="font-medium">{feature.name}</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Land description */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-earth-900 mb-4">12 Acres of Possibility</h3>
                <p className="text-gray-700 mb-4">
                  The land is nestled in front of a natural reserve, with unique topography that makes it perfect for such a project: 
                  access to water, flat areas for permaculture, and hills offering open views.
                </p>
                <p className="text-gray-700 mb-4">
                  Spread along small pathways that provide privacy, there is a sense of deep peace — being both protected and connected, 
                  surrounded by agricultural fields.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>Can support 20 small houses and host around 40 people</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>One of the last intact large parcels in the area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>Old growth trees and rich soil for agriculture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>Access to electricity and private road</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>Just 1 hour from an international airport</span>
                  </li>
                </ul>
                
                {activeFeature && (
                  <div className="mt-4 p-4 bg-earth-50 rounded-lg">
                    <h4 className="font-medium text-earth-900">
                      {landFeatures.find(f => f.id === activeFeature)?.name}
                    </h4>
                    <p className="text-gray-700 mt-1">
                      {landFeatures.find(f => f.id === activeFeature)?.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 