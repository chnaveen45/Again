import React from 'react'
import './Style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";

import Card from 'react-bootstrap/Card';
import ff from './Picture/remove.png';
import { Link } from 'react-router-dom';
import card1 from './Picture/image1.png';
import card2 from './Picture/image2.png';
import card3 from './Picture/image3.png';
import card4 from './Picture/ee.png';
import card5 from './Picture/serve1.png';
import card6 from './Picture/serve2.png';
import card7 from './Picture/serve3.png';
import card8 from '../Navbar/Picture/d9.png';
import card9 from '../Navbar/Picture/whywork.png';
import card10 from '../Navbar/Picture/w2.png';
import card11 from '../Navbar/Picture/vh.jpg';



function Custom() {
  return (
    <div>
      <div className='qq'>


        <div className='header'>
          <img src={ff} alt="logo" className='logo' />
          <div className='navbar' >
            <Link to="/home" className='tt' >Home</Link>
            <Link to="/services" className='tt'>Services</Link>
            <Link to="/aboutus" className='tt'>AboutUs</Link>
            <Link to="/contactus" className='tt'>ContactUs</Link>

          </div>

        </div>
        <div className='uu'>
          <h1>Empowering The Businesses Through The Technology</h1>
          <p>At Vishwasri Technologies, we empower businesses by leveraging cutting-edge technology to drive growth and innovation. Our custom software solutions are designed to streamline operations, enhance efficiency, and unlock new opportunities.</p>
        </div>

      </div>

      <div className="company-container">
        <div className="company-text">
          <h1 style={{ color: '#0000B3', fontFamily: 'Josefin Sans' }}><b>Our Company</b></h1>
          <p>
            Welcome to Vishwasri Technologies Pvt Ltd, a dynamic startup dedicated to crafting innovative
            software solutions tailored to meet the diverse needs of modern businesses.
          </p>
          <p>
            At Vishwasri Technologies, we specialize in custom software development, delivering high-quality,
            scalable, and user-centric applications that empower organizations to thrive in a competitive
            landscape. Whether you’re a startup, small business, or an established enterprise, our expertise
            ensures we bring your ideas to life with precision and creativity.
          </p>
          <img src={card4} alt='loading...' className='aa'></img>
        </div>
        <div className="image-grid">
          <img src={card1} alt="loading..." className='pp' />
          <img src={card2} alt="loading..." />
          <img src={card3} alt="loading..." className='pp' />

        </div>
      </div>

      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center', color: '#0000B3', fontFamily: 'Inria Serif', marginTop: '-3%' }}><b>Services</b></h1>
        <div className="mm">



          <div>
            <Card className="custom-card">
              <Card.Img variant="top" src={card5} />
              <Card.Body style={{ background: '#014CA6', color: 'white', }}>
                <Card.Title>Graphic Design</Card.Title>
                <Card.Text>Our graphic design team brings creativity and professionalism to every project. We offer a range of design services, including branding, logo creation, social media graphic and marketing materials. Our goal is to help your business make a lasting visual impression that resonates with tour audience. <Link to="/services#graphic-design"style={{ color: 'red' }}>  Know more</Link></Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="custom-card">
              <Card.Img variant="top" src={card6} />
              <Card.Body style={{ background: '#014CA6', color: 'white', }}>
                <Card.Title>Web & App Development</Card.Title>
                <Card.Text>With a focus on functionality and user experience, our web development team creates responsive, secure, and visually appealing websites. From e-commerce platforms to corporate websites, we ensure that each site reflects the brand’s identity while meeting <Link to="/services#web-development" style={{ color: 'red' }}>  Know more</Link> </Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="custom-card">
              <Card.Img variant="top" src={card7} />
              <Card.Body style={{ background: '#014CA6', color: 'white', }}>
                <Card.Title>Marketing</Card.Title>
                <Card.Text>Our marketing services are designed to help your business grow in a digital-first world. We offer comprehensive strategies across social media marketing, search engine optimization (SEO), content marketing and paid advertising, helping to increase brand visibility, reach target audiences. <Link to="/services#marketing" style={{ color: 'red' }}>  Know more</Link> </Card.Text>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>




      <div>
        <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '4%', marginBottom: '4%', color: '#0000B3', fontFamily: 'Inria Serif', }}><b>Development Process</b></h2>
        <div className="development-process">
          <div className="text-content">

            <div className="process-diagram">
              <div className="process-box top-left bv1" >
                <h3>Discovery</h3>
                <p>
                  Understanding the project requirements, target audience, and goals through research and analysis. It sets the foundation for designing a solution.
                </p>
              </div>
              <div className="process-box top-right bv2">

                <h3>Design</h3>
                <p>
                  The design phase focuses on creating detailed blueprints, wireframes, and prototypes to define the system architecture and user experience.
                </p>

              </div>
              <div className="process-box center-box  bv" >

                <h3>Launch & Maintenance</h3>
                <p>
                  This involves deploying the software to users and providing ongoing updates, support, and enhancements to ensure optimal performance.
                </p>

              </div>
              <div className="process-box bottom-left bv3">
                <h3>Development</h3>
                <p>
                  The development phase involves coding, integrating, and building the software components based on the design specifications.
                </p>
              </div>
              <div className="process-box bottom-right bv4">
                <h3>Testing</h3>
                <p>
                  The testing ensures the software's quality by identifying and fixing bugs, verifying functionality, and validating performance against requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="side-image">
            <img src={card8} alt="loading..."></img>
          </div>
        </div>

      </div>


      <h1 class="title-section" style={{ display: 'flex', justifyContent: 'center', marginTop: '4%', marginBottom: '4%', color: '#0000B3', fontFamily: 'Inria Serif', }} ><b>Why Choose Us</b></h1>
      <div class="why-choose-us-container">

        <div class="content-wrapper">
          <div class="images-section">
            <img src={card9} alt="Office space" class="image top-image" />
            <img src={card10} alt="Team collaboration" class="image bottom-image" />
          </div>
          <div class="content-section">
            <p>
              We are committed to delivering scalable solutions that are adaptable
              and future-ready, ensuring our clients stay prepared for evolving
              business landscapes. With an agile development approach, we embrace
              flexibility and iterative processes to deliver efficient and timely
              results. Our customer-centric philosophy focuses on tailoring solutions
              to meet each client's unique needs and goals.
            </p>
          </div>
        </div>
      </div>

      <div>


        <footer className="footer" style={{ display: 'flex', justifyContent: 'center', marginTop: '4%', }}>
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

        </footer>

      </div>
    </div>


  )
}

export default Custom;