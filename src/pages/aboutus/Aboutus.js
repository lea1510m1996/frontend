import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Aboutus.css";

const Aboutus = () => {
    
    return (
        <div className="about-us">
            <div className="video-section">
            <iframe className="yt" src="https://www.youtube.com/embed/uzR-D1D8kiA?si=qKcxgUWI0qerEkub" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> 

            <div className="quote">
            <div className="row">
                <div className="col-md-6">
                <h2>If It Makes You Feel <span>Beautiful</span>, Then <span>Do It</span>.</h2>
                </div>
                <div className="col-md-6 custom-text">
                <p>Life inside our beauty salon is never a dull moment, and the enthusiasm of wanting to satisfy our customers keeps all of us united.</p>
                </div>
            </div>
            </div>
            
            <div className="story">
            <h2 style={{ height: "60px", fontSize: "48px" }}> Our <span>Story</span></h2>
            <div className="text-about">
                <p>
                Since 2012 in a charming Hawaii Town, Serene Beauty emerged as a haven for beauty and tranquility. Founded by Sarah, a passionate hairstylist, the salon's simple yet profound vision was to enhance natural beauty while providing a peaceful escape.
                <hr />
                With time, Serene Beauty's dedicated team grew, offering a range of services from esthetics to makeup. It became a beloved part of the community, known for its serene ambiance and commitment to giving back through charity events.
                </p>
                <img className="bs" src="/img/3slike.png" alt="Beauty Service 1" />
            </div>
            </div>

            <div className="ceo-section">
    <div className="row">
        <div className="col-md-6 ceo">
            <img src="/img/ceo.png" alt="Sarah Johnson" className="ceo-image" />
        </div>
        
        <div className="col-md-6 ceo-info">
            <h3 className="ceo">THE LADY OF THE HOUR (CEO)</h3>
            <h2 className="ceo">Sarah Johnson</h2>
            <p>Meet Sarah, a visionary hairstylist with a passion for beauty and a heart full of dreams. As the owner of Serene Beauty, her journey unfolds in the enchanting world of tranquil transformations.</p>
            <ul className="award">
                <li><span className="number">01</span> <h3 className="ceo">Master Stylist of the Year:</h3> Sarah’s exceptional talent earned her this prestigious title.</li>
                <li><span className="number">02</span> <h3 className="ceo">Community Impact Award:</h3> Recognized for her commitment to giving back to the community.</li>
                <li><span className="number">03</span> <h3 className="ceo">Green Beauty Innovator:</h3> Acknowledged for her sustainable beauty practices.</li>
            </ul>
        </div>
    </div>
</div>

        </div>
    );
};

export default Aboutus;
