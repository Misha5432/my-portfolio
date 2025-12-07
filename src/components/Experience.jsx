// src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 50 },
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
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <motion.div 
          ref={ref}
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="timeline-item" variants={itemVariants}>
            <div className="timeline-date">November 2025 - Present</div>
            <div className="timeline-content">
              <h3>Business Developer Intern</h3>
              <h4>Rigrex</h4>
              <ul>
                <li>Developing and implementing business growth strategies to expand market presence</li>
                <li>Identifying and pursuing new business opportunities through market research and analysis</li>
                <li>Building and maintaining relationships with potential clients and partners</li>
                <li>Collaborating with cross-functional teams to align business development efforts</li>
                <li>Creating and delivering compelling presentations to stakeholders</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div className="timeline-item" variants={itemVariants}>
            <div className="timeline-date">August 2025 - October 2025</div>
            <div className="timeline-content">
              <h3>Business Development Intern</h3>
              <h4>Qubit Dynamics</h4>
              <ul>
                <li>Actively contributed to lead generation and client outreach through LinkedIn and targeted email campaigns</li>
                <li>Conducted detailed market research to identify potential business opportunities</li>
                <li>Analyzed industry trends to support strategic decision-making</li>
                <li>Collaborated closely with the sales team to refine client pitches and enhance engagement strategies</li>
                <li>Assisted in preparing business proposals and developing partnership strategies</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;