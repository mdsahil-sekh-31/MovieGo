import Home from "./pages/Home"
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieAccess from "./pages/movieexplore";
import MovieDetails from "./components/MovieDetails";
import SeatUI from "./components/seatSelection";

import { Provider } from "react-redux";
import store from "./components/slice/store"
export default function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/movieexplore" element={<MovieAccess />}>

            <Route index element={<Movies />} />

            <Route path="moviedetails/:id" element={<MovieDetails />} />

            <Route path="moviedetails/:id/seat-payment" element={<SeatUI />} />

          </Route>

        </Routes>

      </BrowserRouter>

    </Provider>
  )
}