import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import CategorySlider from "../components/CategorySlider";

export default function Navbar({ categories = [] }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const [searchLabel, setSearchLabel] = useState("Search");
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/wishlist" ||
      location.pathname === "/mybook"
    ) {
      setActiveCategory(null);
    }
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchInput.trim();
    if (trimmed) {
      setSearchLabel(trimmed);
      setActiveCategory(null);
      navigate(`/search?query=${encodeURIComponent(trimmed)}`);
      setSearchInput("");
    }
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat.id);
    setSearchLabel("Search");
    navigate(`/search?category=${cat.id}`);
  };

  const handleMenuClick = (path) => {
    setActiveCategory(null);
    setSearchLabel("Search");
    navigate(path);
  };

  return (
    <nav className="shadow-md sticky top-0 z-50">
      {/* 🔹 Header */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 gap-3 border-b border-gray-200">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleMenuClick("/")}
        >
          <img src={logo} alt="Bluebird Logo" className="h-10 mr-2" />
        </div>

        {/* Menu */}
        <div className="flex items-center gap-5 text-gray-700 font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Wishlist", path: "/wishlist" },
            { name: "My Book", path: "/mybook" },
          ].map((item) => (
            <button
              key={item.path}
              onClick={() => handleMenuClick(item.path)}
              className={`transition-colors duration-150 ${
                location.pathname === item.path
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="flex items-center border border-gray-300 rounded-lg overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search vehicles..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="px-3 py-2 outline-none text-sm w-40 sm:w-56"
          />
          <button
            type="submit"
            className={`px-4 py-2 text-sm font-semibold text-white ${
              searchLabel !== "Search"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            } transition-colors`}
          >
            {searchLabel}
          </button>
        </form>
      </div>

      {/* Category Slider */}
      <div className="py-2 border-t border-gray-200">
        <CategorySlider
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />
      </div>
    </nav>
  );
}
