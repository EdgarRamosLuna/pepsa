import React, { useContext } from 'react'
import { memo } from 'react';
import { TaskContext } from '../context/TaskContext';
import { ImgS } from '../styles/Styles';

const Imgs = (props) => {
  const {setShowModal2, setIsModal, setLoading, setLoaded, clearLoading} = useContext(TaskContext)
  const {img, id, onClick,} = props;
  const showModal = () =>{
   // console.log(id);
    onClick();
    setShowModal2(true);
    setIsModal(true);
    setLoaded(false);
   // setLoading(true);
   /// clearLoading(300);
  }
  return (
    <ImgS onClick={showModal}>
        <img src={img} alt="" />
    </ImgS>
  )
}

export default memo(Imgs)