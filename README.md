# React + Vite

# 🛒 FakeStore E-Commerce App (React)

## 🚀 Project Overview

The **FakeStore App** is a React-based e-commerce application that fetches product data from an external API and allows users to:

* 🔍 Search products by category
* 📂 Filter products using dropdown categories
* 🛍️ View product details (price, rating, image)
* 🛒 Add items to cart (UI only)

This project demonstrates real-world frontend concepts like API integration, state management, component communication, and dynamic rendering.

---

## 🧠 Features

### ✅ Core Features

* Fetch all products from API
* Filter products by category
* Search products using input field
* Display product cards dynamically
* Responsive UI using Bootstrap

### ✅ Advanced Features

* Component-based architecture
* API handling with Axios
* Controlled inputs in React
* Conditional API calls
* Dynamic currency formatting (INR)

---

## 🏗️ Project Structure

```
src/
│
├── FakestoreIndex.jsx        # Main container (Header + Search)
├── FakestoreProducts.jsx     # Product listing + Category filter
├── fakestore-product.js      # (Optional helper file)
│
└── App.jsx                   # Root component
```

---

## ⚙️ Tech Stack

* ⚛️ React (Hooks)
* 📡 Axios (API calls)
* 🎨 Bootstrap (Styling)
* 🌐 FakeStore API

---

## 🔗 API Used

* All Products:
  `https://fakestoreapi.com/products`

* Categories:
  `https://fakestoreapi.com/products/categories`

* Category Products:
  `https://fakestoreapi.com/products/category/{category}`

---

## 🧩 Key Concepts Used

### 1. useState Hook

Used for managing:

* Products data
* Categories list
* Search input
* Selected category

### 2. useEffect Hook

```js
useEffect(() => {
    LoadProduct();
    LoadCategories();
}, [props.category]);
```

* Runs when category changes
* Triggers API calls dynamically

---

### 3. Props Communication

```jsx
<FakestoreProducts category={sendCategory} />
```

* Parent → Child data flow
* Used for search functionality

---

### 4. API Handling with Axios

```js
axios.get(url)
     .then(response => {
        setProducts(response.data);
     });
```

---

## 🎯 Functional Flow

1. App loads → fetch all products
2. Categories dropdown loads
3. User can:

   * Search category → updates UI
   * Select dropdown → filters products
4. Products update dynamically without reload

---

## 🖥️ UI Components

### 📌 Header

* App title
* Search bar
* Cart icon

### 📌 Sidebar

* Category dropdown filter

### 📌 Product Cards

* Image
* Title
* Price (₹ formatted)
* Rating ⭐
* Add to Cart button

---

## 💡 Example Code Snippet

```js
function handleSerchClick() {
    setSendCategory(category);
}
```

```js
function categoryCange(e) {
    if (e.target.value == "all") {
        LoadProducts(`https://fakestoreapi.com/products`)
    } else {
        LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
    }
}
```

---

## ⚠️ Known Issues / Improvements

* ❌ No cart functionality (UI only)
* ❌ No loading spinner
* ❌ No error handling for API
* ❌ Search is category-based only (not full text)

---

## 🔥 Future Enhancements

* 🛒 Add real cart functionality
* 🔐 User authentication (Login/Register)
* ⚡ Add loading & error states
* 🔎 Implement full product search
* ❤️ Wishlist feature
* 🌙 Dark mode

---

## 🧑‍💻 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fakestore-app.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

---


## 🙌 Author

**Durgashankar Dangi**

* 💼 Aspiring MERN Stack Developer
* 🚀 Focused on building real-world projects

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🧠 Learn & improve it

---
