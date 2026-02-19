import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CircuitBackground from "../components/ui/CircuitBackground";

// 🔥 Firebase Imports
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";

    if (!formData.password)
      newErrors.password = "Password is required";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";

    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    try {
      setLoading(true);

      // 🔥 Create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // 🔥 Update display name
      await updateProfile(userCredential.user, {
        displayName: formData.fullName,
      });


      navigate("/dashboard");
    } catch (error) {
      setErrors({ firebase: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);

      const result = await signInWithPopup(auth, googleProvider);


      navigate("/dashboard");
    } catch (error) {
      setErrors({ firebase: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden bg-black">
      {/* Background Watermark */}
      <div
        className="absolute -translate-x-1/2 pointer-events-none select-none top-20 left-1/2"
        aria-hidden="true"
      >
        <h1 className="text-[120px] md:text-[180px] font-extrabold text-white opacity-[0.12] whitespace-nowrap [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]">
          REGISTER
        </h1>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10 blur-3xl opacity-40" />

      <div aria-hidden="true">
        <CircuitBackground />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-8 mt-56 border rounded-3xl bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-2xl border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
        <h2 className="mb-6 text-3xl font-bold text-center text-white">
          Create Account
        </h2>

        {errors.firebase && (
          <p className="mb-4 text-sm text-center text-red-500">
            {errors.firebase}
          </p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-white transition border rounded-xl bg-white/5 ${
                errors.fullName
                  ? "border-red-500"
                  : "border-white/10 focus:border-purple-400"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-white transition border rounded-xl bg-white/5 ${
                errors.email
                  ? "border-red-500"
                  : "border-white/10 focus:border-purple-400"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-white transition border rounded-xl bg-white/5 ${
                errors.password
                  ? "border-red-500"
                  : "border-white/10 focus:border-purple-400"
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Confirm Password *
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-white transition border rounded-xl bg-white/5 ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "border-white/10 focus:border-purple-400"
              }`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 font-semibold text-black transition bg-purple-500 rounded-xl hover:bg-purple-400 disabled:opacity-50"
          >
            {loading ? "Processing..." : "Register"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="px-3 text-sm text-gray-400">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
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
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
