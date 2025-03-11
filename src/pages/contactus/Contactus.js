import React from "react";
import { Link } from "react-router-dom";
import "./Contactus.css";
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'
const Contactus = () => {
        return (
            <>
    <Link to="/contactus"></Link>        
<div class="contact">
      <div class="row">
        <div class="col-md-6 contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out to us for appointments, inquiries, or to experience the tranquility of Serene Beauty. We're here to make your beauty journey as serene as possible.</p>
        <ul class="contact-info">
  <li>
    <div><i class="fa-solid fa-location-dot"></i></div>
    <a href="/">1901 Thornridge Cir. Shiloh, Hawaii 81063, USA</a>
  </li> 
  <li>
    <div><i class="fa-regular fa-envelope"></i></div>
    <a href="/">@serenbeauty.com</a>
  </li>
  <li>
    <div><i class="fa-solid fa-phone-volume"></i></div>
   <a href="/">(629) 555-0129</a>
  </li>
</ul>
        <div class="icons">
          <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.youtube.com"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://www.pinterest.com"><i class="fa-brands fa-pinterest"></i></a>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8379010590294!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c7e6c02d5%3A0x4a0b7d5c40b4c0b1!2s1901%20Thornridge%20Cir.%2C%20Shiloh%2C%20HI%2081063%2C%20USA!5e0!3m2!1sen!2s!4v1689062834287!5m2!1sen!2s" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      
     </div>

        <div class="col-md-6 contact-form">
            <h2>Have a Question?</h2>
            <p><span>Business Hours:</span> <b>Mon – Fri:</b> 08.00 AM to 09.00 PM | <b>Sat:</b> 09.00 AM to 06.00 PM</p>
            <form>
                <div class="form-group">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Email" required />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="What Service You Want?" required />
                    <input type="tel" placeholder="Phone" required />
                </div>
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
    </div>

  <div class="branches">
    <h2>Come And Visit <span>Our Other Branches</span></h2>
    <div class="row">
        <div class="branch col-md-6">
            <div class="branch-content">
                <h3>Lekki, Nigeria</h3>
                <p>6391 Elgin St. Celina, Delaware 10299</p>
                <p><i class="fa-regular fa-envelope"></i> @serenbeauty.com.ng</p>
                <p><i class="fa-solid fa-phone-volume"></i> (207) 555-0119</p>
            </div>
            <img src="img/branches.png" alt="Branch Image" class="branch-img" />
        </div>

        <div class="branch col-md-6">
            <div class="branch-content">
                <h3>Kumasi, Ghana</h3>
                <p>Riverside 25, San Francisco, California</p>
                <p><i class="fa-regular fa-envelope"></i> @serenbeauty.com.gh</p>
                <p><i class="fa-solid fa-phone-volume"></i> (303) 555-0105</p>
            </div>
            <img src="img/branches1.png" alt="Branch Image" class="branch-img" />
        </div>
    </div>
</div>
    </>
  );
};

export default Contactus;