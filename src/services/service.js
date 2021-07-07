import axios from "axios";

const BASE_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:8000/api/v1/"
        : "devUrl";

const token = window.sessionStorage.getItem("session");


export const httpClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization:  token   }
});