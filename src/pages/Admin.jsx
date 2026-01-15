import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/admin-dashboard");
      } else {
        setError(data.message || "Invalid Credentials");
      }
    } catch (err) {
      setError("Server error. Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl text-white p-8 rounded-3xl w-full max-w-sm"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center drop-shadow-lg">
          Admin Login 🔐
        </h2>

        {error && (
          <p className="bg-red-500/80 text-white text-center p-2 rounded-xl mb-4 text-sm">
            {error}
          </p>
        )}

        <div className="mb-5">
          <label className="text-sm font-semibold mb-1 block">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-white/20 text-white placeholder-white/60 border border-white/40 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/30"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold mb-1 block">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/20 text-white placeholder-white/60 border border-white/40 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/30"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white/30 hover:bg-white/50 text-white font-bold py-2 rounded-xl shadow-lg transition transform hover:-translate-y-1"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Admin;
