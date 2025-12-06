import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProductsPage from './pages/ProductsPage'

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
      </nav>

      <Routes>

        <Route
          path="/App"
          element={<MainAppPage />}
        />

        <Route
          path="/LoginPage"
          element={<LoginPage />}
        />

        <Route
          path="/ProductsPage"
          element={<ProductsPage />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App
