// src/components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Get In Touch
        </motion.h2>
        <motion.div 
          className="contact-form-container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <motion.div className="form-group" variants={itemVariants}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </motion.div>
            <motion.div className="form-group" variants={itemVariants}>
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </motion.div>
            <motion.div className="form-group" variants={itemVariants}>
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>
            <motion.button 
              type="submit" 
              className="btn-primary"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;