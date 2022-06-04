import React from 'react'; 
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import { Body } from './containers/Body';
import { Nosotros } from './components/Nosotros';
import { Servicios } from './components/Servicios';
import Contacto from './components/Contacto';
import { Blog } from './components/Blog';
import { Carousel } from './components/Carousel';

const App = () => {
  return (
    <>
    <Home />
    </>
  );
}

export default App;
