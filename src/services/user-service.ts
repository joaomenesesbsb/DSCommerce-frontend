import { requestBackend } from "./request";
import * as authService from '../services/auth-service'

export function findMe() {

    const headers = {
        Authorization: "Bearer " + authService.getAccessToken()
    }

    return requestBackend({ url: `/users/me`, headers });
}