import axios from 'axios';


const TorreBioEnpoint = "https://torre.bio/api/people/"
export function getUserTorreBio(userId) {
    let endpoint = `${TorreBioEnpoint}${userId}`;
    return axios.get(endpoint, { headers: { 'crossDomain': true, 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }});
} 