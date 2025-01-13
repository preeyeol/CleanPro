import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BookingPage from "./pages/BookingPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Export AuthContext so it can be used in other components
// export const AuthContext = createContext();

const App = () => {
  // const [user, setUser] = useState(null); // User state to track login status

  // const login = (userData) => setUser(userData);
  // const logout = () => setUser(null);

  return (
    // <AuthContext.Provider value={{ user, login, logout }}>
    <Router>
      <Navbar />
      <div className="App bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    // </AuthContext.Provider>
  );
};

// Private route to protect the booking page
// const PrivateRoute = ({ children }) => {
//   // const { user } = useContext(AuthContext);
//   return user ? children : <LoginPage />;
// };

export default App;
