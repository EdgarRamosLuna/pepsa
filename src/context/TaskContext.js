import React, { useState, useEffect } from 'react';

import { createContext } from "react";

export const TaskContext = createContext();
export const TaskContextProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    
    useState(() =>{
      setLoading(true);
      setTimeout(() => {
        setLoaded(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, 1000);
    }, [])
    return (
        <TaskContext.Provider
          value={{
            loading,
            loaded,
            setLoaded
          }}
        >
          {props.children}
        </TaskContext.Provider>
      );
};