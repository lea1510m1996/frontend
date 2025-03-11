import React, { useEffect, useState } from "react";

const Mjenjacnica = () => { 
  const [currency, setCurrency] = useState(null);
  const [amount,setAmount] = useState(1);

  useEffect(() => {
    fetch("https://api.frankfurter.app/latest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.rates); // Provjera u konzoli
        setCurrency(data.rates); // Postavljanje podataka u state
      })
      .catch((error) => console.error("Greška pri dohvaćanju podataka:", error));
  }, []);
if(!currency) return <p>Učitavanje...</p>;

  return (
    <div className="container blog">
      <h1>Mjenjačnica</h1>

      <select name="currency" id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
    </select>

      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      {currency ? (
        Object.keys(currency).map((key) => (
          <p key={key}>
            <strong> {key}: </strong> {currency[key]* amount}
          </p>
        ))
      ) : (
        <p>Učitavanje...</p>
      )}
    </div>
  );
};

export default Mjenjacnica;
