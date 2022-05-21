import {api} from "./api";

export type ChParameterType = {
    specid: string,
    framelength:number,
    window:string,
    hoplength:number,
    cmap: string,
    mode: string    
}

type responseType = {
    id: string

}

export const changeSpectogramParameter = async (data:ChParameterType) => {

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
