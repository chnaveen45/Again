import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import card11 from '../Navbar/Picture/vh.jpg';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div>
        
        <footer className="footer" style={{ display: 'flex', justifyContent: 'center', marginTop: '4%',}}>
  <div className="footer-content">
    <div className="footer-section">
      <h4>Services</h4>
      <Link to="/services#web-development">Web Development</Link><br />
      <Link to="/services#app-development">App Development</Link><br />
      <Link to="/services#graphic-design">Graphic Design</Link><br />
      <Link to="/services#marketing">Marketing</Link>
      <div className="social-icons">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/vishwasri_technologies_01/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.youtube.com/@VISHWASRITECHNOLOGIES" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="https://www.linkedin.com/in/vishwasri-technologies-330005331/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.vishcom.net" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} /></a>
      </div>
    </div>
    <div className="footer-section">
      <h4>Industries we serve</h4>
      <a href="#ecommerce"><p>E-commerce</p></a>
      <a href="#finance"><p>Finance</p></a>
      <a href="#education"><p>Education</p></a>
      <a href="#healthcare"><p>Health care</p></a>
      <a href="#retail"><p>Retail</p></a>
    </div>
    <div className="footer-section">
      <h4>Contact Us</h4>
      <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:VISHWASRITECHNOLOGIES@vishcom.net">VISHWASRITECHNOLOGIES@vishcom.net</a></p>
      <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+91 7330669716">+91 7330669716</a></p>
      <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+91 9908208857">+91 9908208857</a></p>
    </div>
    <div className="footer-section">
      <h4>Located At</h4>
      <div className="location-info">
        <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
        <a href="https://www.google.com/maps/place/Vishwasri+Technologies+Pvt.Ltd/@17.4442944,78.4634537,99m/data=!3m1!1e3!4m12!1m5!3m4!2zMTfCsDI2JzM4LjQiTiA3OMKwMjcnNDguMSJF!8m2!3d17.444!4d78.4633611!3m5!1s0x3bcb9100083e8389:0xceb1ec1986df69c8!8m2!3d17.4441096!4d78.4633524!16s%2Fg%2F11wwpw6zvb?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D">1-10-74/B&C FLAT NO: T-402/B, TECHNOPOLIS GALADA COMPLEX, DWARAKA DAS COLONY, BEGUMPET 500016</a>
      </div>
    
      <div className="footer-image">
    <img src={card11} alt="loading..." />
  </div>
    </div>
  </div>
  {/* <div className="footer-image">
    <img src={card11} alt="loading..." />
  </div> */}
</footer>

    </div>
  )
}

export default Footer