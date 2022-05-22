import {createContext, ReactNode, useState} from "react";

export type Image = {
    data: string,
    length: number,
    imageid: string
}

type ImageContextType = {
    image: Image | undefined,
    setImage: (data: Image) => Promise<void>
}

export const ImageContext = createContext({} as ImageContextType)

type ImageContextTypeProviderPorps = {
    children: ReactNode,
}

export function ImageContextProvider (props: ImageContextTypeProviderPorps) {

    const [image, setImage] = useState<Image>()

    async function setImageData (data: Image) {
        setImage(data)
    }

    return (
        <ImageContext.Provider value={{image: image, setImage: setImageData}} >
            {props.children}
        </ImageContext.Provider>
    )
}