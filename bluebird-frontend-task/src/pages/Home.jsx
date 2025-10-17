import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchAllVehicles } from "../store/vehiclesSlice";
import VehicleCard from "../components/VehicleCard";

export default function Home() {
  const dispatch = useDispatch();
  const { vehicles, loading } = useSelector((state) => state.vehicles);
  const [randomVehicles, setRandomVehicles] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllVehicles());
  }, [dispatch]);

  useEffect(() => {
    if (vehicles.length > 0) {
      const shuffled = [...vehicles].sort(() => 0.5 - Math.random());
      setRandomVehicles(shuffled.slice(0, 6));
    }
  }, [vehicles]);

  return (
    <div className="p-6">
      {/* 🔹 Vehicle List Section */}
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Available Vehicles</h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading vehicles...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {randomVehicles.map((vehicle, index) => (
            <VehicleCard key={index} vehicle={vehicle} />
          ))}
        </div>
      )}
    </div>
  );
}
