import React, { useState } from 'react';
import './styles.css'; 

const Dropdown = () => {
const [isOpen, setIsOpen] = useState(false);
const urlIconAcessibilidade = './src/assets/acessibilidade.png';

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const aumentarFonte = () => {
    document.body.style.fontSize = 'larger';
  };

  const DiminuirFonte = () => {
    document.body.style.fontSize = 'small';
  };
  const alterarContraste = () => {
    // Alternar a classe de alto contraste no body
    document.body.classList.toggle('alto-contraste');
  
    // Alterar o estilo dos elementos com a classe "card-header-solicitacoes"
    const cardHeaders = document.getElementsByClassName("card-header-solicitacoes");
    for (let i = 0; i < cardHeaders.length; i++) {
      cardHeaders[i].style.backgroundColor = "#000"; // Fundo preto
      cardHeaders[i].style.color = "#FFF"; // Texto branco (opcional)
    }
  
    // Alterar o estilo dos elementos com a classe "card-footer-solicitacoes"
    const cardFooters = document.getElementsByClassName("card-footer-solicitacoes");
    for (let i = 0; i < cardFooters.length; i++) {
      cardFooters[i].style.backgroundColor = "#000"; // Fundo preto
      cardFooters[i].style.color = "#FFF"; // Texto branco (opcional)
    }
  
    // Alterar o estilo dos elementos com a classe "btn-entrar-solicitacao"
    const buttons = document.getElementsByClassName("btn-entrar-solicitacao");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "blue"; // Fundo azul
      buttons[i].style.color = "#FFF"; // Texto branco (opcional)
    }
  };

  return (
    <div className="acessibilidade-container">
      <img
        className="icon-acss"
        src={urlIconAcessibilidade}
        alt="Ícone de Acessibilidade"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={aumentarFonte}>Aumentar Fonte</button>
          <button onClick={DiminuirFonte}>Diminuir Fonte</button>
          <button onClick={alterarContraste}>Alterar Contraste</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;