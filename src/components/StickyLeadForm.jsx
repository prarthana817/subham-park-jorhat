// src/components/StickyLeadForm.jsx

import { useEffect, useState } from "react";

import {
  Send,
  Home,
} from "lucide-react";

export default function StickyLeadForm() {

  const [hide, setHide] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      const footer = document.getElementById("footer");

      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();

      // footer viewport e dhuklei hide
      if (footerRect.top <= window.innerHeight) {
        setHide(true);
      } else {
        setHide(false);
      }

    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div
      className={`
      hidden
      xl:flex

      fixed
      left-1/2
      -translate-x-1/2

      bottom-4

      z-[999]

      transition-all
      duration-500

      ${
        hide
          ? "opacity-0 pointer-events-none translate-y-16"
          : "opacity-100 translate-y-0"
      }
      `}
    >

      <div
        className="
        flex
        items-center
        gap-2

        bg-[#9a5735]/95
        backdrop-blur-xl

        border
        border-[#c48360]

        rounded-[22px]

        px-3
        py-3

        shadow-[0_18px_50px_rgba(0,0,0,0.28)]
        "
      >

        {/* SITE VISIT */}
        <button
          className="
          flex
          items-center
          gap-2

          px-4
          h-[44px]

          rounded-[14px]

          bg-[#7a4327]

          text-[#fff4ec]

          uppercase
          tracking-[0.16em]

          text-[9px]

          whitespace-nowrap
          "
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
          }}
        >
          <Home size={13} />

          Site Visit
        </button>

        {/* NAME */}
        <input
          type="text"
          placeholder="Name"
          className="
          w-[130px]

          h-[44px]

          bg-[#ad6d4a]

          border
          border-[#d49a77]

          rounded-[12px]

          px-3

          text-[12px]
          text-white

          placeholder:text-[#f4ddd0]

          outline-none
          "
        />

        {/* PHONE */}
        <input
          type="text"
          placeholder="Phone"
          className="
          w-[130px]

          h-[44px]

          bg-[#ad6d4a]

          border
          border-[#d49a77]

          rounded-[12px]

          px-3

          text-[12px]
          text-white

          placeholder:text-[#f4ddd0]

          outline-none
          "
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="
          w-[160px]

          h-[44px]

          bg-[#ad6d4a]

          border
          border-[#d49a77]

          rounded-[12px]

          px-3

          text-[12px]
          text-white

          placeholder:text-[#f4ddd0]

          outline-none
          "
        />

        {/* BHK */}
        <select
          className="
          w-[95px]

          h-[44px]

          bg-[#ad6d4a]

          border
          border-[#d49a77]

          rounded-[12px]

          px-3

          text-[12px]
          text-white

          outline-none
          "
        >
          <option value="">BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>4 BHK</option>
        </select>

        {/* LOCATION */}
        <select
          className="
          w-[120px]

          h-[44px]

          bg-[#ad6d4a]

          border
          border-[#d49a77]

          rounded-[12px]

          px-3

          text-[12px]
          text-white

          outline-none
          "
        >
          <option value="">Location</option>
          <option>Jorhat</option>
          <option>Guwahati</option>
          <option>Dibrugarh</option>
        </select>

        {/* BOOK BUTTON */}
        <button
          className="
          flex
          items-center
          justify-center
          gap-2

          h-[44px]

          px-5

          rounded-[12px]

          bg-[#f6cfb5]

          hover:bg-[#ffe0cb]

          text-[#2a1a12]

          uppercase
          tracking-[0.16em]

          text-[10px]

          transition-all
          duration-300
          "
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
          }}
        >
          Book

          <Send size={13} />
        </button>

      </div>

    </div>
  );
}