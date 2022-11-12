import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';
import { ImgS } from '../styles/Styles';

const Imgs = (props) => {
  const {setShowModal} = useContext(TaskContext)
  const {img, id, onClick} = props;
  const showModal = () =>{
   // console.log(id);
    onClick();
    setShowModal(true);
  }
  return (
    <ImgS onClick={showModal}>
        <img src={img} alt="" />
    </ImgS>
  )
}

export default Imgs