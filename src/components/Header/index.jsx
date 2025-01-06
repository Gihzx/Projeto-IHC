import Logo from '/src/assets/logo.png';

import './styles.css';

function Header() { 
    return (
        <>
            <div className='container_logo'><img src={Logo} alt="" /></div>
            
        </>
    )
}

export default Header;