import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Beta from "./pages/Beta.jsx";
import Dashboard from "./pages/Dashboard.jsx";

// 🔥 Layout Wrapper
function Layout() {
  const location = useLocation();

  // Hide Navbar & Footer only on Dashboard
  const hideLayout = location.pathname === "/dashboard";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/beta" element={<Beta />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
