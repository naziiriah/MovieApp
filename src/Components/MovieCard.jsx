import { useNavigate } from "react-router-dom"

const MovieCard = ({searchedMovie, loading}) => {

    const navigate = useNavigate()

    function ToDetailsPage(){
        navigate("/details", {state: searchedMovie})
    }
    return (
        <>
            {
                 searchedMovie?.Title && !loading ?
                <>
                    <section className="w-full h-20 my-2 flex justify-center">
                        <div className="min-h-52 lg:w-4/12 md:w-7/12 w-10/12 p-6 bg-white border border-gray-200 rounded-lg shadow-xl">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{searchedMovie.Title}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{searchedMovie.Actors}</p>
                            <h2>{searchedMovie.Director}</h2>
                            <button 
                                onClick={() =>ToDetailsPage()}
                                id="details-button"
                                type="button" 
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                More Details...
                            </button>
                        </div>
                    </section>
                </> 
                : <></>
            }
        </>
       

      )
}

export default MovieCard
 