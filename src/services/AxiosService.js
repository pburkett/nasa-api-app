import axios from "axios"

export const apodApi = axios.create({
    baseURL: "https://api.nasa.gov/planetary/apod?api_key=kggxjzBZNVMOBsVMrfc0dXuEk7Nfs3uEECGRosMB"
})