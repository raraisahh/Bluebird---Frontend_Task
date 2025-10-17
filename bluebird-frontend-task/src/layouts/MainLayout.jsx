import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useFetchVehicles from "../hooks/useFetchVehicles";

export default function MainLayout({ children }) {
  const { data, loading } = useFetchVehicles();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar categories={data.category} />
      <main className="flex-1 bg-gray-50 p-4">
        {loading ? <p>Loading...</p> : children}
      </main>
      <Footer />
    </div>
  );
}
