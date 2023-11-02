import { ofetch } from "ofetch";

export const api = ofetch.create({
    baseURL: "http://localhost:5500/"
})

export const getCars = () => api("/cars");

export const countCars = () => {
    return getCars().then((response) => response.length)
}

export const getCar = (id) => api(`/cars/${id}`);


