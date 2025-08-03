import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";
import API from "../utils/api";
import type { AuthContextType } from "../types";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const auth = useContext<AuthContextType | null>(AuthContext);
  const login = auth!.login;
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      login(res.data);
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md    p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Login
        </h2>
        {error && <div className="mb-4 text-center text-red-500">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="input text-black input-bordered w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="input text-black input-bordered w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
          <button className="btn w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-200">
            Login
          </button>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
