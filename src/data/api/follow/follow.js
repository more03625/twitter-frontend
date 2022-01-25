import { Host, Endpoints, getUserInfo } from "../../../helper/comman_helper";
import axios from 'axios';

export const followApi = (data = null, method) => {
    let url = Host + Endpoints.follow;
    const headers = {
        headers: {
            Authorization: `Bearer ${getUserInfo()?.token}`
        }
    }

    return method === 'post' ? (axios.post(url, data, headers)) : ""
}
export const isFollowingApi = (data = null, method) => {
    let url = Host + Endpoints.isFollowing;
    const headers = {
        headers: {
            Authorization: `Bearer ${getUserInfo()?.token}`
        }
    }

    return method === 'post' ? (axios.post(url, data, headers)) : ""
}