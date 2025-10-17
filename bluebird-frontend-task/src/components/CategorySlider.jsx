import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategorySlider({ categories, onCategoryClick, activeCategory }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const currentCat = categories[currentIndex];

  return (
    <div className="relative w-full flex items-center justify-center py-4">
      {/* Tombol Panah Kiri */}
      <button
        onClick={handlePrev}
        className="absolute left-4 p-2 rounded-full bg-white shadow hover:bg-blue-50 transition"
        aria-label="Previous category"
      >
        <ChevronLeft className="w-6 h-6 text-blue-600" />
      </button>

      {/* Tampilan kategori aktif */}
      {currentCat && (
        <div
          onClick={() => onCategoryClick(currentCat)}
          className={`w-64 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 cursor-pointer text-center 
            ${activeCategory === currentCat.id ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105"}`}
        >
          <img
            src={currentCat.imageURL}
            alt={currentCat.name}
            referrerPolicy="no-referrer"
            className="h-36 object-contain mx-auto p-3"
          />
          <h2 className="font-semibold text-gray-700 mb-3">{currentCat.name}</h2>
        </div>
      )}

      {/* Tombol Panah Kanan */}
      <button
        onClick={handleNext}
        className="absolute right-4 p-2 rounded-full bg-white shadow hover:bg-blue-50 transition"
        aria-label="Next category"
      >
        <ChevronRight className="w-6 h-6 text-blue-600" />
      </button>
    </div>
  );
}
