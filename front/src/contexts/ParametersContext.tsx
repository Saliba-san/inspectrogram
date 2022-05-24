import { ReactNode, useState } from "react"
import { createContext } from "react"

const Parameters = {
    specid: "1",
    framelength: 1024,
    window: "hann",
    hoplength: 512,
    cmap: "default",
    mode: "power"
} as ParametersType

export type ParametersType = {
    specid?: string,
    framelength?:number,
    window?: string,
    hoplength?: number,
    cmap?: string,
    mode?: string
}


type ParametersContextType ={
    parameters: ParametersType,
    setParameters: (Parameters:ParametersType) => void     
}

export const ParametersContext = createContext({} as ParametersContextType)

type ParametersContextTypeProviderProps ={
    children: ReactNode,
}

export function ParametersContextProvider (props: ParametersContextTypeProviderProps){

    const [parameters, setParameters] = useState<ParametersType>(Parameters)

    function setParametersData({cmap,framelength,hoplength,mode,specid,window}:ParametersType){

        if (specid === undefined) {
            setParameters({
                specid: parameters.specid,
                framelength,
                window,
                hoplength,
                cmap,
                mode
            })
        } else {
            setParameters({
                specid,
                framelength: parameters.framelength,
                window: parameters.window,
                hoplength: parameters.hoplength,
                cmap: parameters.cmap,
                mode: parameters.mode
            })
        }
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
