# React E-Commerce Platform

A modern, fully responsive E-Commerce application built with React and Vite. This platform provides a seamless shopping experience featuring product exploration, cart management, user authentication, and a complete checkout flow.

![Hero Banner](./src/assets/hero.png)

## 🚀 Features

- **Product Catalog:** Browse through a wide variety of products with categorization and search filtering capabilities.
- **Shopping Cart System:** Add items to cart, adjust quantities, and manage selections smoothly.
- **User Authentication:** Fully functional login and registration system for users to secure their accounts and purchases.
- **State Management:** Utilizes React Context API (`AuthContext`, `ProductContext`, `CartContext`) for fast and reliable state management across the application avoiding prop drilling.
- **Checkout Flow:** A dedicated checkout page to summarize orders and proceed to payment simulations.
- **Responsive Design:** A beautifully crafted, responsive UI that works perfectly on desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite
- **Routing:** React Router DOM (v7)
- **State Management:** React Context API
- **Styling:** Vanilla CSS, Lucide React (for Icons)
- **Development:** ESLint, npm

## 📦 Project Structure

```text
src/
├── assets/          # Static assets like images and icons
├── components/      # Reusable UI components (Navbar, ProductCard, Footer, Layout)
├── context/         # Centralized state management (Auth, Cart, Product)
├── pages/           # Main route views (Home, Login, Register, Checkout)
├── App.jsx          # Root component establishing context providers and routing
└── index.css        # Global CSS variables and base styling
```

## 💻 Local Run Instructions

Follow these steps to run the application locally on your machine.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhishekr87229-design/E-Commerce.git
   cd E-Commerce
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:5173/` in your browser to view the application.

## 📷 Screenshots

*(Add additional screenshots here if needed by uploading them to `src/assets/` and referencing them using Markdown image syntax: `![Description](./src/assets/screenshot.png)`)*
