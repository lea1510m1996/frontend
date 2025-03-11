import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Aboutus.css";
const Aboutus = () => {
        const [ data, setData] = useState(null);
         useEffect(
                () => {
                    fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/pages/335')
                    .then(response => response.json())
                    .then(data => setData(data))
                }, []
            );
        if(!data) return <p>Učitavanje...</p>;
        return(
    <div>
        <div dangerouslySetInnerHTML={{__html:data.content.rendered}} />
        <Link to="">Learn More</Link>
    </div>
                   
    );
};
export default Aboutus;