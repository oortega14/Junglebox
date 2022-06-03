import React from 'react';
import marca1 from '../assets/images/marcas-01.png';
import marca2 from '../assets/images/marcas-02.png';
import marca3 from '../assets/images/marcas-03.png';
import marca4 from '../assets/images/marcas-04.png';
import '../containers/styles.css';

const Servicios = () => {
  return (
    <>
      <h1> Servicios </h1>
      <p className="parrafo-servicios">
        Junglebox, es una compañia integral de comunicaciones que cuenta con una
        amplia experiencia para ayudarte de manera eficiente a construir el
        proyecto que sueñas
      </p>
      <div className="flex-container">
        <div className="card">
          <img src={marca4} className="card-img-top img-card" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              En <b>junglebrand</b> Construimos marcas unicas, inspiradoras,
              relevantes, bonitas y valiosas.
            </p>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>
        <div className="card">
          <img src={marca3} className="card-img-top img-card" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              En <b>jungledigital</b> Creamos ecosistemas digitales que conecten
              tu marca con las personas.
            </p>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>
        <div className="card">
          <img src={marca2} className="card-img-top img-card" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              En <b>junglefilms</b> Plasmamos tus ideas en historias creativas
              de alta calidad que generen grandes emociones
            </p>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>
        <div className="card">
          <img src={marca1} className="card-img-top img-card" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              En <b>junglelearning</b> Transformamos todo el conocimiento en
              cursos interactivos, divertidos y didácticos.
            </p>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Servicios };
