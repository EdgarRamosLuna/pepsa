import React from 'react'
import { memo } from 'react'
import { CcS, ContactoS } from '../styles/Styles'

const Contacto = () => {
  return (
    <ContactoS>
      <CcS>
      <div className="container">
          <div className="item">
              <div className="item-title">
                  <h1 style={{width:"100%"}}>Correo</h1>
              </div>
              <div className="item-txt">
                  <div className="item-txt-ico">
                      <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div className="item-txt-data">
                      <a href="mailto:contacto@serviciospepsa.com">contacto@serviciospepsa.com</a>
                      <a href="mailto:jose.aguayo@serviciospepsa.com">jose.aguayo@serviciospepsa.com</a>
                  </div>
              </div>
          </div>
          <div className="item">
              <div className="item-title">
              <h1 style={{width:"80%"}}>UBICACIÓN</h1>
              </div>
              <div className="item-txt">
                  <div className="item-txt-ico">
                  <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="item-txt-data">
                      <p>{`Col. La Encantada, CP 25307
Saltillo Coah, Mex`}</p>
                  </div>
              </div>
          </div>
          <div className="item">
              <div className="item-title">
              <h1 style={{width:"60%"}}>REDES SOCIALES</h1>
              </div>
              <div className="item-txt">
                  <div className="item-txt-data">
                    <a className="fb" href="#"><i class="fa-brands fa-square-facebook"></i><div>PEPSA MX</div></a>
                    <a className="ig" href="#"><i class="fa-brands fa-instagram"></i><div>pepsa_mx</div></a>
                  </div>
              </div>
          </div>
          <div className="item">
              <div className="item-title">
              <h1>LLÁMANOS</h1>
              </div>
              <div className="item-txt">
                  <div className="item-txt-ico">
                  <i class="fa-solid fa-phone"></i>
                  </div>
                  <div className="item-txt-data">
                    <p>844 415 4023</p>
                  </div>
              </div>
          </div>
      </div>
      
      <div className='img-c'>
        <img src="/assets/img/cc.png" alt="" />
      </div>
      </CcS>
      <div className="contacto-footer">
        <div className="f-container">  
          <h1>¡CUALQUIER DUDA O ACLARACIÓN
  ESTAMOS PARA SERVIRTE!</h1>
        </div>
      </div>
    </ContactoS>
  )
}

export default memo(Contacto);