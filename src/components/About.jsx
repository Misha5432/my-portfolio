// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          
          <motion.div 
            className="about-text-container"
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="about-card">
              <div className="about-text">
                <p>
                  Hi, I'm Misha
                </p>
                <p>
                A passionate learner, creator, and someone who thrives on turning ideas into real, meaningful work. With a background in Business and Information Technology, I’ve built a unique blend of technical understanding and business insight that helps me approach problems from multiple angles.
                </p>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;