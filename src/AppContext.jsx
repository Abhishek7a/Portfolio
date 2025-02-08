import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
//   const [globalVariable, setGlobalVariable] = useState('HTML');
  const [dark, setDark] = useState(false);

  const updateGlobalVariable = (newValue) => {
    setGlobalVariable(newValue);
  };

  return (
    <AppContext.Provider value={{dark,setDark }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook to use the context easily in any component
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };