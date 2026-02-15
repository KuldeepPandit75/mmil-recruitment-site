import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AuthButton from "../components/AuthButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const { token, needsProfile, userId } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);

      if (needsProfile) {
        navigate("/complete-profile");
      } else {
        toast.success("Logged in successfully");
        navigate("/");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FDF5E6] flex flex-col items-center justify-center font-montserrat overflow-hidden px-4">
      
      {/* 1. BACKGROUND DECORATIVE TEXT */}
       <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <div className="flex flex-col items-center space-y-[-30px] opacity-20">
          {["Inspire", "Invent", "Innovate"].map((word, i) => (
            <h1
              key={i}
              className="text-[181px] font-black text-transparent uppercase"
              style={{
                WebkitTextStroke: "1px #72341E",
              }}
            >
              {word}
            </h1>
          ))}
        </div>
      </div>

      {/* Logo Placeholder */}
<div className="w-full absolute top-0 left-0 flex justify-end items-center p-8 z-50">
  
  {/* Logo */}
  <div className="absolute left-1/2 -translate-x-1/2 top-8">
    <img
      src="/mmil-logo1.png"
      alt="MMIL Logo"
      className="w-40 h-auto object-contain"
    />
  </div>
</div>

{/* 3. DECORATIVE ELEMENTS  */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute flex flex-col items-center" style={{ top: "143px", right: "calc(50% - 620px)" }}>
          <img src="/light-bulb 1.png" alt="Bulb" className="w-[110px] h-auto object-contain z-20" />
          <div className="absolute top-[110px] right-[8%] z-0">
            <img src="/Vector 1.png" alt="Line Decoration" style={{ width: "375px", height: "210px" }} />
          </div>
        </div>
      </div>

{/* 5. STAR DECORATIONS */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="/Vector 2.png" alt="Star" className="absolute w-[80px] h-auto" style={{ top: "40px", left: "calc(50% - 410px)", filter: "sepia(1) saturate(5) hue-rotate(-30deg)" }} />
        <img src="/Vector 2.png" alt="Star" className="absolute w-[80px] h-auto" style={{ top: "685px", left: "calc(50% - 500px)", filter: "sepia(1) saturate(5) hue-rotate(-30deg)" }} />
      </div>

      {/* 2. LOGIN CARD */}
      <div className="z-20 w-full max-w-[480px]">
  {/* The Main Card Container */}
  <div 
    className="bg-[#FDE2D8] rounded-[30px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center border border-white/20"
  >
    <h2 className="text-[#1A1A1A] font-black text-2xl mb-8">Welcome Back !</h2>

    <form onSubmit={onSubmit} className="w-full flex flex-col items-center">
      {/* Input Group (Email & Password stacked) */}
      <div className="w-full bg-white rounded-xl overflow-hidden shadow-sm mb-6">
        <input
          className="w-full h-[55px] px-6 text-sm outline-none border-b border-gray-200 placeholder:text-gray-400"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full h-[55px] px-6 text-sm outline-none placeholder:text-gray-400"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-[55px] bg-[#72341E] text-white rounded-xl font-bold text-lg shadow-lg hover:bg-[#72341E] active:scale-95 transition-all mb-6"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
       <div className="w-full flex items-center gap-3 mb-6">
        <div className="h-[1px] bg-[#777373] flex-1" />
        <span className="text-[10px] font-bold text-[#B18779]">OR</span>
        <div className="h-[1px] bg-[#777373] flex-1" />
      </div>

          <div className="flex justify-center">
            <AuthButton />
          </div>

          <p className="text-sm text-slate-600 mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-700 font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
