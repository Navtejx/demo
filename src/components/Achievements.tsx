'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      year: '1998',
      title: 'Company Founded',
      description: 'Industrial Fabricators established with a vision to deliver excellence in steel fabrication.',
      icon: '📅',
      type: 'milestone',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      year: '2003',
      title: 'ISO 9001:2000 Certification',
      description: 'First quality management system certification, establishing our commitment to quality.',
      icon: '🛡️',
      type: 'certification',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      year: '2008',
      title: 'Excellence in Manufacturing Award',
      description: 'Recognized by the Industrial Association for outstanding manufacturing practices.',
      icon: '🏆',
      type: 'award',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 4,
      year: '2012',
      title: '500+ Projects Milestone',
      description: 'Successfully completed over 500 industrial fabrication projects across various sectors.',
      icon: '📈',
      type: 'milestone',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 5,
      year: '2015',
      title: 'ISO 9001:2015 Upgrade',
      description: 'Upgraded to the latest ISO 9001:2015 standard, enhancing our quality management system.',
      icon: '🛡️',
      type: 'certification',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 6,
      year: '2018',
      title: 'Safety Excellence Award',
      description: 'Awarded for maintaining zero accidents record and implementing best safety practices.',
      icon: '🥇',
      type: 'award',
      color: 'from-red-500 to-pink-500',
    },
    {
      id: 7,
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented advanced CAD/CAM systems and digital project management tools.',
      icon: '⭐',
      type: 'milestone',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 8,
      year: '2022',
      title: 'Environmental Compliance',
      description: 'Achieved full environmental compliance certification for sustainable manufacturing.',
      icon: '✅',
      type: 'certification',
      color: 'from-teal-500 to-green-500',
    },
    {
      id: 9,
      year: '2024',
      title: '25+ Years of Excellence',
      description: 'Celebrating over 25 years of delivering premium steel fabrication solutions.',
      icon: '🏆',
      type: 'milestone',
      color: 'from-bright-orange to-electric-blue',
    },
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      issuer: 'Quality Council of India (QCI)',
      validUntil: '2025',
      icon: '🏆',
    },
    {
      name: 'IS 18001',
      description: 'Occupational Health & Safety',
      issuer: 'Bureau of Indian Standards (BIS)',
      validUntil: '2025',
      icon: '🛡️',
    },
    {
      name: 'ISO 14001',
      description: 'Environmental Management',
      issuer: 'National Accreditation Board for Certification Bodies (NABCB)',
      validUntil: '2024',
      icon: '🌱',
    },
    {
      name: 'IBR Certification',
      description: 'Pressure Vessel Manufacturing',
      issuer: 'Indian Boiler Regulations',
      validUntil: '2026',
      icon: '⚙️',
    },
  ];

  const stats = [
    { label: 'Years of Experience', value: '25+', icon: Clock },
    { label: 'Certified Engineers', value: '15+', icon: Users },
    { label: 'Industry Awards', value: '8+', icon: Award },
    { label: 'Active Certifications', value: '6+', icon: Shield },
  ];

  return (
    <div className="py-20 lg:py-32 bg-gradient-to-br from-charcoal-black via-deep-black to-steel-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-bright-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-electric-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-bright-orange font-semibold text-lg tracking-wide uppercase">
              Achievements & Certifications
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6 font-orbitron leading-tight"
          >
            Excellence
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-orange to-electric-blue">
              {' '}Recognized
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-steel-gray max-w-3xl mx-auto leading-relaxed"
          >
            Our journey of excellence is marked by significant milestones, industry recognition, 
            and certifications that validate our commitment to quality and innovation.
          </motion.p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-charcoal-black/80 to-steel-blue/20 p-6 rounded-2xl border border-steel-gray/20 hover:border-electric-blue/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <IconComponent className="text-bright-orange mx-auto mb-4 group-hover:text-electric-blue transition-colors duration-300" size={32} />
                  <div className="text-3xl font-bold text-white mb-2 font-orbitron">{stat.value}</div>
                  <div className="text-steel-gray text-sm">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl lg:text-3xl font-bold text-white mb-12 text-center font-orbitron"
          >
            Our Journey of Excellence
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-bright-orange via-electric-blue to-bright-orange opacity-30" />

            {achievements.map((achievement, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative flex items-center mb-12 ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-charcoal-black/80 to-steel-blue/20 p-6 rounded-2xl border border-steel-gray/20 hover:border-electric-blue/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        {isEven ? (
                          <>
                            <div>
                              <h4 className="text-xl font-bold text-white group-hover:text-bright-orange transition-colors duration-300">
                                {achievement.title}
                              </h4>
                              <p className="text-bright-orange font-semibold">{achievement.year}</p>
                            </div>
                            <div className="text-3xl">
                              {achievement.icon}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-3xl">
                              {achievement.icon}
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-white group-hover:text-bright-orange transition-colors duration-300">
                                {achievement.title}
                              </h4>
                              <p className="text-bright-orange font-semibold">{achievement.year}</p>
                            </div>
                          </>
                        )}
                      </div>
                      <p className="text-steel-gray leading-relaxed group-hover:text-white transition-colors duration-300">
                        {achievement.description}
                      </p>
                      <div className="mt-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          achievement.type === 'certification' 
                            ? 'bg-green-500/20 text-green-400'
                            : achievement.type === 'award'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-bright-orange to-electric-blue rounded-full border-4 border-deep-black shadow-lg z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Current Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl lg:text-3xl font-bold text-white mb-12 text-center font-orbitron"
          >
            Current Certifications
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="group bg-gradient-to-br from-charcoal-black/80 to-steel-blue/20 p-6 rounded-2xl border border-steel-gray/20 hover:border-electric-blue/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-bright-orange transition-colors duration-300">
                  {cert.name}
                </h4>
                <p className="text-steel-gray text-sm mb-3 group-hover:text-white transition-colors duration-300">
                  {cert.description}
                </p>
                <p className="text-xs text-steel-gray mb-2">Issued by: {cert.issuer}</p>
                <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                  Valid until {cert.validUntil}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-steel-gray mb-6 text-lg">
            Experience the difference that comes with certified excellence and proven expertise.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-bright-orange to-electric-blue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
          >
            Partner with Excellence
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
