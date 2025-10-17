import { useSelector } from "react-redux";
import VehicleCard from "../components/VehicleCard";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">My Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((v) => (
            <VehicleCard key={v.vehicle} vehicle={v} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No vehicles in your wishlist.</p>
      )}
    </div>
  );
}
