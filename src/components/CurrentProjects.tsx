'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, TrendingUp, ExternalLink } from 'lucide-react';

const CurrentProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      id: 1,
      company: 'Kirby Building Private Limited',
      projectName: 'Industrial Manufacturing Complex',
      location: 'Mumbai, Maharashtra',
      startDate: 'January 2024',
      expectedCompletion: 'August 2024',
      progress: 75,
      projectValue: '$2.5M',
      teamSize: 25,
      description: 'Complete steel structure fabrication and erection for a state-of-the-art manufacturing facility spanning 50,000 sq ft.',
      services: ['Steel Structure Fabrication', 'Erection Services', 'Storage Tanks', 'Conveyor Systems'],
      highlights: [
        'Advanced welding techniques for superior joint strength',
        'Custom-designed storage solutions for raw materials',
        'Integrated conveyor system for automated material handling',
        'Compliance with international safety standards'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      status: 'In Progress',
      statusColor: 'text-yellow-400',
    },
    {
      id: 2,
      company: 'Shree Umiya Steel Structure',
      projectName: 'Petrochemical Storage Facility',
      location: 'Gujarat, India',
      startDate: 'March 2024',
      expectedCompletion: 'November 2024',
      progress: 45,
      projectValue: '$3.2M',
      teamSize: 35,
      description: 'Large-scale storage tank fabrication and pipeline installation for petrochemical processing facility.',
      services: ['Storage Tanks', 'Pipeline Installation', 'Chimney Construction', 'Safety Systems'],
      highlights: [
        'Specialized corrosion-resistant materials',
        'High-pressure pipeline systems',
        'Environmental compliance measures',
        'Advanced leak detection systems'
      ],
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      status: 'In Progress',
      statusColor: 'text-blue-400',
    },
    {
      id: 3,
      company: 'Smith Structure Private Limited',
      projectName: 'Multi-Level Parking Structure',
      location: 'Bangalore, Karnataka',
      startDate: 'February 2024',
      expectedCompletion: 'September 2024',
      progress: 60,
      projectValue: '$1.8M',
      teamSize: 20,
      description: 'Modern multi-level steel parking structure with integrated lighting and ventilation systems.',
      services: ['Steel Structure Fabrication', 'Erection Services', 'Hopper Systems', 'Structural Engineering'],
      highlights: [
        'Earthquake-resistant design specifications',
        'Optimized space utilization',
        'Integrated drainage systems',
        'Smart parking technology compatibility'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      status: 'In Progress',
      statusColor: 'text-green-400',
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
    setIsAutoPlaying(false);
  };

  const project = projects[currentProject];

  return (
    <div
      id="projects"
      className="py-20 lg:py-32 bg-gradient-to-br from-deep-black via-charcoal-black to-steel-blue relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-blue/10 to-bright-orange/10" />
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
              Current Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6 font-orbitron leading-tight"
          >
            Projects in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-orange to-electric-blue">
              {' '}Progress
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-steel-gray max-w-3xl mx-auto leading-relaxed"
          >
            Take a look at our current projects showcasing our expertise in industrial fabrication 
            and commitment to delivering excellence on schedule.
          </motion.p>
        </motion.div>

        {/* Project Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Project Image */}
              <div className="relative group">
                <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-charcoal-black/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className={`font-semibold ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-charcoal-black/80 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Progress</span>
                      <span className="text-bright-orange font-bold">{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="progress-fill"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                {/* Company & Project Name */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-orbitron">
                    {project.projectName}
                  </h3>
                  <p className="text-bright-orange font-semibold text-lg">
                    {project.company}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-charcoal-black/50 p-4 rounded-lg border border-steel-gray/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="text-electric-blue" size={16} />
                      <span className="text-steel-gray text-sm">Location</span>
                    </div>
                    <p className="text-white font-semibold">{project.location}</p>
                  </div>
                  
                  <div className="bg-charcoal-black/50 p-4 rounded-lg border border-steel-gray/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="text-bright-orange" size={16} />
                      <span className="text-steel-gray text-sm">Timeline</span>
                    </div>
                    <p className="text-white font-semibold">{project.startDate} - {project.expectedCompletion}</p>
                  </div>
                  
                  <div className="bg-charcoal-black/50 p-4 rounded-lg border border-steel-gray/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="text-green-400" size={16} />
                      <span className="text-steel-gray text-sm">Value</span>
                    </div>
                    <p className="text-white font-semibold">{project.projectValue}</p>
                  </div>
                  
                  <div className="bg-charcoal-black/50 p-4 rounded-lg border border-steel-gray/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="text-purple-400" size={16} />
                      <span className="text-steel-gray text-sm">Team Size</span>
                    </div>
                    <p className="text-white font-semibold">{project.teamSize} Members</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-steel-gray leading-relaxed">
                  {project.description}
                </p>

                {/* Services */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-bright-orange/20 to-electric-blue/20 border border-bright-orange/30 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-bright-orange rounded-full mt-2 flex-shrink-0" />
                        <span className="text-steel-gray text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            {/* Previous/Next Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevProject}
                className="p-3 bg-charcoal-black/80 border border-steel-gray/30 rounded-lg text-white hover:border-electric-blue/50 hover:text-electric-blue transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextProject}
                className="p-3 bg-charcoal-black/80 border border-steel-gray/30 rounded-lg text-white hover:border-electric-blue/50 hover:text-electric-blue transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Project Indicators */}
            <div className="flex items-center space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-bright-orange scale-125'
                      : 'bg-steel-gray hover:bg-electric-blue'
                  }`}
                />
              ))}
            </div>

            {/* View All Projects Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-bright-orange/20 to-electric-blue/20 border border-bright-orange/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-bright-orange hover:to-electric-blue hover:border-transparent flex items-center space-x-2"
            >
              <span>View All Projects</span>
              <ExternalLink size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProjects;
