import React from "react";
import insta from "../assets/insta.svg";
import face from "../assets/R.svg";

export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-olive-200/40 bg-[#fffdf6]">
      <div className="mx-auto max-w-6xl px-6 py-6">
        {/* Top row: text + icons */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-olive-800 md:flex-row md:text-left">
          <div className="space-y-1">
            <p className="font-semibold tracking-tight">
              © {new Date().getFullYear()} Little Lemon Restaurant
            </p>
            <p className="text-[0.8rem] text-olive-700/80">
              123 Lemon St • Citrus City, CA 12345
            </p>
            <p className="text-[0.8rem] text-olive-700/80">
              Contact:{" "}
              <span className="font-medium">info@littlelemon.com</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <span className="text-[0.75rem] uppercase tracking-[0.18em] text-olive-600/80">
              Connect
            </span>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-olive-200/70 bg-white/70 transition group-hover:bg-olive-50">
                  <img
                    src={insta}
                    alt="Instagram"
                    className="h-4 w-4 opacity-70 transition group-hover:opacity-100"
                  />
                </div>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-olive-200/70 bg-white/70 transition group-hover:bg-olive-50">
                  <img
                    src={face}
                    alt="Facebook"
                    className="h-4 w-4 opacity-70 transition group-hover:opacity-100"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Thin bottom line / meta */}
        <div className="mt-4 border-t border-olive-100/40 pt-3 text-center text-[0.75rem] text-olive-600/80">
          <span>Designed for a cozy corner of the Mediterranean in Chicago.</span>
        </div>
      </div>
    </footer>
  );
}


