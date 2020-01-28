import axios from 'axios';

export function GetSearch() {
    return axios(
        {
            url: 'http://127.0.0.1:3000/api/v1/ping',
            method: 'get'
        }
    )
}

export function GetWsock() {
    return axios(
        {
            url: 'http://127.0.0.1:3000/api/v1/afuzz',
            method: 'post'
        }
    )
}
