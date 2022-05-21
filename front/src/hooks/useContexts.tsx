import {useContext} from "react";
import {ImageContext} from "../contexts/ImageContext";
import {SnackbarContext} from "../contexts/SnackContext";

export function  useImage () {
    const value = useContext(ImageContext)
    return value
}

export function useSnack () {
    const value = useContext(SnackbarContext)
    return value
}