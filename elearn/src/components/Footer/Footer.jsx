import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
       <div id="upper">
          <div id="firstbox">
             <h3>About Us</h3>
            <ul>
              <li>Contact Us</li>
              <li>Who Are We?</li>
              <li>Employement</li>
              <li>FAQs</li>
             </ul>
          </div>
          <div id="secondbox">
             <h3>Elearning Solutions</h3>
             <ul>
              <li>eLearning Development</li>
              <li>eLearning Lecture Video</li>
              <li>eLearning Success Manager</li>
              <li>eLearning Website</li>
             </ul>
          </div>
          <div id="thirdbox">
             <h3>Elearning Toolbox</h3>
             <ul>
              <li>Animations</li>
              <li>Camtasia Templates</li>
              <li>Evolve Templates</li>
              <li>Industry Updates</li>
             </ul>
          </div>
       </div>
      <div id="middle">
          <ul>
            <li>PRIVACY POLICY</li>
            <li>TERMS AND CONDITIONS</li>
            <li>SERVICE AGREEMENT</li>
            <li>SITE MAP</li>
          </ul>
      </div>
    </div>
  )
}

export default Footer