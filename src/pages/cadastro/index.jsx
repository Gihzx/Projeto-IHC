import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tipo, setTipo] = useState("Discente"); // Estado para armazenar o tipo de usuário
  const navigate = useNavigate();

  const handleCadastro = async () => {
    const url =
      tipo === "Discente"
        ? "http://localhost:8080/api/estudante"
        : "http://localhost:8080/api/servidor";

    const dados = { username, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (response.ok) {
        console.log("Cadastro realizado com sucesso!");
        navigate("/login");
      } else {
        console.log("Erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.log("Erro ao conectar com o servidor.");
      console.error("Erro:", error);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Cadastro</h1>
      </div>
      <div className="inputs">
        <input
          type="email"
          placeholder="Digite seu E-mail"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <select onChange={(e) => setTipo(e.target.value)} value={tipo}>
        <option value="Discente">Discente</option>
        <option value="Docente">Docente</option>
      </select>

      <div className="buttons">
        <button onClick={handleCadastro}>Cadastrar</button>
      </div>
    </div>
  );
}
