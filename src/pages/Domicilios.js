import React from 'react';
import '../Styles/Domicilios.css';
import imgDomicilios from '../img/img-domicilios.jpg';

const Domicilios = () => {
  return (
    <div className="domicilios-container">
      <h2>Domicilios Express</h2>
      <p>En Domicilios Express, sabemos lo importante que es recibir tus pedidos de manera rápida y confiable. Nos especializamos en realizar entregas en tiempo récord, asegurando que tus paquetes lleguen en perfectas condiciones.</p>

      <div className="image-container">
        <img src={imgDomicilios} title='Imagen domicilios' alt='domicilios' />
      </div>
      
      <h3>¿Cómo Funciona?</h3>
      <ol>
        <li><strong>Llámamos:</strong> Realiza una llamada a nuestra línea de atención o utiliza nuestra app para hacer tu solicitud.</li>
        <li><strong>Confirma:</strong> Proporciona los detalles del pedido y la dirección de entrega.</li>
        <li><strong>Seguimiento en Tiempo Real:</strong> Sigue el estado de tu entrega en nuestra plataforma o recibe actualizaciones por SMS.</li>
        <li><strong>Entrega Segura:</strong> Nuestro equipo se encargará de entregar tu pedido de manera segura y eficiente.</li>
      </ol>

      <h3>Tipos de Pedidos que Aceptamos</h3>
      <ul>
        <li><strong>Pedidos Personales:</strong> Desde comidas hasta artículos de tiendas locales.</li>
        <li><strong>Envíos de Documentos:</strong> Entrega de documentos importantes o sensibles con máxima discreción.</li>
        <li><strong>Servicios Empresariales:</strong> Recogemos y entregamos paquetes o productos para empresas locales.</li>
        <li><strong>Compras de Último Minuto:</strong> Olvidaste algo importante? Nosotros lo recogemos por ti.</li>
      </ul>

      <button className="order-button"><a href='/contacto'>Haz tu pedido ahora</a></button>
    </div>
  );
};

export default Domicilios;

