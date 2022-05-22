import {api} from "./api";

export type UploadResponseType = {
    data: {
        data: string,
        id: string
    },
    status: number,
    statusText: string
}

export const fileUpload = async (data: FormData) => {

    const response = await api.post('uploadfile', data)
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

export const deleteSelectedSpectrogram = async (specId: string) => {

    const response = await api.post('delspec', JSON.stringify(specId))
        .then(res => {
            console.log("Sucesso")
            return res
        })
        .catch(err => {
            console.log("Erro")
            return err
        }) as ResponseType
    return response
}

export const getSpectrogram = async (specId: string) => {


        .then(res => {
            console.log("Sucesso")
            return res
        })
        .catch(err => {
            console.log("Erro")
            return err
        })
    return response;
}