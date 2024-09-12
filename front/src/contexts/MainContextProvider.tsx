import {createContext, ReactNode, useState} from "react";
import {ImageContextProvider} from "./ImageContext";

type MainContextType = {
    aux: boolean | undefined
}

export const MainContext = createContext({} as MainContextType)

type MainContextTypeProviderPorps = {
    children: ReactNode,
}

export function MainContextProvider(props: MainContextTypeProviderPorps) {

    const [aux, setAux] = useState<MainContextType>({aux: false});
    
    return(
        <>
        {/*<MainContext.Provider value={{}}>*/}
        {/*    <ImageContextProvider>*/}
        {/*        {props.children}*/}
        {/*    </ImageContextProvider>*/}
        {/*</MainContext.Provider>*/}
        </>
    )
}