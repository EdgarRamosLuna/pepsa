import React, { useState, useEffect } from 'react';

import { createContext } from "react";

export const TaskContext = createContext();
export const TaskContextProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const clearLoading = (interval = 1000) =>{
      setTimeout(() => {
        setLoaded(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, interval);
    }
    useState(() =>{
      
      setLoading(true);
      clearLoading();
    }, [])
    const [showModal, setShowModal] = useState(false);
    const [idModal, setIdModal] = useState(0);
    return (
        <TaskContext.Provider
          value={{
            loading,
            loaded,
            setLoaded,
            setLoading,
            clearLoading,
            showModal, setShowModal,
            idModal, setIdModal
          }}
        >
          {props.children}
        </TaskContext.Provider>
      );
};