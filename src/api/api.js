import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://127.0.0.1:5000'
})

export const busca = async (url, setDado) => {
    const reposta = await api.get(url)
    setDado(reposta.data)
}