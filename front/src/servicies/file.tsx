import {api} from "./api";

export const sendMusicRequest = async (data: FormData) => {

    const headers = {'Content-Type': `multipart/form-data`};

    const response = await api.post('musics-post', data, {headers: headers})
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