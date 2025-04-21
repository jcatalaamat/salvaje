import React, { useState } from 'react';
import { motion } from 'framer-motion';

const membershipTypes = [
  {
    id: 'stewards',
    title: 'Land Stewards',
    description: 'Founding members who hold the vision and steward the land.',
    contribution: '$180K for a 1.5-acre plot',
    responsibilities: [
      'Build and maintain their own sustainable home',
      'Participate in the Council of Founding Members',
      'Help create and manage the educational hub',
      'Lead community initiatives and decision-making'
    ],
    icon: '🏡'
  },
  {
    id: 'contributors',
    title: 'Community Contributors',
    description: 'Members who bring expertise and energy to the project.',
    contribution: '$50K to $75K investment',
    responsibilities: [
      'Build a personal or guest-use cabaña',
      'Host workshops/retreats on-site for free',
      'Join the DAO and contribute to community growth',
      'Option to sell cabaña after 8 years to vetted members'
    ],
    icon: '👥'
  },
  {
    id: 'investors',
    title: 'Impact Investors',
    description: 'Aligned investors supporting infrastructure development.',
    contribution: 'Flexible investment options',
    responsibilities: [
      'Support construction of community infrastructure',
      'Fund sustainable development initiatives',
      'Participate in DAO governance',
      'Receive returns aligned with community values'
    ],
    icon: '🌍'
  },
  {
    id: 'residents',
    title: 'Residents & Participants',
    description: 'Those who live in or regularly visit the community.',
    contribution: '$300 yearly maintenance fee',
    responsibilities: [
      'Contribute time and skills to community projects',
      'Participate in educational programs',
      'Follow community agreements and protocols',
      'Help maintain shared spaces and infrastructure'
    ],
    icon: '🌈'
  }
];

export default function CommunitySection() {
  const [activeType, setActiveType] = useState(null);

  return (
    <div className="py-20 bg-gradient-to-b from-white to-earth-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-earth-900 mb-6 font-serif">Our Community</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed">
            A governance structure designed for transparency, equity, and resilience,
            blending traditional wisdom with modern decentralized organization.
          </p>
        </motion.div>

        {/* Governance visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="p-8 bg-white rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold text-earth-900 mb-6 text-center">
              Governance Structure
            </h3>
            
            <div className="relative mx-auto w-full max-w-3xl aspect-[4/3]">
              {/* Central DAO core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-earth-200 rounded-full flex items-center justify-center z-10 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl mb-1">🌱</div>
                  <div className="font-semibold text-earth-900">DAO</div>
                </div>
              </div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <line x1="200" y1="150" x2="100" y2="75" stroke="#A67D3D" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="200" y1="150" x2="300" y2="75" stroke="#A67D3D" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="200" y1="150" x2="100" y2="225" stroke="#A67D3D" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="200" y1="150" x2="300" y2="225" stroke="#A67D3D" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
              
              {/* Nodes */}
              <button 
                className={`absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-md transition-all cursor-pointer ${
                  activeType === 'stewards' ? 'bg-earth-500 text-white' : 'bg-earth-100 text-earth-900 hover:bg-earth-200'
                }`}
                onClick={() => setActiveType(activeType === 'stewards' ? null : 'stewards')}
              >
                <span className="text-2xl mb-1">🏡</span>
                <span className="font-medium text-sm">Land Stewards</span>
              </button>
              
              <button 
                className={`absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-md transition-all cursor-pointer ${
                  activeType === 'contributors' ? 'bg-earth-500 text-white' : 'bg-earth-100 text-earth-900 hover:bg-earth-200'
                }`}
                onClick={() => setActiveType(activeType === 'contributors' ? null : 'contributors')}
              >
                <span className="text-2xl mb-1">👥</span>
                <span className="font-medium text-sm">Contributors</span>
              </button>
              
              <button 
                className={`absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-md transition-all cursor-pointer ${
                  activeType === 'investors' ? 'bg-earth-500 text-white' : 'bg-earth-100 text-earth-900 hover:bg-earth-200'
                }`}
                onClick={() => setActiveType(activeType === 'investors' ? null : 'investors')}
              >
                <span className="text-2xl mb-1">🌍</span>
                <span className="font-medium text-sm">Investors</span>
              </button>
              
              <button 
                className={`absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-md transition-all cursor-pointer ${
                  activeType === 'residents' ? 'bg-earth-500 text-white' : 'bg-earth-100 text-earth-900 hover:bg-earth-200'
                }`}
                onClick={() => setActiveType(activeType === 'residents' ? null : 'residents')}
              >
                <span className="text-2xl mb-1">🌈</span>
                <span className="font-medium text-sm">Residents</span>
              </button>
            </div>
            
            {/* Selected membership type details */}
            {activeType && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 p-6 bg-earth-50 rounded-lg"
              >
                {membershipTypes.filter(type => type.id === activeType).map(type => (
                  <div key={type.id}>
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">{type.icon}</span>
                      <h4 className="text-xl font-semibold text-earth-900">{type.title}</h4>
                    </div>
                    <p className="text-gray-700 mb-3">{type.description}</p>
                    <p className="font-medium text-earth-800 mb-2">Contribution: {type.contribution}</p>
                    <h5 className="font-medium text-earth-800 mb-2">Responsibilities:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {type.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Indigenous integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-earth-100 to-earth-200 rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-earth-900 mb-6">
            Integration with Indigenous Communities
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-earth-800 mb-4">
                We are committed to respectful and reciprocal relationships with local communities, 
                creating meaningful connections without appropriation or exploitation.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 text-xl mr-2">•</span>
                  <span className="text-earth-800">Offering meaningful employment opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 text-xl mr-2">•</span>
                  <span className="text-earth-800">Providing free access to workshops and educational programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 text-xl mr-2">•</span>
                  <span className="text-earth-800">Creating educational offerings for children and adults</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 text-xl mr-2">•</span>
                  <span className="text-earth-800">Hosting community fundraiser events and celebrations</span>
                </li>
              </ul>
            </div>
            
            <div className="h-64 bg-[url('/images/indigenous.jpg')] bg-cover bg-center rounded-lg shadow-md">
              {/* This would be replaced with an actual image showing community integration */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 