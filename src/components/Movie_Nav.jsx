import { useEffect, useState } from "react"
import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"
const apiKey = import.meta.env.VITE_TMBD_API_KEY

export default function MovieNav(){
        const {value, setValue, id, setId}=useContext(GlobalContext)
        const[dataid, setDataId]=useState([]) //movie type ids
        
        useEffect(()=>{
                async function search(){
                    const response=await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en`)
                    const data=await response.json()
                    setDataId(data.genres)
                    
                    
                }
                search()
                 const found=dataid.find((item)=>item.name.toLowerCase()===value.toLowerCase())
                    if(found){
                        setId(found.id)
                    }
            },[value])
            
    console.log(dataid)
    
    return(
        
        <div className="w-full  flex justify-center ">
            <div className="w-[55%] flex justify-between mt-[40px]   border-0 ">
             <div className="w-[70%]">
                <input className="w-full  px-[20px] py-[8px]  rounded-[5px] focus:outline-none  bg-[#EEEEEE]" type="text" placeholder="search movies"/>
            </div>
                   <div className="group relative inline-block mx-[10px]">
                     <div className="cursor-pointer w-[150px] text-center bg-[#EEEEEE]  px-[20px] py-[8px] rounded-[5px]" value="">{value}</div>
                    <ul  className="absolute left-0    hidden  opacity-0 group-hover:block  group-hover:opacity-100 bg-amber-600 w-[150px] text-center transition duration-500 group-hover:top-[40px]">
                    
                    <li className=" hover:bg-amber-700 cursor-pointer duration-300 ease-in " onClick={()=>setValue("All")} >All</li>
                    <li className="hover:bg-amber-700 cursor-pointer duration-300 ease-in" onClick={()=>setValue("Adventure")}>Adventure</li>
                    <li className="hover:bg-amber-700 cursor-pointer duration-300 ease-in" onClick={()=>setValue("Comedy")}>Comedy</li>
                    <li className="hover:bg-amber-700 cursor-pointer duration-300 ease-in" onClick={()=>setValue("Horror")}>Horror</li>
                    <li className="hover:bg-amber-700 cursor-pointer duration-300 ease-in" onClick={()=>setValue("Action")}>Action</li>
                    <li className="hover:bg-amber-700 cursor-pointer duration-300 ease-in" onClick={()=>setValue("Romance")}>Romance</li>
                    <li className="hover:bg-amber-700 cursor-pointer duration-300 ease-in" onClick={()=>setValue("Science Fiction")}>Science Fiction</li>
                </ul>
                   </div>
                
           </div> 
        </div>
    )
}