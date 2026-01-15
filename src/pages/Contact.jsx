import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Your message has been submitted successfully.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Kangra Chess Club', 'Near Bus Stand, Kangra', 'Himachal Pradesh - 176001'],
      color: 'text-red-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['9882770709','7018653816'],
      href: 'tel:+919882770709,+917018653816',
      color: 'text-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@kangrachessclub.synergyayush.com'],
      href: 'mailto:contact@kangrachessclub.synergyayush.com',
      color: 'text-blue-600',
    },
    {
      icon: Clock,
      title: 'Club Hours',
      details: ['Mon-Fri', 'Sat-Sun: 04:00–8:00 PM'],
      color: 'text-purple-600',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Kangra Chess Club</title>
        <meta name="description" content="Contact Kangra Chess Club. Find address, hours, phone, and contact form." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-teal-100 text-xl max-w-xl mx-auto">
            We'd love to help you get started on your chess journey!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-center">
            {contactInfo.map((info, i) => {
              const Card = (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex-1 min-w-[240px] max-w-sm bg-gray-50 rounded-xl p-5 text-center shadow hover:shadow-md"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow mb-3">
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                  {info.details.map((d, j) => (
                    <p key={j} className={`text-sm ${info.href ? 'text-teal-700 underline' : 'text-gray-600'}`}>
                      {d}
                    </p>
                  ))}
                </motion.div>
              );

              return info.href ? (
                <a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {Card}
                </a>
              ) : (
                <div key={info.title}>{Card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg flex justify-center items-center"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27038.02187770644!2d76.25202633414115!3d32.10296783293057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b458198590ddf%3A0xad8e3ff3dfe5b1fe!2sKangra%2C%20Himachal%20Pradesh%20176001!5e0!3m2!1sen!2sin!4v1750527113823!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kangra Chess Club Location"
                ></iframe>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Kangra Chess Club</h4>
                <p className="text-gray-600 text-sm">
                  Located in the heart of Kangra, our club is easily accessible by public transport. 
                  We're just a 5-minute walk from the main bus stand.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
