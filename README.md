# GearHub Mini E-Commerce

GearHub is a single-page React app for browsing tech accessories, filtering products, managing a cart, and processing a simulated checkout. State management relies entirely on React's `useReducer` combined with `createContext`.

**Course:** SE2144 — Lab 2 Activity
**Members:** Nelson Lago III, Justin Jan Dalumpines

---

## Tech Stack

- React (Create React App)
- TypeScript
- Tailwind CSS
- React Context API + `useReducer` for global state
- Static JSON / mock data file for products

---

## Core Features

### Product Browsing & Filtering
- Grid display of products fetched from a static JSON file or mock data file.
- Filter products by **category**, **max price range**, and **search query**.
- Sort products by **price** (low-to-high, high-to-low) or **title**.

### Global Cart Management
- Slide-out / drawer overlay for the Shopping Cart.
- Add items, remove items, and adjust item quantities (+ / -).
- Real-time **subtotal** and **grand total** calculation.

### User Experience Details
- Badge counter on the cart icon reflecting the **total item count** (sum of quantities, not just distinct line items).
- Simulated checkout flow (no real payment processing).

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/nelsocated/WebDev_Lab2_Lago_Dalumpines.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

### Build for Production
```bash
npm run build
```

---

## Usage

1. Browse the product grid on the home page.
2. Use the filter bar to narrow results by category, price range, or search keyword.
3. Sort products by price or title using the sort dropdown.
4. Click **Add to Cart** on any product to add it to your cart.
5. Click the cart icon to open the cart drawer, where you can adjust quantities or remove items.
6. View the real-time subtotal and grand total in the cart drawer.
7. Click **Checkout** to simulate the checkout process.

---

## License

This project was created for academic purposes as part of the SE2144 course.
