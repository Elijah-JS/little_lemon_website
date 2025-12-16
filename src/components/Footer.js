import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1F2A24] text-[#F4F1EA] mt-16">
      {/* TOP SOCIAL ROW */}
      <div className="flex w-full justify-center py-3">
        <div className="flex items-center gap-6"></div>
      </div>

      {/* PREMIUM DIVIDER LINE */}
      <div className="border-t border-white/10 mx-auto max-w-4xl"></div>

      {/* COPYRIGHT ROW */}
      <div className="text-center py-2 text-[0.8rem] font-medium tracking-tight text-[#F4F1EA]">
        © {year} Little Lemon Restaurant
        <span className="px-2 text-white/40">•</span>
        <span className="text-white/70">All rights reserved.</span>
      </div>

      {/* TAGLINE */}
      <div className="text-center pb-4 text-[0.75rem] text-white/60 tracking-wide">
        Designed for a cozy corner of the Mediterranean in Chicago.
      </div>
    </footer>
  );
}
