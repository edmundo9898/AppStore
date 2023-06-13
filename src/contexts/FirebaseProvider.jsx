import React, { createContext } from "react";

export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const teste = () => {
    console.log("Funcionou!!");
  };
  return (
    <FirebaseContext.Provider value={{teste}}>{children}</FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
