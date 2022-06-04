import React from 'react';
import '../css/Footer.css';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <section className="contenido-footer">
        <div className="texto-izquierda">
          <p>Copyright <AiOutlineCopyrightCircle/> 2022 Junglebox. Todos los derechos reservados</p>
        </div>
        <div className="texto-derecha">
          <strong>
          <p>Junglebox</p>
          </strong>
        </div>
      </section>
    </>
  );
};

export { Footer };
