import Home from "./pages/Home"
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router";
import Movies from "./pages/Movies";
import MovieAccess from "./pages/movieexplore";
import MovieDetails from "./components/MovieDetails";
export default function App(){
    return(<>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movieexplore" element={<MovieAccess/>}>
                <Route index element={<Movies/>}/>
                <Route   path="/movieexplore/moviedetails/:id"   element={<MovieDetails />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
        </>)
}