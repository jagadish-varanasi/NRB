import React, { useEffect } from "react";
import { useUserContext } from "../../context/UserContext/UserContext";
import StateCity from "../../data/state-city.json";
import Select from "../common/Select";

function SelectBox() {
  const { selectedCity, setSelectedCity, selectedState, setSelectedState } =
    useUserContext();

  const states = Object.keys(StateCity);
  const cities = StateCity[selectedState || states[0]];

  useEffect(() => {
    selectedState && setSelectedCity(StateCity[selectedState][0]);
  }, [selectedState]);

  return (
    <div className="flex gap-4 mt-6 mr-4 justify-end">
      <Select
        name="state"
        value={selectedState}
        handleChange={setSelectedState}
        options={states}
      />
      <Select
        name="city"
        value={selectedCity}
        handleChange={setSelectedCity}
        options={cities}
      />
    </div>
  );
}

export default SelectBox;
