import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NosotroS } from "../styles/Styles";

const Nostros = () => {
  const cantImg = 8;
  const [items, setItems] = useState([]);
  useEffect(() => {
    for (let i = 1; i <= cantImg; i++) {
      const element = cantImg[i];
      setItems((prev) => [...prev, { i }]);
    }
  }, []);
  return (
    <NosotroS>
      <div className="abaout-us-containter">
        <div className="s1">
          <div className="s1-img">
            <img src="/assets/img/n.png" alt="PEPSA" />
          </div>
          <div className="s1-txt">
            <h1>¿Quienes somos?</h1>
            <h2>
              Somos una empresa constituida 100% mexicana. Contamos con más de
              15 años de experiencia en el campo de metal-mecánica, sobre
              montajes electromecánicos para todo tipo de proyectos.
            </h2>
          </div>
          <div className="s1-txt2">
            <h2>
              Trabajamos con electricidad, tuberías, montaje de equipos de
              procesos, redes de alumbrado y conexiones completas de
              automatización. Contamos con los recursos, equipos, herramientas
              que nos permiten ofrecer un excelente rendimiento y podemos
              garantizar una obra en tiempo y forma, entregando nuestros
              contratos en forma.
            </h2>
          </div>
        </div>
      </div>
      <div className="s2">
        <div className="s2-items-container">
            {items.map((data) => {
                return (
                <div className="item2-img">
                    <img src={`/assets/img/nosotros/${data.i}.png`} alt="PEPSA" />
                </div>
                );
            })}
        </div>
      </div>
      <div className="s3">
        <div className="s3-container">
          <div className="s3-title">
            <h1>Nuestra filosofía</h1>
          </div>
          <div className="s3-txt">
            <h2>
              Adquirir la confianza y satisfacción del cliente, aplicando la
              honestidad, calidad y rapidez en las instalaciones con precios
              competitivos.
            </h2>
          </div>
          <div className="s3-img">
            <img src="/assets/img/nf.png" />
          </div>
        </div>
      </div>
    </NosotroS>
  );
};

export default Nostros;
