import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img className='logo' src='/logo_1.png' alt="" />
                <p>
                    DrinkHub is a modern web application crafted for 
                    showcasing and ordering a variety of beverages.
                     From rich coffees to refreshing teas, it’s designed 
                     to offer users an easy and engaging way to
                      explore, select, and enjoy their favorite drinks.
                </p>
                <div className="footer-social-wrapper">
                    <div className="footer-social-icons"><img src={assets.facebook_icon} alt="" /></div>
                    <div className="footer-social-icons"><img src={assets.linkedin_icon} alt="" /></div>
                    <div className="footer-social-icons"><img src={assets.twitter_icon} alt="" /></div>
                    
                </div>
                
            </div>
            <div className="footer-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>Reviews</li>
                </ul>
            </div>
            <div className="footer-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>9014685584</li>
                    <li>ppraveen5019@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 © 2024 DrinksHub. All rights reserved.</p>
    </div>
  )
}

export default Footer