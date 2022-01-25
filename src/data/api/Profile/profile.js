import { Host, Endpoints, getUserInfo } from "../../../helper/comman_helper";
import axios from 'axios';

export const profileApi = (data = null, method) => {
    let url = Host + Endpoints.profile;
    const headers = {
        headers: {
            Authorization: `Bearer ${getUserInfo()?.token}`
        }
    }

    return  method === 'get' ? (axios.get(url = url + "/" + data.userId, headers)) :
            method === 'post' ? (axios.post(url, data, headers)) : 
            method === 'patch' ? (axios.patch(url, data, headers)) :'';
}
// Rahul More