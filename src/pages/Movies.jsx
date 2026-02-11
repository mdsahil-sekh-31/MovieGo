import CardPlate from "../components/CardPlate.jsx"
import MovieNav from "../components/Movie_Nav.jsx"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../components/GlobalContext.jsx"
export default function Movies(){
   const[value,setValue]=useState("All")
   const[id,setId]=useState()
   
    return(
       <>
       <GlobalContext.Provider value={{value, setValue, id, setId}}>
         <MovieNav/>
         <CardPlate/>
       </GlobalContext.Provider>
          
       </>
    )
}