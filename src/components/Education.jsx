// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2022 - 2026</div>
            <div className="timeline-content">
              <h3>Bachelor of Business and Information Technology</h3>
              <h4>University of the Punjab, Lahore, Pakistan</h4>
              <p>GPA: 3.30</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2020 - 2022</div>
            <div className="timeline-content">
              <h3>F.Sc. Pre Engineering</h3>
              <h4>Punjab College of Science, Lahore, Pakistan</h4>
              <p>Percentage: 91%</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2018 - 2020</div>
            <div className="timeline-content">
              <h3>Matriculation</h3>
              <h4>American Lycetuff School, Lahore, Pakistan</h4>
              <p>Percentage: 93%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;