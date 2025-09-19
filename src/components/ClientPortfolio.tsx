'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ClientPortfolio = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Mock client logos - in a real project, these would be actual client logos
  const clients = [
    { name: 'TechCorp Industries', logo: '🏭' },
    { name: 'Global Steel Works', logo: '⚙️' },
    { name: 'Metro Construction', logo: '🏗️' },
    { name: 'Industrial Solutions Inc', logo: '🔧' },
    { name: 'Advanced Manufacturing', logo: '🏭' },
    { name: 'Steel Dynamics Corp', logo: '⚡' },
    { name: 'Infrastructure Partners', logo: '🏢' },
    { name: 'Heavy Industries Ltd', logo: '🏗️' },
    { name: 'Precision Engineering', logo: '⚙️' },
    { name: 'BuildTech Solutions', logo: '🔨' },
    { name: 'Industrial Automation', logo: '🤖' },
    { name: 'Steel Masters Inc', logo: '🏭' },
    { name: 'Construction Dynamics', logo: '🏗️' },
    { name: 'Manufacturing Excellence', logo: '⚙️' },
    { name: 'Industrial Innovation', logo: '💡' },
  ];

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let translateX = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      translateX -= speed;
      const totalWidth = carousel.scrollWidth / 2; // Half because we duplicated
      
      if (Math.abs(translateX) >= totalWidth) {
        translateX = 0;
      }
      
      carousel.style.transform = `translateX(${translateX}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="py-20 lg:py-32 bg-gradient-to-br from-charcoal-black via-deep-black to-steel-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bright-orange to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent" />
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
              Our Clients
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6 font-orbitron leading-tight"
          >
            Trusted by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-orange to-electric-blue">
              {' '}Industry Leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-steel-gray max-w-3xl mx-auto leading-relaxed"
          >
            We&apos;re proud to partner with leading companies across various industries, 
            delivering exceptional fabrication solutions that drive their success.
          </motion.p>
        </motion.div>

        {/* Client Logos Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative overflow-hidden"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-deep-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-deep-black to-transparent z-10" />

          {/* Scrolling Container */}
          <div
            ref={carouselRef}
            className="flex items-center space-x-12 py-8"
            style={{ width: 'fit-content' }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="group flex-shrink-0 relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Client Logo Card */}
                <div className="w-48 h-32 bg-gradient-to-br from-charcoal-black/80 to-steel-blue/20 rounded-xl border border-steel-gray/20 flex flex-col items-center justify-center p-6 group-hover:border-electric-blue/50 transition-all duration-300 relative overflow-hidden">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-bright-orange/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Logo */}
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0">
                    {client.logo}
                  </div>
                  
                  {/* Company Name */}
                  <h3 className="text-sm font-semibold text-steel-gray group-hover:text-white transition-colors duration-300 text-center leading-tight">
                    {client.name}
                  </h3>

                  {/* Hover Effect Particles */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-bright-orange rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-electric-blue rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.5s' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              quote: "Industrial Fabricators delivered exceptional quality on our manufacturing facility project. Their attention to detail and timely delivery exceeded our expectations.",
              company: "TechCorp Industries",
              author: "John Smith, Project Manager",
              rating: 5,
            },
            {
              quote: "The steel structure fabrication was flawless. Their team's expertise in complex industrial projects is unmatched in the industry.",
              company: "Global Steel Works",
              author: "Sarah Johnson, Operations Director",
              rating: 5,
            },
            {
              quote: "Outstanding service from design to installation. Their commitment to safety and quality makes them our preferred fabrication partner.",
              company: "Metro Construction",
              author: "Michael Brown, CEO",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-charcoal-black/80 to-steel-blue/20 p-6 rounded-xl border border-steel-gray/20 hover:border-electric-blue/50 transition-all duration-300 group"
            >
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 + starIndex * 0.1, duration: 0.3 }}
                    className="text-bright-orange"
                  >
                    ⭐
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-steel-gray mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="border-t border-steel-gray/20 pt-4">
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-bright-orange text-sm">{testimonial.company}</p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-bright-orange/10 to-electric-blue/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-steel-gray mb-6 text-lg">
            Join our growing list of satisfied clients and experience excellence in steel fabrication.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-bright-orange to-electric-blue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
          >
            Become Our Next Success Story
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientPortfolio;
