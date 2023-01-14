import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Services from "../components/Services";
import { ServiciosS } from "../styles/Styles";
import Test from "./Test";

const Servicios = () => {

  useEffect(() => {
   
  }, []);

  return (
    <ServiciosS>
      <div className="container-1">
        <div className="item-txt-container">
          <div className="item-txt">
            <h1>Nuestros Servicios</h1>
            <p>
              Somos una empresa responsable, capaz y apta para la ejecución de
              servicios en mano de obra de primer nivel para las siguientes
              actividades:
            </p>
          </div>
          <div className="item-img">
            <img src="/assets/img/ps.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="items-container">
          <Services />
        </div>
      </div>
    </ServiciosS>
  );
};

export default Servicios;
