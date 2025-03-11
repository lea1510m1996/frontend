import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  const [username, setUsername] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) setUsername(user);
  }, []);

  if (location.pathname === '/login' || location.pathname === '/register') return null;

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUsername(null);
    navigate('/');
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="img/Logo.png" alt="serene beauty" />
            </Link>
            <button onClick={toggleMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>
            <div className={`collapse navbar-collapse ${menu ? 'show' : ''}`} id="navbarNavAltMarkup">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div class="d-flex align-items-center">
          <Link to="#" className="navbar-link me-3"><i className="fa fa-search"></i></Link>
          <Link to="#" className="navbar-link me-3"><i className="fa fa-shopping-cart"></i></Link>
         
          </div>

          {username ? (
                      <button onClick={logout} className="btn">Welcome, {username}</button>
                    ) : (
                      <Link to="/login" className="btn btn-primary">Login</Link>
                    )}
    </div>
      </nav>
    </header>
    </div>
    );
};
export default Header; 
