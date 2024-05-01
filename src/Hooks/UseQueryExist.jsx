
const UseQueryExist = () => {
    const queryExist = localStorage.getItem('query')

    if(!queryExist){
        localStorage.setItem('query', JSON.stringify([]))
    }
}

export default UseQueryExist