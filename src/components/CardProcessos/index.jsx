import "./styles.css";
import { useNavigate } from "react-router-dom";

function CardProcessos(props) {
  const navigate = useNavigate();

  const handleProcessoClick = () => {
    if (props.processo) { // Mude para props.processo
      console.log("Navigating to:", `/solicitacoes/${props.processo}`);
      navigate(`/solicitacoes/${props.processo}`);
    } else {
      console.error("ID não encontrado para a solicitação.");
    }
  };
  

  return (
    <div className="container-card">
      <div className="header-card">
        <div className="logo-user-card">{props.sigla_nome}</div>
        <div className="header-card-details">
          <span>{props.nome}</span>
          <span className="subinfo">Curso: {props.curso}</span>
          <span className="subinfo">Matricula: {props.matricula}</span>
        </div>
        <span className="label-status">{props.statusDescricao}</span>
      </div>
      <div className="body-card">
        <div className="body-card-details">
          <span>Motivo: {props.motivo}</span>
          <span>Data solicitação: {props.dataSolicitacao}</span>
          <span>Processo: {props.id}</span>
        </div>
      </div>
      <div className="footer-card">
        <button
          className="btn-atender-solicitacao"
          onClick={handleProcessoClick}
        >
          Atender solicitação
        </button>
      </div>
    </div>
  );
}

export default CardProcessos;
