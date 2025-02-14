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
        {}, // Enviar dados necessários se houver
        {
          headers: {
            Authorization: `Bearer ${token}`, // Adicionando o token no cabeçalho
          },
        }
      );
      setAtender(response.data); // Atualiza o estado se necessário
      console.log("Status atualizado com sucesso!", response.data);
    } catch (error) {
      console.error("Erro ao atender solicitação", error);
    }
  };

  const handleProcessoClick = async () => {
    if (props.processo) {
      console.log("Navigando para:", `/solicitacoes/${props.processo}`);

      // Atualiza o status antes de navegar
      await patchSolicitacao(props.processo);

      // Após o PATCH, navega para a página da solicitação
      navigate(`/solicitacoes/${props.processo}`);
    } else {
      console.error("ID não encontrado para a solicitação.");
    }
  };

  return (
    <>
  
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
    </>
  );
}

export default CardProcessos;
