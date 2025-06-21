import axios from "axios"

// const BASE_URL = "https://api.themoviedb.org/3/"

const filmesAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
})

export default filmesAPI 
