import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>Where Tranquility Meets Transformation.</p>
              <Link to="/Mjenjacnica" className="btn">
                Mjenjačnica
              </Link>
              <h3>
                We show your <span>skin, hair, and body</span> the care and
                attention they deserve.
              </h3>
              <a href="#">
                <button className="btn-book-now">Book Now</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Slider {...settings}>
                <div>
                <img src="/img/SlideShow.png" alt="Slide 1" />
                </div>
                <div>
                  <img src="/img/SlideShow.png"  alt="Slide 2" />
                </div>
                <div>
                  <img src="/img/SlideShow.png" alt="Slide 3" />
                </div>
                <div>
                  <img src="/img/SlideShow.png"  alt="Slide 4" />
                </div>
              </Slider>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4>
                Enhance your inner radiance at our <span>beauty sanctuary</span> and let your true beauty shine.
              </h4>
            </div>
            <div className="col-md-4 text-end">
              <a href="#">
                <button className="btn-explore-now">Explore Services</button>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <a href="#">
                <img src="/img/Explore1.png" alt="Hair Salon Haven" />
              </a>
              <p>Hair Salon Haven</p>
              <a href="#" className="explore-now">
                Explore now <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src="/img/Explore2.png" alt="Waxing Salon Haven" />
              </a>
              <p>Waxing Salon Haven</p>
              <a href="#" className="explore-now">
                Explore now <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src="/img/Explore3.png" alt="Skincare Salon Haven" />
              </a>
              <p>Skincare Salon Haven</p>
              <a href="#" className="explore-now">
                Explore now <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
