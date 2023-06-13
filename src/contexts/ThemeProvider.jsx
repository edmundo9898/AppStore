import React, { createContext, useState } from "react";
import ThemeStyles from "../themes";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme] = useState(ThemeStyles);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
