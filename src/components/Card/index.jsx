import './styles.css';

export function Card(props) {
    const urlIconAcessibilidade = './src/assets/acessibilidade.png';

    return (
        <div className="card-solicitacoes">
            <div className="card-header-solicitacoes">
                <span className="container-titulo-card">{props.titulo}</span>
                <span className='container-img-titulo'>
                    <span><img src={props.url_image_card}/></span>
                </span> 
            </div>
            <div className="card-body-solicitacoes">
                <span className="body-titulo">
                    <h5>Descrição: </h5>
                </span>
                <div className="body-details">
                    <span>{props.description}</span>
                </div>
            </div>
            <div className="card-footer-solicitacoes">
                <span className='container-button'><a className='btn-entrar-solicitacao' href={props.url_view}>Entrar</a></span>
                <img className='icon-acss' src={urlIconAcessibilidade} alt=""/>
            </div> 
        </div>
    )
}