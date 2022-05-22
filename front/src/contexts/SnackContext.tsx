import {createContext, ReactNode, useState} from "react";
import {AlertColor} from "@mui/material";

const Snackbar = {
    open: false,
    message: "",
    type: "success"
} as SnackbarType

export type SnackbarType = {
    open: boolean,
    message: string,
    type: AlertColor
}

type SnackbarContextType = {
    snackData: SnackbarType
    setSnackbar: (open: boolean, message: string, type: AlertColor) => void
}

export const SnackbarContext = createContext({} as SnackbarContextType)

type ImageContextTypeProviderPorps = {
    children: ReactNode,
}

export function SnackContextProvider (props: ImageContextTypeProviderPorps) {
    const [snackbarData, setSnackData] = useState<SnackbarType>(Snackbar)

    function setSnackbar(open: boolean, message: string, type: AlertColor) {
        setSnackData({
            open: open,
            message: message,
            type: type
        })
    }

    return (
        <SnackbarContext.Provider value={
            {
                snackData: snackbarData,
                setSnackbar: setSnackbar
            }}
        >
            {props.children}
        </SnackbarContext.Provider>
    )
}