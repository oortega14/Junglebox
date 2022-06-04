import { React, useState } from 'react';
import '../css/Contacto.css';
import axios from 'axios';

const Contacto = () => {
  const baseUrl = 'http://localhost/junglebox/mail.php';
  const [data, setData] = useState([]);
  const [newuser, setNewuser] = useState({
    id: '',
    nombre: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewuser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(newuser);
  };

  const peticionPost = async () => {
    var f = new FormData();
    f.append('nombre', newuser.nombre);
    f.append('telefono', newuser.telefono);
    f.append('asunto', newuser.asunto);
    f.append('mensaje', newuser.mensaje);
    f.append('METHOD', 'POST');
    await axios.post(baseUrl).then((response) => {
      setData(data.concat(response.data));
    });
  };

  return (
    <>
      <section className="fondo-titulo-contacto" id="Contacto">
        <h1 className="titulo-contacto">CONTACTO</h1>
      </section>
      <section className="contenido-contacto">
        <div className="formulario">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="nombre"
                aria-describedby="nameHelp"
                placeholder="Nombre Completo:"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                name="telefono"
                placeholder="Telefono:"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="asunto"
                aria-describedby="affairHelp"
                placeholder="Asunto:"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="textarea"
                className="form-control"
                name="mensaje"
                aria-describedby="messageHelp"
                placeholder="Mensaje:"
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => peticionPost()}
            >
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
