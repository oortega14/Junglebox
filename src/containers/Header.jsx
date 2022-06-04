import React from 'react';
import '../css/Header.css';
import icono from '../assets/images/logo-03.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  return (
    <>
      <section className="flex-container-nav" id="Main">
        <figure className="container-logo">
          <img src={icono} alt="logo" className="logo" />
        </figure>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid button-container">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                <Link
                    activeClass="active"
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    INICIO
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    activeClass="active"
                    to="Nosotros"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    NOSOTROS
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    activeClass="active"
                    to="Servicios"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    SERVICIOS
                  </Link>
                </li>
                <li class="nav-item">
                <Link
                    activeClass="active"
                    to="Blog"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    BLOG
                  </Link>
                </li>
                <li class="nav-item">
                <Link
                    activeClass="active"
                    to="Contacto"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    CONTACTO
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export { Header };
