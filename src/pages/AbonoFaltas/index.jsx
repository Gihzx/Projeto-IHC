import { useState } from "react";
import axios from "axios";
import { MaterialSymbol } from "react-material-symbols";
import "./styles.css";

function AbonoFaltas() {
  const [anexo, setAnexo] = useState({});
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [curso, setCurso] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [turno, setTurno] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [inicioFalta, setInicioFalta] = useState("");
  const [fimFalta, setFimFalta] = useState("");
  const [motivo, setMotivo] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("matricula", matricula);
    formData.append("curso", curso);
    formData.append("periodo", periodo);
    formData.append("turno", turno);
    formData.append("email", email);
    formData.append("cpf", cpf);
    formData.append("inicioFalta", inicioFalta);
    formData.append("fimFalta", fimFalta);
    formData.append("motivo", motivo);
    formData.append("observacoes", observacoes);

    // Adicione o arquivo apenas se ele existir
    if (anexo.file) {
      formData.append("file", anexo.file);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/solicitacoes",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Dados enviados com sucesso!", response.data);
      setAnexo({});
      setNome("");
      setMatricula("");
      setCurso("");
      setPeriodo("");
      setTurno("");
      setCpf("");
      setEmail("");
      setInicioFalta("");
      setFimFalta("");
      setMotivo("");
      setObservacoes("");
    } catch (error) {
      console.error("Erro ao enviar dados para o back-end", error);
    }
  };

  return (
    <div className="container-abono">
      <div className="home-titulo">
        <h2>Abono de Faltas</h2>
      </div>
      <main>
        <section className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="first-group-fields">
              <div className="form-group">
                <label htmlFor="nome">Nome do aluno(a)</label>
                <input
                  type="text"
                  id="nome"
                  required
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}
                />
              </div>

              <div className="form-group">
                <label htmlFor="matricula">Número de matrícula</label>
                <input
                  type="text"
                  id="matricula"
                  required
                  onChange={(e) => setMatricula(e.target.value)}
                  value={matricula}
                />
              </div>

              <div className="form-group">
                <label htmlFor="curso">Curso</label>
                <select
                  id="curso"
                  required
                  onChange={(e) => setCurso(e.target.value)}
                  value={curso}
                >
                  <option value="">Selecione</option>
                  <option value="curso1">Integrado - Administração</option>
                  <option value="curso2">
                    Integrado - Técnico em Desenvolvimento de Sistemas
                  </option>
                  <option value="curso3">Subsequente - Administração</option>
                  <option value="curso4">
                    Subsequente - Comércio e Gestão de Negócios
                  </option>
                  <option value="curso5">
                    Subsequente - Informática para Internet
                  </option>
                  <option value="curso6">Subsequente - Qualidade</option>
                  <option value="curso7">
                    Superior - Análise e Desenvolvimento de Sistemas
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="periodo">Período/Série</label>
                <input
                  type="text"
                  id="periodo"
                  required
                  onChange={(e) => setPeriodo(e.target.value)}
                  value={periodo}
                />
              </div>

              <div className="form-group">
                <label htmlFor="turno">Turno</label>
                <select
                  id="turno"
                  required
                  onChange={(e) => setTurno(e.target.value)}
                  value={turno}
                >
                  <option value="">Selecione</option>
                  <option value="manha">Manhã</option>
                  <option value="tarde">Tarde</option>
                  <option value="noite">Noite</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  required
                  onChange={(e) => setCpf(e.target.value)}
                  value={cpf}
                />
              </div>

              {/* Colocamos o input início da falta acima do fim da falta */}
              <div className="form-group">
                <label htmlFor="inicioFalta">Início da falta</label>
                <input
                  type="date"
                  id="inicioFalta"
                  required
                  onChange={(e) => setInicioFalta(e.target.value)}
                  value={inicioFalta}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fimFalta">Fim da falta</label>
                <input
                  type="date"
                  id="fimFalta"
                  required
                  onChange={(e) => setFimFalta(e.target.value)}
                  value={fimFalta}
                />
              </div>
            </div>

            <div className="last-group-fields">
              <div className="form-control">
                <label htmlFor="motivo">Motivo da falta</label>
                <select
                  id="motivo"
                  required
                  onChange={(e) => setMotivo(e.target.value)}
                  value={motivo}
                >
                  <option value="">Selecione</option>
                  <option value="atestadoMedico">
                    Problema de saúde, através de atestado médico assinado e
                    carimbado por médico
                  </option>
                  <option value="declaracaoMilitar">
                    Obrigações com o Serviço Militar
                  </option>
                  <option value="declaracaoObito">
                    Falecimento de parente até 2º grau
                  </option>
                  <option value="declaracaoJudiciario">
                    Convocação pelo Poder Judiciário ou Justiça Eleitoral
                  </option>
                </select>
              </div>

              <div className="form-control">
                <label htmlFor="arquivo">Arquivo</label>
                <label className="custom-file-upload">
                  <input
                    type="file"
                    id="arquivo"
                    onChange={(e) =>
                      setAnexo({ ...anexo, file: e.target.files[0] })
                    }
                  />
                  {anexo.file ? anexo.file.name : "Nenhum arquivo selecionado"}{" "}
                  <MaterialSymbol icon="attach_file" size={20} weight={100} />
                </label>
              </div>

              <div className="form-control">
                <label htmlFor="observacoes">Observações</label>
                <textarea
                  id="observacoes"
                  rows="4"
                  onChange={(e) => setObservacoes(e.target.value)}
                  value={observacoes}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="submit-btn-abono">
              Solicitar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AbonoFaltas;
