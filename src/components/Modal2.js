import React, { useContext } from 'react'
import { memo } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Modal2S, StyledP } from '../styles/Styles';
const data = [
    {
      i: 1,
      img: "/assets/img/Logo_Kenworth.svg",
      data: `KENWORTH
          -	Mantenimiento a herramientas y dispositivos de soldadura en la planta KENWORTH de Mexicali, Baja California.
          -	Instalación electromecánica de 4 robots modulares de pintura, en la planta KENWORTH de Mexicali Baja California Norte.`,
    },
    {
      i: 2,
      img: "/assets/img/Logo_Magna.svg",
      data: `MAGNA
          Instalación robot modulares de soldadura “FANUC”, alumbrado periférico en islas de robot, la instalación de tableros de distribución 480v y el cableado de potencia para el área de “APRON INNER AND APRON OUTER” de la planta Magna de Hermosillo Sonora
          `,
    },
    {
      i: 3,
      img: "/assets/img/Logo_Goodyear.svg",
      data: `GOODYEAR
          -	Desarrollo de instalación de máquinas extractoras Sidewall y Tread en proyecto de Goodyear en asociación con Comercial Contracting de México. Cabe destacar cableado y conexión de equipos de media tensión en subestación, 2 seccionadores de 600amp, con cuatro derivaciones de 200amp 5KV a transformadores de 1500 kva, 750kva, 500 kva, banco de capacitores 400 kva. Conexión de variadores de frecuencia en motores 600hp,400hp.
          `,
    },
    {
      i: 4,
      img: "/assets/img/Logo_Chrys.svg",
      data: `CHRYSLER
          -	Instalación y montaje eléctrico en la línea de ensamble de la planta DAIMERLER CHRYSLER de Ramos Arizpe Coahuila.
          -	Instalación eléctrica de 23 robots modulares DAIFOCU en la línea de ensamble de soldadura en a DAIMERLER CHRYSLER de Ramos Arizpe Coahuila.
          -	Interconexión eléctrica de ASRS de robots FANUC ROBOTICS dentro de la planta de motores sur CHRYSLER de Derramadero Coahuila.
          -	Instalación eléctrica y de servicios de agua, aire, gas, aceite y de la red ethernet en el área de subensamble y ensamble de motor, en planta de motores sur CHRYSLER Derramadero Coahuila.
          `,
    },
    {
      i: 5,
      img: "/assets/img/Logo_Ford.svg",
      data: `FORD
          -	Modificación electromecánica a 4 hornos de pintura seccionados en cámaras de combustión, en la planta Ford de Hermosillo Sonora.
          -	Manipuladores para ensamble de puertas en la planta FORD de Hermosillo Sonora.
          `,
    },
    {
      i: 6,
      img: "/assets/img/Logo_Volkswagen.svg",
      data: `VOLKSWAGEN
          -	Instalación electromecánica de dispositivos e islas de robot modulares de soldadura “KUKA” en el área de costados interiores y exteriores de la línea del proyecto “GOLF-A7” de la nave 82-A de Volkswagen México
          -	Instalación electromecánica en área de “FRAMMING” de la línea del proyecto A5 de la nave 8 de Volkswagen México
          -	Instalación electromecánica del sistema fosfato en la nave 83-a de VOLKSWAGEN de México.
          -	Modificación del sistema de transportador terrestre de SKITS en la nave 83-a de VOLKSWAGEN de México.
          `,
    },
    {
      i: 7,
      img: "/assets/img/Logo_Toyota.svg",
      data: `TOYOTA
          -	Instalación de alumbrado 227V en las cabinas de pintura B-LINE, alumbrado exterior y área de servicios, de la planta Toyota de Tijuana, Baja California Norte`,
    },
    {
      i: 8,
      img: "/assets/img/Logo_Kepler.svg",
      data: `KEPLER
          -	Instalación de banco de ductos 15,000mts de tubería de 4” cedula 40, montaje de transformadores de 2500 KVA, 360000m de cableado de alta, media y baja tensión en la Termoeléctrica de Villa de García N.L.
          -	Instalación de sistema contra incendio de la termoeléctrica del parque industrial Santa María, en Ramos Arizpe, Coahuila.
          `,
    },
    {
      i: 9,
      img: "/assets/img/Logo_Burker.svg",
      data: `BURKE
          -	Instalación de equipo nuevo de línea de llantas en la planta de BURKE E PORTER MACHINERY en Ramos Arizpe Coahuila.`,
    },
    {
      i: 10,
      img: "/assets/img/Logo_Metalsa.svg",
      data: `METALSA
          -	Instalación electromecánica de línea de chasis en planta METALSA en Apodaca N.L.`,
    },
    {
      i: 11,
      img: "/assets/img/Logo_GP.svg",
      data: `Grupo Garza Ponce
          -	Instalación de 3 subestaciones de 1500 KVA, distribución de centro de carga, alumbrado exterior, y alumbrado de emergencia en la planta “ELG” del parque Industrial de Apodaca.`,
    },
    {
      i: 12,
      img: "/assets/img/Logo_GM.svg",
      data: `GENERAL MOTORS
          -	Instalación electromecánica del sistema de transportador de SKILLETS de ensamble final de la planta General Motors de Saltillo Coahuila.
          -	Instalación electromecánica de herramientas e islas de robot modulares de soldadura “FANUC” para el proyecto “319” en la planta General Motors de Saltillo Coahuila.
          -	Instalación electromecánica de herramientas e islas de robot modulares de soldadura “FANUC” para el proyecto “HHR” de la planta General Motors de Silao Guanajuato
          -	Complementación electromecánica del sistema “Feder Duster” en la entrada de cabida de pintura de la planta “General Motors” de Silao Guanajuato.
          -	Instalación eléctrica del transportador No.7 en área de vestiduras de la planta General Motors en Ramos Arizpe.
          -	Instalación eléctrica de 4 lineas de ensamble (MOTOR COMPARTMENT, UNDER BODY, BODY SINE INNER, BODY SIDE OUTER) en la planta General Motors en Ramos Arizpe.
          -	Alimentación eléctrica a equipos SCHILLER y bombas en la planta General Motors en Ramos Arizpe.
          -	Relocalización electromecánica de lavadora de cabezas de motor en planta GENERAL MOTORS de Ramos Arizpe Coahuila.
          -	Instalación electromecánica de bomba vertical en plata GENERAL MOTORS de Ramos Arizpe, Coahuila.
          -	Instalación eléctrica en planta de transmisiones de (SUN HARD, PIÑON HARD, PUM COVER, VALVE BODY, CLUTCH 456, MAIN LINE, LINE BUTTON AND TEST, CENTER SUPORT, OUTPUT CARRIER, SHAFT MACHINE, CASA SUB ASSY MIST COLLECTORS) en GENERAL MOTORS en la planta de Silao Guanajuato.
          -	Instalación eléctrica y servicios de aire comprimido, comunicación ethernet, voz y datos, sistemas de agua fría en planta de transmisiones, (cuarto limpio, área de filtros, BP-2000, BP-4000, TEST BUTTOM, TORQUE CONVERTE, CHIP CONVEYORS) en planta de motores GENERAL MOTORS de Ramos Arizpe, Coahuila.
          `,
    },
    {
      i: 13,
      img: "/assets/img/Logo_GeneralElectric.svg",
      data: `GENERAL ELECTRIC
          -	Instalación eléctrica, electro ducto y alumbrado a la planta “General Electric” en Ramos Arizpe
          `,
    },
  ];

const Modal2 = () => {
   const {setShowModal2, idModal, setIsModal} = useContext(TaskContext);

   const closeModal = () =>{
    setIsModal(false);
    setShowModal2(false)
   }
  return (
    <Modal2S>
       <div
        className="container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="closeModal" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        {data.map((datas, i) => {
          return (
            idModal == datas.i ? <>
            <StyledP>
            <div className='Logo'> <img src={`${datas.img}`} alt="Imagen" /></div>
            {datas.data}
            </StyledP>
            
           
            </>:""
        )
        })}
      </div>
    </Modal2S>
  )
}

export default memo(Modal2);