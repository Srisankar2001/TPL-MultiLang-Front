import { Children, createContext, useState } from "react";

export const SideContext = createContext();

export const SideProvider = ({children}) => {
    const [side,setSide] = useState("LTR")
    return(
        <SideContext.Provider value={{side,setSide}}>
            {children}
        </SideContext.Provider>
    )
}