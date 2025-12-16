import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { useUser } from "./UserContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/order-online", label: "Order Online" },
  { to: "/reservations", label: "Reservations" },
];

const Navbar = () => {
  const { user } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  const initials = user?.name
    ? user.name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase())
        .join("")
    : null;

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#1F2A24]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={closeMobileMenu}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lemon-400 shadow-soft">
            <img
              src={logo}
              alt="Little Lemon logo"
              className="h-6 w-6 object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-sm font-semibold text-[#F4F1EA]">
              Little Lemon
            </p>
            <p className="text-[0.65rem] text-[#C9C6BE]">Chicago</p>
          </div>
        </Link>

        {/* Center nav links — desktop only */}
        <div className="hidden items-center gap-6 text-xs md:flex md:text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "relative pb-1 transition",
                  isActive
                    ? "font-semibold text-lemon-300"
                    : "text-[#D6D3CB] hover:text-[#F4F1EA]",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-[2px] max-w-[18px] rounded-full bg-lemon-300" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop CTA */}
          <Link
            to="/reservations"
            className="hidden rounded-full bg-lemon-400 px-4 py-2 text-[0.75rem] font-semibold text-[#1F2A24] shadow-soft transition hover:bg-lemon-300 md:inline-flex"
          >
            Book a table
          </Link>

          {/* Account area */}
          {user ? (
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.75rem] shadow-soft md:inline-flex">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lemon-300 text-[0.7rem] font-semibold text-[#1F2A24]">
                {initials}
              </div>
              <div className="leading-tight">
                <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[#C9C6BE]">
                  Guest
                </p>
                <p className="text-xs font-semibold text-[#F4F1EA]">
                  Hi, {user.name}
                </p>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden items-center rounded-full border border-lemon-300/60 bg-transparent px-4 py-1.5 text-[0.75rem] font-semibold text-[#F4F1EA] shadow-soft transition hover:bg-white/5 md:inline-flex"
            >
              Login
            </Link>
          )}

          {/* MOBILE: avatar / login + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {user ? (
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lemon-300 text-[0.7rem] font-semibold text-[#1F2A24] shadow-soft">
                {initials}
              </div>
            ) : (
              <Link
                to="/login"
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] font-semibold text-[#F4F1EA] shadow-soft"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            )}

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 shadow-soft"
            >
              {/* Hamburger */}
              <svg
                className={`${mobileOpen ? "hidden" : "block"} h-5 w-5 text-[#F4F1EA]`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

              {/* X */}
              <svg
                className={`${mobileOpen ? "block" : "hidden"} h-5 w-5 text-[#F4F1EA]`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#1F2A24]/95 shadow-soft md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  [
                    "flex items-center justify-between rounded-2xl px-3 py-2",
                    isActive
                      ? "bg-white/10 text-lemon-300 font-semibold"
                      : "text-[#D6D3CB] hover:bg-white/5",
                  ].join(" ")
                }
              >
                {item.label}
                <span className="text-[0.65rem] text-[#C9C6BE]">›</span>
              </NavLink>
            ))}

            <Link
              to="/reservations"
              onClick={closeMobileMenu}
              className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-lemon-400 px-4 py-2.5 text-[0.8rem] font-semibold text-[#1F2A24] shadow-soft transition hover:bg-lemon-300"
            >
              Book a table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


