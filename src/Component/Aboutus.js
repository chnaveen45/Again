import React from 'react'
import { Link } from 'react-router-dom';
import './Aboutus.css';
import card16 from '../Navbar/Picture/stock.png';
import card17 from '../Navbar/Picture/goal.png';

function Aboutus() {
  return (
    <div>  
        <div className='goods '>

    <div className='logoot'>
      <div className='votess'>
        <h1>About Us</h1>
        <p>At our core, we believe in combining technology and creativity to deliver solutions that make a difference.</p>
      </div>


    </div>
    <div className='navbarss' >
      <Link to="/home" className='ttts' >Home</Link>
      <Link to="/services" className='ttts'>Service</Link>
      <Link to="/aboutus" className='ttts'>AboutUs</Link>
      <Link to="/contactus" className='ttts'>ContactUs</Link>



    </div>

  </div>
  <div class="mission-section">
    <div class="mission-content">
      <h1>Our Mission</h1>
      <p>
        At Vishwasri Technologies Pvt Ltd, our mission is to empower businesses with innovative, reliable, and scalable software solutions that enhance efficiency and drive growth.
      </p>
      <h4>Innovation at Core</h4>
      <p>
        We strive to stay ahead of technological trends, constantly developing creative solutions that solve real-world problems. Innovation is not just about new ideas; it’s about making impactful, sustainable changes.
      </p>
      <h4>Customer-Centric Approach</h4>
      <p>
        We focus on understanding our clients' unique needs, offering personalized services that align with their business goals. Our success is driven by the success and satisfaction of our customers.
      </p>
      <h4>Excellence in Execution</h4>
      <p>
        We are committed to delivering high-quality solutions that exceed expectations. From the first concept to final deployment, we ensure that every step is carried out with precision, care, and attention to detail.
      </p>
    </div>
    <div class="mission-image">
      <img src={card16} alt="Team working together"></img>
    </div>
  </div>
  </div>
  )
}

export default Aboutus