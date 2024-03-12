"use client";
import { useEffect, useState } from "react";

export default function Country() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => response.json())
      .then((data) => setCountry(data)) //set the data to our state variable country
      .catch((error) => console.log("Error: " + error));
  }, []);

  console.log(country);
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl">
          Buraya Ülkeler ve beraberinde bir çok özellik geliyor olucak 🌿
        </h1>
        <div className="w-full grid grid-cols-3 gap-3">
          <div className="w-full grid grid-cols-3 gap-3">
            {/* {country.map((country, index) => (
            <div key={index} className="border p-3">
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-16 h-12 object-cover mb-2"
              />
              <p className="text-center">{country.name.common}</p>
            </div>
          ))} */}
          </div>
        </div>
      </div>
    </>
  );
}
