// Contacto.js
import React from 'react';
import '../Styles/Contacto.css';
import ImgContacto from '../img/img-contacto.jpg';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <p>¿Tienes alguna duda o consulta? Contáctanos a través del siguiente formulario o visítanos en nuestra ubicación. Estamos aquí para ayudarte con cualquier solicitud o pregunta que puedas tener.</p>

      <img src={ImgContacto} title='Img-Contacto' alt='contacto' />
      
      <h3>Formulario de Contacto</h3>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      
      <h3>Información de Contacto</h3>
      <p><strong>Teléfono:</strong> +57 123 456 7890</p>
      <p><strong>Email:</strong> info@domiciliosexpress.com</p>
      <p><strong>Dirección:</strong> Manzana H Casa 17, Barrio Vasconia Reservado, Ibagué, Tolima</p>

      <h3>Nuestra Ubicación</h3>
      <div className="map-container">
        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9894394741954!2d-75.2188674!3d4.4303279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e1384c37f5f%3A0x4e6d83d9a0df045f!2sManzana%20H%20Casa%2017%2C%20Vasconia%20Reservado%2C%20Ibagué%2C%20Tolima!5e0!3m2!1ses!2sco!4v1692024381602!5m2!1ses!2sco"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;

