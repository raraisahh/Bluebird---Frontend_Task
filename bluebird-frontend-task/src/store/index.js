import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "./vehiclesSlice";
import wishlistReducer from "./wishlistSlice";
import bookingsReducer from "./bookingsSlice";

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    wishlist: wishlistReducer,
    bookings: bookingsReducer,
  },
});

export default store;
