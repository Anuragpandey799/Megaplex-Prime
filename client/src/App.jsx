import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRegister from "./pages/AdminRegister";

function App() {
  return (
    <div className="font-sans overflow-x-hidden">

      {/* NAVBAR always visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

    </div>
  );
}

export default App;
