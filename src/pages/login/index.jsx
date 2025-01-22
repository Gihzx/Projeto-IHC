import "./styles.css";
export default function Login() {
  return (
    <>
      <div className="container">
        <div className="login">
          <h1>Login </h1>
        </div>
        <div className="inputs">
          <input type="e-mail" placeholder="Dite seu E-mail" required />
          <input type="password" placeholder="Dite sua senha" required />
        </div>
        <div className="buttons">
          <button>Entrar</button>
          <button className="ancora">Cadastro</button>
        </div>
      </div>
    </>
  );
}
