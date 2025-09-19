'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, Eye, X, Maximize2 } from 'lucide-react';

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'structural', name: 'Structural Steel', count: 8 },
    { id: 'storage', name: 'Storage Solutions', count: 6 },
    { id: 'piping', name: 'Piping Systems', count: 5 },
    { id: 'equipment', name: 'Industrial Equipment', count: 5 },
  ];

  const products = [
    {
      id: 1,
      name: 'I-Beam Steel Structure',
      category: 'structural',
      description: 'High-strength I-beam steel structures for industrial and commercial construction.',
      specifications: {
        material: 'Grade A36 Steel',
        dimensions: '200mm x 100mm x 6mm',
        weight: '25.3 kg/m',
        finish: 'Hot-rolled',
      },
      features: ['High load capacity', 'Corrosion resistant coating', 'Precision welded joints', 'Custom lengths available'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹3,750/meter',
      availability: 'In Stock',
      icon: '🏗️',
    },
    {
      id: 2,
      name: 'Industrial Storage Tank',
      category: 'storage',
      description: 'Large capacity storage tanks for water, chemicals, and petroleum products.',
      specifications: {
        capacity: '10,000 - 50,000 L',
        material: 'Stainless Steel 316L',
        pressure: 'Up to 10 bar',
        temperature: '-40°C to +200°C',
      },
      features: ['Leak-proof design', 'Pressure tested', 'Corrosion resistant', 'Custom fittings'],
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹2,08,000 - ₹12,50,000',
      availability: 'Made to Order',
      icon: '🛢️',
    },
    {
      id: 3,
      name: 'Material Handling Hopper',
      category: 'equipment',
      description: 'Efficient hoppers for bulk material storage and controlled discharge.',
      specifications: {
        capacity: '1 - 20 cubic meters',
        material: 'Carbon Steel',
        discharge: 'Gravity or pneumatic',
        angle: '60° cone angle',
      },
      features: ['Smooth material flow', 'Wear-resistant lining', 'Easy maintenance', 'Custom shapes'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹1,00,000 - ₹6,67,000',
      availability: 'In Stock',
      icon: '⚗️',
    },
    {
      id: 4,
      name: 'Steel Channel Sections',
      category: 'structural',
      description: 'Versatile steel channel sections for framing and structural applications.',
      specifications: {
        material: 'Grade S275 Steel',
        dimensions: '100mm x 50mm x 5mm',
        weight: '9.56 kg/m',
        finish: 'Galvanized',
      },
      features: ['Lightweight design', 'Easy installation', 'Galvanized coating', 'Standard lengths'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹2,330/meter',
      availability: 'In Stock',
      icon: '🔧',
    },
    {
      id: 5,
      name: 'Pressure Vessel',
      category: 'storage',
      description: 'High-pressure vessels for industrial gas and liquid storage applications.',
      specifications: {
        pressure: 'Up to 50 bar',
        material: 'Carbon Steel A516',
        volume: '500 - 10,000 L',
        certification: 'ASME VIII Div 1',
      },
      features: ['ASME certified', 'Pressure relief systems', 'Inspection ports', 'Custom design'],
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹4,16,000 - ₹20,80,000',
      availability: 'Made to Order',
      icon: '⚙️',
    },
    {
      id: 6,
      name: 'Industrial Pipeline System',
      category: 'piping',
      description: 'Complete pipeline systems for gas, water, and chemical transport.',
      specifications: {
        diameter: '50mm - 1000mm',
        material: 'Carbon Steel/Stainless Steel',
        pressure: 'Up to 40 bar',
        length: 'Custom lengths',
      },
      features: ['Welded joints', 'Pressure tested', 'Corrosion protection', 'Insulation available'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹7,080 - ₹37,500/meter',
      availability: 'Made to Order',
      icon: '🔗',
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div
      id="products"
      className="py-20 lg:py-32 bg-gradient-to-br from-deep-black via-charcoal-black to-steel-blue relative overflow-hidden"
    >
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
              Product Catalog
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6 font-orbitron leading-tight"
          >
            Premium Steel
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-orange to-electric-blue">
              {' '}Products
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-steel-gray max-w-3xl mx-auto leading-relaxed"
          >
            Explore our comprehensive range of steel products and industrial solutions, 
            engineered for durability and performance.
          </motion.p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-steel-gray" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-charcoal-black/80 border border-steel-gray/30 rounded-lg text-white placeholder-steel-gray focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-bright-orange text-white'
                      : 'bg-charcoal-black/50 text-steel-gray hover:text-white hover:bg-charcoal-black/80'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-charcoal-black/50 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-bright-orange text-white'
                    : 'text-steel-gray hover:text-white'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-bright-orange text-white'
                    : 'text-steel-gray hover:text-white'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group bg-gradient-to-br from-charcoal-black/80 to-steel-blue/20 rounded-2xl border border-steel-gray/20 hover:border-electric-blue/50 transition-all duration-500 overflow-hidden ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : 'aspect-w-16 aspect-h-12'}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Availability Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.availability === 'In Stock' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {product.availability}
                  </span>
                </div>

                {/* Product Icon */}
                <div className="absolute bottom-4 left-4 text-3xl">
                  {product.icon}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => openProductModal(product)}
                  className="absolute bottom-4 right-4 bg-bright-orange/80 backdrop-blur-sm text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-bright-orange"
                >
                  <Eye size={16} />
                </button>
              </div>

              {/* Product Details */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bright-orange transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-steel-gray text-sm mb-2">{product.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-bright-orange font-bold text-lg">{product.price}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-electric-blue/10 text-electric-blue px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => openProductModal(product)}
                    className="flex-1 bg-gradient-to-r from-bright-orange/20 to-electric-blue/20 border border-bright-orange/30 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:from-bright-orange hover:to-electric-blue hover:border-transparent text-sm"
                  >
                    View Details
                  </button>
                  <button className="bg-electric-blue/20 border border-electric-blue/30 text-electric-blue py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-electric-blue hover:text-white text-sm">
                    Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-bright-orange to-electric-blue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
            Load More Products
          </button>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProductModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-charcoal-black rounded-2xl border border-steel-gray/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-white font-orbitron">
                    {selectedProduct.name}
                  </h2>
                  <button
                    onClick={closeProductModal}
                    className="text-steel-gray hover:text-white transition-colors duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Product Visualization */}
                  <div className="aspect-square bg-gradient-to-br from-deep-black to-charcoal-black rounded-xl overflow-hidden flex items-center justify-center">
                    <div className="text-8xl">{selectedProduct.icon}</div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                      <p className="text-steel-gray leading-relaxed">{selectedProduct.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Specifications</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                          <div key={key} className="bg-deep-black/50 p-3 rounded-lg">
                            <p className="text-bright-orange text-sm font-semibold capitalize">{key}</p>
                            <p className="text-white">{value as string}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-bright-orange rounded-full" />
                            <span className="text-steel-gray">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-steel-gray/20">
                      <div>
                        <p className="text-3xl font-bold text-bright-orange">{selectedProduct.price}</p>
                        <p className="text-steel-gray">{selectedProduct.availability}</p>
                      </div>
                      <div className="flex gap-4">
                        <button className="bg-gradient-to-r from-bright-orange to-electric-blue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                          Request Quote
                        </button>
                        <button className="border border-electric-blue text-electric-blue px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-electric-blue hover:text-white">
                          Contact Sales
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCatalog;
