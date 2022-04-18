import {api} from "./api";

export const sendFileRequest = async (data: FormData) => {

    const headers = {'Content-Type': 'application/json'};
    console.log("a")

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
