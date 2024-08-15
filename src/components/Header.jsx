import "./Header.css";
import logo from "../img/logo.png"
import { Link, NavLink } from 'react-router-dom';

function Header() {

  return(
    <header>
      <Link to="/" className="div-logo">
        <img src={logo} alt="logo" title="Logo-Domicilio" />
        <h3>Domicilios Express</h3>
      </Link>

      <nav>
        <ul className="nav-menu">
          <li><NavLink to="/" exact>Inicio</NavLink></li>
          <li><NavLink to="/servicios" >Servicios</NavLink></li>
          <li><NavLink to="/domicilios" >Domicilios</NavLink></li>
          <li><NavLink to="/nosotros" >Nosotros</NavLink></li>
          <li><NavLink to="/contacto" >Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;