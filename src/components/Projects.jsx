// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projectData = [
    {
      icon: '📊',
      title: 'Sales Analytics Dashboard',
      description: 'Developed an interactive dashboard to visualize sales trends, region-wise performance, and customer segmentation using Power BI',
      techStack: ['Power BI', 'Data Analytics', 'Business Intelligence']
    },
    {
      icon: '👥',
      title: 'HR Analytics Dashboard',
      description: 'Designed a comprehensive HR dashboard tracking employee demographics, attrition, and performance metrics, enabling strategic HR decisions',
      techStack: ['Power BI', 'HR Analytics', 'Data Visualization']
    },
    {
      icon: '🤖',
      title: 'AI Research Project',
      description: 'Implemented AI techniques including Decision Trees and K-Nearest Neighbors (KNN) to develop a cancer detection model',
      techStack: ['Python', 'Machine Learning', 'Jupyter', 'Scikit-learn']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Project',
      description: 'Designed and developed an online store on WordPress, using Elementor for a fully functional shopping experience',
      techStack: ['WordPress', 'Elementor', 'PHP', 'MySQL']
    },
    {
      icon: '✈️',
      title: 'React Travel Agency',
      description: 'Designed and developed a responsive website using React for a travel agency with booking functionality',
      techStack: ['React', 'JavaScript', 'CSS', 'HTML']
    },
    {
      icon: '📝',
      title: 'Student Database Project',
      description: 'Worked on a database project to design and implement a complete course registration system using Microsoft Access',
      techStack: ['Microsoft Access', 'Database Design', 'SQL']
    }
  ];

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
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <motion.div 
          ref={ref}
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectData.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.icon}</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;