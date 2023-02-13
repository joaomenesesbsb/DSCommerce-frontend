import { TOKEN_KEY } from "../utils/system";

export function save(token : string) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function get() : string | null {
    const token = localStorage.getItem(TOKEN_KEY);
    return token;
}

export function remove() {
    localStorage.removeItem(TOKEN_KEY);
}