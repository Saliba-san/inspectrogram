import {api} from "./api";
import {ParametersType} from "../contexts/ParametersContext"
import {UploadResponseType} from "./file";
import {Musica} from "../contexts/MusicasContext";

export type SpecResponse = {
    data: string,
    status: number,
    statusText: string
}


export const changeSpectogramParameter = async (data: ParametersType) => {

    console.log(data)

    const response = await api.post('genspec', JSON.stringify(data))
        .then(res => {
            console.log("Sucesso")
            return res
        })
        .catch(err => {
            console.log("Erro")
            return err
        }) as SpecResponse;
    return {
        data: response.data,
        status: response.status,
        statusText: response.statusText
    } as SpecResponse
}

