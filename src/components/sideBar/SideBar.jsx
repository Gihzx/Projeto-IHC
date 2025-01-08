import { useState } from "react";
import "../UI/styles/sideBar.css"; // Arquivo CSS para estilizar a sidebar

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controle do estado da sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterna entre aberto e fechado
  };

  const closeSidebar = () => {
    setIsOpen(false); // Fecha a sidebar
  };

  return (
    <div>
      {/* Botão para abrir/fechar a sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? "Fechar Menu" : "Abrir Menu"}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="sidebar-close" onClick={closeSidebar}>
          X
        </button>
        <ul>
          <li>Início</li>
          <li>Solicitações</li>
          <li>Alterar Senha</li>
        </ul>
      </div>

      {/* Área fora da sidebar que fecha ela ao clicar */}
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </div>
  );
};

export default Sidebar;
