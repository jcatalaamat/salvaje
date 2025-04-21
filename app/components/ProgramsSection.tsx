import React, { useState } from 'react';
import { motion } from 'framer-motion';

const programCategories = [
  {
    id: 'ecological',
    name: 'Ecological Learning',
    icon: '🌳',
    color: 'bg-forest-500',
    programs: [
      { name: 'Natural Building', description: 'Learn sustainable construction techniques using local materials' },
      { name: 'Permaculture Design', description: 'Design regenerative food systems that work with nature' },
      { name: 'Sustainable Energy', description: 'Implement renewable energy solutions for off-grid living' }
    ]
  },
  {
    id: 'health',
    name: 'Health & Wellbeing',
    icon: '🌿',
    color: 'bg-earth-500',
    programs: [
      { name: 'Nutrition & Natural Medicine', description: 'Cultivate health through food and traditional remedies' },
      { name: 'Somatic Practices', description: 'Reconnect with bodily wisdom through movement practices' },
      { name: 'Nervous System Regulation', description: 'Tools for navigating stress and trauma responses' }
    ]
  },
  {
    id: 'personal',
    name: 'Personal Development',
    icon: '🔄',
    color: 'bg-amber-500',
    programs: [
      { name: 'Emotional Intelligence', description: 'Develop awareness and healthy relationship with emotions' },
      { name: 'Family Systems', description: 'Heal intergenerational patterns and create healthy family dynamics' },
      { name: 'Self-sufficiency Skills', description: 'Practical skills for autonomous living and resilience' }
    ]
  },
  {
    id: 'spiritual',
    name: 'Spiritual Integration',
    icon: '✨',
    color: 'bg-ocean-500',
    programs: [
      { name: 'Relationship with the Sacred', description: 'Reconnect with authentic spiritual practices without appropriation' },
      { name: 'Animism & Earth Connection', description: 'Revitalize relationship with the living world around us' },
      { name: 'Elemental & Ceremonial Work', description: 'Meaningful rituals for personal and collective transformation' }
    ]
  }
];

export default function ProgramsSection() {
  const [activeCategory, setActiveCategory] = useState(programCategories[0].id);

  return (
    <div className="py-20 bg-gradient-to-b from-earth-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-earth-900 mb-6 font-serif">Educational Programs</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed">
            Immersive educational experiences designed to foster skills for regenerative living
            and community building in harmony with nature.
          </p>
        </motion.div>

        {/* Category selector tabs */}
        <div className="flex overflow-x-auto pb-2 mb-8 md:justify-center">
          {programCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-3 mx-1 rounded-lg transition-all ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span className="whitespace-nowrap font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active category content */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {programCategories.map((category) => (
            <div
              key={category.id}
              className={`transition-opacity duration-300 ${
                activeCategory === category.id ? 'block' : 'hidden'
              }`}
            >
              <div className={`${category.color} px-6 py-4 text-white`}>
                <h3 className="text-2xl font-semibold flex items-center">
                  <span className="text-3xl mr-2">{category.icon}</span>
                  {category.name}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {category.programs.map((program) => (
                    <motion.div
                      key={program.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-earth-50 p-5 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="text-lg font-medium text-earth-900 mb-2">{program.name}</h4>
                      <p className="text-gray-600">{program.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transformational experiences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-earth-900 mb-6 text-center">
            Transformational Experiences
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-earth-100 to-earth-200 p-4 rounded-lg text-center">
              <span className="block text-2xl mb-2">🧭</span>
              <h4 className="font-medium text-earth-900">Youth Vision Quests</h4>
            </div>
            <div className="bg-gradient-to-br from-forest-100 to-forest-200 p-4 rounded-lg text-center">
              <span className="block text-2xl mb-2">👪</span>
              <h4 className="font-medium text-earth-900">Family Gatherings</h4>
            </div>
            <div className="bg-gradient-to-br from-ocean-100 to-ocean-200 p-4 rounded-lg text-center">
              <span className="block text-2xl mb-2">🔄</span>
              <h4 className="font-medium text-earth-900">Cross-pollination Events</h4>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 rounded-lg text-center">
              <span className="block text-2xl mb-2">💫</span>
              <h4 className="font-medium text-earth-900">Inner Alchemy Journeys</h4>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-lg text-center">
              <span className="block text-2xl mb-2">🌱</span>
              <h4 className="font-medium text-earth-900">Children's Mystery School</h4>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg text-center">
              <span className="block text-2xl mb-2">🚀</span>
              <h4 className="font-medium text-earth-900">Vision-to-Action Incubators</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 