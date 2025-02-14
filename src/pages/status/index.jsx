//import "./styles.css"
export function Status (){
  
  
    return (
        <div className="container-atendimento">
          
          <div className="request-card">
            <div className="user-info">
              <div className="avatar">GO</div>
              <div>
                <h2>Gabriel Otávio Nunes Filho</h2>
                <p>Vinculado ao ensino médio integrado</p>
                <p>Trancamento de curso</p>
                <p>Processo: 0000/2023/01234-56</p>
              </div>
            </div>
            
        
    
            <div className="progress-bar">
              <div className="step completed">
                <span>Documentos Enviados</span>
                <p>22/01/2025 14:24</p>
              </div>
              <div className="step completed">
                <span>Recebido pela Secretaria</span>
                <p>22/01/2025 15:58</p>
              </div>
              <div className="step active">
                <span>Em análise</span>
              </div>
              <div className="step">
                <span>Concluído</span>
              </div>
            </div>
          </div>
        </div>
      );
}