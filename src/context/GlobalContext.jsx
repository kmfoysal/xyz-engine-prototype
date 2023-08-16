import { createContext } from "react";



const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    
  const value = {};

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;