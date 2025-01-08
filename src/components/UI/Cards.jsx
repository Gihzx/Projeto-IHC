import React from "react";
import "../UI/styles/card.css";
import Button from "./Button";

const Card = ({ name, image, descriptionLine1, descriptionLine2 }) => {
  return (
    <div className="card">
      <div className="card-name">{name}</div>
      <img src={image} alt={name} className="card-image" />
      <div className="card-description">
        <p>{descriptionLine1}</p>
        <p>{descriptionLine2}</p>
        <div className="button">
          <Button>Entrar</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
