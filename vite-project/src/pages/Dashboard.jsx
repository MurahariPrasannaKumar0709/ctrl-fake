import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircuitBackground from "../components/ui/CircuitBackground";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔐 Protect Route
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-black">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen px-6 overflow-hidden bg-black">

      {/* 🔥 Logout Button Top Right */}
      <button
        onClick={handleLogout}
        className="absolute z-20 px-6 py-2 font-semibold text-black transition bg-teal-500 rounded-xl top-6 right-6 hover:bg-teal-400"
      >
        Logout
      </button>

      {/* 🔥 Background Watermark */}
      <div className="absolute -translate-x-1/2 pointer-events-none select-none top-20 left-1/2">
        <h1 className="text-[120px] md:text-[200px] font-extrabold text-white opacity-[0.07] tracking-widest whitespace-nowrap">
          DASHBOARD
        </h1>
      </div>

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10 blur-3xl opacity-40"></div>

      <CircuitBackground />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl pt-32 mx-auto">

        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white">
            Welcome, {user?.displayName || "User"} 👋
          </h2>
          <p className="mt-2 text-gray-400">
            {user?.email}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="p-8 rounded-3xl border border-white/10 
            bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
            backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.6)]">

            <h3 className="mb-2 text-lg font-semibold text-gray-300">
              Account Status
            </h3>
            <p className="text-3xl font-bold text-teal-400">
              Active
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl border border-white/10 
            bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
            backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.6)]">

            <h3 className="mb-2 text-lg font-semibold text-gray-300">
              UID
            </h3>
            <p className="text-sm text-purple-400 break-all">
              {user?.uid}
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl border border-white/10 
            bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
            backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.6)]">

            <h3 className="mb-2 text-lg font-semibold text-gray-300">
              Provider
            </h3>
            <p className="text-3xl font-bold text-purple-400">
              {user?.providerData[0]?.providerId === "google.com"
                ? "Google"
                : "Email"}
            </p>
          </div>

        </div>

        {/* Additional Section */}
        <div className="p-10 mt-12 rounded-3xl border border-white/10 
          bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
          backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.6)]">

          <h3 className="mb-4 text-2xl font-bold text-white">
            Your Secure Workspace
          </h3>
          <p className="text-gray-400">
            This dashboard is protected using Firebase Authentication.
            Only authenticated users can access this route.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
