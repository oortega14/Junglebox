import React from 'react';
import ReactPlayer from 'react-player';
import '../css/Nosotros.css';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Nosotros = () => {

  return (
    <>

      <div className="fondo-titulo-us" id='Nosotros'>
        <h1 className="titulo-us px-5"> NOSOTROS</h1>
      </div>
      <section className="us">
        <div className="contenido-us">
          <div className="info-us">
            <h2 className="subtitulo-us">
              ¿Aburrido de las mismas ideas? ¿Tu marca no comunica? ¡No en
              nuestra Jungla!
            </h2>
            <p className="parrafo-us">
              Somos una Agencia de Marketing Digital, Aprendizaje Virtual y
              Producción Audiovisual con más de diez años de experiencia en la
              creación de soluciones digitales adecuadas a las necesidades del
              mercado publicitario. Contamos además con diferentes líneas de
              negocio adaptadas a los diferentes retos que presupone la creación
              de marcas, el manejo de redes, el lenguaje audiovisual, el diseño
              y la formación virtual como servicios a la vanguardia de los
              acelerados cambios de nuestro tiempo. <b>JUNGLEBOX</b> una jungla
              de ideas
            </p>
          </div>
        </div>
        <div className="video-us">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dScejMYAqY4"
            controls
            className="react-player"
          />
        </div>
      </section>
    </>
  );
};

export { Nosotros };
