import React, {createContext, useContext , useState} from  'react'

const ResultContext = createContext();
const baseUrl =  'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider  = ({children})=>{
const [results , setResults] = useState([]);
const [isLoading , setIsLoading] = useState(false);
const [searchTerm , setSearchTerm] = useState("Google");

const getResults = async(type) =>{
    setIsLoading(true)
    const response = await fetch(`${baseUrl}${type}`,{
        method:'GET',
        headers: {
            'x-user-agent': 'desktop',
            'x-proxy-location': 'US',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': '98c93f68b5msh124693c37fdcdf0p157c12jsn320dd3fc421c'
          }
    })
    const data = await response.json();
    console.log(data)
    if(type.includes === '/news'){
        setResults(data.entries)
    }
    setResults(data)
    setIsLoading(false)

   
}

return(
    <ResultContext.Provider value={{getResults , results , searchTerm , setSearchTerm, isLoading}}>
        {children}
    </ResultContext.Provider>
)
}

export const useResultContext = () => useContext(ResultContext);
