import {useContext} from "react";
import {ImageContext} from "../contexts/ImageContext";

export function  useImage () {
    const value = useContext(ImageContext)
    return value
}