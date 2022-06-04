import React from 'react';
import marca1 from '../assets/images/marcas-01.png';
import marca2 from '../assets/images/marcas-02.png';
import marca3 from '../assets/images/marcas-03.png';
import marca4 from '../assets/images/marcas-04.png';
import '../css/Servicios.css';

const Servicios = () => {
  return (
    <>
      <section className="titulo-servicios-fondo" id='Servicios'>
        <h1 className="titulo-servicios">SERVICIOS</h1>
      </section>
      <section className="subtitulo-servicios">
        <p className="parrafo-subtitulo-servicios">
          Junglebox, es una compañia integral de comunicaciones que cuenta con
          una amplia experiencia para ayudarte de manera eficiente a construir
          el proyecto que sueñas
        </p>
      </section>
      <section className="cards">
        <div className="cards-first">
          <div className="card card1">
            <figure className='imagen-card'>
              <img src={marca4} className="card-img-top img-card" alt="..." />
            </figure>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                En <strong>junglebrand</strong> Construimos marcas unicas, inspiradoras,
                relevantes, bonitas y valiosas.
              </p>
              <a href="#" className="btn btn-primary">
                Ver más
              </a>
            </div>
          </div>
          <div className="card card2">
            <img src={marca3} className="card-img-top img-card" alt="..." />
            <div className="card-body">
              <p className="card-text">
                En <strong>jungledigital</strong> Creamos ecosistemas digitales que
                conecten tu marca con las personas.
              </p>
              <a href="#" className="btn btn-primary">
                Ver más
              </a>
            </div>
          </div>
        </div>
        <div className="cards-second">
          <div className="card card3">
            <img src={marca2} className="card-img-top img-card" alt="..." />
            <div className="card-body">
              <p className="card-text">
                En <strong>junglefilms</strong> Plasmamos tus ideas en historias creativas
                de alta calidad que generen grandes emociones
              </p>
              <a href="#" className="btn btn-primary">
                Ver más
              </a>
            </div>
          </div>
          <div className="card card4">
            <img src={marca1} className="card-img-top img-card" alt="..." />
            <div className="card-body">
              <p className="card-text">
                En <strong>junglelearning</strong> Transformamos todo el conocimiento en
                cursos interactivos, divertidos y didácticos.
              </p>
              <a href="#" className="btn btn-primary">
                Ver más
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Servicios };
