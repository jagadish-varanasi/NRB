import React from "react";

const Button = ({ name, type = "button", handleClick = () => {} }) => {
  return (
    <button
      className="py-1.5 px-8 my-2 ml-2 rounded-lg outline-none cursor-pointer bg-white"
      type={type}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
