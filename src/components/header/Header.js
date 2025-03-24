import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [username, setUsername] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) setUsername(user);
  }, []);

  useEffect(() => {
    fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/pages/294480')
      .then(response => response.json())
      .then(data => {
        if (data && data.content && data.content.rendered) {
          const textContent = data.content.rendered.replace(/<[^>]+>/g, ''); // Uklanja HTML tagove
          setApiData([textContent]);
        }
      })
      .catch(error => console.error("Greška pri dohvaćanju API podataka:", error));
  }, []);

  if (location.pathname === '/login' || location.pathname === '/register') return null;

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSearchQuery(""); 
    setSearchResults([]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    let results = [];

    // Pretraga unutar HTML elemenata
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a, li, div");
    elements.forEach((el) => {
      if (el.textContent.toLowerCase().includes(query.toLowerCase()) && el.offsetParent !== null) {
        results.push(el.textContent);
      }
    });

    // Pretraga unutar API podataka
    apiData.forEach((text) => {
      if (text.toLowerCase().includes(query.toLowerCase())) {
        results.push(text);
      }
    });

    setSearchResults(results.slice(0, 5)); // Prikazuje max 5 rezultata
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setShowSearch(false);
      setSearchQuery("");
      setSearchResults([]);
    }
  };

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
                  <Link to="#" className="nav-link" onClick={toggleSearch}><i className="fa fa-search"></i></Link>
                  {showSearch && (
                    <div className="search-box">
                      <input
                        type="text"
                        placeholder="Pretraži..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        onKeyDown={handleSearchKeyDown}
                        className="search-input"
                      />
                      {searchResults.length > 0 && (
                        <ul className="search-results">
                          {searchResults.map((result, index) => (
                            <li key={index}>{result}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
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
              <Link to="#" className="navbar-link me-3" onClick={toggleSearch}>
                <i className="fa fa-search"></i>
              </Link>
              {showSearch && (
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Pretraži..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    className="search-input"
                  />
                  {searchResults.length > 0 && (
                    <ul className="search-results">
                      {searchResults.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
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
