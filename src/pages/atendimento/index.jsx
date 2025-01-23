import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api";

function DetalhesProcesso() {
  const [solicitacao, setSolicitacao] = useState(null);
  const [atender, setAtender] = useState("");
  const { id } = useParams(); // Obtendo o id da URL

  useEffect(() => {
    if (id) {
      fetchSolicitacao(id); // Passando o id para buscar os detalhes
    }
  }, [id]);

  const fetchSolicitacao = async (id) => {
    try {
      // Alterado para GET caso PATCH não seja apropriado
      const response = await api.get(
        `http://localhost:8080/api/solicitacoes/${id}`
      );
      setSolicitacao(response.data); // Salvando os dados no estado
    } catch (error) {
      console.error(`Erro ao buscar solicitação: ${error}`);
    }
  };

  const patchSolcitacao = async (id) => {
    console.log(id);
    if (!id) {
      console.error("ID inválido");
      return;
    }
    try {
      const response = await api.patch(
        `http://localhost:8080/api/solicitacoes/${id}/atender`,
        console.log(id)
      );
      setAtender(response.data);
    } catch (error) {
      console.log("Erro ao atender solicitação", error);
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
    <div>
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
        <p>Nenhuma solicitação encontrada ou carregando dados...</p>
      )}
      <button onClick={() => patchSolcitacao(id)}> Atender </button>
    </div>
  );
}

export default DetalhesProcesso;