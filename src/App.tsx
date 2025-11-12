import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {

  const MainAppPage = () => {
    return <h1>Welcome to the App Page</h1>
  }

  return (

    <div>
      <BrowserRouter>

        <nav>
          <Link to="/App">App Page</Link>
          <Link to="/LoginPage">Login Page</Link>
        </nav>

        <Routes>
          <Route path="/App" element={<MainAppPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
