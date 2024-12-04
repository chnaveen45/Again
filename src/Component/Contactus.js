import React from 'react'
import './Contactus.css';
import { Link } from 'react-router-dom';
function Contactus() {
  return (
    <div>
      
      
      <div className='bot '>

        <div className='pen'>
          <div className='ele'>
            <h1>We’re Here For You</h1>
            <p>At Vishwasri Technologies, your success is our priority. Reach out to us anytime—our team is here to guide and support.</p>
          </div>


        </div>
        <div className='got' >
          <Link to="/home" className='ten' >Home</Link>
          <Link to="/services" className='ten'>Service</Link>
          <Link to="/aboutus" className='ten'>AboutUs</Link>
          <Link to="/contactus" className='ten'>ContactUs</Link>



        </div>

      </div>
    </div>
  )
}

export default Contactus