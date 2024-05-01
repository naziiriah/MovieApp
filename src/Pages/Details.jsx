import { useLocation, useNavigate } from "react-router-dom"

const Details = () => {
    const location  = useLocation()
    const navigate = useNavigate()
    const state = location.state
    return(
        <>
        <header className="w-full h-24 flex justify-center mt-16 mb-3">
            <div className="w-11/12">
                <button 
                    id="home-btn"
                    onClick={() => navigate('/')}
                    type="button" 
                    className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                        </svg>
                        Home
                </button>
            </div>
        </header>

        <main className="w-full min-h-7 flex justify-center">
            <div className="w-11/12 lg:flex lg:justify-between">
                <section className="lg:w-5/12 sm:w-full lg:h-screen ">
                    <img src={state.Poster} alt={state.Title} className="w-full"/>
                </section>
                <div className="sm:h-20 lg:h-20"></div>
                <section className="lg:w-5/12 lg:h-screen ">
                    <h1 className="text-xl my-4 font-serif"> <span className="text-3xl font-black font-mono italic">{state.Title}</span></h1>
                    <h2 className="text-xl my-2 font-serif">Actors: <span className="text-lg font-bold font-mono italic">{state.Actors}</span></h2>
                    <h2  className="text-xl my-2 font-serif">Country: <span  className="text-xl font-extrabold font-mono">{state.Country}</span></h2>
                    <h2 className="text-xl my-2 font-serif">DVD Release Date: <span  className="text-xl font-extrabold font-mono">{state.DVD}</span></h2>
                    <h2 className="text-xl my-2 font-serif">Directory: <span className="text-xl font-extrabold font-mono">{state.Directory}</span></h2>
                    <h2 className="text-xl my-2 font-serif">Genre: <span className="text-xl font-extrabold font-mono">{state.Genre}</span></h2>
                    <h2 className="text-xl my-2 font-serif">Language: <span className="text-xl font-extrabold font-mono">{state.Language}</span></h2>
                    <h2 className="text-xl my-2 font-serif">Meta Score: <span className="text-xl font-extrabold font-mono">{state.MetaScore}</span></h2>
                    <h2 className="text-xl my-2 font-serif">Rated: <span className="text-xl font-extrabold font-mono">{state.Rated}</span></h2>
                    <h2 className="text-xl my-2 font-serif">Release Date: <span className="text-xl font-extrabold font-mono">{state.Released}</span></h2>                    
                    <h2 className="text-xl my-2 font-serif">Runtime: <span className="text-xl font-extrabold font-mono">{state.Runtime}</span></h2>                    
                    <h2 className="text-xl my-2 font-serif">Writer(s): <span className="text-xl font-extrabold font-mono">{state.Writer}</span></h2>                    
                    <h2 className="text-xl my-2 font-serif">Year: <span className="text-xl font-extrabold font-mono">{state.Year}</span></h2>                    
                    <h2 className="text-xl my-2 font-serif">IMDB Rating: <span className="text-xl font-extrabold font-mono">{state.imdbRating}</span></h2>                    
                    <h2 className="text-xl my-2 font-serif">Production: <span className="text-xl font-extrabold font-mono">{state.Production}</span></h2>                    
                </section>
            </div>
        </main>
        <footer>
        </footer>        
        </>
    )
}

export default Details

