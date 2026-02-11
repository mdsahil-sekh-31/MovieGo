import Home from "./pages/Home"
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router";
import Movies from "./pages/Movies";
export default function App(){
    return(<>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<Movies/>}/>
            </Routes>
        </BrowserRouter>
        </>)
}