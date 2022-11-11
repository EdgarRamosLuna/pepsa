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
      console.log("entro")
      setLoading(true);
      clearLoading();
    }, [])
    return (
        <TaskContext.Provider
          value={{
            loading,
            loaded,
            setLoaded,
            setLoading,
            clearLoading,
          }}
        >
          {props.children}
        </TaskContext.Provider>
      );
};