import axios from "axios"
import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"
import Newsletter from "./pages/Newsletter"

function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Newsletter />
    <Footer/>
   </>
  )
}

export default App
