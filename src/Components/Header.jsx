const Header = ({searchValue, setSearchValue, Submit }) =>{

    return (
        <header className='w-full flex justify-center'>
        <div className='w-10/12 sm:w-11/12'>

          <h1 className='text-black font-bold capitalize my-3 text-3xl text-center'>
            movies
          </h1>

          <div className='my-2'>
            <div className="max-w-md mx-auto">   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input 
                    type="search" 
                    id="default-search" 
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Search Movies..."
                    value={searchValue} 
                    onChange={(e) => setSearchValue(e.currentTarget.value)}
                    required />

                  <button 
                    type='submit'
                    onClick={() => 
                      Submit()}
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
                    Search
                    </button>
              </div>
            </div>
          </div>

        </div>
      </header>
    )
}

export default Header