// src/App.js
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import OrderOnline from "./components/OrderOnline";
import Reservations from "./components/Reservations";
import { UserProvider } from "./components/UserContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <UserProvider>
        {/* Make sure this sits inside Router so useLocation works */}
        <ScrollToTop />

        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1">
            <Routes>
              {/* Home page */}
              <Route path="/" element={<Home />} />

              {/* Order Online page */}
              <Route path="/order-online" element={<OrderOnline />} />

              {/* Reservations page */}
              <Route path="/reservations" element={<Reservations />} />

              {/* Login / Register page */}
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;



