const PreviousQuery = ({queries, selectPreviousQueries}) => {

    return(
        <section className='w-full mt-32 justify-center flex'>
            <div className="lg:w-4/12 md:w-7/12 w-10/12">
              <h2 className='text-start underline w-full font-serif capitalize text-2xl my-2 font-extrabold'>Previous Queries</h2>
              { queries?.length === 0 || queries === null  ?
              <div id="query-not" className='w-full min-h-16 shadow-2xl  text-black bg-gradient-to-r text-xl font-bold uppercase bg-white hover:cursor-pointer hover:from-white hover:to-white rounded-lg px-5 py-2.5 text-center me-2 mb-4'>
                No Previous Search
              </div>
              :
                queries?.map(
                  (state, i) => 
                    <div 
                    id={state}
                    key={i}
                    onClick={() => selectPreviousQueries(state)}
                    className='w-full min-h-16 shadow-2xl list- text-black bg-gradient-to-r text-xl font-bold uppercase bg-white hover:cursor-pointer hover:from-white hover:to-white rounded-lg px-5 py-2.5 text-center me-2 mb-4'>
                      {state}
                    </div>
                )
              }
            </div>
        </section>
    )
}

export default PreviousQuery