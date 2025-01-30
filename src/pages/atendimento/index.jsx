import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api";
import "./styles.css";

function DetalhesProcesso() {
  const [solicitacao, setSolicitacao] = useState(null);
  const [atender, setAtender] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [justificativa, setJustificativa] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchSolicitacao(id);
    }
  }, [id]);

  const fetchSolicitacao = async (id) => {
    try {
      const response = await api.get(
        `http://localhost:8080/api/solicitacoes/${id}`
      );
      setSolicitacao(response.data);
    } catch (error) {
      console.error(`Erro ao buscar solicitação: ${error}`);
    }
  };

  const patchConcluir = async (id) => {
    if (!id) {
      console.error("ID inválido");
      return;
    }

    if (!status) {
      setError("Erro: O campo status é obrigatório.");
      return;
    }

    if (!justificativa) {
      setError("Erro: O campo justificativa é obrigatório.");
      return;
    }
    setError("");

    const payload = { status, justificativa };

    try {
      const response = await api.patch(
        `http://localhost:8080/api/solicitacoes/${id}/concluir`,
        payload
      );
      console.log("Resposta da API:", response.data);
      setAtender(response.data);
    } catch (error) {
      console.error(
        "Erro ao enviar resultado da atualização",
        error.response?.data || error
      );
    }
  };
  const formatarData = (data) => {
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, "0");
    const mes = String(dataObj.getMonth() + 1).padStart(2, "0");
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="container-detalhes">
      <h1>Detalhes do Processo</h1>
      {solicitacao ? (
        <div>
          <p>ID: {solicitacao.id}</p>
          <p>Nome: {solicitacao.nome}</p>
          <p>Curso: {solicitacao.curso}</p>
          <p>Matricula: {solicitacao.matricula}</p>
          <p>Motivo: {solicitacao.motivo}</p>
          <p>Data da solicitação {formatarData(solicitacao.dataSolicitacao)}</p>
          <p>Descrição: {solicitacao.descricao}</p>
          <p>Arquivo:{solicitacao.anexo}</p>
        </div>
      ) : (
        <p> Nenhuma solicitação encontrada ou carregando dados...</p>
      )}
      <div className="button">
        <select
          id="Selecione o resultado"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="indeferido">Indeferido</option>
          <option value="deferido">Deferido</option>
        </select>

        <textarea
          value={justificativa}
          onChange={(e) => setJustificativa(e.target.value)}
          placeholder="Digite a justificativa..."
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          onClick={() => {
            if (solicitacao?.id) {
              patchConcluir(solicitacao.id);
            } else {
              console.error("ID da solicitação não encontrado!");
            }
          }}
        >
          Concluir
        </button>
      </div>
    </div>
  );
}

export default DetalhesProcesso;