import wishlistReducer, { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";

describe("wishlistSlice", () => {
  const vehicle = { vehicle: "BMW 528i" };

  it("should add item to wishlist", () => {
    const state = wishlistReducer({ items: [] }, addToWishlist(vehicle));
    expect(state.items.length).toBe(1);
  });

  it("should remove item from wishlist", () => {
    const state = wishlistReducer({ items: [vehicle] }, removeFromWishlist(vehicle));
    expect(state.items.length).toBe(0);
  });
});
