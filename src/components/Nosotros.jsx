import React from 'react';
import ReactPlayer from 'react-player';
import '../containers/styles.css';

const Nosotros = () => {
  return (
    <>
      <h1> NOSOTROS</h1>
      <div>
        <div>
          <h2>
            ¿Aburrido de las mismas ideas? ¿Tu marca no comunica? No en nuestra
            Jungla
          </h2>
          <p className="parrafo-nosotros">
            Somos una Agencia de Marketing Digital, Aprendizaje Virtual y
            Producción Audiovisual con más de diez años de experiencia en la
            creación de soluciones digitales adecuadas a las necesidades del
            mercado publicitario. Contamos además con diferentes líneas de
            negocio adaptadas a los diferentes retos que presupone la creación
            de marcas, el manejo de redes, el lenguaje audiovisual, el diseño y
            la formación virtual como servicios a la vanguardia de los
            acelerados cambios de nuestro tiempo. <b>JUNGLEBOX</b> una jungla de
            ideas
          </p>
        </div>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dScejMYAqY4"
            controls
          />
        </div>
      </div>
    </>
  );
};

export { Nosotros };
