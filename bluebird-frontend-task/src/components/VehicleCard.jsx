import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";
import { addBooking } from "../store/bookingsSlice";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react"; 

export default function VehicleCard({ vehicle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookings = useSelector(state => state.bookings.items);
  const wishlist = useSelector((state) => state.wishlist.items);

  const isBooked = bookings.some(v => v.vehicle === vehicle.vehicle);
  const isWishlisted = wishlist.some((v) => v.vehicle === vehicle.vehicle);

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(vehicle));
    } else {
      dispatch(addToWishlist(vehicle));
    }
  };

  const handleBooking = () => {
    const result = dispatch(addBooking(vehicle));
    const exists = bookings.find(v => v.vehicle === vehicle.vehicle);
    if (exists) {
      alert("⚠️ This vehicle is already booked.");
    } else {
      alert("✅ Vehicle booked successfully!");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105 duration-200 relative">
      {/* Tombol Love */}
      <button
        onClick={handleWishlist}
        className="absolute top-3 right-3"
        aria-label="Add to Wishlist"
      >
        <Heart
          data-testid="wishlist-icon"
          className={`w-6 h-6 transition-colors ${
            isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
        />
      </button>

      <img
        src={vehicle.imageURL}
        alt={vehicle.vehicle}
        className="w-full h-48 object-contain p-4"
      />

      <div className="px-4 pb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {vehicle.vehicle}
        </h2>
        <p className="text-blue-600 font-medium text-sm mb-2">{vehicle.price}</p>
        <ul className="list-disc list-inside text-xs text-gray-500 mb-3">
          {vehicle.description?.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        <div className="flex justify-between gap-2">
          <button
            onClick={() =>
              navigate(`/vehicle/${vehicle.vehicle}`, { state: vehicle })
            }
            className="flex-1 bg-blue-600 text-white py-1.5 rounded text-sm hover:bg-blue-700 transition-colors"
          >
            View Detail
          </button>
          <button
            onClick={handleBooking}
            className={`flex-1 py-1.5 rounded text-sm transition-colors ${
              isBooked
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
            disabled={isBooked}
          >
            {isBooked ? "Booked" : "Book"}
          </button>
        </div>
      </div>
    </div>
  );
}
