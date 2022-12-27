import React, { useEffect, useState } from "react";
import StateCity from "../../data/state-city.json";
import "./SelectBox.css";

function SelectBox({
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
}) {
  const states = Object.keys(StateCity);
  const cities = StateCity[selectedState || states[0]];

  useEffect(() => {
    selectedState && setSelectedCity(StateCity[selectedState][0]);
  }, [selectedState]);

  return (
    <div className="select">
      <select
        name="name"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        {states.map((state) => (
          <option value={state}>{state}</option>
        ))}
      </select>
      <select
        name="name"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {cities.map((state) => (
          <option value={state}>{state}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
