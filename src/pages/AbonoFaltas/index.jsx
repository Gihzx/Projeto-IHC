import { useState } from "react";
import axios from 'axios';
import { MaterialSymbol } from "react-material-symbols";
import "./styles.css";

function AbonoFaltas() {
  const [model, setModel] = useState({})
  const [nome, setNome] = useState("")
  const [matricula, setMatricula] = useState("")
  const [curso, setCurso] = useState("")
  const [periodo, setPeriodo] = useState("")
  const [turno, setTurno] = useState("")
  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")
  const [inicioFalta, setInicioFalta] = useState("")
  const [fimFalta, setFimFalta] = useState("")
  const [motivo, setMotivo] = useState("")
  const [observacoes, setObservacoes] = useState("")

  return (
    <div className="container-abono">
      <div className="home-titulo">
        <h2>Abono de faltas</h2>
      </div>
      <main>
        <section className="form-section">
          <form>
            <div className="first-group-fields">
              <div className="form-group">
                <label htmlFor="nome">Nome do aluno(a)</label>
                <input type="text" id="nome" required onChange={e => setNome(e.target.value)} value={nome} />
              </div>

              <div className="form-group">
                <label htmlFor="matricula" >Número de matrícula</label>
                <input type="text" id="matricula" required onChange={e=> setMatricula(e.target.value)} value={matricula}/>
              </div>

              <div className="form-group">
                <label htmlFor="curso">Curso</label>
                <select id="curso" required onChange={e=> setCurso(e.target.value)} value={curso} >
                  <option value="">Selecione</option>
                  <option value="curso1">Curso 1</option>
                  <option value="curso2">Curso 2</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="periodo">Período/Série</label>
                <input type="text" id="periodo" required onChange={e=>setPeriodo(e.target.value)} value={periodo}/>
              </div>

              <div className="form-group">
                <label htmlFor="turno">Turno</label>
                <select id="turno" required onChange={e=>setTurno(e.target.value)} value={turno}>
                  <option value="">Selecione</option>
                  <option value="manha">Manhã</option>
                  <option value="tarde">Tarde</option>
                  <option value="noite">Noite</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contato">Email</label>
                <input type="text" id="contato" required onChange={e=>setEmail(e.target.value)} value={email}/>
              </div>

              <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" required onChange={e=>setCpf(e.target.value)} value={cpf}/>
              </div>

              <div className="form-group">
                <label htmlFor="identidade">Inicio da falta</label>
                <input type="text" id="identidade" required  onChange={e=>setInicioFalta} value={inicioFalta}/>
                <label htmlFor="identidade">Inicio da final</label>
                <input type="text" id="identidade" required onChange={e=>setFimFalta(e.target.value)} value={fimFalta}/>
              </div>
            </div>

            <div className="last-group-fields">
              <div className="form-control">
                <label htmlFor="anexo">Motivo da falta</label>
                <select id="select-anexo" required onChange={e=>setMotivo(e.target.value)} value={motivo}>
                  <option value="">Selecione</option>
                  <option value="atestado">Atestado médico</option>
                </select>
              </div>

              <div className="form-control">
                <label htmlFor="arquivo">Arquivo</label>  
                <label htmlFor="arquivo" className="custom-file-upload">
                  <input
                    type="file" id="arquivo"
                    onChange={(e) => setModel({ ...model, file: e.target.files[0] })}
                  />
                  {model.file ? model.file.name : "Nenhum arquivo selecionado"} <MaterialSymbol icon="attach_file" size={20} weight={100} />
                </label>
              </div>

              <div className="form-control">
                <label htmlFor="observacoes">Observações</label>
                <textarea id="observacoes" rows="4" onChange={e=>setObservacoes(e.target.value)} value={observacoes}></textarea>
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