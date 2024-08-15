import './Footer.css'; 
import facebook from "../img/facebook.png";
import whatsapp from "../img/whatsapp.png";
import instagram from "../img/instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Acerca de Nosotros</h4>
            <p>Todo lo que necesites, donde lo necesites, ¡en minutos!</p>
            <p>Contacto: info@domiciliosexpress.com</p>
            <p>Telefono: +57 123 456 7890</p>
          </div>
          <div className="col-md-4">
            <h4>Enlaces Rápidos</h4>
            <ul className='enlaces'>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/domicilios">Domicilios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Síguenos</h4>
            <ul className="social-icons">
              <li><a href="#"><img src={facebook} className="fab fa-facebook-f"/></a></li>
              <li><a href="#"><img src={instagram} className="fab fa-instagram" /></a></li>
              <li><a href="#"><img src={whatsapp} className="fab fa-whatsapp" /></a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} Domicilios Express. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
