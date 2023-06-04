import React from "react";

const Button = ({ text, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="bg-moderate-cyan text-white font-medium px-10 py-4 rounded-full duration-100 hover:bg-dark-cyan disabled:bg-dark-gray"
    >
      {text}
    </button>
  );
};

export default Button;
