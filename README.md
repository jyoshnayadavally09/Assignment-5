# Product Details Viewer & JavaScript Games

This repository contains:

- A **Product Details Viewer** app that fetches product data from a public API, displays a list of products, and shows detailed information for a selected product.
- Two fun **JavaScript games**: Memory Game and Rock Paper Scissors (located in separate folders).

---

## Product Details Viewer

This is a simple web app that fetches product data from [DummyJSON API](https://dummyjson.com/products) and displays:

- A product listing page (`index.html` / `details.html`)
- A detailed product page (`details.html`) with:
  - Product images in a slider
  - Product description, price, brand, category, stock, rating, discount, and more
  - Auto-generated barcode and QR code
  - Customer reviews (dummy data)
  - Additional product info like SKU, warranty, shipping, and return policy

### How It Works

- On loading the product listing page, the app fetches the product list from the API.
- Each product is shown as a card with basic info and thumbnail.
- Clicking a product card stores the selected product in `localStorage` and navigates to the detail page.
- The detail page reads from `localStorage`, shows all product info, renders images, barcode, QR code, and reviews.

### How to Run

1. Clone or download this repo.
2. Open `index.html` (or `details.html` if opening product detail directly).
3. Make sure you have internet connection to fetch data from DummyJSON API and the QR code API.
4. Click on any product card to view detailed product info.

---

## JavaScript Games

- **memory-game** — A card matching game (folder included)
- **rock-paper-scissors** — Classic rock-paper-scissors game with computer opponent (folder included)

Open each folder and launch `index.html` in your browser to play.

---

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- Fetch API for external API requests
- LocalStorage to pass product data between pages
- Third-party QR code generation API

---

