import axios from "axios";


const api = process.env.REACT_APP_MOVIE_API
const SearchMovie = async (movie_name) =>{
    const movie_api = `${api}/${movie_name}`
    const response = await axios.get(movie_api)
    return response.data
}

export {
    SearchMovie
}