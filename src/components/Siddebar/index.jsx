import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import "./styles.css";
import { useState, useEffect } from "react";

function Sidebar() {
  const [isDocente, setIsDocente] = useState(false);

  useEffect(() => {
    // Supondo que você armazene o tipo de usuário no localStorage
    const tipoUsuario = localStorage.getItem("tipoUsuario"); // ou qualquer outra maneira de identificar o tipo de usuário

    // Exibir o item apenas se o usuário for docente
    if (tipoUsuario === "docente") {
      setIsDocente(true);
    } else {
      setIsDocente(false);
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

        {/* Exibe apenas para o Docente */}
        
          <span className="items-icons-siddebar">
            <MaterialSymbol icon="assignment" size={30} weight={200} />
            <a href="/cradt">CRA - Coordenação de Registro Acadêmico</a>
          </span>
        

        {/* Condição para mostrar os itens só se não for docente */}
   
          <>
            <span className="items-icons-siddebar">
              <MaterialSymbol icon="assignment" size={30} weight={200} />
              <a href="/status">Minhas solicitações</a>
            </span>
          </>
      

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
