import React from 'react';
import '../containers/styles.css';

const Contacto = () => {
  return (
    <>
      <h1>Contacto</h1>
      <section>
        <div>
          <form action="">
            <ul>
              <li>
                <input type="text" placeholder="Nombre Completo:" />
              </li>
              <li>
                <input type="number" placeholder="Télefono:" />
              </li>
              <li>
                <input type="text" placeholder="Asunto:" />
              </li>
              <li>
                <input type="text" placeholder="Mensaje:" />
              </li>
            </ul>
          </form>
          <button className="boton-contacto">Enviar</button>
        </div>
        <div>
          <ul>
            <li>
              {' '}
              <p>Calle 15 # 35-1</p>
            </li>
            <li>
              {' '}
              <p>Edificio C34 Oficina 502</p>
            </li>
            <li>
              {' '}
              <p>Medellín, Antioquia, Colombia</p>
            </li>
            <li>
              {' '}
              <p>(57)+ (4) 444 13 57</p>
            </li>
            <li>
              {' '}
              <p>(57)+ 313 614 70 59</p>
            </li>
            <li>
              {' '}
              <p>(57)+ 310 434 14 92</p>
            </li>
            <li>
              {' '}
              <p>contacto@myjunglebox.com</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contacto;
