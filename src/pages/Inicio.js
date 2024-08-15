import { Link } from "react-router-dom";
import "../Styles/Inicio.css";

function Inicio() {
  return (
    <section id="inicio">
      <div className="overlay">
        <div className="content">
          <h1>Bienvenidos a Domicilios Express</h1>
          <p>
            Tu solución rápida y confiable para entregas a domicilio en Ibagué.
            Ofrecemos un servicio ágil y seguro, adaptado a tus necesidades,
            utilizando vehículos, motos y bicicletas para llegar a cualquier lugar.
          </p>
          <div className="div-boton">
            <button className="boton-contacto">
              <Link to="/contacto">Contáctanos</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
