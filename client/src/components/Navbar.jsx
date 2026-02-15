import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-md bg-white sticky top-0 z-50">

      {/* LOGO */}
      <Link to="/" className="text-green-600 font-bold text-lg flex items-center">
        <img src="/images/logo5.png" alt="Megaplex Logo" className="w-12" />
        <span>MEGAPLEX</span>
      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/#overview">Overview</Link>
        <Link to="/#amenities">Amenities</Link>
        <Link to="/#contact">Contact</Link>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="flex gap-4 items-center">

        <button className="bg-green-400 hover:bg-green-500 px-5 py-2 rounded-md text-white font-semibold">
          Enquiry Now
        </button>

        {!token ? (
          <Link
            to="/admin/login"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Admin
          </Link>
        ) : (
          <>
            <Link
              to="/admin/dashboard"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Navbar;
