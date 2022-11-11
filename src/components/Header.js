import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { HeaderS, MenuS } from '../styles/Styles'
import Footer from './Footer'

const Header = () => {
  const location = useLocation();
  const path = location.pathname.replaceAll("/", "");
  console.log(path);
  return (
    <>
    <HeaderS />
    <MenuS>
        <div className="menu-container">
            <ul>
                <li><Link to="/nosotros" className={`${path == "nosotros" ? "active":""}`}>Nosotros</Link></li>
                <li><Link to="/servicios" className={`${path == "servicios" ? "active":""}`}>servicios</Link></li>
                <li><Link to="/portafolio"className={`${path == "portafolio" ? "active":""}`}>portafolio</Link></li>
                <li><Link to="/contacto"className={`${path == "contacto" ? "active":""}`}>CONTÁCTANOS</Link></li>
            </ul>
        </div>
    </MenuS>
    <Outlet />
    {path == "contacto" ? "": <Footer />}
    
    </>
  )
}

export default Header