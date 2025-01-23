import { useState } from "react";
import "./styles.css";
// import api from "../../api";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

//   useEffect(()=>{
//     fetchSolicitacao()
//   },[])

//   const request = {
//     email:email,
//     password:password
//   }
//   const fetchSolicitacao = async () => {
//     try {
//       const response = await api.post(
//         "http://localhost:8080/api/solicitacoes/abono", request,
//       );
      
//       console.log(response.data);
//     } catch (error) {
//       console.error("erro ao listar solicitação", error);
//     }
//   };
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
