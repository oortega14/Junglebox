import React from 'react';
import '../containers/styles.css';

const Blog = () => {
  return (
    <>
      <h1>BLOG</h1>
      <section>
        <div>
          <figure>
            <img src="" alt="" />
          </figure>
        </div>
        <div>
          <h2>Titulo blog</h2>
          <p>
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
