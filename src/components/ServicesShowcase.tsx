'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Settings, 
  Circle, 
  Zap, 
  Building, 
  Triangle, 
  ArrowRight
} from 'lucide-react';

const ServicesShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Fabrication of Steel Structure',
      description: 'Custom steel structure fabrication for industrial, commercial, and residential projects. From design to delivery, we ensure precision and quality.',
      icon: Wrench,
      features: ['Custom Design', 'Precision Welding', 'Quality Control', 'Fast Delivery'],
      color: 'from-bright-orange to-red-500',
    },
    {
      id: 2,
      title: 'Erection of Steel Structure',
      description: 'Professional steel structure erection services with experienced crews and modern equipment. Safe, efficient, and on-schedule installation.',
      icon: Settings,
      features: ['Expert Installation', 'Safety Compliance', 'Modern Equipment', 'Project Management'],
      color: 'from-electric-blue to-blue-500',
    },
    {
      id: 3,
      title: 'Storage Tank',
      description: 'Industrial storage tanks for various applications including water, chemicals, and petroleum products. Built to last with superior materials.',
      icon: Circle,
      features: ['Various Capacities', 'Corrosion Resistant', 'Custom Solutions', 'Leak Testing'],
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 4,
      title: 'Pipeline (Gas, Water & Underground Pipeline)',
      description: 'Complete pipeline solutions for gas, water, and underground applications. Engineered for durability and regulatory compliance.',
      icon: Zap,
      features: ['Multiple Materials', 'Pressure Testing', 'Underground Expertise', 'Regulatory Compliance'],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      id: 5,
      title: 'Chimney',
      description: 'Industrial chimney construction and maintenance services. Designed for optimal performance and environmental compliance.',
      icon: Building,
      features: ['Height Customization', 'Emission Control', 'Structural Analysis', 'Maintenance Services'],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      id: 6,
      title: 'Hopper',
      description: 'Industrial hoppers for material handling and storage. Custom-designed for your specific material flow requirements.',
      icon: Triangle,
      features: ['Material Flow Design', 'Wear Resistance', 'Custom Shapes', 'Easy Maintenance'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 7,
      title: 'Conveyor Line',
      description: 'Complete conveyor systems for material handling across industries. Automated solutions for improved efficiency and productivity.',
      icon: ArrowRight,
      features: ['Automated Systems', 'Variable Speed', 'Safety Features', 'Remote Monitoring'],
      color: 'from-cyan-500 to-blue-400',
    },
  ];

  return (
    <div
      id="services"
      className="py-20 lg:py-32 bg-gradient-to-br from-charcoal-black via-deep-black to-steel-blue relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-bright-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-electric-blue/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-steel-blue/10 rounded-full blur-3xl" />
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
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6 font-orbitron leading-tight"
          >
            Comprehensive Steel
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-orange to-electric-blue">
              {' '}Fabrication Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-steel-gray max-w-3xl mx-auto leading-relaxed"
          >
            From structural steel fabrication to specialized industrial equipment, 
            we deliver precision-engineered solutions that meet the highest industry standards.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className="service-card group relative bg-gradient-to-br from-charcoal-black/80 to-steel-blue/20 rounded-2xl p-8 border border-steel-gray/20 hover:border-electric-blue/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`} />
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-bright-orange rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-bright-orange group-hover:to-electric-blue transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-steel-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: hoveredCard === service.id ? 1 : 0.7, 
                          x: hoveredCard === service.id ? 0 : -10 
                        }}
                        transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                        className="flex items-center space-x-2"
                      >
                        <Zap className="text-bright-orange" size={14} />
                        <span className="text-sm text-steel-gray group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-bright-orange/20 to-electric-blue/20 border border-bright-orange/30 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-bright-orange hover:to-electric-blue hover:border-transparent group-hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-bright-orange/10 to-electric-blue/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-electric-blue/20 to-bright-orange/20 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-steel-gray mb-6 text-lg">
            Need a custom solution? We&apos;re here to help with your specific requirements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-bright-orange to-electric-blue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg flex items-center space-x-2 mx-auto"
          >
            <span>Get Custom Quote</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesShowcase;
