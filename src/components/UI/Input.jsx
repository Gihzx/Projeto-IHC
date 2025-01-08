import React from "react";
import "../UI/styles/input.css"; // Arquivo de estilo separado
const Input = ({ id, placeholder, value, onChange, type = "text"}) => {
  return (
    <div className="input-container">
      <input
        className="custom-input"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
