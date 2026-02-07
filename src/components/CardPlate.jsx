import { useEffect, useState } from "react"
import Cards from "../components/Cards"
const apiKey = import.meta.env.VITE_TMBD_API_KEY
export default function CardPlate(){
     const base_url="https://image.tmdb.org/t/p/w500"
    const [movielist, setmovielist]=useState([])
    useEffect(()=>{
        async function search(){
            const response=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
            const data=await response.json()
            setmovielist(data.results)
        }
        search()
    },[])
    console.log(movielist)
    return(
        <div className="w-full flex justify-center">
            <div className="flex w-[80%] flex-wrap gap-[20px] mt-[100px] justify-center">
                {movielist?.map((items)=>(<Cards key={items?.id} data={items} url={base_url}/>))}
            </div>
        </div>
    )
}