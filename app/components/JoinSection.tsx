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
          <span className="inline-block text-earth-600 uppercase tracking-[0.25em] text-sm font-medium mb-6">The Sacred Invitation</span>
          <h2 className="section-heading mb-8">Do You Feel The Call?</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed font-light italic">
            If your heart stirs as you read this, you're invited to walk with us —
            to be part of this sacred journey as we create a regenerative refuge
            dedicated to protecting human integrity and living in harmony with the Earth's rhythms.
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
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-earth-200 rounded-md focus:ring-2 focus:ring-earth-500 focus:border-earth-500 bg-white/90"
                  >
                    <option value="general">General Information</option>
                    <option value="resident">Becoming a Resident</option>
                    <option value="investor">Aligned Investment</option>
                    <option value="contributor">Community Contributor</option>
                    <option value="programs">Educational Programs</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 border border-earth-200 rounded-md focus:ring-2 focus:ring-earth-500 focus:border-earth-500 bg-white/90"
                    placeholder="Share why you feel called to connect with us..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-clay text-white rounded-md hover:bg-clay-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-earth-500 font-medium"
                  style={{ backgroundColor: 'var(--color-clay)' }}
                >
                  Step Into the Circle
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-earth-900 mb-6 font-serif">
              Ways to Participate
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-earth-100">
                <h4 className="text-lg font-medium text-earth-900 mb-2">Founding Land Stewards</h4>
                <p className="text-earth-700 font-light">
                  For those ready to live on the land and contribute to building our regenerative village from the ground up. 
                  Requires financial commitment and long-term dedication.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-earth-100">
                <h4 className="text-lg font-medium text-earth-900 mb-2">Aligned Investors</h4>
                <p className="text-earth-700 font-light">
                  Support our vision financially while earning a return in alignment with regenerative principles.
                  Investments start at $10,000 with various participation levels.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-earth-100">
                <h4 className="text-lg font-medium text-earth-900 mb-2">Community Contributors</h4>
                <p className="text-earth-700 font-light">
                  Share your skills, time, and wisdom to help our community thrive. From permaculture
                  design to governance to education, we welcome your gifts.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-earth-100">
                <h4 className="text-lg font-medium text-earth-900 mb-2">Future Visitors & Participants</h4>
                <p className="text-earth-700 font-light">
                  Join us for educational programs, retreats, and experiences once our village is established.
                  Subscribe to stay informed about upcoming opportunities.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-earth-50/80 rounded-lg border border-earth-200 backdrop-blur-sm">
              <h4 className="text-lg font-medium text-earth-900 mb-3 font-serif">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-earth-600 hover:text-earth-900 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-earth-600 hover:text-earth-900 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-earth-600 hover:text-earth-900 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-earth-600 hover:text-earth-900 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
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