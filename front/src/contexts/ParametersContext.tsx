import { ReactNode, useState } from "react"
import { createContext } from "react"

export type ParametersType = {
    specid: string,
    framelength:number,
    window:string,
    hoplength:number,
    cmap: string,
    mode: string   
}

type ParametersContextType ={
    parameters: ParametersType | undefined,
    setParameters: (Parameters:ParametersType) => void     
}

export const ParametersContext = createContext({} as ParametersContextType)

type ParametersContextTypeProviderProps ={
    children: ReactNode
}

export function ParametersContextProvider (props:ParametersContextTypeProviderProps){

    const [parameters, setParameters] = useState<ParametersType>()

    function setParametersData({cmap,framelength,hoplength,mode,specid,window}:ParametersType){
        
        setParameters({
            specid,
            framelength,
            window,
            hoplength,
            cmap,
            mode
        })
    }

    return (
        <ParametersContext.Provider value={
            {
                parameters: parameters, 
                setParameters: setParametersData
            }}
        >
            {props.children}
        </ParametersContext.Provider>
    ) 

}
