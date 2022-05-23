import {createContext, ReactNode, useState} from "react";

export type Musica = {
    id: number,
    path: string,
    artist: string,
    music: string
}

type MusicContextType = {
    musicas: Musica[] | undefined,
    setMusics: (data: Musica[]) => Promise<void>
}

export const MusicContext = createContext({} as MusicContextType)

type MusicaContextTypeProviderPorps = {
    children: ReactNode,
}

export function MusicContextProvider (props: MusicaContextTypeProviderPorps) {

    const [musicas, setMusicas] = useState<Musica[]>([])

    async function updateMusicas (data: Musica[]) {

        console.log(data)
        data.forEach( item => {
            const newmusic: Musica = {
                id: item.id,
                artist: item.artist,
                path: item.path,
                music: item.music
            }
            setMusicas([
                ...musicas,
                newmusic
            ])
        })

    }

    return (
        <MusicContext.Provider value={{musicas: musicas, setMusics: updateMusicas}} >
            {props.children}
        </MusicContext.Provider>
    )
}