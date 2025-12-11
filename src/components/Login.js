import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useUser } from "./UserContext";

import Notification from "./Notification";

import lemon from "../assets/lemon.png";
import user from "../assets/user.png";
import pass from "../assets/padlock.png";
import logo from "../assets/Logo.svg";

const Login = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [mode, setMode] = useState("login"); // "login" or "register"
  const navigate = useNavigate();

  const { setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const fullName = formData.get("fullName")?.trim();
    const username = formData.get("username")?.trim();

    setUser({ name: fullName || username || "Guest" });

    setShowNotification(true);

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const isLogin = mode === "login";

  return (
    <>
      <Helmet>
        <title>
          {isLogin ? "Login" : "Create Account"} | Little Lemon Restaurant
        </title>
      </Helmet>

      <section className="mx-auto flex max-w-6xl items-center justify-center px-4 pb-16 pt-10 md:px-6">
        <div className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white/95 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
          {/* Decorative lemons */}
          <img
            src={lemon}
            alt=""
            className="pointer-events-none absolute -left-10 -top-10 h-28 opacity-10"
          />
          <img
            src={lemon}
            alt=""
            className="pointer-events-none absolute -right-8 bottom-0 h-32 opacity-10"
          />

          {/* LEFT – FORM */}
          <div className="relative border-r border-lemon-50/80 px-6 py-8 md:px-10">
            {/* Toggle Tabs */}
            <div className="mb-6 inline-flex rounded-full bg-lemon-50 p-1 text-xs font-medium text-olive-700 shadow-soft">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`rounded-full px-4 py-1.5 transition ${
                  isLogin
                    ? "bg-white shadow-soft text-slate-900"
                    : "text-olive-600 hover:text-slate-900"
                }`}
              >
                Sign in
              </button>

              <button
                type="button"
                onClick={() => setMode("register")}
                className={`rounded-full px-4 py-1.5 transition ${
                  !isLogin
                    ? "bg-white shadow-soft text-slate-900"
                    : "text-olive-600 hover:text-slate-900"
                }`}
              >
                Create account
              </button>
            </div>

            {/* Header */}
            <header className="mb-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-olive-700/70">
                {isLogin ? "Welcome back" : "Join our family"}
              </p>

              <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900">
                {isLogin ? "One of us?" : "Let’s get you seated."}
              </h1>

              <p className="mt-1 text-sm text-slate-600">
                {isLogin
                  ? "Log in to access your reservations and orders."
                  : "Create an account to enjoy faster bookings and a personal dining experience."}
              </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              {/* Full Name — always required */}
              <div className="space-y-1">
                <label
                  htmlFor="fullName"
                  className="text-xs font-medium text-slate-600"
                >
                  Full name
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-olive-100 bg-white px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-lemon-300">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lemon-200 text-[0.65rem] font-semibold text-olive-800">
                    LN
                  </span>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email — ONLY for registration */}
              {!isLogin && (
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-slate-600"
                  >
                    Email address
                  </label>
                  <div className="flex items-center gap-2 rounded-2xl border border-olive-100 bg-white px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-lemon-300">
                    <span className="h-4 w-4 text-[0.65rem] font-bold text-olive-700">
                      @
                    </span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              )}

              {/* Username — always shown */}
              <div className="space-y-1">
                <label
                  htmlFor="username"
                  className="text-xs font-medium text-slate-600"
                >
                  Username
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-olive-100 bg-white px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-lemon-300">
                  <img src={user} alt="" className="h-4 w-4 opacity-70" />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    placeholder={
                      isLogin ? "Enter your username" : "Choose a username"
                    }
                  />
                </div>
              </div>

              {/* Password — always shown */}
              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-slate-600"
                >
                  Password
                </label>
                <div className="flex items-center gap-2 rounded-2xl border border-olive-100 bg-white px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-lemon-300">
                  <img src={pass} alt="" className="h-4 w-4 opacity-70" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-lemon-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-soft transition hover:bg-lemon-300"
              >
                {isLogin ? "Login" : "Create account"}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE – Aesthetic block */}
          <div className="hidden flex-col justify-center bg-gradient-to-b from-lemon-50 via-lemon-100/70 to-olive-50/40 px-8 py-10 md:flex">
            <h2 className="font-display text-xl font-semibold text-slate-900">
              Your table awaits.
            </h2>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Save your favorites, manage your reservations, and enjoy a
              personalized dining experience.
            </p>
          </div>
        </div>
      </section>

      {showNotification && (
        <Notification
          message={
            mode === "login"
              ? "Welcome back!"
              : "Account created! Welcome to Little Lemon."
          }
          onClose={() => setShowNotification(false)}
        />
      )}
    </>
  );
};

export default Login;




