import React from 'react';
import { Blog } from '../components/Blog';
import {Carousel} from '../components/Carousel';
import Contacto from '../components/Contacto';
import { Nosotros } from '../components/Nosotros';
import { Servicios } from '../components/Servicios';

const Body = () => {
  return (
    <>
      <Carousel />
      <Nosotros />
      <Servicios />
      <Blog />
      <Contacto />
    </>
  );
};

export { Body };