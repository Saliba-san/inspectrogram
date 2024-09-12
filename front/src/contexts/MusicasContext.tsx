import {createContext, ReactNode, SetStateAction, useState} from "react";

export type Musica = {
    id: number,
    path: string,
    artist: string,
    music: string
}

type MusicContextType = {
    musicas: Musica[] | undefined,
    setMusics: (data: Musica[]) => Promise<void>
    deleteMusica: (music: number) => void
}

export const MusicContext = createContext({} as MusicContextType)

type MusicaContextTypeProviderPorps = {
    children: ReactNode,
}

export function MusicContextProvider(props: MusicaContextTypeProviderPorps) {

    const [musicas, setMusicas] = useState<Musica[]>([])

    async function updateMusicas(data: Musica[]) {

        console.log(data)
        if( musicas.length > 0) {
            data.forEach(item => {
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
        } else  {
            setMusicas(data)
        }

    }

    async function deleteMusic(id: number) {
        if (id > -1) {
            console.log(id)
            console.log(musicas)
            let aux: Musica[] = [];
            for(let i = 0; i < musicas.length; i++) {
                if(i !== id)
                    aux = ([
                        ...aux,
                        musicas[i]
                    ])
            }
            console.log(aux )
            setMusicas(aux)
        }
    }

    return (
        <MusicContext.Provider value={{musicas: musicas, setMusics: updateMusicas, deleteMusica: deleteMusic}} >
            {props.children}
        </MusicContext.Provider>
    )
}