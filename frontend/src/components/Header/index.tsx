import logo from '../../assets/img/logo.svg';
import './style.css';

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="logo DSMeta"/>
                        <h1>DsMeta</h1>
                        <p>Desenvolvido por
                            <a href="https://www.instagram.com/devsuperior.ig" target="_blank"> @devsuperior.ig </a>
                            <a href="https://www.instagram.com/natzujjj" target="_blank">e @Natzujj</a> 
                        </p>
                </div>
            </header>
        </>
    )
}

export default Header;