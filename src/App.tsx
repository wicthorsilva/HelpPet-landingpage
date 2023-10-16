import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)
  
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/#about" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
