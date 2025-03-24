import React from "react";
import "./Footer.css";



const Footer = () => {
    return (
        <div>
            <footer>
            <div className="footer-container">
                <div class="footer-section">
                    <h4>Brand</h4>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Exchange & Returns</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Pinterest</a></li>
                    </ul>
                </div>
                <div class="footer-section newsletter">
                    <h3>Get to know more about us and everything we do.</h3>
                    <form>
                        <label for="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" autocomplete="name" />

                        {/* Polje za email */}
                        <label for="email">Your Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Your Email Address" autocomplete="email" />

                        {/* Gumb za pretplatu */}
                        <button type="submit">Subscribe</button>
                    </form>
                    <p className="contact-info">reach@serenebeauty.com<br />(629) 555-0129</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="logo"><img src="img/Logo.png" alt="Logo" />
                </div>
                <p>All rights reserved</p>
                <p class="tagline">Where <span>Tranquility</span> Meets
                    <span>Transformation.</span></p>
            </div>
            </footer>
        </div>
        
    );
}
export default Footer;