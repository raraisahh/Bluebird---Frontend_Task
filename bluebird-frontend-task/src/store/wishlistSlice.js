import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

const initialState = {
  items: loadFromLocalStorage("wishlist"),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find(
        (v) => v.vehicle === action.payload.vehicle
      );
      if (!exists) {
        state.items.push(action.payload);
        saveToLocalStorage("wishlist", state.items);
      }
    },
    removeFromWishlist: (state, action) => {
      const key = typeof action.payload === "string"
        ? action.payload
        : action.payload.vehicle;

      state.items = state.items.filter((v) => v.vehicle !== key);
      saveToLocalStorage("wishlist", state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      saveToLocalStorage("wishlist", state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
