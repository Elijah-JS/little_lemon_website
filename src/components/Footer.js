import React from "react";
import insta from "../assets/insta.svg";
import face from "../assets/R.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#3e4a32] text-lemon-50 mt-16">
      {/* TOP SOCIAL ROW */}
      <div className="flex w-full justify-center py-3">
        <div className="flex items-center gap-6">
          {/* Instagram */}
          <a href="#" className="group">
            <img
              src={insta}
              alt="Instagram"
              className="h-5 w-5 opacity-80 transition group-hover:opacity-100"
            />
          </a>

          {/* Facebook */}
          <a href="#" className="group">
            <img
              src={face}
              alt="Facebook"
              className="h-5 w-5 opacity-80 transition group-hover:opacity-100"
            />
          </a>
        </div>
      </div>

      {/* PREMIUM DIVIDER LINE */}
      <div className="border-t border-lemon-200/30 mx-auto max-w-4xl"></div>

      {/* COPYRIGHT ROW */}
      <div className="text-center py-2 text-[0.8rem] font-medium tracking-tight">
        © {year} Little Lemon Restaurant
        <span className="px-2">•</span>
        All rights reserved.
      </div>

      {/* TAGLINE */}
      <div className="text-center pb-4 text-[0.75rem] text-lemon-200/80 tracking-wide">
        Designed for a cozy corner of the Mediterranean in Chicago.
      </div>
    </footer>
  );
}
