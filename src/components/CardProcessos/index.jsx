import "./styles.css";
function CardProcessos(props) {
  return (
    <div className="container-card">
      <div className="header-card">
        <div className="logo-user-card">{props.sigla_nome}</div>
        <div className="header-card-details">
          <span>{props.nome}</span>
          <span className="subinfo">Curso: {props.curso}</span>
          <span className="subinfo">Matricula: {props.matricula}</span>
        </div>
        <span className="label-status">{props.status}</span>
      </div>
      <div className="body-card">
        <div className="body-card-details">
          <span>Motivo: {props.motivo}</span>
          <span>Data solicitação: {props.dataSolicitacao}</span>
          <span>Processo: {props.processo}</span>
        </div>
      </div>
      <div className="footer-card">
        <a href="#" className="btn-atender-solicitacao">
          Atender solicitação
        </a>
      </div>
    </div>
  );
}

export default CardProcessos;
