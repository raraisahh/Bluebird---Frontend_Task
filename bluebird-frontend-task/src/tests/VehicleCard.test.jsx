import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import wishlistReducer from "../store/wishlistSlice";
import bookingsReducer from "../store/bookingsSlice";
import VehicleCard from "../components/VehicleCard";
import { vi } from "vitest";

beforeAll(() => {
  window.alert = vi.fn();
});

const mockVehicle = {
  vehicle: "Toyota Avanza",
  imageURL: "https://via.placeholder.com/150",
  price: "IDR 300.000",
  description: ["7 seats", "Charging Port"],
};

function renderWithProviders(ui) {
  const store = configureStore({
    reducer: {
      wishlist: wishlistReducer,
      bookings: bookingsReducer,
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
}

describe("VehicleCard Component", () => {
  it("renders vehicle details", () => {
    renderWithProviders(<VehicleCard vehicle={mockVehicle} />);
    expect(screen.getByText("Toyota Avanza")).toBeInTheDocument();
    expect(screen.getByText("IDR 300.000")).toBeInTheDocument();
  });

  it("adds to wishlist when heart button clicked", () => {
    renderWithProviders(<VehicleCard vehicle={mockVehicle} />);
    const heartIcon = screen.getByTestId("wishlist-icon");
    fireEvent.click(heartIcon);
    expect(heartIcon).toHaveClass("text-red-500");
  });

  it("adds to booking when book clicked", () => {
    renderWithProviders(<VehicleCard vehicle={mockVehicle} />);
    const bookBtn = screen.getByRole("button", { name: /book/i });
    fireEvent.click(bookBtn);
    expect(window.alert).toHaveBeenCalled(); 
  });
});
