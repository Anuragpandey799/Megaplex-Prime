import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("https://megaplex-prime-lml2.onrender.com/api/admin/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registered Successfully");
      navigate("/admin/dashboard");
    } else {
      console.log(data.message);
      alert(data.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600"
        >
          Register
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-green-600 cursor-pointer"
            onClick={() => navigate("/admin/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default AdminRegister;
