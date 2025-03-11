import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Greška pri dohvaćanju podataka");
        }
        return response.json();
      })
      .then((data) => {
        const sortedCountries = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (countries.length === 0) return <p>Učitavanje...</p>;

  return (
    <div 
      className="container" 
      style={{ 
        maxWidth: "600px",  // Ograničava širinu liste
        margin: "0 auto",   // Centriranje kontejnera
        textAlign: "left",  // Osigurava da tekst bude levo
        overflow: "hidden"  // Sprečava "curenje" elemenata desno
      }}
    >
      <h1>Lista država</h1>
      <ul style={{ padding: "0", listStyle: "none" }}>
        {countries.map((country) => (
          <li key={country.cca3} style={{ marginBottom: "5px" }}>
            <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
