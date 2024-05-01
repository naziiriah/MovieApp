import { useEffect, useState } from "react"
import { GetPreviousQueries, SaveQuery } from "../Components"
import Header from "../Components/Header"
import Loader from "../Components/Loader"
import PreviousQuery from "../Components/PreviousQuery"
import MovieCard from "../Components/MovieCard"
import { SearchMovie } from "../API"
import UseQueryExist from "../Hooks/UseQueryExist"


const Home = () => {

    UseQueryExist()

    const [searchValue, setSearchValue] = useState("")
    const [queries, setQueriesValue] = useState(JSON.parse(localStorage.getItem('query')))
    const [loading, setLoading] = useState(false)
    const [trackButtons, updateButtonValue] = useState(0)
    const [searchedMovie, setSearchedMovieValue] = useState("")

    useEffect(() => {
        setQueriesValue(GetPreviousQueries())
      }, [trackButtons])

    function selectPreviousQueries(value){
        setSearchValue(value)
    }

    async function Submit(){
        setLoading(true)
        SaveQuery(searchValue)
        updateButtonValue((prevState) => prevState + 1)
        
        const response = await SearchMovie(searchValue)
        setSearchedMovieValue(response)
        
    
        setSearchValue('')
        setTimeout(()=> {
          setLoading(false)
        }, 5000)
      }

    return (
        <>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} Submit={Submit}/>
            <Loader loading={loading}/>
            <MovieCard searchedMovie={searchedMovie} loading={loading} />
            <PreviousQuery queries= {queries} selectPreviousQueries={selectPreviousQueries}/> 
        </>
    )
}

export default Home