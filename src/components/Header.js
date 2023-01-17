import React from 'react'
import { useState } from 'react'
import { memo } from 'react'
import { useContext } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { TaskContext } from '../context/TaskContext'
import { HeaderS, MainStyle, MenuMobile, MenuS } from '../styles/Styles'
import Footer from './Footer'
import Modal2 from './Modal2'
import ModalPort from './ModalPort'

const Header = () => {
  const {loading, setLoading, setLoaded, clearLoading, showModal, setIdModal, idModal, showModal2, setShowModal2,} = useContext(TaskContext);
  const location = useLocation();
  const path = location.pathname.replaceAll("/", "");
  console.log(path);
  const [showMenuMo, setShowMenuMo] = useState(false);
  const load = () =>{
    setLoaded(false);
    setLoading(true);
    clearLoading(1000);
    setShowMenuMo(false);
  }
  return (
    <MainStyle>
    {showModal2 && <Modal2 />}
    
    <HeaderS />
    <MenuS>
        <div className="menu-container">
            <ul>
                <li onClick={load}><Link to="/nosotros" className={`${path == "nosotros" ? "active":""}`}>Nosotros</Link></li>
                <li onClick={load}><Link to="/servicios" className={`${path == "servicios" ? "active":""}`}>servicios</Link></li>
                <li onClick={load}><Link to="/portafolio"className={`${path == "portafolio" ? "active":""}`}>portafolio</Link></li>
                <li onClick={load}><Link to="/contacto"className={`${path == "contacto" ? "active":""}`}>CONTÁCTANOS</Link></li>
            </ul>
        </div>
        <div className="menu-container-mobile">
          <div className='logo-mobile'>
              <img src="/assets/img/favicon.png" alt="" />
          </div>
            <ul style={{left:`${showMenuMo ? 0 : '100%'}`, transition:'all 0.3s'}}>
                <li onClick={load}><Link to="/nosotros" className={`${path == "nosotros" ? "active":""}`}>Nosotros</Link></li>
                <li onClick={load}><Link to="/servicios" className={`${path == "servicios" ? "active":""}`}>servicios</Link></li>
                <li onClick={load}><Link to="/portafolio"className={`${path == "portafolio" ? "active":""}`}>portafolio</Link></li>
                <li onClick={load}><Link to="/contacto"className={`${path == "contacto" ? "active":""}`}>CONTÁCTANOS</Link></li>
            </ul>
            <MenuMobile onClick={()=> setShowMenuMo(prev =>!prev)}>
            <div class={`menu-button ${showMenuMo ? "a-menu-button": ""} `}>
              <div class="menu-line"></div>
            </div>

            </MenuMobile>
        </div>
    </MenuS>
    
    <div className='outlet'>
      <Outlet className="" />
      
    </div>
    {path == "contacto" ? "": <Footer />}
    
    </MainStyle>
  )
}

export default memo(Header)