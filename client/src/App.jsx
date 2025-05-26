import axios from "axios"
import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar"


function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/services" element={<Services />}/>
    </Routes>
    <Footer/>
   </>
  )
}

export default App
