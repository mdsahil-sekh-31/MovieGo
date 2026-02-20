import Movies from "./Movies"
import { Outlet } from "react-router"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../components/GlobalContext.jsx"
export default function MovieAccess(){
     const[value,setValue]=useState("Adventure")
   const[id,setId]=useState()
   const[genreid, setGenreId]=useState([])
   const[dataid, setDataId]=useState([]) 
   const [movielist, setmovielist]=useState([])
   const [moviedetail, setDetail]=useState()
    return(
         <GlobalContext.Provider value={{value, setValue, id, setId, genreid, setGenreId, dataid, setDataId, movielist, setmovielist,moviedetail, setDetail}}>

      <Outlet />
    </GlobalContext.Provider>
    )
}