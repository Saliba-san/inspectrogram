import {api} from "./api";
import {ParametersType} from "../contexts/ParametersContext"

export type SpecResponse = {
    data: string,
    status: number,
    statusText: string
}

export async function changeSpectogramParameter(data: ParametersType) {

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

