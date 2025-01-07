// import Header from '../../components/Header'
import './styles.css'

function Cradt(){
    return(
        <div>
          {/* <Header titulo="CRADT - Coordenação de Registro Acadêmico, Diplomação e Turnos"/> */}

        <div className="container-cradt">
          <div className="search-bar">
            <input type="text"
            placeholder="Buscar por matrícula,nome do aluno ou ID do processo..."/>
        
          <div className="Data Process">
            <h2>Data do Processo</h2>
            <button>Todos</button> 
            <button>Ultimos dias</button>
            <button>Recentes</button>  
            <button>Em andamento</button> 
            </div>

          <div  className= "Status Process">
            <h2>Status do Processo</h2>
            <button>Pendente</button>
            <button>Concluído</button>
          </div>

          <div className= "Tipo Process">
          <button>Aproveitamento de Disciplinas</button>
          <button>Abono de Falta</button>
          <button>Trancamento de Matrícula</button>
          <button>Suporte ao cliente</button>
          </div>

            <div className="process-card">
              <h3>Gabriel Otávio Nunes Filho</h3>
              <p><strong>Curso:</strong>Informática para Internet (Noite)</p>
              <p><strong>Matrícula:</strong>20232TI-JG0300</p>
              <p><strong>Motivo:</strong>Trancamento de matrícula</p>
              <p><strong>Data:</strong> 23/05/2024 12:45:35</p>
              <span className="status pendente">Pendente</span>
              <button>Atender solicitação</button>
            </div>

            <div className="process-card">
              <h3>Jamyli Maraia Silva</h3>
              <p><strong>Curso:</strong>Análise Desenvolvimento de Sistema (Manhã)</p>
              <p><strong>Matrícula:</strong>20232TI-JG0301</p>
              <p><strong>Motivo:</strong>Trancamento de matrícula</p>
              <p><strong>Data:</strong> 23/05/2024 12:45:35</p>
              <p><strong>Processo:</strong>00000.000002/2024-38</p>
              <span className="status pendente">Pendente</span>
              <button>Atender solicitação</button>
            </div>
             
            <div className="process-card">
              <h3>Filipe Ferreira de Oliveira</h3>
              <p><strong>Curso:</strong> Desenvolvimento de Sistema (Médio Integrado)</p>
              <p><strong>Matrícula:</strong> 20232TI-JG0302</p>
              <p><strong>Motivo:</strong> Abono de Falta</p>
              <p><strong>Data:</strong> 23/05/2024 12:50:34</p>
              <p><strong>Processo:</strong> 00000.000003/2024-38</p>
              <span className="status pendente">Pendente</span>
              <button>Atender solicitação</button>
            </div>
             
            <div className="process-card">
              <h3>Wilian Borges de Santos</h3>
              <p><strong>Curso:</strong> Técnico Qualidade (Noite)</p>
              <p><strong>Matrícula:</strong> 20232QA-JG0303</p>
              <p><strong>Motivo:</strong> Abono de Falta</p>
              <p><strong>Data:</strong> 23/05/2024 12:55:34</p>
              <p><strong>Processo:</strong> 00000.000004/2024-38</p>
              <span className="status concluido">Concluído</span>
              <button>Atender solicitação</button>
              </div>
            

            </div>
        
       </div>    

     </div>    
    )
}

export default Cradt;