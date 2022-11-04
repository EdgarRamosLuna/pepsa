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
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/servicios">servicios</Link></li>
                <li><Link to="/portafolio">portafolio</Link></li>
                <li><Link to="/contacto">CONTÁCTANOS</Link></li>
            </ul>
        </div>
    </MenuS>
    <Outlet />
    {path == "contacto" ? "": <Footer />}
    
    </>
  )
}

export default Header