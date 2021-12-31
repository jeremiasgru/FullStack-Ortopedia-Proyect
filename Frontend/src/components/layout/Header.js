import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
        <div className="holder">
        <img className="logo" src="img/perfil-azul.jpg"  alt="Ortopedia San Carlos"/>
        <h1>Ortopedia San Carlos</h1>
    </div>
    </header>
    );
}

export default Header;