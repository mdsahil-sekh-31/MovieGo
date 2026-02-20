import film from "../assets/film.png"
import { useContext, useEffect,useState } from "react"
import { GlobalContext } from "./GlobalContext"
const apiKey = import.meta.env.VITE_TMBD_API_KEY
import star from"../assets/star.png"
import { Link } from "react-router"
export default function Cards({data,url}){
    const {value, setValue, id, setId, genreid, setGenreId, dataid, setDataId, movielist, setmovielist,moviedetail, setDetail}=useContext(GlobalContext)

    const[matchGenras, setMatchGenras]=useState([])
    const[type, setType]=useState([])
    
     useEffect(()=>{
                    
                   if(value==="All"){
                     setMatchGenras(data.genre_ids)  //what types of movie it is
                    //    console.log(data.genre_ids)
                    //    console.log(dataid)
                    // console.log(dataid.filter((items)=>data?.genre_ids.includes(items.id)))
                       setType(dataid.filter((items)=>data?.genre_ids.includes(items.id)))
                   }
                   else{
                    setType(dataid.filter((items)=>value.includes(items.name)))
                   }
                },[value,dataid,data,moviedetail])
  
    // console.log(value)
        
            function pass(){
            setDetail(data)
        }
        
        console.log(useContext(GlobalContext))
    return(
        <div className="w-[250px] rounded-[10px] mt-[20px] bg-white shadow-lg">
            <div>
                
                    <img className="w-fit rounded-t-[10px] object-cover" src={`${url}${data.poster_path}`} alt="" />
                

            </div> 
            <div className="px-[10px]   ">
                
                <div className="h-[40px]">
                    <p className="text-[15px] mt-[15px] font-bold font-sans my-[5px] ">{data.title}</p>
                </div>
                <div className="mb-0">
                     <div className="flex items-center ]">
                <img className="h-4 w-4" src={film} alt="" />
                
                    {
                        type.map((item) => (
                        <p className="text-[14px] my-[10px]" key={item.id}>{item.name}</p>
                        ))
                        
                    }
                
                
            </div>
                    <Link to={`/movieexplore/moviedetails/${data.id}`}>
                <div onClick={pass} className="bg-black text-white text-center py-[5px] rounded-[5px] my-[10px]  w-[90%] container mx-auto cursor-pointer">Book Tickets</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}