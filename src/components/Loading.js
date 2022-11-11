import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import { LoadingS } from '../styles/Styles'

const Loading = (props) => {
  const {loaded} = useContext(TaskContext);
  return (
    <LoadingS loaded={loaded}>
        <img src="/assets/img/loading.svg" style={{width:"16%"}}/>
    </LoadingS>
  )
}

export default Loading