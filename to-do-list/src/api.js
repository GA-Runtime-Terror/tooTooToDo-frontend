import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://toucan-do-it.herokuapp.com'
})
