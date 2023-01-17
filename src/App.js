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
import GlobalStyle from './styles/GlobalStyles';
import Test from './pages/Test';
import TestImg from './components/TestImg';
import Lazy from './pages/Lazy';

function App() {
  const {loading, isModal} = useContext(TaskContext);
  return (
    <>
     <GlobalStyle isModal={isModal} />
    {loading && <Loading />} 
   
     <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Nostros />} />
          <Route path="/test" element={<TestImg />} />
          <Route path="/nosotros" element={<Nostros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      {/*  <Route path='/lazy'  element={<Lazy /> } />*/}
     </Routes>
    </>
  );
}

export default App;
