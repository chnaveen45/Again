import React from 'react'
import { Link } from 'react-router-dom';
import './Services.css';
import Footer from './Footer.js'
import card13 from '../Navbar/Picture/develop.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Services() {
  const { hash } = useLocation(); // Get the hash from the URL

  useEffect(() => {
    if (hash) {
     
      const targetId = hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
       
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.log(`Element with ID ${targetId} not found.`);
      }
    }
  }, [hash]); 
  return (
    <div>

      <div className='backs '>

        <div className='logoo'>
          <div className='vote'>
            <h1>Our Expertise</h1>
            <p>Solutions crafted with care. Your success, our purpose.</p>
          </div>


        </div>
        <div className='navbars' >
          <Link to="/home" className='tts' >Home</Link>
          <Link to="/services" className='tts'>Service</Link>
          <Link to="/aboutus" className='tts'>AboutUs</Link>
          <Link to="/contactus" className='tts'>ContactUs</Link>



        </div>

      </div>
      <div className='workoff'>
        <img src={card13} alt='loading...' className='workoff1' ></img>
      </div>


      <div className='Gapp' >
        <div className="text-overlay-container" style={{ marginTop: '19%' }}>
          <div className="hh" id="web-development">
            <div className="overlay"></div>

            <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#22177A', paddingBottom: '10px', marginLeft: '5px' }}>
              <b>Web Development</b>
            </h1>
            <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif', marginLeft: "5px", paddingBottom: "60px" }}>
              With a focus on functionality and user experience, our web development team creates responsive, secure, and visually appealing websites. From e-commerce platforms to corporate websites, we ensure that each site reflects the brand’s identity while meeting the latest web standards and technological advancements.
            </p>
          </div>
        </div>

        <div className="text-overlay-container" style={{ marginTop: '3%' }}>
          <div className="ff"  id="app-development">
            <div className="overlay"></div>

            <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#22177A', paddingBottom: '10px', marginLeft: '5px' }}>
              <b>App Development</b>
            </h1>
            <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif', marginLeft: "5px", paddingBottom: "60px" }}>
              We specialize in developing mobile applications that are user-friendly, efficient, and scalable. From concept to deployment, our app development process is tailored to meet each client’s unique needs, delivering high-quality applications for Android, iOS, and cross-platform solutions that drive user engagement and satisfaction.
            </p>
          </div>
        </div>

        <div className="text-overlay-container" style={{ marginTop: '3%' }}>
          <div className="gf" id="marketing">
            <div className="overlay"></div>

            <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#22177A', paddingBottom: '10px', marginLeft: '5px' }}>
              <b>Marketing</b>
            </h1>
            <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif', marginLeft: "5px", paddingBottom: "60px" }}>
              Our marketing services are designed to help your business grow in a digital-first world. We offer comprehensive strategies across social media marketing, search engine optimization (SEO), content marketing, and paid advertising, helping to increase brand visibility, reach target audiences, and achieve measurable results.
            </p>
          </div>
        </div>
        <div className="text-overlay-container" style={{ marginTop: '3%', marginBottom: '5%' }}>
          <div className="tf" id="graphic-design">
            <div className="overlay"></div>

            <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#22177A', paddingBottom: '10px', marginLeft: '5px' }}>
              <b>Graphic Designing</b>
            </h1>
            <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif', marginLeft: "5px", paddingBottom: "60px" }}>
              Our graphic design team brings creativity and professionalism to every project. We offer a range of design services, including branding, logo creation, social media graphics, and marketing materials. Our goal is to help your business make a lasting visual impression that resonates with your audience.
            </p>
          </div>
        </div>

      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Services;