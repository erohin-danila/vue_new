import axios from "axios"

export const api = axios.create({
    headers: {
        'Content-type': 'application/json'
    },
    //baseURL: 'https://back-poster.admlr.lipetsk.ru/',
    //baseURL: 'https://jsonplaceholder.typicode.com/',
    // baseURL: 'https://raw.githubusercontent.com/',
    baseURL: 'http://127.0.0.1:8000/api',
    responseType: 'json'
})
