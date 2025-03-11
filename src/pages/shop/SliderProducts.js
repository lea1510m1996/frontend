import React, {useState, useEffect} from "react";
import ProductCard from "./ProductCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderProducts = ({category, limit}) => {

    const [products, setProducts] = useState([]);

    var heroCategories = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        swipeToSlide: true,
        adaptiveHeight: true,
    };

    useEffect(
        () => {
            fetch('https://dummyjson.com/products/category/' + category + '?limit=' + limit)
            .then(res => res.json())
            .then(data => setProducts(data.products))
        }, [category, limit]
    )

    return(
        <>
        <div className="container">
            <Slider {...heroCategories}>
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </Slider>
        </div>
        </>
        
    );
}

export default SliderProducts;