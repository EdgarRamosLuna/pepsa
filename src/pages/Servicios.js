import React from 'react'
import { ServiciosS } from '../styles/Styles'
import Test from './Test'

const Servicios = () => {
  return (
    <ServiciosS>

      <div className="container-1">
        <div className="item-txt-container">
          <div className="item-txt">
            <h1>Nuestros Servicios</h1>
            <p>Somos una empresa responsable, 
capaz y apta para la ejecución de 
servicios en mano de obra de 
primer nivel para las siguientes 
actividades:</p>
          </div>
          <div className="item-img">
            <img src="/assets/img/ps.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="item2-img">
            <Test />
        </div>
      </div>
      
    </ServiciosS>
  )
}

export default Servicios