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
            <button onClick={toggleMenu} className="navbar-toggler" type="button">
              <i className="fa fa-bars"></i>
            </button>
            <div className={`collapse navbar-collapse ${menu ? 'show' : ''}`} id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services" onClick={toggleMenu}>Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus" onClick={toggleMenu}>About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus" onClick={toggleMenu}>Contact Us</Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link to="#" className="nav-link" onClick={toggleMenu}><i className="fa fa-search"></i></Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link to="/shop" className="nav-link" onClick={toggleMenu}><i className="fa fa-shopping-cart"></i></Link>
                </li>
                <li className="nav-item d-lg-none">
                  {username ? (
                    <button onClick={logout} className="btn">Welcome, {username}</button>
                  ) : (
                    <Link to="/login" className="btn btn-primary" onClick={toggleMenu}>Login</Link>
                  )}
                </li>
              </ul>
            </div>
            <div className="d-none d-lg-flex align-items-center">
              <Link to="#" className="navbar-link me-3"><i className="fa fa-search"></i></Link>
              <Link to="/shop" className="navbar-link me-3"><i className="fa fa-shopping-cart"></i></Link>
              {username ? (
                <button onClick={logout} className="btn">Welcome, {username}</button>
              ) : (
                <Link to="/login" className="btn btn-primary">Login</Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
