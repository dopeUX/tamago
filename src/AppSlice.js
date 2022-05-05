import { createSlice } from "@reduxjs/toolkit";
import hotelslist from "./hotelslist";

const initialState = {
    hotels : hotelslist,
    searchQuery : '',
    city:'',
}

const appSlice = createSlice({
    name:'appSlice',
    initialState,
    reducers:{
      updateHotelsList :(state, action)=>{
         state.hotelslist = action.payload 
      },
      updateSearchQuery:(state, action) =>{
         state.searchQuery = action.payload
      },
      updateHotelsListWithCity:(state, action)=>{
          state.hotels.filter(x=>{
             return x.location.toLowerCase() === action.payload.toLowerCase();
         })
      },
      updateCity:(state, action)=>{
          state.city = action.payload
      }
    }
});

export const {
  updateHotelsList,
  updateSearchQuery,
  updateHotelsListWithCity,
  updateCity
} = appSlice.actions;

export default appSlice.reducer;