import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";
import API from "../utils/api";
import type { AuthContextType } from "../types";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });
  const auth = useContext<AuthContextType | null>(AuthContext);
  const login = auth!.login;
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      login(res.data);
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Register
        </h2>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name"
            className="input text-black input-bordered w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            className="input text-black input-bordered w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your Password"
            className="input text-black input-bordered w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
          <textarea
            name="bio"
            id="bio"
            placeholder="Tell us about yourself"
            className="textarea text-black textarea-bordered w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          ></textarea>
          <button className="btn btn-primary w-full">Register</button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
