import { useEffect, useState } from "react";
import CardProcessos from "../../components/CardProcessos";
import api from "../../api";
import "./styles.css";

function Cradt() {
  const [processos, setProcessos] = useState([
    {
      nome: "Gabriel Otávio Nunes Filho",
      curso: "Informática para Internet (Noite)",
      matricula: "20232TI-JG0300",
      motivo: "Trancamento de matrícula",
      data_solicitacao: "23/05/2024 12:45:35",
      processo: null,
      status: "Pendente",
    },
    {
          nome: "Filipe Ferreira de Oliveira",
          curso: "Desenvolvimento de Sistema (Médio Integrado)",
          matricula: "20232TI-JG0302",
          motivo: "Abono de Falta",
          data_solicitacao: "23/05/2024 12:50:34",
          processo: "00000.000003/2024-38",
          status: "Pendente",
        },
        {
          nome: "Jamyli Maraia Silva",
          curso: "Análise Desenvolvimento de Sistema (Manhã)",
          matricula: "20232TI-JG0301",
          motivo: "Trancamento de matrícula",
          data_solicitacao: "23/05/2024 12:45:35",
          processo: "00000.000002/2024-38",
          status: "Pendente",
        },
        {
          nome: "Filipe Ferreira de Oliveira",
          curso: "Desenvolvimento de Sistema (Médio Integrado)",
          matricula: "20232TI-JG0302",
          motivo: "Abono de Falta",
          data_solicitacao: "23/05/2024 12:50:34",
          processo: "00000.000003/2024-38",
          status: "Pendente",
        },
        {
          nome: "Wilian Borges de Santos",
          curso: "Técnico Qualidade (Noite)",
          matricula: "20232QA-JG0303",
          motivo: "Abono de Falta",
          data_solicitacao: "23/05/2024 12:55:34",
          processo: "00000.000004/2024-38",
          status: "Concluído",
        },
  ]);
  useEffect(() => {
    fetchSolicitacao();
  }, []);

  const fetchSolicitacao = async () => {
    try {
      const response = await api.get("/api/solicitacoes-abono");
      setProcessos(response.data);
    } catch (error) {
      console.error("erro ao listar solicitação", error);
    }
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
            data_solicitacao={processo.data_solicitacao}
            processo={processo.processo || "N/A"}
            status={processo.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Cradt;
