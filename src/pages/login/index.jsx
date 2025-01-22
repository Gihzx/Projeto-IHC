import { useState } from "react";
import "./styles.css";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <div className="container">
        <div className="login">
          <h1>Login </h1>
        </div>
        <div className="inputs">
          <input
            type="e-mail"
            placeholder="Dite seu E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Dite sua senha"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="buttons">
          <button>Entrar</button>
          <button className="ancora">Cadastro</button>
        </div>
      </div>
    </>
  );
}
