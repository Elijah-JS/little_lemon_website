import React from "react";
import insta from "../assets/insta.svg";
import face from "../assets/R.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleSocialClick = (platform) => {
    // Replace these with real URLs later
    if (platform === "instagram") window.open("https://instagram.com", "_blank", "noopener,noreferrer");
    if (platform === "facebook") window.open("https://facebook.com", "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full bg-[#3e4a32] text-lemon-50 mt-16">
      {/* TOP SOCIAL ROW */}
      <div className="flex w-full justify-center py-3">
        <div className="flex items-center gap-6">
          {/* Instagram */}
          <button
            type="button"
            onClick={() => handleSocialClick("instagram")}
            className="group"
            aria-label="Instagram"
          >
            <img
              src={insta}
              alt=""
              className="h-5 w-5 opacity-80 transition group-hover:opacity-100"
            />
          </button>

          {/* Facebook */}
          <button
            type="button"
            onClick={() => handleSocialClick("facebook")}
            className="group"
            aria-label="Facebook"
          >
            <img
              src={face}
              alt=""
              className="h-5 w-5 opacity-80 transition group-hover:opacity-100"
            />
          </button>
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
