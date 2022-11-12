import React from "react";
import { FooterS } from "../styles/Styles";

const Footer = () => {
  return (
    <FooterS>
      <div className="footer-container">
        <div className="footer-item">
          <div className="item-title">
            <h3>Redes Sociales</h3>
          </div>
          <div className="item-data">
            <p className="fb"><i class="fa-brands fa-square-facebook"></i><div>PEPSA MX</div></p>
            <p className="ig"><i class="fa-brands fa-instagram"></i><div>pepsa_mx</div></p>
            
          </div>
        </div>
        <div className="footer-item">
          <div className="item-title">
            <h3>Llámanos</h3>
          </div>
          <div className="item-data">
            <div className="item-img">
            <i class="fa-solid fa-phone"></i>
            </div>
            <div className="item-txt">
              <p>844 415 4023</p>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="item-title">
            <h3>Ubicación</h3>
          </div>
          <div className="item-data">
            <div className="item-img">
            <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="item-txt">
              <p>Col. La Encantada, CP 25307</p>
              <p>Saltillo Coah, Mex</p>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="item-title">
            <h3>Correo</h3>
          </div>
          <div className="item-data">
            <div className="item-img">
            <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="item-txt">
              <div className="item-link">
                <a href="mailto:contacto@serviciospepsa.com">contacto@serviciospepsa.com</a>
                <a href="mailto:jose.aguayo@serviciospepsa.com">jose.aguayo@serviciospepsa.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterS>
  );
};

export default Footer;
