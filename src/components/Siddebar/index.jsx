import { useState, useEffect } from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import "./styles.css";

function Sidebar() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1])); // Decodifica o payload do JWT
        setPerfil(payload.perfil); // Obtém o perfil do usuário
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
      }
    }
  }, []);

  return (
    <nav className="sidebar-nav">
      <span id="menu-icon-siddebar">
        <MaterialSymbol icon="Menu" size={30} weight={200} />
      </span>
      <div className="siddebar-items">
        <span className="items-icons-siddebar">
          <MaterialSymbol icon="Home" size={30} weight={200} />
          <a href="/">Início</a>
        </span>

        {/* Exibe a rota conforme o perfil do usuário */}
        {perfil === "SERVIDOR" ? (
          <span className="items-icons-siddebar">
            <MaterialSymbol icon="assignment" size={30} weight={200} />
            <a href="/cradt">CRA - Coordenação de Registro Acadêmico</a>
          </span>
        ) : perfil === "ESTUDANTE" ? (
          <span className="items-icons-siddebar">
            <MaterialSymbol icon="assignment" size={30} weight={200} />
            <a href="/status">Minhas solicitações</a>
          </span>
        ) : null}

        <span className="items-icons-siddebar">
          <MaterialSymbol icon="key" size={30} weight={200} />
          <a href="#">Alterar senha</a>
        </span>
        <span className="items-icons-siddebar">
          <MaterialSymbol icon="link" size={30} weight={200} />
          <a href="#">Links úteis</a>
        </span>
      </div>
    </nav>
  );
}

export default Sidebar;
