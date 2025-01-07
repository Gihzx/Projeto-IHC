import './styles.css'

function Sidebar (){
    return (    
        <nav className="sidebar-nav">
            <span>Menu </span>
            <div className='siddebar-items'>
                <span><a href="#">Início</a></span>
                <span><a href="#">Solicitações</a></span>
                <span><a href="#">Meus dados</a></span>
                <span><a href="#">Alterar senha</a></span>
                <span><a href="#">Links úteis</a></span>
            </div>
        </nav>      
    )
}
export default Sidebar;