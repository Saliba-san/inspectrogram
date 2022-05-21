import {api} from "./api";

export const sendFileRequest = async (data: FormData) => {

    const headers = {'Content-Type': 'application/json'};

    const response = await api.post('inspectogram', JSON.stringify(data), {headers: headers})
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

    const response = await api.post('inspectogram', JSON.stringify(specId), {headers: headers})
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

export const getInspectrogram = async (specId: string) => {

    const headers = {'Content-Type': 'application/json'};

    const response = await api.get('inspectogram/' + specId, {headers: headers})
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