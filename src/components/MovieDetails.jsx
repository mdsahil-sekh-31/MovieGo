import { useContext, useEffect, useState} from "react"
import { GlobalContext } from "./GlobalContext"
import { useParams } from "react-router"
import { Link } from "react-router"
import Showtime_selection from "./Showtime_selection"
const apiKey = import.meta.env.VITE_TMBD_API_KEY

export default function MovieDetails(){
        const [movie, setMovie] = useState(null)
    const { id } = useParams()
    const base_url="https://image.tmdb.org/t/p/w500"
    useEffect(() => {
        if(!id) return

    async function fetchMovie(){
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        )
        const data = await response.json()
        console.log(data)
        setMovie(data)
    }

    fetchMovie()
    }, [id])

    if(!movie) return <p>Loading...</p>
     return(
        
        
        <div>
            <div className=" w-[80%] mx-auto mt-[30px]">
            <div className="cursor-pointer">
                <Link to={`/movieexplore`} >
                Back to Movie
                </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-8  ">
                <div>
                    <img className="w-[200px] md:w-[400px]" src={base_url+movie?.poster_path} alt="" />
                </div>
                <div className="mx-[10px] ">
                    <div>{movie.original_title}</div>
                   <div className="flex gap-1">
                     <div className="flex gap-1 ">
                        {
                            movie.genres.map((items,id)=>{
                            return(
                                <p key={id} className="rounded-[5px]  border-[1px] px-[5px] my-auto text-[12px]">{items.name}</p>
                            )
                        })
                        }
                    </div>
                    <div className="px-[7px] py-[5px]">{movie.runtime} min</div>
                   </div>
                   <div className="px-[7px] py-[5px]">{movie.overview}</div>
                </div>
            </div>

            <Showtime_selection/>   
            
        </div>
        </div>
        
    )
}



