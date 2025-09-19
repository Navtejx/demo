'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Simple parallax scrolling effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden steel-texture"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-charcoal-black to-steel-blue opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-bright-orange rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="lg:col-span-1">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-orbitron text-white leading-tight mb-6"
            >
              <span className="block">FORGING THE</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-bright-orange to-electric-blue">
                FUTURE
              </span>
              <span className="block">OF STEEL</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl lg:text-2xl text-steel-gray mb-8 max-w-2xl"
            >
              Precision fabrication. Industrial excellence. Delivered on time.
            </motion.p>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 mb-10 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-bright-orange font-orbitron">25+</div>
                <div className="text-sm text-steel-gray">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-electric-blue font-orbitron">500+</div>
                <div className="text-sm text-steel-gray">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-bright-orange font-orbitron">50+</div>
                <div className="text-sm text-steel-gray">Active Clients</div>
              </div>
            </motion.div>

            {/* Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-bright-orange text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-bright-orange/90 hover:scale-105 hover:shadow-lg glow-orange flex items-center justify-center space-x-2"
              >
                <Play size={20} />
                <span>VIEW OUR WORK</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-bright-orange text-bright-orange px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-bright-orange hover:text-white hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>GET QUOTE</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* Right side - 3D visualization placeholder */}
          <div className="hidden lg:block lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="relative w-96 h-96 mx-auto"
            >
              {/* 3D Steel Beam Visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-steel-gray to-electric-blue rounded-lg transform rotate-12 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-br from-charcoal-black to-steel-blue rounded-lg transform -rotate-6" />
              <div className="absolute inset-8 bg-gradient-to-br from-bright-orange/20 to-electric-blue/20 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏗️</div>
                  <div className="font-orbitron font-bold">STEEL FABRICATION</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-steel-gray hover:text-electric-blue transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-bright-orange rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-bright-orange rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default HeroSection;
