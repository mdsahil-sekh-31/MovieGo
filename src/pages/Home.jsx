import { useEffect, useState } from "react"
import Header from "../components/Header"
import Poster from "../components/Poster"
const apiKey = import.meta.env.VITE_TMBD_API_KEY
export default function Home(){
   

    return(
        <>
            <Header/>
            <Poster/>
        </>

    )
}