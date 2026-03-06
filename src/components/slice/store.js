import { configureStore } from "@reduxjs/toolkit";
import moviereducer from "./movieinfo"

const store = configureStore({
  reducer: {
    moviedata: moviereducer
  }
});

export default store;