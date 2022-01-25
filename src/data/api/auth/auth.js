import { Host, Endpoints } from "../../../helper/comman_helper";
import axios from 'axios';

export const signInApi = (data = null, method) => {
    let url = Host + Endpoints.signIn;

    return method === 'post' ? (axios.post(url, data)) : '';
}
export const signUpApi = (data = null, method) => {
    let url = Host + Endpoints.signUp;

    return method === 'post' ? (axios.post(url, data)) : '';
}