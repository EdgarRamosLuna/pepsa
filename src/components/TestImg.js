import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

const TestImg = () => {
    const {setShowModal2} = useContext(TaskContext);
  return (
    <div>TestImg



        <button onClick={()=> setShowModal2(true)}>CLick me</button>
    </div>
  )
}

export default TestImg