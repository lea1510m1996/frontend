import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleCountry = () => {
  const { id } = useParams();
  const [singleCountry, setSingleCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setSingleCountry(data[0]); // Postavljamo prvi element iz niza
        }
      })
      .catch((error) => console.error("Greška pri dohvaćanju podataka:", error));
  }, [id]);

  if (!singleCountry) return <p>Učitavanje...</p>;

  return (
    <div className="container">
      <h1>{singleCountry.name.common}</h1>
      <p>Glavni grad: {singleCountry.capital ? singleCountry.capital[0] : "Nema podataka"}</p>
      <p>Regija: {singleCountry.region}</p>
      <p>Broj stanovnika: {singleCountry.population.toLocaleString()}</p>
      <img src={singleCountry.flags.svg} alt={`Zastava ${singleCountry.name.common}`} width="200" />
    </div>
  );
};

export default SingleCountry;
