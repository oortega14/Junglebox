import React from 'react';
import '../css/Contacto.css';

const Contacto = () => {
  return (
    <>
      <section className="fondo-titulo-contacto" id='Contacto'>
        <h1 className="titulo-contacto">CONTACTO</h1>
      </section>
      <section className="contenido-contacto">
        <div className='formulario'>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="InputName"
                aria-describedby="nameHelp"
                placeholder="Nombre Completo:"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="InputTelephone"
                placeholder="Telefono:"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="Inputaffair"
                aria-describedby="affairHelp"
                placeholder="Asunto:"
              />
            </div>
            <div className="form-group">
              <input
                type="textarea"
                className="form-control"
                id="InputMessage"
                aria-describedby="messageHelp"
                placeholder="Mensaje:"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
        <div className="informacion-contacto">
          <p>Calle 15 # 35-1</p>
          <p>Edificio C34 Oficina 502</p>
          <p>Medellín, Antioquia, Colombia</p>
          <br />
          <p>(57)+ (4) 444 13 57</p>
          <p>(57)+ 313 614 70 59</p>
          <p>(57)+ 310 434 14 92</p>
          <br />
          <p>contacto@myjunglebox.com</p>
        </div>
      </section>
    </>
  );
};

export default Contacto;
