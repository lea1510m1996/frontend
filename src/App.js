import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Contactus from './pages/contactus/Contactus';
import Blog from './pages/blog/Blog';
import BlogSingle from './pages/blog/BlogSingle';
import Aboutus from './pages/aboutus/Aboutus';
import Services from './pages/services/Services';
import Mjenjacnica from './pages/Mjenjacnica/Mjenjacninca';
import Countries from './pages/countries/Countries';
import SingleCountry from './pages/countries/SingleCountry';
import Shop from './pages/shop/Shop';
import ProductCard from './pages/shop/ProductCard';
import CheckoutPage from './pages/shop/CheckoutPage';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Booknow from './pages/home/Booknow';


function App() {



  return (
    <Router>
      <div className="App">
        
        <Header />
        <Routes>
         
          <Route path="/" element={<Home />} /> {/* Početna stranica */}
          <Route path="/login" element={<Login />} /> {/* Login stranica */}
          <Route path="/contactus" element={<Contactus />} /> {/* Kontakt stranica */}
          <Route path="/register" element={<Register />} /> {/* Registracija stranica */}
          <Route path="/blog" element={<Blog />} /> {/* Blog stranica */}
          <Route path="/blog/:id" element={<BlogSingle />} /> {/* Blog stranica */}
          <Route path="/aboutus" element={<Aboutus />} /> {/* O nama stranica */}
          <Route path="/services" element={<Services />} /> {/* Usluge stranica */}
          <Route path="/mjenjacnica" element={<Mjenjacnica />} /> {/* Mjenjačnica stranica */}
          <Route path="/countries" element={<Countries />} /> {/* Države stranica */}
          <Route path="/countries/:id" element={<SingleCountry />} /> {/* Države stranica */}
          <Route path="/shop" element={<Shop />} /> {/* Shop stranica */}
          <Route path="/shop/:id" element={<ProductCard />} /> {/* Shop stranica */}
          <Route path="/checkout" element={<CheckoutPage />} /> {/* Checkout stranica */}
          <Route path="/booknow" element={<Booknow />} /> {/* Booknow stranica */}
        </Routes>
        
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;