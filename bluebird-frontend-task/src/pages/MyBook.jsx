import { useSelector, useDispatch } from "react-redux";
import { removeBooking } from "../store/bookingsSlice";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

export default function MyBook() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.items);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = bookings.reduce((sum, v) => {
      const numeric = parseInt(v.price.replace(/[^\d]/g, ""));
      return sum + (isNaN(numeric) ? 0 : numeric);
    }, 0);
    setTotalPrice(total);
  }, [bookings]);

  const handleCancel = (vehicle) => {
    if (window.confirm(`Cancel booking for ${vehicle}?`)) {
      dispatch(removeBooking({ vehicle }));
      alert(`Booking for ${vehicle} canceled.`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">My Bookings</h1>
      {bookings.length > 0 ? (
        <>
          <div className="flex flex-col gap-4">
            {bookings.map((v) => (
              <div
                key={v.vehicle}
                className="flex items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow"
              >
                <img
                  src={v.imageURL}
                  alt={v.vehicle}
                  className="w-28 h-24 object-contain rounded-lg bg-gray-50 p-2"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">{v.vehicle}</h2>
                  <p className="text-blue-600 font-medium mt-1">{v.price}</p>
                </div>
                <button
                  onClick={() => handleCancel(v.vehicle)}
                  className="ml-4 p-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <h2 className="text-xl font-semibold text-gray-800">
              Total Price:{" "}
              <span className="text-blue-600">
                Rp{" "}
                {totalPrice.toLocaleString("id-ID", {
                  minimumFractionDigits: 0,
                })}
              </span>
            </h2>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center mt-10 text-lg">
          No vehicles booked yet.
        </p>
      )}
    </div>
  );
}
