import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => { 
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();  
    setIsLoading(true);
    setError("");

    fetch("https://frontend.internetskimarketing.eu/backend/wp-json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
    .then((response) => response.json())
    .then((data) => {
      setIsLoading(false);
      setForm({
        username: "",
        password: "" 
      });

      if (data?.code) {
        setError("Neispravni podaci, pokušajte ponovo");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user_display_name);
      console.log(data);
      navigate("/");
      window.location.reload();
    })
    .catch((err) => {
      setIsLoading(false);
      setError("Došlo je do greške na serveru. Pokušajte kasnije.");
      console.error("Fetch error:", err);
    });
  };

  return (
    <div className="login">
      <Link to="/" className="home-link">
        <i className="fas fa-arrow-left"></i> Homepage
      </Link>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 login-intro">
            <img src="img/woman.png" alt="Woman" />
            <h1>We show your skin, hair, and body the care and attention they deserve.</h1>
            <p>Where Tranquility Meets Transformation.</p>
          </div>

          <div className="col-md-6 login-form">
            <form className={isLoading ? "loading" : ""} onSubmit={handleLogin}>
              <h2>Login</h2>
              <p>Welcome back, we are glad you are feeling beautiful today. Login to continue</p>

              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="username"
                placeholder="Email"
                autoComplete="email"
                onChange={handleChange}
                required
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <input type="checkbox" id="rememberMe" name="remember" value="yes" />
              <label htmlFor="rememberMe">Remember me</label>

              <button type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </button>

              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>

              {error && <p className="alert alert-danger">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
