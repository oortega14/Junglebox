import React from 'react';
import '../css/Blog.css';
import icono from '../assets/images/logo-02.png';

const Blog = () => {
  return (
    <>
      <section className='fondo-titulo-blog' id='Blog'>
        <h1 className='titulo-blog'>BLOG</h1>
      </section>
      <section className='contenido-blog'>
        <div className='imagen-blog'>
          <figure className='envoltura-imagen-blog'>
            <img src="https://www.junglebox.co/wp-content/uploads/2020/02/junglelearning.jpg" alt="blog" className='img' />
          </figure>
        </div>
        <div className='texto-blog'>
          <h2 className='subtitulo-blog'>Titulo blog</h2>
          <p className='parrafo-blog'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio
            itaque voluptates corrupti reiciendis magni unde libero eos soluta
            reprehenderit et, odio cum consectetur alias illum aliquam ducimus!
            Nemo, minima?
          </p>
          <button className="boton-blog">Ver más</button>
        </div>
      </section>
    </>
  );
};

export { Blog };
