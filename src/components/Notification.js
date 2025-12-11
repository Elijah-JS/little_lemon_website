import React, { useEffect } from "react";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center pt-20 pointer-events-none">
      <div
        className="
          pointer-events-auto rounded-2xl 
          bg-white/95 text-slate-900 shadow-xl 
          px-6 py-4 border border-lemon-300/60 
          backdrop-blur-md 
          animate-[slideUpFade_0.5s_ease-out]
          font-medium text-sm
        "
      >
        {message}
      </div>

      {/* Tailwind custom keyframes extension (add to globals if not included) */}
      <style>
        {`
          @keyframes slideUpFade {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Notification;
