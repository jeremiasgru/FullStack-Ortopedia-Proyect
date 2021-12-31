import NavLink from "../NavLink";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <nav>
        <div className="holder">
            <ul>
                <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/Nosotros">Nosotros</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/Servicios">Servicios</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/Novedades">Novedades</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/Galeria">Galeria</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/Contacto">Contacto</NavLink></li>
            </ul>
        </div>
    </nav>
    );
}

export default Nav;