import React from 'react'
import { memo } from 'react';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Services = () => {
    const {items, setItems, isMaped, setIsMaped} = useContext(TaskContext)
    const cantImg = 12;
  return (
    <>
     {isMaped ? (
            items.map((data, indx) => {
              return (
                <div className="item2-img" key={indx}>
                  <img
                    src={`/assets/img/servicios/${data.i}.png`}
                    alt=""
                    width="446"
                    height="466"
                  />
                </div>
              );
            })
          ) : (
            <div className="loading">
              <img src="/assets/img/loading.svg" alt="" />
            </div>
          )}
    </>
  )
}

export default memo(Services);