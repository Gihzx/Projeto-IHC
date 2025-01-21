import { useEffect, useState } from "react";
import CardProcessos from "../../components/CardProcessos";
import api from "../../api";
import "./styles.css";

function Cradt() {
  const [processos, setProcessos] = useState([]);
  useEffect(() => {
    fetchSolicitacao();
  }, []);

  const fetchSolicitacao = async () => {
    try {
      const response = await api.get(
        "http://localhost:8080/api/solicitacoes/abono"
      );
      setProcessos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("erro ao listar solicitação", error);
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
    <div className="container-cradt">
      <div className="search-bar">
        <label htmlFor="matricula_nome_aluno">
          Buscar por matrícula,nome do aluno ou ID do processo...
        </label>
        <input type="text" id="inputSearch" />
      </div>

      <div className="container-type-process-cradt">
        <div className="data-process">
          <h4>Data do Processo</h4>
          <div className="container-input-check-process">
            <input type="checkbox" name="data-process" />
            <label>Todos</label>
          </div>
          <div className="container-input-check-process">
            <input type="checkbox" name="data-process" />
            <label>Ultimos dias</label>
          </div>
          <div className="container-input-check-process">
            <input type="checkbox" name="data-process" />
            <label>Recentes</label>
          </div>
          <div className="container-input-check-process">
            <input type="checkbox" name="data-process" />
            <label>Em andamento</label>
          </div>
        </div>

        <div className="status-process">
          <h4>Status do Processo</h4>

          <div className="container-input-check-process">
            <input type="checkbox" name="status-process" />
            <label>Pendente</label>
          </div>

          <div className="container-input-check-process">
            <input type="checkbox" name="status-process" />
            <label>Concluído</label>
          </div>
        </div>

        <div className="tipo-process">
          <h4>Tipo do Processo</h4>

          <div className="container-input-check-process">
            <input type="checkbox" name="tipo-process" />
            <label>Aproveitamento de Disciplinas</label>
          </div>

          <div className="container-input-check-process">
            <input type="checkbox" name="tipo-process" />
            <label>Abono de Falta</label>
          </div>

          <div className="container-input-check-process">
            <input type="checkbox" name="tipo-process" />
            <label>Trancamento de Matrícula</label>
          </div>

          <div className="container-input-check-process">
            <input type="checkbox" name="tipo-process" />
            <label>Suporte ao cliente</label>
          </div>
        </div>
      </div>

      <div className="container-list-cards-process">
        {processos.map((processo, index) => (
          <CardProcessos
            key={index}
            sigla_nome={processo.nome
              .split(" ")
              .map((parte) => parte.charAt(0))
              .join("")}
            nome={processo.nome}
            curso={processo.curso}
            matricula={processo.matricula}
            motivo={processo.motivo}
            dataSolicitacao={formatarData(processo.dataSolicitacao)}
            processo={processo.id || "N/A"}
            status={processo.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Cradt;
