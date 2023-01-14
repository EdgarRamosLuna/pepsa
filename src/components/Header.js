import React from 'react'
import { memo } from 'react'
import { useContext } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { TaskContext } from '../context/TaskContext'
import { HeaderS, MenuS } from '../styles/Styles'
import Footer from './Footer'
import Modal2 from './Modal2'
import ModalPort from './ModalPort'

const Header = () => {
  const {loading, setLoading, setLoaded, clearLoading, showModal, setIdModal, idModal, showModal2, setShowModal2,} = useContext(TaskContext);
  const location = useLocation();
  const path = location.pathname.replaceAll("/", "");
  console.log(path);
  const load = () =>{
    setLoaded(false);
    setLoading(true);
    clearLoading(1000);
  }
  return (
    <>
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
    </MenuS>
    <Outlet />
    {path == "contacto" ? "": <Footer />}
    
    </>
  )
}

export default memo(Header)