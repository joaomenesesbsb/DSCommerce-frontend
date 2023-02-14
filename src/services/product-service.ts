import axios, { AxiosRequestConfig } from "axios";
import { requestBackend } from "./request";

export function findPageRequest(page: number, name: string, size = 12, sort = 'name') {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: '/products?size=12',
        params: {
            page,
            name,
            size,
            sort
        }
    }

    return requestBackend(config);
}

export function findById(id: number) {
    return requestBackend({ url: `/products/${id}` });
}

