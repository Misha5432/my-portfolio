// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <motion.div 
          ref={ref}
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="skill-category" variants={itemVariants}>
            <h3>Technical Skills</h3>
            <div className="skill-list">
              {['Power BI', 'Excel', 'SQL ', 'SPSS', 'JIRA', 'Trello'].map(skill => (
                <motion.div 
                  className="skill-item" 
                  key={skill}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(52, 152, 219, 0.7)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="skill-category" variants={itemVariants}>
            <h3>Web Development</h3>
            <div className="skill-list">
              {['HTML', 'CSS', 'React', 'Wordpress', 'Jupyter Notebook'].map(skill => (
                <motion.div 
                  className="skill-item" 
                  key={skill}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(52, 152, 219, 0.7)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="skill-category" variants={itemVariants}>
            <h3>Soft Skills</h3>
            <div className="skill-list">
              {['Leadership', 'Teamwork', 'Communication', 'Problem Solving', 'Entrepreneurship'].map(skill => (
                <motion.div 
                  className="skill-item" 
                  key={skill}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(52, 152, 219, 0.7)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;