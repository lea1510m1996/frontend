import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import SliderProducts from "./SliderProducts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Shop.css';


const Shop = () => {

    const [categories, setCategories] = useState([]);    
    useEffect(
        () => {
            fetch('https://dummyjson.com/products/categories')
            .then(response => {
                return response.json();
            })
            .then(data => setCategories(data))
        }, []
    );

    var heroSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    };

    var heroCategories = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      swipeToSlide: true,
      adaptiveHeight: true,
  };

    return(
      <>
        <div class="shop">
            <Slider {...heroSlider}>
                <div>
                <div class="px-4 py-5 my-5 text-center">
                        <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1>
                        <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="container col-xxl-8 px-4 py-5">
                        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div class="col-10 col-sm-8 col-lg-6">
                                <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            </div>
                            <div class="col-lg-6">
                                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
                                <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                <div>
                <div class="container col-xxl-8 px-4 py-5">
                        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div class="col-lg-6">
                                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
                                <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                                </div>
                            </div>
                            <div class="col-10 col-sm-8 col-lg-6">
                                <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

            <div className="categories container overflow-hidden">
                <Slider {...heroCategories}>
                    {categories.map(category => (
                        <div className="categoryName">
                            <h1>{category.name}</h1>
                        </div>
                    ))}
                </Slider>
            </div>
        <div>
        <SliderProducts category="smartphones" limit="6" sectionName="Najprodavaniji proizvodi"/>
        <SliderProducts category="beauty" limit="6" sectionName="Najbolje ocjenjeni proizvodi" />
        </div>
        <Link to="/checkout" className="checkout-link">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            <span>Idi na Checkout</span>
        </Link>
     
        </div>
        </>
    );
    }

export default Shop;