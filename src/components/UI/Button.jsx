import React from "react";
import "../UI/styles/button.css"; // Certifique-se de criar este arquivo CSS

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button className="custom-button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
