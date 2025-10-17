import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, getVehicleTypesByCategory } from "../api/vehiclesApi";

export const fetchCategories = createAsyncThunk("vehicles/fetchCategories", async () => {
  const data = await getCategories();
  return data;
});

export const fetchAllVehicles = createAsyncThunk("vehicles/fetchAllVehicles", async () => {
  const categories = await getCategories();
  const allVehicles = [];

  for (const cat of categories) {
    const types = await getVehicleTypesByCategory(cat.id);
    allVehicles.push(
      ...types.map((t) => ({
        ...t,
        category: cat.name,
      }))
    );
  }

  return allVehicles;
});

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    categories: [],
    vehicles: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchAllVehicles.fulfilled, (state, action) => {
        state.vehicles = action.payload;
      });
  },
});

export default vehiclesSlice.reducer;
