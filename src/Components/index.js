const GetPreviousQueries = () => {
    const storedQueries = JSON.parse(localStorage.getItem("query"))
    
    if(!storedQueries){
        localStorage.setItem("query", [])
        return []
    }else{
        return storedQueries
    }
}


function SaveQuery(value){
    let storedQueries = JSON.parse(localStorage.getItem("query"))
    if(!storedQueries){
        storedQueries = [value]
    }else{
        if(storedQueries.length === 5 ){
            storedQueries.shift()
            storedQueries.push(value)
        }else {
            storedQueries.push(value)
        }
    }
    localStorage.setItem("query", JSON.stringify(storedQueries))
}


export {
    GetPreviousQueries,
    SaveQuery
}