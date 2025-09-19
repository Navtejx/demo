'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Upload, 
  X, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Users,
  Building
} from 'lucide-react';
import { validateEmail, validatePhone, formatFileSize } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  files?: FileList;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const projectTypes = [
    'Fabrication of Steel Structure',
    'Erection of Steel Structure',
    'Storage Tank',
    'Pipeline (Gas, Water & Underground Pipeline)',
    'Chimney',
    'Hopper',
    'Conveyor Line',
    'Custom Solution',
  ];

  const budgetRanges = [
    'Under ₹40,00,000',
    '₹40,00,000 - ₹80,00,000',
    '₹80,00,000 - ₹4,00,00,000',
    '₹4,00,00,000 - ₹8,00,00,000',
    'Over ₹8,00,00,000',
    'Prefer to discuss',
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      const maxSize = 10 * 1024 * 1024; // 10MB
      return validTypes.includes(file.type) && file.size <= maxSize;
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          files: uploadedFiles.map((file: File) => ({
            name: file.name,
            size: file.size,
            type: file.type,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        reset();
        setUploadedFiles([]);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (234) 567-8900', '+1 (234) 567-8901'],
      action: 'tel:+12345678900',
      color: 'text-green-400',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@industrialfabricators.com', 'sales@industrialfabricators.com'],
      action: 'mailto:info@industrialfabricators.com',
      color: 'text-blue-400',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Industrial Boulevard', 'Manufacturing District, State 12345'],
      action: 'https://maps.google.com',
      color: 'text-red-400',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM'],
      action: null,
      color: 'text-yellow-400',
    },
  ];

  return (
    <div
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-br from-deep-black via-charcoal-black to-steel-blue relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-bright-orange to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-electric-blue to-transparent" />
        <div className="absolute top-1/2 left-0 w-2 h-full bg-gradient-to-b from-transparent via-bright-orange to-transparent" />
        <div className="absolute top-1/2 right-0 w-2 h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent" />
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
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6 font-orbitron leading-tight"
          >
            Request Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-orange to-electric-blue">
              {' '}Custom Quote
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-steel-gray max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your industrial fabrication project to life? Contact our expert team 
            for a personalized consultation and detailed quote.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">
                Contact Information
              </h3>
              <p className="text-steel-gray mb-8 leading-relaxed">
                Get in touch with our team of experts. We&apos;re here to help you with your 
                industrial fabrication needs, from initial consultation to project completion.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-br from-charcoal-black/50 to-steel-blue/10 border border-steel-gray/20 hover:border-electric-blue/30 transition-all duration-300">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-charcoal-black to-steel-blue ${info.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-steel-gray text-sm mb-1 group-hover:text-white transition-colors duration-300">
                          {info.action && detailIndex === 0 ? (
                            <a href={info.action} className="hover:text-bright-orange transition-colors duration-300">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-gradient-to-br from-bright-orange/10 to-electric-blue/10 border border-bright-orange/20"
            >
              <h4 className="text-bright-orange font-semibold mb-2 flex items-center space-x-2">
                <AlertCircle size={20} />
                <span>Emergency Support</span>
              </h4>
              <p className="text-steel-gray text-sm mb-2">
                24/7 emergency support for critical projects
              </p>
              <a 
                href="tel:+12345678999" 
                className="text-electric-blue hover:text-bright-orange transition-colors duration-300 font-semibold"
              >
                +1 (234) 567-8999
              </a>
            </motion.div>
          </motion.div>

          {/* Quote Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-charcoal-black/80 to-steel-blue/20 p-8 rounded-2xl border border-steel-gray/20">
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron flex items-center space-x-2">
                <FileText className="text-bright-orange" size={28} />
                <span>Request Quote</span>
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center space-x-3"
                >
                  <CheckCircle className="text-green-400" size={24} />
                  <div>
                    <p className="text-green-400 font-semibold">Quote request sent successfully!</p>
                    <p className="text-green-300 text-sm">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center space-x-3"
                >
                  <AlertCircle className="text-red-400" size={24} />
                  <div>
                    <p className="text-red-400 font-semibold">Error sending quote request</p>
                    <p className="text-red-300 text-sm">Please try again or contact us directly.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        validate: (value) => validateEmail(value) || 'Invalid email address'
                      })}
                      type="email"
                      className="form-input"
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone', {
                        required: 'Phone number is required',
                        validate: (value) => validatePhone(value) || 'Invalid phone number'
                      })}
                      type="tel"
                      className="form-input"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      {...register('company')}
                      className="form-input"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Project Type *
                    </label>
                    <select
                      {...register('projectType', { required: 'Project type is required' })}
                      className="form-input"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="text-red-400 text-sm mt-1">{errors.projectType.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Project Budget Range
                    </label>
                    <select
                      {...register('budget')}
                      className="form-input"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Project Details & Requirements *
                  </label>
                  <textarea
                    {...register('message', { required: 'Project details are required' })}
                    className="form-textarea"
                    rows={5}
                    placeholder="Please describe your project requirements, specifications, timeline, and any other relevant details..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Upload Files (Optional)
                  </label>
                  <p className="text-steel-gray text-sm mb-3">
                    Upload blueprints, specifications, or reference images (PDF, JPG, PNG, Excel - Max 10MB each)
                  </p>
                  
                  <div className="border-2 border-dashed border-steel-gray/30 rounded-lg p-6 text-center hover:border-electric-blue/50 transition-colors duration-300">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png,.xls,.xlsx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="text-steel-gray mx-auto mb-2" size={32} />
                      <p className="text-steel-gray">
                        Click to upload files or drag and drop
                      </p>
                    </label>
                  </div>

                  {/* Uploaded Files */}
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-charcoal-black/50 p-3 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="text-bright-orange" size={20} />
                            <div>
                              <p className="text-white text-sm font-medium">{file.name}</p>
                              <p className="text-steel-gray text-xs">{formatFileSize(file.size)}</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-steel-gray hover:text-red-400 transition-colors duration-300"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-steel-gray cursor-not-allowed'
                      : 'bg-gradient-to-r from-bright-orange to-electric-blue hover:shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner w-5 h-5" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>REQUEST QUOTE</span>
                    </>
                  )}
                </motion.button>

                <p className="text-steel-gray text-sm text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                  We&apos;ll respond to your quote request within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Additional Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 pt-12 border-t border-steel-gray/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
              Prefer to talk directly?
            </h3>
            <p className="text-steel-gray">
              Our sales team is ready to discuss your project requirements and provide expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
              href="tel:+12345678900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-green-500 hover:to-emerald-500 hover:text-white"
            >
              <Phone size={20} />
              <span>Call Sales Team</span>
            </motion.a>

            <motion.a
              href="mailto:sales@industrialfabricators.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 hover:text-white"
            >
              <Mail size={20} />
              <span>Email Sales</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:text-white"
            >
              <Users size={20} />
              <span>Schedule Meeting</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
