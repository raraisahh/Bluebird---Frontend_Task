import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import VehicleDetail from "./pages/VehicleDetail";
import MyBook from "./pages/MyBook";
import Wishlist from "./pages/Wishlist";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/search"
        element={
          <MainLayout>
            <Search />
          </MainLayout>
        }
      />
      <Route
        path="/vehicle/:id"
        element={
          <MainLayout>
            <VehicleDetail />
          </MainLayout>
        }
      />
      <Route
        path="/mybook"
        element={
          <MainLayout>
            <MyBook />
          </MainLayout>
        }
      />
      <Route
        path="/wishlist"
        element={
          <MainLayout>
            <Wishlist />
          </MainLayout>
        }
      />
    </Routes>
  );
}
