import axios from "axios"

const filmesAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
})

export default filmesAPI 
