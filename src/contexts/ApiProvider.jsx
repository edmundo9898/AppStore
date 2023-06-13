import React, { createContext } from "react";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
   
    const teste = () => {
      console.log('Funcionou!!')
    }

  return <ApiContext.Provider value={{teste}}>{children}</ApiContext.Provider>;
};

export default ApiProvider;