import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';
import { ImgS } from '../styles/Styles';

const Imgs = (props) => {
  const {setShowModal, setIsModal, setLoading, setLoaded, clearLoading} = useContext(TaskContext)
  const {img, id, onClick,} = props;
  const showModal = () =>{
   // console.log(id);
    onClick();
    setShowModal(true);
    setIsModal(true);
    setLoaded(false);
    setLoading(true);
    clearLoading(300);
  }
  return (
    <ImgS onClick={showModal}>
        <img src={img} alt="" />
    </ImgS>
  )
}

export default Imgs