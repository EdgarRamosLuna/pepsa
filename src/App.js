import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import Nostros from './pages/Nostros';
import Servicios from './pages/Servicios';
import Portafolio from './pages/Portafolio';
import Contacto from './pages/Contacto';
import { TaskContext } from './context/TaskContext';
import Loading from './components/Loading';

function App() {
  const {loading} = useContext(TaskContext);
  return (
    <>
    {loading && <Loading />} 
     <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Nostros />} />
          <Route path="/nosotros" element={<Nostros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
     </Routes>
    </>
  );
}

export default App;
