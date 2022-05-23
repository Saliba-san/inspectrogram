import {useContext} from "react";
import {ImageContext} from "../contexts/ImageContext";
import { ParametersContext } from "../contexts/ParametersContext";
import {SnackbarContext} from "../contexts/SnackContext";
import {MusicContext} from "../contexts/MusicasContext";

export function  useImage () {
    const value = useContext(ImageContext)
    return value
}

export function useSnack () {
    const value = useContext(SnackbarContext)
    return value
}

export function useParameters () {
    const value = useContext(ParametersContext)
    return value
}

export function useMusica () {
    const value = useContext(MusicContext)
    return value
}