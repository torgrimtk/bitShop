import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProductsPage from './pages/ProductsPage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import Header from './components/Header/Header'

function App() {

  const MainAppPage = () => {
    return <h1>Welcome to the App Page</h1>
  }

  return (


    <BrowserRouter>

      <nav>
        <Link to="/App">App Page</Link>
        <Link to="/LoginPage">Login Page</Link>
        <Link to="/ProductsPage">Products Page</Link>
        <Link to="/ShoppingCartPage">Shopping Cart Page</Link>
      </nav>
      <Header />
      <Routes>

        <Route
          path="/ProductsPage"
          element={<ProductsPage />}
        />

        <Route
          path="/App"
          element={<MainAppPage />}
        />

        <Route
          path="/LoginPage"
          element={<LoginPage />}
        />

        <Route
          path="/ShoppingCartPage"
          element={<ShoppingCartPage />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App
