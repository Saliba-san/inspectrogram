import {createContext, ReactNode, useState} from "react";

export type SnackBarType = {
    snackOpen: boolean,
    // setSnackOpen: (open: boolean) => void,
    snackMessage: string,
    // setSnackMessage: (message: string) => void
    setSnackbar: (open: boolean, message: string) => void
}

export const SnackbarContext = createContext({} as SnackBarType)

type ImageContextTypeProviderPorps = {
    children: ReactNode,
}

export function SnackContextProvider (props: ImageContextTypeProviderPorps) {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")

    function setSnackbar(open: boolean, message: string) {
        setOpen(open)
        setMessage(message)
    }

    return (
        <SnackbarContext.Provider value={
            {
                snackOpen: open,
                snackMessage: message,
                setSnackbar: setSnackbar
            }}
        >
            {props.children}
        </SnackbarContext.Provider>
    )
}