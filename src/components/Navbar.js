import React from "react";
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

  const initials = user?.name
    ? user.name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase())
        .join("")
    : null;

  return (
    <header className="sticky top-0 z-40 border-b border-olive-100/70 bg-[#fffdf6]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
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

        {/* Center nav links */}
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

        {/* Right side: CTA + account */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Book a table CTA */}
          <Link
            to="/reservations"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-[0.75rem] font-semibold text-lemon-50 shadow-soft transition hover:bg-slate-800 md:inline-flex"
          >
            Book a table
          </Link>

          {/* Account area */}
          {user ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-olive-100 bg-white/80 px-3 py-1.5 text-[0.75rem] shadow-soft">
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
              className="inline-flex items-center rounded-full border border-olive-200 bg-white/80 px-4 py-1.5 text-[0.75rem] font-semibold text-olive-800 shadow-soft transition hover:border-olive-400 hover:text-slate-900"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

