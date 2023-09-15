import { createContext, useContext } from "react";
import Store from "../Store/Store";

const contextVariable = createContext();

export function useContextVariable(){
    useContext(contextVariable)
}

export function ContextProvider({children}){
    return(
      <contextVariable.Provider value={Store}>
            {children}
      </contextVariable.Provider>
    )
}