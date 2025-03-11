import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
    return(
        
    <div>
<div className="login">
<Link to="/" class="home-link"> <i class="fas fa-arrow-left"></i> Homepage</Link>
<div className="container-fluid">
<div className="row">
<div className="col-md-6 login-intro">
<img src="img/register.png" /> 
<h1>We show your skin, hair, and body the care and attention they deserve.</h1>
<p>Where Tranquility Meets Transformation.</p>
</div>


<div className="col-md-6 login-form">
<div>

<form>
<h2>Register</h2>
<p>Welcome to Serene Beauty Salon, we hope your stay with us feel as bright as the morning sun.</p>

<label for="name">Your Name</label>
<input type="text" id="name" name="name" placeholder="Your Name" autoComplete="name" />


<label for="email">Email</label>
<input type="text" id="email" name="email" placeholder="Email" autoComplete="email" />


<label for="password">Password</label>
<input type="password" id="password" name="password" placeholder="Password" autoComplete="new-password" />

<input type="checkbox" id="rememberMe" name="remember" value="yes" />
<label for="rememberMe">Remember me</label>

<button type="submit">Register</button>
<p>Already have an account? <a href="#">Login</a></p>
</form>
</div>
</div>
</div>
</div>
</div>
</div>

    );
}
export default Register;