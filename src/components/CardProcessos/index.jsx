import "./styles.css";
import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

function CardProcessos(props) {
  const navigate = useNavigate();
  const [atender, setAtender] = useState("");
  
  // Recuperando o token do localStorage
  const token = localStorage.getItem("token");

  const patchSolicitacao = async (id) => {
    if (!id) {
      console.error("ID inválido");
      return;
    }

    try {
      console.log("Enviando PATCH para ID:", id);
      const response = await api.patch(
        `http://localhost:8080/api/solicitacoes/${id}/atender`,
        {}, 
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      setAtender(response.data); 
      console.log("Status atualizado com sucesso!", response.data);
    } catch (error) {
      console.error("Erro ao atender solicitação", error);
    }
  };

  const handleProcessoClick = async () => {
    const id = props.processo; 

    if (id) {
      console.log("Navigando para:", `/solicitacoes/${id}`);
      
      
      await patchSolicitacao(id);
      
      
      navigate(`/solicitacoes/${id}`);
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
          <span>ID: {props.processo}</span> 
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
