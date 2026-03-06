import {createSlice} from "@reduxjs/toolkit"
const reactslicer=createSlice({
    name:"moviedata",
    initialState:{
        currentBooking: {
        movieId: null,
        movieName: "",
        time: "",
        seats: [],
        pricePerSeat: 0,
        totalPrice: 0
  },
  bookings: []
    },
    reducers:{
        
  setMovieInfo: (state, action) => {
    state.currentBooking.movieId = action.payload.id;
    state.currentBooking.movieName = action.payload.name;
  },
  setPrice: (state,action)=>{
    state.currentBooking.pricePerSeat = action.payload;
  },
  setTime: (state, action) => {
    state.currentBooking.time = action.payload;
  },

  setSeats: (state, action) => {
    state.currentBooking.seats = action.payload;
    state.currentBooking.totalPrice =
      action.payload.length * state.currentBooking.pricePerSeat;
  },

  confirmBooking: (state) => {
    state.bookings.push(state.currentBooking);
    
    state.currentBooking = {
      movieId: null,
      movieName: "",
      time: "",
      seats: [],
      pricePerSeat: 0,
      totalPrice: 0
    };
  }
    }

})
export const { setMovieInfo, setTime, setSeats, confirmBooking, setPrice } = reactslicer.actions;
export default reactslicer.reducer;