import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

const initialState = {
  items: loadFromLocalStorage("bookings"),
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      const exists = state.items.find(v => v.vehicle === action.payload.vehicle);
      if (!exists) {
        state.items.push(action.payload);
        saveToLocalStorage("bookings", state.items);
      }
    },
    removeBooking: (state, action) => {
      state.items = state.items.filter(v => v.vehicle !== action.payload.vehicle);
      saveToLocalStorage("bookings", state.items);
    },
    clearBookings: (state) => {
      state.items = [];
      saveToLocalStorage("bookings", state.items);
    },
  },
});

export const { addBooking, removeBooking, clearBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;
