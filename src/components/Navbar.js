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
    <header className="sticky top-0 z-40 border-b border-olive-100/70 bg-[#fffdf6]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:px-6 md:py-3.5">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={closeMobileMenu}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lemon-300 shadow-soft">
            <img
              src={logo}
              alt="Little Lemon logo"
              className="h-6 w-6 object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-sm font-semibold text-slate-900">
              Little Lemon
            </p>
            <p className="text-[0.65rem] text-slate-500">Chicago</p>
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
                    ? "font-semibold text-olive-800"
                    : "text-slate-500 hover:text-slate-900",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-[2px] max-w-[18px] rounded-full bg-lemon-400" />
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
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-[0.75rem] font-semibold text-lemon-50 shadow-soft transition hover:bg-slate-800 md:inline-flex"
          >
            Book a table
          </Link>

          {/* Account area */}
          {user ? (
            <div className="hidden items-center gap-2 rounded-full border border-olive-100 bg-white/80 px-3 py-1.5 text-[0.75rem] shadow-soft md:inline-flex">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lemon-300 text-[0.7rem] font-semibold text-olive-900">
                {initials}
              </div>
              <div className="leading-tight">
                <p className="text-[0.65rem] uppercase tracking-[0.16em] text-olive-600">
                  Guest
                </p>
                <p className="text-xs font-semibold text-slate-900">
                  Hi, {user.name}
                </p>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden items-center rounded-full border border-olive-200 bg-white/85 px-4 py-1.5 text-[0.75rem] font-semibold text-olive-800 shadow-soft transition hover:border-olive-400 hover:text-slate-900 md:inline-flex"
            >
              Login
            </Link>
          )}

          {/* MOBILE: compact login / avatar + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {user ? (
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lemon-300 text-[0.7rem] font-semibold text-olive-900 shadow-soft">
                {initials}
              </div>
            ) : (
              <Link
                to="/login"
                className="rounded-full border border-olive-200 bg-white/90 px-3 py-1 text-[0.7rem] font-semibold text-olive-800 shadow-soft"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            )}

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-olive-100 bg-white/80 shadow-soft"
            >
              <span className="relative block h-[1px] w-4 bg-olive-800">
                <span
                  className={`absolute left-0 top-[-5px] h-[1px] w-4 bg-olive-800 transition-transform ${
                    mobileOpen ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[5px] h-[1px] w-4 bg-olive-800 transition-transform ${
                    mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-olive-100/70 bg-[#fffdf6]/95 shadow-soft md:hidden">
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
                      ? "bg-lemon-50 text-olive-900 font-semibold"
                      : "text-slate-600 hover:bg-olive-50/70",
                  ].join(" ")
                }
              >
                {item.label}
                <span className="text-[0.65rem] text-olive-500">›</span>
              </NavLink>
            ))}

            <Link
              to="/reservations"
              onClick={closeMobileMenu}
              className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-[0.8rem] font-semibold text-lemon-50 shadow-soft transition hover:bg-slate-800"
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


