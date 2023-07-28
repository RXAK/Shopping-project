import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="info">
        <h2>Information</h2>
<a href="">About Us</a>
<a href="">Our Team</a>
<a href="">Careers</a>
<a href="">FAQs</a>
      </div>
      <div className="buisness">
        <h2>Buisness</h2>
        <a href="">Be A Partner</a>
        <a href="">Sell On Our site</a>

      </div>
     <div className="help">
        <h2>Need Help?</h2>
        <a href="">Contact us</a>
        <a href="">Terms and Privacy</a>

     </div>
     <div className="subscribe">
<h2>Subscribe To our Newsletter</h2>
<input type="Email" />
<span><button>Subscribe</button></span>
     </div>
    </div>
  )
}

export default Footer
