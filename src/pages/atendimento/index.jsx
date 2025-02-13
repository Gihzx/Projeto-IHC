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
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  // Recuperando o token armazenado no localStorage
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (id) {
      fetchSolicitacao(id);
    }
  }, [id]);

  const fetchSolicitacao = async (id) => {
    try {
      const response = await api.get(
        `http://localhost:8080/api/solicitacoes/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Adicionando o token no cabeçalho
          },
        }
      );
      setSolicitacao(response.data);
    } catch (error) {
      setError("Erro ao carregar dados da solicitação.");
      console.error(`Erro ao buscar solicitação: ${error}`);
    }
  };

  const patchConcluir = async (id) => {
    if (!id) {
      setError("ID inválido");
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
    setLoading(true);

    const payload = { status, justificativa };

    try {
      const response = await api.patch(
        `http://localhost:8080/api/solicitacoes/${id}/concluir`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAtender(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Erro ao concluir a solicitação.");
      console.error("Erro ao enviar resultado da atualização", error.response?.data || error);
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
              setError("ID da solicitação não encontrado!");
            }
          }}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Concluir"}
        </button>
      </div>
    </div>
  );
}

export default DetalhesProcesso;
