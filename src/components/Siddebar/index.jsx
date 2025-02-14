import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import "./styles.css";
import { useState, useEffect } from "react";

function Sidebar() {
  const [isServidor, setIsServidor] = useState(false);
  const [isEstudante, setIsEstudante] = useState(false);

  useEffect(() => {
    // Supondo que você armazene o tipo de usuário no localStorage
    const tipoUsuario = localStorage.getItem("tipoUsuario"); // ou qualquer outra maneira de identificar o tipo de usuário

    // Exibir o item apenas se o usuário for servidor (docente)
    if (tipoUsuario === "SERVIDOR") {
      setIsServidor(true);
    } else if (tipoUsuario === "ESTUDANTE") {
      setIsEstudante(true);
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

        {/* Exibe apenas para o Estudante */}
        {isEstudante && (
          <span className="items-icons-siddebar">
            <MaterialSymbol icon="assignment" size={30} weight={200} />
            <a href="/status">Minhas solicitações</a>
          </span>
        )}

        {/* Exibe apenas para o Servidor */}
        {isServidor && (
          <span className="items-icons-siddebar">
            <MaterialSymbol icon="assignment" size={30} weight={200} />
            <a href="/cradt">CRA - Coordenação de Registro Acadêmico</a>
          </span>
        )}

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
