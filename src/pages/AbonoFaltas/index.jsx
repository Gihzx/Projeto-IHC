import { useState } from "react";
import "./styles.css";
import { MaterialSymbol } from "react-material-symbols";

function AbonoFaltas() {
    const [model, setModel] = useState({})

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
                  <input type="text" id="nome" required />
                </div>

                <div className="form-group">
                  <label htmlFor="matricula">Número de matrícula</label>
                  <input type="text" id="matricula" required />
                </div>

                <div className="form-group">
                  <label htmlFor="curso">Curso</label>
                  <select id="curso" required>
                    <option value="">Selecione</option>
                    <option value="curso1">Curso 1</option>
                    <option value="curso2">Curso 2</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="periodo">Período/Série</label>
                  <input type="text" id="periodo" required />
                </div>

                <div className="form-group">
                  <label htmlFor="turno">Turno</label>
                  <select id="turno" required>
                    <option value="">Selecione</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contato">Email</label>
                  <input type="text" id="contato" required />
                </div>

                <div className="form-group">
                  <label htmlFor="cpf">CPF</label>
                  <input type="text" id="cpf" required />
                </div>

                <div className="form-group">
                  <label htmlFor="identidade">Identidade</label>
                  <input type="text" id="identidade" required />
                </div>
              </div>

              <div className="last-group-fields">
                  <div className="form-control">
                    <label htmlFor="anexo">Selecione o tipo de anexo</label>
                    <select id="select-anexo" required>
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
                      {model.file ? model.file.name : "Nenhum arquivo selecionado"} <MaterialSymbol icon="attach_file" size={20} weight={100}/>
                    </label>
                  </div>

                  <div className="form-control">
                    <label htmlFor="observacoes">Observações</label>
                    <textarea id="observacoes" rows="4"></textarea>
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