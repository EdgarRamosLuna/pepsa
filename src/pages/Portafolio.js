import React, { useState } from 'react'
import { PortafolioS } from '../styles/Styles'
import imgsData from '../components/imgs.json';
import Imgs from '../components/Imgs';
import ModalPort from '../components/ModalPort';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
const Portafolio = () => {
  console.log(imgsData);
  let len = imgsData.length;
  
  const {showModal, idModal, setIdModal, setShowModal2, setIsModal} = useContext(TaskContext);

  const showText = (item) =>{
    setShowModal2(true);
    setIdModal(item);
    setIsModal(true);
  }
  return (
    <>
    
    <PortafolioS>
      <div className="item-txt">
            <h1>Historial de proyectos</h1>
            <p>A lo largo de nuestra trayectoria hemos 
desarrollado diferentes proyectos entre 
los que se encuentran:</p>
      </div>
      <div className="item-imgs">
        {
          /*[...Array(len)].map((data, i) =>{
            
          })*/
          imgsData.map((d, ind) => {
            return (
              <Imgs img={d.img} id={ind+1} onClick={(e) =>showText(ind+1)} />
            )
          })
        }
      </div>
    </PortafolioS>
    
    </>
  )
}

export default Portafolio