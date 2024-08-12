import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import OrderOnline from "./components/OrderOnline";
import Reservations from "./components/Reservations";

function App() {
  return (
    <Router>
      <div className="grid-container">
      <header>
        <Navbar />
        </header>
      <main>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
    </Router>
  );
}

export default App;
