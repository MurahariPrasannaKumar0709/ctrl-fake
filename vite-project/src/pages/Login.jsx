import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CircuitBackground from "../components/ui/CircuitBackground";

// 🔥 Firebase Imports
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const result = await signInWithPopup(auth, googleProvider);

     

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden bg-black">
      {/* Background Watermark */}
      <div className="absolute -translate-x-1/2 pointer-events-none select-none top-20 left-1/2">
        <h1 className="text-[120px] md:text-[180px] font-extrabold text-white opacity-[0.12] whitespace-nowrap tracking-widest [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]">
          LOGIN
        </h1>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-purple-500/10 blur-3xl opacity-40"></div>
      <CircuitBackground />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl
        bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
        backdrop-blur-2xl border border-white/10
        shadow-[0_40px_120px_rgba(0,0,0,0.7)]">

        <h2 className="mb-6 text-3xl font-bold text-center text-white">
          Welcome Back
        </h2>

        {error && (
          <p className="mb-4 text-sm text-center text-red-500">
            {error}
          </p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-white placeholder-gray-500 transition border rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-teal-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 text-white placeholder-gray-500 transition border rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-teal-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 font-semibold text-black transition bg-teal-500 rounded-xl hover:bg-teal-400 disabled:opacity-50"
          >
            {loading ? "Processing..." : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="px-3 text-sm text-gray-400">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="flex items-center justify-center w-full gap-3 py-3 text-white transition border rounded-xl border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-50"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          <p className="mt-4 text-sm text-center text-gray-400">
            Don’t have an account?{" "}
            <Link to="/register" className="text-teal-400 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
