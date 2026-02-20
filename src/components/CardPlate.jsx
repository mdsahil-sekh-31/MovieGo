import { useEffect, useState } from "react"
import Cards from "../components/Cards"
import { useContext  } from "react"
import { GlobalContext } from "./GlobalContext"

const apiKey = import.meta.env.VITE_TMBD_API_KEY
export default function CardPlate(){
     const base_url="https://image.tmdb.org/t/p/w500"
    
    const {value, setValue, id, setId,genreid,setGenreId, dataid, setDataId, movielist, setmovielist,moviedetail, setDetail}=useContext(GlobalContext)
    
        

    useEffect(()=>{
        async function search(){
           let response
            if(value==="All"){
                response =await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=1`) ;
                // console.log(response)
                setId(null)
                
                 
            }
            else { response=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}&page=1`)}
             const data=await response.json()
            // console.log(data)
            setmovielist(data.results)
            
           
        }
         if (value === "All" || id) {
        search();
  }
    },[value,id])
       useEffect(()=>{
        async function search2(){
                        const response=await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en`)
                        const result=await response.json()
                        // console.log(result)
                        setDataId(result.genres) //all catagories  
                    }
                     search2()
    },[])

    return(
       <GlobalContext.Provider value={{value, setValue, id, setId, genreid, setGenreId, dataid, setDataId, movielist, setmovielist,moviedetail, setDetail}}>
         <div className="w-[80%]  container mx-auto  bg-[#EEEEEE]">
             
           
             <div className="w-full flex justify-center  ">
                <div className="flex w-[80%] flex-wrap gap-[20px] mt-[70px] justify-center">
                {movielist?.map((items)=>(<Cards key={items?.id} data={items} url={base_url}/>))}
            </div>
            </div>
           
        </div>
       </GlobalContext.Provider>
    )
}