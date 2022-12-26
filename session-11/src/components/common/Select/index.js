import React from "react";

const Select = ({ name, options, value, handleChange }) => {
  console.log(value);
  return (
    <select
      name={name}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      className="form-select appearance-none
        block
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-[#272E35] focus:outline-none"
    >
      <option value="" selected disabled hidden>
        {`Select a ${name}`}
      </option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
