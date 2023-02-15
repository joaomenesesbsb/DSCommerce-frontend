import { requestBackend } from "./request";
import * as authService from '../services/auth-service'
import { AxiosRequestConfig } from "axios";

export function findMe() {

    const config: AxiosRequestConfig = {
        url: `/users/me`,
        withCredentials: true
    }


    return requestBackend(config);
}