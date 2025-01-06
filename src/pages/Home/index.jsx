

function Home() {
    return (
   
    <div className="container">
      
      <aside className="sidebar">
        <h1>IF</h1>
        <nav>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Solicitações</a></li>
            <li><a href="#">Meus dados</a></li>
            <li><a href="#">Alterar senha</a></li>
            <li><a href="#">Links úteis</a></li>
          </ul>
        </nav>
      </aside>
      
      <main>
        <header className="header">
          <h2>Abono de faltas</h2>
          <div className="header-icons">
            <span className="notification-icon">🔔</span>
            <span className="logout-icon">🔄</span>
          </div>
        </header>

        <section className="form-section">
          <form>
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
              <label htmlFor="contato">Telefone/Celular/Email</label>
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

            <div className="form-group">
              <label htmlFor="anexo">Selecione o tipo de anexo</label>
              <select id="anexo" required>
                <option value="">Selecione</option>
                <option value="atestado">Atestado médico</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="arquivo">Arquivo</label>
              <input type="file" id="arquivo" required />
            </div>

            <div className="form-group">
              <label htmlFor="observacoes">Observações</label>
              <textarea id="observacoes" rows="4"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Solicitar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}



export default Home;