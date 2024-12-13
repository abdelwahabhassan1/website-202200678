import React from 'react';
import './AboutUs.css'; 

function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Your trusted car dealership since [2024]</p>
      </header>
      <section className="about-us-content">
        <h2>Our Mission</h2>
        <p>
          At [Car dealership], our mission is to provide quality vehicles and exceptional service that meet the diverse needs of our customers.
        </p>
        <h2>Our History</h2>
        <p>
          [car dealership] was founded in [2024] with a vision to revolutionize the car dealership experience. Over the years, we have grown to become one of the most trusted names in the industry.
        </p>
        <h2>Meet Our Team</h2>
        <p>Our team consists of dedicated professionals who are passionate about helping you find your perfect car.</p>
        <ul className="team-list">
          <li>Abdelwahab Hassan - CEO</li>
          <li>Ibrahim Ahmed - Sales Manager</li>
          <li>Jana Ashraf - Customer Support</li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          Got questions? Reach out to us at <a href="mailto:info@cardealer.com">info@cardealership.com</a> or call us at (+20) 114444887.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
