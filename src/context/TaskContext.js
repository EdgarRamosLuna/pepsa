import React, { useState, useEffect } from 'react';

import { createContext } from "react";

export const TaskContext = createContext();
export const TaskContextProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const cantImg = 12;
    const [items, setItems] = useState([]);
    const [isMaped, setIsMaped] = useState(false);
    const clearLoading = (interval = 1000) =>{
      setTimeout(() => {
        setLoaded(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }, 666);
    }
    useState(() =>{
      for (let i = 1; i <= cantImg; i++) {
        const element = cantImg[i];
        setItems((prev) => [...prev, { i }]);
        setIsMaped(true);
      }
      setLoading(true);
      clearLoading();
    }, [])
    const [showModal, setShowModal] = useState(false);
    const [idModal, setIdModal] = useState(0);
    const [isModal, setIsModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    return (
        <TaskContext.Provider
          value={{
            loading,
            loaded,
            setLoaded,
            setLoading,
            clearLoading,
            showModal, setShowModal,
            showModal2, setShowModal2,
            idModal, setIdModal,
            isModal, setIsModal,
            items, setItems,
            isMaped, setIsMaped
          }}
        >
          {props.children}
        </TaskContext.Provider>
      );
};