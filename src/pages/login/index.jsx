import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import api from "../../api";
import "./styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Estado para a mensagem de sucesso
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Use o hook useNavigate

  const handleLogin = async () => {
    if (!email || !senha) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    const request = {
      email,
      senha,
    };

    setIsLoading(true);
    setErrorMessage(""); // Limpar mensagem de erro antes de tentar novamente
    setSuccessMessage(""); // Limpar mensagem de sucesso

    try {
      const response = await api.post("/auth", request);
      console.log(response.data);
      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        setSuccessMessage("Login realizado com sucesso! Redirecionando..."); // Mensagem de sucesso
        setTimeout(() => {
          navigate("/"); // Redireciona para a página inicial após 2 segundos
        }, 2000);
      } else {
        setErrorMessage("Erro: Token não encontrado.");
      }
    } catch (error) {
      console.error(
        "Erro ao fazer login:",
        error.response ? error.response.data : error.message
      );
      setErrorMessage("Erro ao realizar o login. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="login">
          <h1>Login</h1>
        </div>
        <div className="inputs">
          <input
            type="email"
            placeholder="Digite seu E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            required
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
        </div>

      

        <div className="buttons">
          <button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Carregando..." : "Entrar"}
          </button>
          <button className="botao">
            <a href="/cadastro">Cadastrar</a>
          </button>
        
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>} 
    </>
  );
}
