import React, { createContext } from "react";

export const MainContext = createContext();
import ThemeProvider from "./ThemeProvider";
import ApiProvider from "./ApiProvider";
import FirebaseProvider from "./FirebaseProvider";

const MainProvider = ({children}) => {
    return(
        <MainContext.Provider value={{}}>
          <FirebaseProvider>
            <ApiProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </ApiProvider>
          </FirebaseProvider>
        </MainContext.Provider>
    )
}


export default MainProvider;