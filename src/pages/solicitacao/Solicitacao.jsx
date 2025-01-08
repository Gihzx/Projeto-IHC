import "./styles.css";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
export function Solicitacao() {
  return (
    <>
      <main>
        <header className="header">
          <h1>Abono de faltas</h1>
          {/* <div className="header-icons">
            <span className="notification-icon">🔔</span>
            <span className="logout-icon">🔄</span>
          </div> */}
        </header>

        <section className="form-section">
          <form>
            <div className="form-container">
              <div className="form-column">
                <label htmlFor="">Nome</label>
                <Input id="nome" label="Nome" placeholder="Digite o nome" />

                <div className="input-container">
                  <label htmlFor="turno" className="input-label">
                    Curso
                  </label>
                  <select id="turno" className="custom-select" required>
                    <option value="">Selecione</option>
                    <option value="manha">ADS</option>
                    <option value="tarde">Qualidade</option>
                    <option value="noite">Adimistração</option>
                  </select>
                </div>
                <div className="input-container">
                  <label htmlFor="turno" className="input-label">
                    Turno
                  </label>
                  <select id="turno" className="custom-select" required>
                    <option value="">Selecione</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                  </select>
                </div>
                <label htmlFor="">CPF</label>

                <Input
                  id="telefone"
                  label="Telefone"
                  placeholder="Digite o telefone"
                />
              </div>
              <div className="form-column">
                <label htmlFor="" >Número da matrícula</label>

                <Input
                  id="telefone"
                  label="Telefone"
                  placeholder="Digite o telefone"
                />
                <label htmlFor="">Período/Série</label>
                <Input
                  id="cidade"
                  label="Cidade"
                  placeholder="Digite a cidade"
                />
                <label htmlFor="">Telefone/Celular/Email</label>

                <Input
                  id="estado"
                  label="Estado"
                  placeholder="Digite o estado"
                />
                <label htmlFor="">Identidade</label>

                <Input
                  id="estado"
                  label="Estado"
                  placeholder="Digite o estado"
                />
              </div>
            </div>
            <div className="form-container">
              <div className="form-column" id="form-center">
                <label htmlFor="anexo">Selecione o tipo de anexo</label>
                <select id="anexo" className="custom-select" required>
                  <option value="">Selecione</option>
                  <option value="atestado">Atestado médico</option>
                </select>
                <label htmlFor="arquivo">Tipo de arquivo</label>
                <input
                  type="file"
                  id="arquivo"
                  className="custom-select"
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="observacoes">Observações</label>
                <textarea id="observacoes" rows="4"></textarea>
                <Button>Enviar</Button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
