# 🚖 Bluebird Frontend Task

A React + Vite application for the Bluebird vehicle booking system.  
This project demonstrates modular frontend architecture, Redux state management, and component-based design using React.

---

## 📘 Overview

This web application allows users to:
- Browse and search for vehicles.
- Add or remove vehicles from their **Wishlist**.
- Book vehicles and view them in the **My Book** page.
- View detailed vehicle information.
- Navigate through categories using a responsive slider.
- Persist data (wishlist and bookings) using **localStorage**.

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend Framework | **React (Vite)** |
| State Management | **Redux Toolkit** |
| Styling | **Tailwind CSS** |
| Routing | **React Router v6** |
| Testing | **Vitest + React Testing Library** |
| Build Tool | **Vite** |
| Storage | **localStorage (via custom utils)** |

---

## 📂 Project Structure

```plaintext
src/
├── 📁 api/              # Static API simulation (vehicles data)
├── 📁 assets/           # Logo, background images
├── 📁 components/       # Reusable UI components (Navbar, VehicleCard, etc.)
├── 📁 hooks/            # Custom hooks (e.g., data fetching)
├── 📁 layouts/          # App layout wrapper (Navbar + Footer)
├── 📁 pages/            # Main pages (Home, Search, Wishlist, etc.)
├── 📁 store/            # Redux Toolkit slices and store configuration
├── 📁 utils/            # Helper functions (e.g., localStorage management)
└── 📁 tests/            # Unit tests (Vitest)
```

---

## 🚀 Features

✅ Browse vehicles and categories  
✅ Add/remove wishlist items  
✅ Book and cancel booking  
✅ Responsive UI with Tailwind  
✅ Persist state using localStorage  
✅ Unit testing with >75% coverage  
✅ Modular folder structure  

---

## 🧠 State Management Overview

The application uses **Redux Toolkit** with the following slices:

| Slice | Responsibility |
|--------|----------------|
| `wishlistSlice.js` | Manage wishlist add/remove |
| `bookingsSlice.js` | Handle vehicle bookings |
| `vehiclesSlice.js` | Fetch and store vehicle data |

Each slice saves its state to `localStorage` to persist data across refreshes.

---

## 🧪 Testing

The project uses **Vitest + React Testing Library** for unit testing.

### ✅ Test Coverage Summary
| File | Coverage |
|------|-----------|
| `VehicleCard.jsx` | **96%** |
| `wishlistSlice.js` | **94%** |
| `bookingsSlice.js` | **87%** |
| `localStorage.js` | **74%** |
| **Overall (core logic)** | **> 75%** ✅ |

---

### 🧾 Run Tests

```bash
# run all tests
npm run test

# run with coverage report
npm run coverage
```
---

## 🖼️ App Preview

### 🏠 Home Page
Displays random vehicle cards and a category slider.  
Users can explore various vehicle types such as Taxi, Car Rental, Bus, and Shuttle Service.

### 💙 Wishlist Page
Displays all vehicles added to the wishlist.  
Clicking ❤️ again removes the vehicle from the wishlist instantly.

### 📘 My Book Page
Displays all booked vehicles in a list view format.  
Includes total price calculation and the ability to cancel bookings.

### 🚗 Vehicle Detail Page
Two-column responsive layout:
- **Left:** Vehicle image, with Share and Like (wishlist) buttons  
- **Right:** Vehicle description, price, and a “Book” button to add to My Book page

### 🔍 Search Page
Allows searching vehicles by name or category.  
Clicking on a search result opens the corresponding **Vehicle Detail Page**.

---

## 📋 How to Run

### 1️⃣ Clone this repository:
```bash
git clone https://github.com/raraisahh/Bluebird---Frontend_Task.git
cd bluebird-frontend-task
```
### 2️⃣ Install dependencies:
```bash
npm install
```
### 3️⃣ Run the app in development mode:
```bash
npm run dev
```
### 4️⃣ Open your browser at:
```bash
http://localhost:5173
```