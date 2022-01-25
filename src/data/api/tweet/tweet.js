import { Host, Endpoints, getUserInfo } from "../../../helper/comman_helper";
import axios from 'axios';

export const tweetApi = (data = null, method) => {
    let url = Host + Endpoints.tweet;
    const headers = {
        headers: {
            Authorization: `Bearer ${getUserInfo()?.token}`
        }
    }
    return  method === 'get' ? (axios.get(url = url + `?page=${data.page}&size=${data.size}&userId=${data.createdBy}`, headers)) :
            method === 'post' ? (axios.post(url, data, headers)) : 
            method === 'delete' ? (axios.delete(url, data, headers)) : '';
}