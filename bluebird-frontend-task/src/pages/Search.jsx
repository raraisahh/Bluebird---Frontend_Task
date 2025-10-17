import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { vehiclesData } from "../api/vehiclesApi";
import VehicleList from "../components/VehicleList";

export default function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("query");
    const categoryId = params.get("category");

    if (searchQuery) {
      // Pencarian berdasarkan nama kendaraan
      const allVehicles = vehiclesData.type.flatMap((t) => t.car_type);
      const filtered = allVehicles.filter((v) =>
        v.vehicle.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setQuery(searchQuery);
      setCategoryName("");

      // Kalau hanya 1 hasil, langsung ke halaman detail
      if (filtered.length === 1) {
        navigate(`/vehicle/${filtered[0].vehicle}`, { state: filtered[0] });
      } else {
        setResults(filtered);
      }
    } else if (categoryId) {
      const category = vehiclesData.category.find(
        (c) => c.id === Number(categoryId)
      );
      const vehicleCategory = vehiclesData.type.find(
        (t) => t.category_id === Number(categoryId)
      );

      setCategoryName(category ? category.name : "");
      setQuery("");
      setResults(vehicleCategory ? vehicleCategory.car_type : []);
    }
  }, [location.search, navigate]);

  return (
    <div className="px-6 py-6">
      {query && results.length > 1 && (
        <h1 className="text-2xl font-semibold text-blue-700 mb-4">
          Search Results for: <span className="italic">{query}</span>
        </h1>
      )}

      {categoryName && (
        <h1 className="text-2xl font-semibold text-blue-700 mb-4">
          Category: {categoryName}
        </h1>
      )}

      {results.length > 0 ? (
        <VehicleList vehicles={results} />
      ) : (
        !categoryName &&
        !query && (
          <p className="text-gray-500 text-center mt-10 text-lg">
            Vehicle not found.
          </p>
        )
      )}
    </div>
  );
}
