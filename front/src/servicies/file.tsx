import {api} from "./api";

export const generateSpectrogram = async (data: FormData) => {

    const headers = {'Content-Type': 'application/json'};

    const response = await api.post('genspec', JSON.stringify(data), {headers: headers})
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

    const headers = {'Content-Type': 'application/json'};

    const response = await api.post('delspec', JSON.stringify(specId), {headers: headers})
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

    const headers = {'Content-Type': 'application/json'};

    const response = await api.get('getspec/' + specId, {headers: headers})
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