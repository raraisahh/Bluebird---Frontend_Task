import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";
import { addBooking } from "../store/bookingsSlice";
import BackButton from "../components/BackButton";
import { Heart, Share2 } from "lucide-react";
import { useState } from "react";

export default function VehicleDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);

  const [copied, setCopied] = useState(false);

  if (!state) {
    return (
      <div className="p-6 text-center">
        <p>Vehicle not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { vehicle, imageURL, price, description } = state;
  const isWishlisted = wishlist.some((item) => item.vehicle === vehicle);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const handleLike = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(state));
    } else {
      dispatch(addToWishlist(state));
    }
  };

  const handleBook = () => {
    dispatch(addBooking(state));
    navigate("/mybook");
  };

  return (
    <div className="p-6">
      <BackButton />
      <div className="bg-white rounded-xl shadow-md p-6 mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <img
            src={imageURL}
            alt={vehicle}
            className="w-full max-w-sm h-64 object-contain mb-4"
          />

          <div className="flex justify-center gap-6 mt-2">
            {/* Like button */}
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all ${
                isWishlisted
                  ? "text-red-500 bg-red-100 hover:bg-red-200"
                  : "text-gray-700 bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <Heart
                size={18}
                className={isWishlisted ? "fill-red-500 text-red-500" : ""}
              />
              {isWishlisted ? "Liked" : "Like"}
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 transition-all"
            >
              <Share2 size={18} />
              {copied ? "Copied!" : "Share"}
            </button>
          </div>
        </div>

        {/* Detail */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">{vehicle}</h1>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            {description.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <p className="text-xl font-semibold text-green-600 mb-6">{price}</p>

          <button
            onClick={handleBook}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
