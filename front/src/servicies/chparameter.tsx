import {api} from "./api";
import {ParametersType} from "../contexts/ParametersContext"

type responseType = {
    id: string
}

export const changeSpectogramParameter = async (data:ParametersType) => {

    const response = await api.post('genspec', JSON.stringify(data))
        .then(res => {
            console.log("Sucesso")
            return res
        })
        .catch(err => {
            console.log("Erro")
            return err
        }) as responseType
    return response;
}
