import { MaterialSymbol } from 'react-material-symbols';
import 'react-material-symbols/rounded'; 

import './styles.css'

function Sidebar (){
    return (    
        <nav className="sidebar-nav">
            <span id='menu-icon-siddebar'>
                <MaterialSymbol 
                    icon="Menu"
                    size={30} 
                    weight={200}
                />
            </span>
            <div className='siddebar-items'>
                <span className='items-icons-siddebar'>
                    <MaterialSymbol
                        icon='Home'
                        size={30} 
                        weight={200}
                    />
                    <a href="/">Início</a>
                </span>
                <span className='items-icons-siddebar'>
                    <MaterialSymbol
                        icon='assignment'
                        size={30} 
                        weight={200}
                    />
                    <a href="/cradt" >CRA - Coordenação de Registro Acadêmico</a>
                </span>
                <span className='items-icons-siddebar'>
                    <MaterialSymbol
                        icon='Person'
                        size={30} 
                        weight={200}
                    />
                    <a href="#">Meus dados</a>
                </span>
                <span className='items-icons-siddebar'>
                    <MaterialSymbol
                        icon='key'
                        size={30} 
                        weight={200}
                    />
                    <a href="#">Alterar senha</a>
                </span>
                <span className='items-icons-siddebar'>
                    <MaterialSymbol
                        icon='link'
                        size={30} 
                        weight={200}
                    />
                    <a href="#">Links úteis</a>
                </span>
            </div>
        </nav>      
    )
}
export default Sidebar;