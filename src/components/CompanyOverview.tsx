'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield } from 'lucide-react';

const CompanyOverview = () => {
  const stats = [
    {
      icon: Clock,
      value: 25,
      suffix: '+',
      label: 'Years Experience',
      description: 'Decades of expertise in industrial fabrication',
    },
    {
      icon: Award,
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered across various industries',
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Active Clients',
      description: 'Trusted partnerships with leading companies',
    },
    {
      icon: Shield,
      value: 2015,
      suffix: '',
      label: 'ISO 9001:2015 Certified',
      description: 'Quality management system certified',
    },
  ];

  return (
    <div
      id="about"
      className="py-20 lg:py-32 bg-gradient-to-br from-deep-black via-charcoal-black to-steel-blue relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-blue/10 to-bright-orange/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Side - Company Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="text-bright-orange font-semibold text-lg tracking-wide uppercase">
                About Industrial Fabricators
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl lg:text-5xl font-bold text-white mb-6 font-orbitron leading-tight"
            >
              Building Tomorrow&apos;s 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-orange to-electric-blue">
                {' '}Infrastructure
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-steel-gray mb-6 leading-relaxed"
            >
              Since 1998, Industrial Fabricators has been at the forefront of steel fabrication 
              and industrial construction. We specialize in delivering precision-engineered 
              solutions that meet the most demanding industrial requirements.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-steel-gray mb-8 leading-relaxed"
            >
              Our commitment to excellence, safety, and innovation has made us the preferred 
              partner for major industrial projects across the region. From complex structural 
              steel fabrication to specialized industrial equipment, we deliver quality that 
              stands the test of time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 bg-charcoal-black/50 px-4 py-2 rounded-lg">
                <Shield className="text-electric-blue" size={20} />
                <span className="text-white font-medium">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-charcoal-black/50 px-4 py-2 rounded-lg">
                <Award className="text-bright-orange" size={20} />
                <span className="text-white font-medium">Industry Leader</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="group bg-gradient-to-br from-charcoal-black/80 to-steel-blue/20 p-6 rounded-xl border border-steel-gray/20 hover:border-electric-blue/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="text-bright-orange group-hover:text-electric-blue transition-colors duration-300" size={32} />
                    <div className="w-8 h-8 bg-gradient-to-br from-bright-orange/20 to-electric-blue/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-bright-orange rounded-full" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl lg:text-4xl font-bold text-white font-orbitron">
                        {stat.value}
                      </span>
                      <span className="text-2xl font-bold text-bright-orange font-orbitron">
                        {stat.suffix}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {stat.label}
                    </h3>
                  </div>

                  <p className="text-sm text-steel-gray leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Section - Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 pt-16 border-t border-steel-gray/20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-orbitron">
              Our Core Values
            </h3>
            <p className="text-steel-gray text-lg max-w-3xl mx-auto">
              The principles that drive our commitment to excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Precision Engineering',
                description: 'Every component is crafted with meticulous attention to detail and engineering excellence.',
                icon: '⚙️',
              },
              {
                title: 'Safety First',
                description: 'Uncompromising commitment to safety standards and best practices in all operations.',
                icon: '🛡️',
              },
              {
                title: 'On-Time Delivery',
                description: 'Reliable project completion within agreed timelines without compromising quality.',
                icon: '⏱️',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-bright-orange transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-steel-gray leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyOverview;
