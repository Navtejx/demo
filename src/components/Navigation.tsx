'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-deep-black/95 backdrop-blur-md border-b border-steel-gray/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-bright-orange to-electric-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-orbitron">IF</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold font-orbitron text-white">
                  Industrial Fabricators
                </h1>
                <p className="text-xs text-steel-gray">Steel Excellence Since 1998</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-bright-orange transition-colors duration-300 font-medium"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-steel-gray hover:text-electric-blue transition-colors duration-300"
              >
                <Phone size={16} />
                <span className="text-sm">+1 (234) 567-8900</span>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                href="mailto:info@industrialfabricators.com"
                className="flex items-center space-x-2 text-steel-gray hover:text-electric-blue transition-colors duration-300"
              >
                <Mail size={16} />
                <span className="text-sm">info@industrialfabricators.com</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-charcoal-black/50 text-white hover:bg-charcoal-black transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-deep-black/95 backdrop-blur-md z-40 lg:hidden border-l border-steel-gray/20"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {/* Navigation Items */}
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-xl font-medium text-white hover:text-bright-orange transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-steel-gray/20">
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 text-steel-gray hover:text-electric-blue transition-colors duration-300 mb-4"
                >
                  <Phone size={20} />
                  <span>+1 (234) 567-8900</span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  href="mailto:info@industrialfabricators.com"
                  className="flex items-center space-x-3 text-steel-gray hover:text-electric-blue transition-colors duration-300"
                >
                  <Mail size={20} />
                  <span>info@industrialfabricators.com</span>
                </motion.a>
              </div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={() => scrollToSection('#contact')}
                className="mt-8 w-full bg-bright-orange text-white py-3 px-6 rounded-lg font-semibold hover:bg-bright-orange/90 transition-colors duration-300"
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
