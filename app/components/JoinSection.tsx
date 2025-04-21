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
    <div className="py-20 bg-gradient-to-b from-earth-50 to-earth-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-earth-900 mb-6 font-serif">Join Our Community</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed">
            Be part of this transformative journey as we create a regenerative community
            dedicated to protecting human integrity and living in harmony with nature.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-earth-900 mb-8 text-center">
            Project Timeline
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
                  activePhase === phase.id ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}>
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
                      className={`h-full bg-amber-500 transition-all ${
                        timelinePhases.findIndex(p => p.id === activePhase) > index ? 'w-full' : 'w-0'
                      }`} 
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
          
          {/* Active phase content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {timelinePhases.map((phase) => (
              <div 
                key={phase.id}
                className={`transition-opacity duration-300 ${
                  activePhase === phase.id ? 'block' : 'hidden'
                }`}
              >
                <h4 className="text-xl font-semibold text-earth-900 mb-4">
                  {phase.title} {phase.period && `(${phase.period})`}
                </h4>
                
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-amber-500 font-bold mr-2">→</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact form */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-earth-900 mb-6">
              Get Involved
            </h3>
            
            <p className="text-earth-800 mb-6">
              Whether you're interested in becoming a land steward, community contributor, 
              aligned investor, or simply learning more about the project, we invite you to reach out.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="general">General Information</option>
                    <option value="steward">Becoming a Land Steward</option>
                    <option value="contributor">Becoming a Contributor</option>
                    <option value="investor">Impact Investment</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="programs">Educational Programs</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-earth-200 to-earth-300 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-earth-900 mb-6">
                Connect With Us
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-earth-900 mb-2">Email</h4>
                  <a 
                    href="mailto:proyecto.salvaje@gmail.com" 
                    className="text-earth-800 hover:text-amber-700 transition-colors"
                  >
                    proyecto.salvaje@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-medium text-earth-900 mb-2">Location</h4>
                  <p className="text-earth-800">
                    Mazunte, Oaxaca, Mexico<br />
                    1 hour from Puerto Escondido International Airport
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-earth-900 mb-2">Next Steps</h4>
                  <p className="text-earth-800 mb-3">
                    After receiving your inquiry, we'll schedule a video call to discuss your interests
                    and potential ways to get involved with the community.
                  </p>
                  <p className="text-earth-800">
                    For land stewards and contributors, a visit to the land and in-depth conversations
                    with community members will be arranged.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="h-64 bg-[url('/images/connect.jpg')] bg-cover bg-bottom">
              {/* This would be replaced with an actual image */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 