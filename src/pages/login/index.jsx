import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { useState } from "react";
import api from "../../api";
import "./styles.css";
export default function Login() {
  const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [errorMessage, setErrorMessage] = useState("");
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

  try {
    const response = await api.post("/auth", request);
    console.log(response.data);

    // Supondo que a resposta contenha um token de autenticação
    const token = response.data.token; // Altere conforme a estrutura da resposta da API
    if (token) {
      // Armazenar o token no localStorage ou sessionStorage
      localStorage.setItem("token", token); // Corrigido para usar "token"
     
      // Redirecionar para a página inicial ou dashboard após login bem-sucedido
      navigate("/"); // Altere o caminho conforme necessário
    } else {
      setErrorMessage("Erro: Token não encontrado.");
    }
  } catch (error) {
    // Aqui podemos imprimir a resposta para análise
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
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="buttons">
          <button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Carregando..." : "Entrar"}
          </button>
          <button className="">Cadastro</button>
        </div>
      </div>
    </>
  );
}
