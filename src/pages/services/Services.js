import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeCollection, setActiveCollection] = useState(null);
    

    const descriptions = {
        Makeup: "Makeup is a powerful tool for enhancing one’s natural beauty or creating a completely new look. From everyday makeup for a fresh and natural appearance to glamorous, bold styles for special occasions, makeup allows for creativity and expression. It includes various products like foundation, eyeshadow, lipstick, blush, and mascara. Whether it's for personal use or a professional makeover, makeup can boost confidence and elevate one's style.",
        Hair: "Hair care and styling are key components of personal grooming. Regular haircuts, trims, and treatments help maintain healthy hair, while styling can range from simple blowouts to complex updos or intricate braids. Hair coloring, highlights, and balayage are popular options for those looking to change up their look. Whether you prefer sleek and straight, voluminous curls, or a messy bun, hair plays a significant role in defining one's overall appearance.",
        Skincare: "Skincare involves a regimen of products and treatments designed to keep the skin healthy, glowing, and youthful. It includes cleansing, exfoliating, moisturizing, and protecting the skin with sunscreen. Special treatments like facials, serums, and masks can target specific skin concerns such as acne, dryness, or aging. Proper skincare not only improves the appearance of the skin but also boosts overall well-being and confidence.",
        Nails: "Nail care and nail art are important aspects of self-care and personal expression. Regular manicures and pedicures help maintain nail health by keeping them clean, trimmed, and moisturized. Nail polish, gel nails, or even intricate nail art can add a pop of color and creativity to your hands and feet. From neutral tones to bold designs, nails can complement any outfit or personality.",
        Waxing: "Waxing is a popular method of hair removal that provides smooth, long-lasting results. It involves applying hot wax to the skin and then quickly removing it, along with the hair, using a cloth strip. Common areas for waxing include legs, arms, underarms, and the bikini line. It is an effective way to remove unwanted hair, leaving the skin soft and smooth for weeks. Waxing also exfoliates the skin, giving it a fresh appearance.",
        Massage: "Massage therapy is a holistic approach to relieving tension, stress, and muscle discomfort. It involves the manipulation of muscles and soft tissues to improve circulation, promote relaxation, and alleviate pain. Different types of massages include Swedish, deep tissue, hot stone, and aromatherapy. Regular massages can improve mental well-being, enhance flexibility, and help the body recover from physical exertion, promoting a sense of calm and relaxation.",
    };

    const collectionDescriptions = {
        "Beauty tools": "Beauty tools are essential items that help enhance and maintain personal appearance. These include everything from nail files, tweezers, and eyebrow curlers to hairbrushes and facial rollers. These tools not only help with grooming but also improve the efficiency of beauty routines. Properly using beauty tools ensures a more polished, professional, and effective result, whether it's for skincare, nail care, or makeup application. They are a fundamental part of personal care and hygiene routines.",
        Jewelry: "Jewelry is a timeless way to express personal style, add elegance, and elevate any outfit. From delicate necklaces, rings, and bracelets to statement earrings and watches, jewelry can transform an everyday look into something extraordinary. Whether made of precious metals, gems, or costume materials, jewelry offers an opportunity for creativity and self-expression. It can also hold sentimental value, with pieces passed down through generations or given as meaningful gifts. Jewelry is versatile and can be worn for both casual and formal occasions.",
        Lipsticks: "Lipsticks are a classic beauty product that instantly enhances any makeup look. Available in a wide range of shades, from subtle nudes to bold reds and deep purples, lipsticks are perfect for expressing mood or style. They come in different finishes like matte, glossy, satin, and velvet, allowing individuals to customize their look. Lipsticks not only provide color but also hydrate and protect the lips. Long-lasting formulas ensure that the color stays throughout the day, making lipstick a must-have for any beauty enthusiast.",
        Creams: "Creams are skincare staples designed to hydrate, nourish, and protect the skin. They come in a variety of formulations, including day creams, night creams, and targeted treatments for issues like acne, wrinkles, or dryness. Creams often contain active ingredients like hyaluronic acid, antioxidants, and vitamins that help improve skin texture and health. Using the right cream can maintain skin’s moisture balance, protect it from environmental damage, and address specific concerns, resulting in a radiant, healthy complexion.",
        Powders: "Powders play an important role in makeup application, providing a matte finish and helping to set makeup in place. Loose powders and pressed powders are commonly used to reduce shine, create a smooth base, and prolong the wear of foundation. Powders also work well for contouring and highlighting, offering a lightweight, breathable option for those who prefer minimal coverage. Mineral powders often provide a natural finish, while full-coverage powders ensure a more flawless look. Powders are versatile and a must-have in many makeup kits.",
        Brushes: "Makeup brushes are essential tools for achieving a flawless makeup application. Whether you're using brushes for foundation, eyeshadow, contouring, or blending, the right brush can make all the difference. High-quality brushes ensure precise application and smooth blending, which is key to achieving professional-level results. Brushes come in various shapes and sizes, each designed for specific uses, such as flat brushes for foundation or fluffy brushes for setting powder. Investing in good brushes is crucial for maintaining a flawless, well-blended makeup look."
    };

    const toggleCategoryDescription = (category) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    const toggleCollectionDescription = (collection) => {
        setActiveCollection(activeCollection === collection ? null : collection);
    };

    return (
        <section id="service">
            <h1>Our <span>Services</span></h1>
            <div className="categories">
                <div className="row">
                    <div className="col-md-6 service">
                        <h4>By Categories</h4>
                        <ul className="list">
                            {Object.keys(descriptions).map((category) => (
                                <li key={category}>
                                    <a href="#" onClick={(e) => { e.preventDefault(); toggleCategoryDescription(category); }}>
                                        {category}
                                    </a>
                                    {activeCategory === category && (
                                        <div className="dropdown-content">
                                            <p className="service-description">{descriptions[category]}</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6 service-img">
                        <img src="/img/categories.webp" alt="Services" />
                    </div>
                </div>
            </div>
            <div className="collection">
                <div className="row">
                    <div className="col-md-6 service">
                        <h4>By Collections</h4>
                        <ul className="list">
                            {Object.keys(collectionDescriptions).map((collection) => (
                                <li key={collection}>
                                    <a href="#" onClick={(e) => { e.preventDefault(); toggleCollectionDescription(collection); }}>
                                        {collection}
                                    </a>
                                    {activeCollection === collection && (
                                        <div className="dropdown-content">
                                            <p className="service-description">{collectionDescriptions[collection]}</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6 service-img">
                        <img src="/img/collection.jpg" alt="Collections" />
                    </div>
                </div>
            </div>
            <div className="book-now-container">
            <button className="btn-book-now" onClick={() => navigate("/booknow")}>Book Now</button>
    </div>
        </section>
    );
};

export default Services;
