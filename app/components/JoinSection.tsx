import React, { useState } from 'react';
import { motion } from 'framer-motion';

const timelinePhases = [
  {
    id: 'phase1',
    title: 'Phase 1',
    period: 'April to February',
    items: [
      'Finding aligned investment and partnerships',
      "Creation of the project's web platform",
      'Formation of the NGO and DAO structures',
      'May 1: $50K payment to secure the land',
      'September 1: $200K payment for legal title'
    ],
    active: true
  },
  {
    id: 'phase2',
    title: 'Phase 2',
    period: 'February to May',
    items: [
      'First buildings begin — starting with three private houses',
      'Continued development of foundational infrastructure',
      'Implementation of basic permaculture systems',
      'First community gatherings and ceremonies'
    ]
  },
  {
    id: 'year2',
    title: 'Year 2',
    period: '',
    items: [
      'Construction of the larger community infrastructure begins',
      'Development of the educational center',
      'Implementation of renewable energy systems',
      'Beginning of regular community programs'
    ]
  },
  {
    id: 'year3',
    title: 'Year 3',
    period: '',
    items: [
      'Launch of immersive workshops and full educational programming',
      'Opening to broader community participation',
      'Expansion of regenerative agriculture projects',
      'Integration with regional networks and initiatives'
    ]
  }
];

export default function JoinSection() {
  const [activePhase, setActivePhase] = useState('phase1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'general',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will be in touch soon.');
    setFormData({
      name: '',
      email: '',
      interest: 'general',
      message: ''
    });
  };

  return (
    <section id="join" className="py-24 sacred-gradient-moon relative overflow-hidden">
      {/* Background organic elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="var(--color-clay)" d="M44.3,-76.5C59.2,-70.4,74.3,-61.9,81.8,-48.1C89.3,-34.2,89.1,-15,85.3,2.2C81.5,19.4,74.1,34.8,64.8,49.5C55.5,64.1,44.3,78,30.2,84.2C16,90.4,-1.1,89,-16.9,84.4C-32.7,79.8,-47.3,72.1,-60.9,61.1C-74.5,50,-87.1,35.7,-87.8,20.4C-88.5,5.1,-77.3,-11.2,-69.2,-27.1C-61.1,-43,-56.1,-58.5,-45.4,-66.9C-34.6,-75.2,-18.3,-76.3,-1.5,-74C15.3,-71.6,29.4,-82.6,44.3,-76.5Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="var(--color-amber-gold)" d="M38.5,-66.3C50.2,-59.9,60.3,-50.1,68.7,-38.1C77.1,-26.1,83.8,-13,83.1,-0.4C82.3,12.3,74.1,24.5,66.4,37.1C58.8,49.6,51.7,62.3,40.7,68.8C29.7,75.2,14.9,75.3,0.2,75C-14.4,74.7,-28.8,73.9,-38.9,66.6C-49.1,59.3,-54.9,45.4,-62.9,32.2C-70.8,18.9,-80.8,6.3,-82.1,-7.4C-83.5,-21.1,-76.2,-35.9,-66.1,-47.5C-56,-59.1,-43.1,-67.5,-29.9,-72.7C-16.8,-77.8,-3.4,-79.6,8.9,-75.8C21.2,-71.9,26.8,-72.8,38.5,-66.3Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      {/* Sacred glyph */}
      <div className="sacred-glyph right-[10%] top-[10%] w-40 h-40">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-night-earth)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="var(--color-night-earth)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="var(--color-night-earth)" strokeWidth="0.5" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="var(--color-night-earth)" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-earth-600 uppercase tracking-[0.25em] text-sm font-medium mb-6">The Journey Begins</span>
          <h2 className="section-heading mb-8">Join Our Community</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed font-light">
            Be part of this sacred journey as we create a regenerative community
            dedicated to protecting human integrity and living in harmony with nature.
            Every voice adds to our collective wisdom.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-earth-900 mb-8 text-center font-serif">
            Our Unfolding Path
          </h3>
          
          {/* Timeline navigation */}
          <div className="flex justify-between mb-8 overflow-x-auto py-2">
            {timelinePhases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`relative flex-shrink-0 flex flex-col items-center min-w-[100px] px-3 py-2 transition-all ${
                  activePhase === phase.id ? 'text-earth-900' : 'text-gray-500 hover:text-earth-700'
                }`}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  activePhase === phase.id ? 'bg-clay text-white' : 'bg-gray-200 text-gray-700'
                }`}
                style={{ backgroundColor: activePhase === phase.id ? 'var(--color-clay)' : '' }}
                >
                  {index + 1}
                </span>
                <span className="font-medium text-sm">{phase.title}</span>
                {phase.period && (
                  <span className="text-xs">{phase.period}</span>
                )}
                
                {/* Connector line */}
                {index < timelinePhases.length - 1 && (
                  <div className="absolute top-5 left-[calc(50%+18px)] w-[calc(100%-36px)] h-0.5 bg-gray-200">
                    <div 
                      className={`h-full transition-all ${
                        timelinePhases.findIndex(p => p.id === activePhase) > index ? 'w-full' : 'w-0'
                      }`}
                      style={{ backgroundColor: 'var(--color-clay)' }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
          
          {/* Active phase content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-earth-100">
            {timelinePhases.map((phase) => (
              <div 
                key={phase.id}
                className={`transition-opacity duration-300 ${
                  activePhase === phase.id ? 'block' : 'hidden'
                }`}
              >
                <h4 className="text-xl font-semibold text-earth-900 mb-4 font-serif">
                  {phase.title} {phase.period && `(${phase.period})`}
                </h4>
                
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.15 }}
                      className="flex items-start"
                    >
                      <span className="text-amber-500 font-bold mr-2" style={{ color: 'var(--color-amber-gold)' }}>→</span>
                      <span className="text-earth-800">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact form and info */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-earth-900 mb-6 font-serif">
              Step Into the Circle
            </h3>
            
            <p className="text-earth-800 mb-6 font-light">
              Whether you're interested in becoming a land steward, community contributor, 
              aligned investor, or simply learning more about our vision, we welcome your voice. 
              Tell us why you feel called to this project — we read every message with care.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md border border-earth-100">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-earth-200 rounded-md focus:ring-2 focus:ring-earth-500 focus:border-earth-500 bg-white/90"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-earth-200 rounded-md focus:ring-2 focus:ring-earth-500 focus:border-earth-500 bg-white/90"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="interest" className="block text-sm font-medium text-earth-700 mb-1">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-earth-200 rounded-md focus:ring-2 focus:ring-earth-500 focus:border-earth-500 bg-white/90"
                  >
                    <option value="general">General Information</option>
                    <option value="steward">Becoming a Land Steward</option>
                    <option value="contributor">Becoming a Contributor</option>
                    <option value="investor">Impact Investment</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="programs">Educational Programs</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-1">
                    Why do you feel called to this project?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    required
                    className="w-full p-3 border border-earth-200 rounded-md focus:ring-2 focus:ring-earth-500 focus:border-earth-500 bg-white/90"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-sacred-invite w-full py-3 text-center rounded-md transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10">Share Your Intention</span>
                  <span className="absolute inset-0 bg-earth-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-md"></span>
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pt-8 md:pt-16"
          >
            <div className="sacred-callout">
              <h4 className="text-xl font-serif text-earth-900 mb-6">Our Community Values</h4>
              <p className="text-earth-800 mb-6 italic">
                "This is a community made to radiate outward and plant seeds of change, rather than being an isolated bubble that turns in a closed circle."
              </p>
              
              <ul className="space-y-6 mt-8">
                <li className="flex items-start">
                  <span className="text-earth-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"></path>
                      <path d="M12 18v-1"></path>
                      <path d="M12 13V7"></path>
                    </svg>
                  </span>
                  <div>
                    <h5 className="font-medium text-earth-900 mb-1">Land Stewards</h5>
                    <p className="text-earth-700 text-sm">Core community members who live on-site and maintain the physical infrastructure and land-based projects.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-earth-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"></path>
                      <path d="M12 18v-1"></path>
                      <path d="M12 13V7"></path>
                    </svg>
                  </span>
                  <div>
                    <h5 className="font-medium text-earth-900 mb-1">Contributors</h5>
                    <p className="text-earth-700 text-sm">Community members who bring skills, resources, or wisdom but may not live full-time on the land.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-earth-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"></path>
                      <path d="M12 18v-1"></path>
                      <path d="M12 13V7"></path>
                    </svg>
                  </span>
                  <div>
                    <h5 className="font-medium text-earth-900 mb-1">Program Participants</h5>
                    <p className="text-earth-700 text-sm">Those who engage with workshops, retreats, and educational offerings without formal community membership.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 