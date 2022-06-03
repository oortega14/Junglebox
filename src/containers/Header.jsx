import React from 'react';
import './styles.css';
import icono from '../assets/images/logo-03.png';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <figure className="logo-header">
            <img src={icono} alt="Logo" className="imagen-header" />
          </figure>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navigation" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  INICIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  NOSOTROS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  SERVICIOS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  CONTACTO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Header };
