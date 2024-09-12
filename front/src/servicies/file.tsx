import {api} from "./api";
import {Musica} from "../contexts/MusicasContext";

export type UploadResponseType = {
    data: Musica[]
    status: number,
    statusText: string
}

export const fileUpload = async (data: FormData) => {

    const headers = {'Content-Type': `multipart/form-data`};

    const response = await api.post('uploadfile', data, {headers: headers})
        .then(res => {
            console.log("Sucesso")
            return res
        })
        .catch(err => {
            console.log("Erro")
            return err
        })
    return {
        data: response.data,
        status: response.status,
        statusText: response.statusText
    } as UploadResponseType
}

export const deleteSelectedMusic = async (specId: string) => {

    return await api.post('deletefile', JSON.stringify(specId))
        .then(res => {
            console.log("Sucesso")
            return res
        })
        .catch(err => {
            console.log("Erro")
            return err
        }) as ResponseType
}
