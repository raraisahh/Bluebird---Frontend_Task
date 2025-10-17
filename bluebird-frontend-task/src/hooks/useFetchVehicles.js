import { useEffect, useState } from "react";
import { getVehiclesData } from "../api/vehiclesApi";

export default function useFetchVehicles() {
  const [data, setData] = useState({ category: [], type: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getVehiclesData();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
