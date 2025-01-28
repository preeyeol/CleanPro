import { BrowserRouter, Routes,Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import LandingPage from "./pages/LandingPage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"


const App=()=> {


  return (
   <BrowserRouter>
   <Routes>
   <Route element={<Layout />}>
   <Route path="/" element={<LandingPage />} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/services" element={<Service />} />
   </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
