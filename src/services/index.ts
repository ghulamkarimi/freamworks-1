import axios from "axios"
import { IBlog } from "../interface"

const SERVER_URL = "http://localhost:3002/api"

export const getAllBlogs = () => {
    const url = `${SERVER_URL}/blog/display`
    return axios.get(url)
}

export const updateBlog = (blog: IBlog, blogId: string) => {
    const url = `${SERVER_URL}/blog/update/${blogId}`;
    return axios.put(url, blog)
}

export const deleteBlog = (blogId: string) => {
    const url = `${SERVER_URL}/blog/delete/${blogId}`;
    return axios.delete(url)
}

export const createBlog = (blog: IBlog) => {
    const url = `${SERVER_URL}/blog/create/`;
    return axios.post(url, blog)
}

export const getAllUser = () => {
    const url = `${SERVER_URL}/user/display`
    return axios.get(url)
}

