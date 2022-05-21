import {api} from "./api";

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
    return response;
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
        })
    return response;
}

export const getSpectrogram = async (specId: string) => {

    const response = await api.get('getspec/' + specId)
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
